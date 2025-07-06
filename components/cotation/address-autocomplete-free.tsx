"use client"

import { useState, useCallback, useRef, useEffect } from 'react'

interface CityAutocompleteFreeProps {
  value: string
  onChange: (value: string, coordinates?: [number, number]) => void
  placeholder: string
  required?: boolean
}

interface Suggestion {
  properties: {
    label: string
    city?: string
    postcode?: string
    x: number
    y: number
  }
  geometry: {
    type: string
    coordinates: [number, number] // [longitude, latitude]
  }
}

export default function CityAutocompleteFree({ 
  value, 
  onChange, 
  placeholder,
  required = false 
}: CityAutocompleteFreeProps) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const debounceTimer = useRef<NodeJS.Timeout | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const fetchSuggestions = useCallback(async (query: string) => {
    if (query.length < 3) {
      setSuggestions([])
      return
    }

    try {
      const response = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}&type=municipality&limit=5`
      )
      const data = await response.json()
      console.log('[CityAutocomplete] Résultats API:', {
        query,
        features: data.features,
        firstResult: data.features?.[0]
      })
      setSuggestions(data.features || [])
    } catch (error) {
      console.error('Erreur lors de la recherche de villes:', error)
      setSuggestions([])
    }
  }, [])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    // Pass undefined for coordinates when typing (not selecting from suggestions)
    onChange(newValue, undefined)
    setShowSuggestions(true)
    setSelectedIndex(-1)

    // Debounce la recherche
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current)
    }
    debounceTimer.current = setTimeout(() => {
      fetchSuggestions(newValue)
    }, 300)
  }, [onChange, fetchSuggestions])

  const selectSuggestion = useCallback((suggestion: Suggestion) => {
    // Pour les villes, inclure le code postal dans le label pour que extractPostalCode puisse le trouver
    const city = suggestion.properties.city || suggestion.properties.label
    const postcode = suggestion.properties.postcode
    const labelWithPostcode = postcode ? `${city} ${postcode}` : city
    
    // L'API retourne les coordonnées WGS84 dans geometry.coordinates [longitude, latitude]
    const coordinates: [number, number] = [
      suggestion.geometry.coordinates[1], // latitude
      suggestion.geometry.coordinates[0]  // longitude
    ]
    console.log('[CityAutocomplete] Suggestion sélectionnée:', {
      city,
      postcode,
      labelWithPostcode,
      suggestion,
      geometryCoordinates: suggestion.geometry.coordinates,
      coordinates,
      lambert93: { x: suggestion.properties.x, y: suggestion.properties.y }
    })
    onChange(labelWithPostcode, coordinates)
    setSuggestions([])
    setShowSuggestions(false)
  }, [onChange])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        )
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0) {
          selectSuggestion(suggestions[selectedIndex])
        }
        break
      case 'Escape':
        setShowSuggestions(false)
        break
    }
  }, [showSuggestions, suggestions, selectedIndex, selectSuggestion])

  // Fermer les suggestions quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={inputRef}>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setShowSuggestions(true)}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        required={required}
      />
      
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg border border-gray-200">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                index === selectedIndex ? 'bg-gray-100' : ''
              }`}
              onClick={() => selectSuggestion(suggestion)}
            >
              <p className="text-sm text-gray-900 font-medium">
                {suggestion.properties.city || suggestion.properties.label}
              </p>
              {suggestion.properties.postcode && (
                <p className="text-xs text-gray-500">
                  {suggestion.properties.postcode}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}