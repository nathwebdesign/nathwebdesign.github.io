"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "./map.css"

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
  const polesMarkersRef = useRef<L.Marker[]>([])
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
        
        L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
          attribution: '© OpenStreetMap contributors © CARTO',
          maxZoom: 19,
          minZoom: 3
        }).addTo(mapRef.current)
        
        // Add poles markers
        Object.entries(poles).forEach(([name, coords]) => {
          const poleIcon = L.divIcon({
            html: `
              <div style="position: relative;">
                <div style="background-color: #6366f1; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; box-shadow: 0 2px 6px rgba(0,0,0,0.3); border: 2px solid white; font-size: 14px;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
              </div>
            `,
            className: '',
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [0, -15]
          })
          
          const poleMarker = L.marker(coords, {
            icon: poleIcon
          }).addTo(mapRef.current!)
          
          poleMarker.bindPopup(`<div style="font-weight: bold; font-size: 14px;">🏭 Pôle ${name}</div>`, {
            className: 'custom-popup'
          })
          
          polesMarkersRef.current.push(poleMarker)
        })
        
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

    // Create custom icons with better design
    const createIcon = (color: string, icon: string, label: string) => {
      return L.divIcon({
        html: `
          <div style="position: relative;">
            <div style="background-color: ${color}; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; box-shadow: 0 4px 8px rgba(0,0,0,0.3); border: 3px solid white; font-size: 18px;">
              ${icon}
            </div>
            <div style="position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%) translateY(100%); background-color: ${color}; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; color: white; white-space: nowrap; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
              ${label}
            </div>
          </div>
        `,
        className: '',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
      })
    }

    const markersToShow: L.LatLngExpression[] = []

    // Add departure marker if we have coordinates
    if (departCoords && Array.isArray(departCoords) && departCoords.length === 2) {
      try {
        const departMarker = L.marker(departCoords, {
          icon: createIcon('#2563eb', '📍', 'DÉPART')
        }).addTo(mapRef.current)
        
        if (depart) {
          departMarker.bindPopup(`<div style="font-weight: bold; font-size: 14px;">📍 Départ</div><div style="margin-top: 4px;">${depart}</div>`, {
            className: 'custom-popup'
          })
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
          icon: createIcon('#10b981', '🎯', 'ARRIVÉE')
        }).addTo(mapRef.current)
        
        if (arrivee) {
          arriveeMarker.bindPopup(`<div style="font-weight: bold; font-size: 14px;">🎯 Arrivée</div><div style="margin-top: 4px;">${arrivee}</div>`, {
            className: 'custom-popup'
          })
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
        // Add shadow polyline
        L.polyline(latlngs, {
          color: '#000000',
          weight: 6,
          opacity: 0.2,
          smoothFactor: 1
        }).addTo(mapRef.current)
        
        // Add main route
        routeLayerRef.current = L.polyline(latlngs, {
          color: '#2563eb',
          weight: 4,
          opacity: 0.8,
          dashArray: '12, 8',
          lineJoin: 'round',
          lineCap: 'round'
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