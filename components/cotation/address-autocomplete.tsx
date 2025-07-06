"use client"

import { useCallback, useRef } from 'react'
import { useLoadScript, Autocomplete } from '@react-google-maps/api'

const libraries: ("places")[] = ["places"]

interface AddressAutocompleteProps {
  value: string
  onChange: (value: string, placeDetails?: google.maps.places.PlaceResult) => void
  placeholder: string
  required?: boolean
}

export default function AddressAutocomplete({ 
  value, 
  onChange, 
  placeholder,
  required = false 
}: AddressAutocompleteProps) {
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries,
  })

  const onLoad = useCallback((autocomplete: google.maps.places.Autocomplete) => {
    autocompleteRef.current = autocomplete
    // Restreindre à la France
    autocomplete.setComponentRestrictions({ country: 'fr' })
  }, [])

  const onPlaceChanged = useCallback(() => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace()
      if (place.formatted_address) {
        onChange(place.formatted_address, place)
      }
    }
  }, [onChange])

  if (loadError) {
    return <div>Erreur de chargement</div>
  }

  if (!isLoaded) {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        required={required}
      />
    )
  }

  return (
    <Autocomplete
      onLoad={onLoad}
      onPlaceChanged={onPlaceChanged}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        required={required}
      />
    </Autocomplete>
  )
}