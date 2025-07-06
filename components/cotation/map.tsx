"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface MapProps {
  depart: string
  arrivee: string
  departCoords?: [number, number]
  arriveeCoords?: [number, number]
  poles: Record<string, [number, number]>
}

export default function Map({ depart, arrivee, departCoords, arriveeCoords, poles }: MapProps) {
  const mapRef = useRef<L.Map | null>(null)
  const routeLayerRef = useRef<L.Polyline | null>(null)
  const markersRef = useRef<L.Marker[]>([])
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapInitializedRef = useRef(false)


  useEffect(() => {
    // Initialize map only once
    if (!mapInitializedRef.current && mapContainerRef.current) {
      try {
        mapRef.current = L.map(mapContainerRef.current, {
          center: [46.603354, 1.888334],
          zoom: 6,
          zoomControl: true,
          attributionControl: true
        })
        
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 19,
          minZoom: 3
        }).addTo(mapRef.current)
        
        mapInitializedRef.current = true
      } catch (error) {
        console.error('[Map] Erreur initialisation carte:', error)
      }
    }

    return () => {
      // Cleanup only when component unmounts
      if (mapRef.current && mapInitializedRef.current) {
        mapRef.current.remove()
        mapRef.current = null
        mapInitializedRef.current = false
      }
    }
  }, [])

  useEffect(() => {
    if (!mapRef.current) return

    // Clear previous route and markers
    if (routeLayerRef.current) {
      mapRef.current.removeLayer(routeLayerRef.current)
      routeLayerRef.current = null
    }
    markersRef.current.forEach(marker => {
      mapRef.current!.removeLayer(marker)
    })
    markersRef.current = []

    // Create custom icons
    const createIcon = (color: string, icon: string) => {
      return L.divIcon({
        html: `<div style="background-color: ${color}; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">${icon}</div>`,
        className: '',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      })
    }

    const markersToShow: L.LatLngExpression[] = []

    // Add departure marker if we have coordinates
    if (departCoords && Array.isArray(departCoords) && departCoords.length === 2) {
      try {
        const departMarker = L.marker(departCoords, {
          icon: createIcon('#0f172a', 'D')
        }).addTo(mapRef.current)
        
        if (depart) {
          departMarker.bindPopup(`Départ: ${depart}`)
        }
        
        markersRef.current.push(departMarker)
        markersToShow.push(departCoords)
      } catch (error) {
        console.error('[Map] Erreur création marker départ:', error)
      }
    }
    
    // Add arrival marker if we have coordinates
    if (arriveeCoords && Array.isArray(arriveeCoords) && arriveeCoords.length === 2) {
      try {
        const arriveeMarker = L.marker(arriveeCoords, {
          icon: createIcon('#ef4444', 'A')
        }).addTo(mapRef.current)
        
        if (arrivee) {
          arriveeMarker.bindPopup(`Arrivée: ${arrivee}`)
        }
        
        markersRef.current.push(arriveeMarker)
        markersToShow.push(arriveeCoords)
      } catch (error) {
        console.error('[Map] Erreur création marker arrivée:', error)
      }
    }

    // Draw route only if we have both valid points
    if (departCoords && arriveeCoords && 
        Array.isArray(departCoords) && Array.isArray(arriveeCoords) &&
        departCoords.length === 2 && arriveeCoords.length === 2) {
      try {
        const latlngs: L.LatLngExpression[] = [departCoords, arriveeCoords]
        routeLayerRef.current = L.polyline(latlngs, {
          color: '#0f172a',
          weight: 4,
          opacity: 0.7,
          dashArray: '10, 10'
        }).addTo(mapRef.current)
      } catch (error) {
        console.error('[Map] Erreur lors du tracé de la route:', error)
      }
    }

    // Fit map to bounds if we have markers
    if (markersToShow.length > 0 && mapRef.current) {
      // Force l'invalidation de la taille de la carte pour s'assurer qu'elle est correctement dimensionnée
      mapRef.current.invalidateSize()
      
      // Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
      requestAnimationFrame(() => {
        if (!mapRef.current) return
        
        try {
          if (markersToShow.length === 1) {
            // If only one marker, center on it with animation
            mapRef.current.setView(markersToShow[0], 12, {
              animate: true,
              duration: 0.5
            })
          } else {
            // If multiple markers, fit bounds with animation
            const bounds = L.latLngBounds(markersToShow)
            mapRef.current.fitBounds(bounds, { 
              padding: [50, 50], 
              maxZoom: 12,
              animate: true,
              duration: 0.5
            })
          }
        } catch (error) {
          console.error('[Map] Erreur ajustement vue:', error)
          // Fallback to France view
          if (mapRef.current) {
            mapRef.current.setView([46.603354, 1.888334], 6)
          }
        }
      })
    } else if (mapRef.current) {
      // No markers, show France
      requestAnimationFrame(() => {
        if (!mapRef.current) return
        
        try {
          mapRef.current.invalidateSize()
          mapRef.current.setView([46.603354, 1.888334], 6, {
            animate: true,
            duration: 0.5
          })
        } catch (error) {
          console.error('[Map] Erreur setView France:', error)
        }
      })
    }

  }, [depart, arrivee, departCoords, arriveeCoords])

  return <div ref={mapContainerRef} className="w-full h-full" />
}