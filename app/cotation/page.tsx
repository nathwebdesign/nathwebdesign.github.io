"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Package, Calculator, FileText, Download, Printer, Truck, AlertCircle, Euro, Shield, Clock as ClockIcon, Plus, Trash2, Box } from "lucide-react"
import dynamic from "next/dynamic"
import { calculateCotation, estimatePalettes, calculateVolumetricWeight, determineTransportType } from "@/lib/cotation-calculator"
import { getDepartmentFromPostalCode } from "@/config/zones"
import { calculateTotalPrice } from "@/config/tarifs-manager"

const Map = dynamic(() => import("@/components/cotation/map"), { ssr: false })
const AddressAutocomplete = dynamic(() => import("@/components/cotation/address-autocomplete-free"), { ssr: false })

const poles: Record<string, [number, number]> = {
  'Roissy CDG': [49.0097, 2.5479],
  'Lyon': [45.7640, 4.8357],
  'Marseille': [43.2965, 5.3698],
  'Le Havre': [49.4944, 0.1079]
}

export default function CotationPage() {
  const [typeTransport, setTypeTransport] = useState<'depuis-pole' | 'vers-pole'>('depuis-pole')
  
  const [articles, setArticles] = useState([{
    id: 1,
    type: 'palette',  // palette, cartons, tubes
    poids: '',
    longueur: '',
    largeur: '',
    hauteur: '',
    nombrePalettes: ''
  }])

  const [formData, setFormData] = useState({
    villeDepart: '',
    villeArrivee: '',
    poleSelectionne: '',  // Pour stocker le pôle sélectionné en mode depuis-pole
    poleArriveeSelectionne: '',  // Pour stocker le pôle sélectionné en mode vers-pole
    codePostalDestination: '',
    // Options (automatisées ou manuelles)
    hayon: false,  // Sera automatique si hauteur > 120cm ou poids > 1000kg
    matieresDangereuses: false,  // Reste manuel pour la sécurité
    // valeurMarchandise: ''  // Champ supprimé
  })
  
  const [coordinates, setCoordinates] = useState<{
    depart?: [number, number],
    arrivee?: [number, number]
  }>({})
  
  const [resultat, setResultat] = useState<any>(null)
  const [error, setError] = useState<string>('')
  const [showResult, setShowResult] = useState(false)

  const addArticle = () => {
    const newId = Math.max(...articles.map(a => a.id)) + 1
    setArticles([...articles, {
      id: newId,
      type: 'palette',
      poids: '',
      longueur: '',
      largeur: '',
      hauteur: '',
      nombrePalettes: ''
    }])
  }

  const removeArticle = (id: number) => {
    if (articles.length > 1) {
      setArticles(articles.filter(a => a.id !== id))
    }
  }

  const handleArticleChange = (id: number, field: string, value: string) => {
    setArticles(articles.map(article => 
      article.id === id ? { ...article, [field]: value } : article
    ))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
    
    // Si on sélectionne un pôle, mettre à jour les coordonnées et le pôle sélectionné
    if (name === 'villeDepart' && typeTransport === 'depuis-pole') {
      setFormData(prev => ({
        ...prev,
        poleSelectionne: value
      }))
      if (poles[value]) {
        setCoordinates(prev => ({
          ...prev,
          depart: poles[value]
        }))
      }
    } else if (name === 'villeArrivee' && typeTransport === 'vers-pole') {
      setFormData(prev => ({
        ...prev,
        poleArriveeSelectionne: value
      }))
      if (poles[value]) {
        setCoordinates(prev => ({
          ...prev,
          arrivee: poles[value]
        }))
      }
    }
  }

  const extractPostalCode = (address: string): string => {
    // Recherche d'un code postal français (5 chiffres)
    const match = address.match(/\b\d{5}\b/)
    return match ? match[0] : ''
  }

  const calculatePrice = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Vérifier qu'au moins un article a des dimensions
    const hasValidArticle = articles.some(a => a.poids && a.longueur && a.largeur && a.hauteur)
    if (!hasValidArticle) {
      setError('Veuillez remplir au moins un article avec ses dimensions et poids')
      return
    }
    
    // Déterminer le pôle sélectionné selon le mode de transport
    const poleSelected = typeTransport === 'depuis-pole' ? formData.poleSelectionne || formData.villeDepart : formData.poleArriveeSelectionne || formData.villeArrivee
    
    // Convertir le nom du pôle en ID interne
    const poleId = poleSelected === 'Roissy CDG' ? 'roissy' : 
                   poleSelected === 'Marseille' ? 'marseille' : 
                   poleSelected === 'Lyon' ? 'lyon' : 
                   poleSelected === 'Le Havre' ? 'le-havre' : ''
    
    const hasAutomaticPricing = ['roissy', 'marseille', 'le-havre', 'lyon'].includes(poleId)
    
    // Tous les pôles ont maintenant une tarification automatique
    if (!hasAutomaticPricing) {
      setError('Erreur: pôle non reconnu')
      return
    }
    
    // Extraire le code postal de l'adresse de destination
    let codePostal = formData.codePostalDestination
    if (!codePostal) {
      const addressToCheck = typeTransport === 'depuis-pole' ? formData.villeArrivee : formData.villeDepart
      codePostal = extractPostalCode(addressToCheck)
    }
    
    if (!codePostal) {
      setError('Veuillez saisir une ville valide ou un code postal')
      return
    }

    // Calculer le total pour tous les articles
    let poidsTotal = 0
    let resultatsArticles: any[] = []
    let hayonNecessaire = false

    articles.forEach((article, index) => {
      if (article.poids && article.longueur && article.largeur && article.hauteur) {
        const dimensions = {
          longueur: parseFloat(article.longueur) || 0,
          largeur: parseFloat(article.largeur) || 0,
          hauteur: parseFloat(article.hauteur) || 0
        }
        const weight = parseFloat(article.poids) || 0
        poidsTotal += weight

        // Vérifier si hayon nécessaire
        if (dimensions.hauteur > 120 || weight > 1000) {
          hayonNecessaire = true
        }

        // Calculer la cotation pour cet article
        const options = {
          hayon: false, // On appliquera le hayon sur le total
          attente: 0,
          matieresDangereuses: false, // On appliquera sur le total
          valeurMarchandise: 0
        }

        const cotation = calculateCotation({
          poleId,
          postalCodeDestination: codePostal,
          weight,
          dimensions,
          options,
          nombrePalettes: article.nombrePalettes ? parseInt(article.nombrePalettes) : undefined
        })

        if (cotation.success && cotation.data) {
          resultatsArticles.push({
            ...cotation.data,
            article: {
              id: article.id,
              type: article.type,
              numero: index + 1
            }
          })
        }
      }
    })

    if (resultatsArticles.length === 0) {
      setError('Aucun article valide pour le calcul')
      return
    }

    // Calculer le prix total
    const prixTotalBase = resultatsArticles.reduce((sum, r) => sum + r.pricing.basePrice, 0)
    
    // Appliquer les options sur le total
    const options = {
      hayon: hayonNecessaire || formData.hayon,
      attente: 0,
      matieresDangereuses: formData.matieresDangereuses,
      valeurMarchandise: 0
    }

    // Calculer le prix total avec options
    const pricing = calculateTotalPrice(prixTotalBase, options, poleId)

    setResultat({
      articles: resultatsArticles,
      pricing,
      transport: {
        weight: poidsTotal,
        nombreArticles: resultatsArticles.length
      },
      zone: resultatsArticles[0].zone,
      details: resultatsArticles[0].details,
      trajet: `${formData.villeDepart} → ${formData.villeArrivee}`,
      pole: poleSelected
    })
    
    setShowResult(true)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Calculateur de Cotation
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Obtenez un devis instantané pour vos transports depuis/vers nos pôles
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-blue-800">
              Tarifs en ligne disponibles pour tous nos pôles : Roissy CDG, Marseille, Le Havre et Lyon
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/40">
            <form onSubmit={calculatePrice} className="space-y-6">
              {/* Type de transport */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Trajet
                </h3>
                
                <div className="flex gap-4 mb-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="typeTransport"
                      value="depuis-pole"
                      checked={typeTransport === 'depuis-pole'}
                      onChange={(e) => {
                        setTypeTransport(e.target.value as 'depuis-pole' | 'vers-pole')
                        setFormData(prev => ({...prev, villeDepart: '', villeArrivee: '', codePostalDestination: '', poleSelectionne: '', poleArriveeSelectionne: '', nombrePalettes: ''}))
                        setCoordinates({})
                      }}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium">Départ depuis un pôle</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="typeTransport"
                      value="vers-pole"
                      checked={typeTransport === 'vers-pole'}
                      onChange={(e) => {
                        setTypeTransport(e.target.value as 'depuis-pole' | 'vers-pole')
                        setFormData(prev => ({...prev, villeDepart: '', villeArrivee: '', codePostalDestination: '', poleSelectionne: '', poleArriveeSelectionne: '', nombrePalettes: ''}))
                        setCoordinates({})
                      }}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium">Livraison vers un pôle</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="villeDepart" className="block text-sm font-medium text-gray-700 mb-2">
                      {typeTransport === 'depuis-pole' ? 'Pôle de départ' : 'Ville de départ'}
                    </label>
                    {typeTransport === 'depuis-pole' ? (
                      <select
                        id="villeDepart"
                        name="villeDepart"
                        value={formData.villeDepart}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      >
                        <option value="">Sélectionnez un pôle</option>
                        <option value="Roissy CDG">Roissy CDG</option>
                        <option value="Lyon">Lyon</option>
                        <option value="Marseille">Marseille</option>
                        <option value="Le Havre">Le Havre</option>
                      </select>
                    ) : (
                      <AddressAutocomplete
                        value={formData.villeDepart}
                        onChange={(value, coords) => {
                          // Extraire automatiquement le code postal
                          const codePostal = extractPostalCode(value)
                          setFormData(prev => ({
                            ...prev, 
                            villeDepart: value,
                            // Si c'est une adresse de départ et qu'on est en mode "vers-pole", stocker le code postal
                            ...(typeTransport === 'vers-pole' && codePostal ? { codePostalDestination: codePostal } : {})
                          }))
                          if (coords !== undefined) {
                            setCoordinates(prev => ({...prev, depart: coords}))
                          } else {
                            // Si pas de coordonnées (utilisateur tape sans sélectionner), supprimer les coordonnées
                            setCoordinates(prev => {
                              const newCoords = {...prev}
                              delete newCoords.depart
                              return newCoords
                            })
                          }
                        }}
                        placeholder="Ex: Paris, Lyon, Marseille..."
                        required
                      />
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="villeArrivee" className="block text-sm font-medium text-gray-700 mb-2">
                      {typeTransport === 'vers-pole' ? 'Pôle d\'arrivée' : 'Ville d\'arrivée'}
                    </label>
                    {typeTransport === 'vers-pole' ? (
                      <select
                        id="villeArrivee"
                        name="villeArrivee"
                        value={formData.villeArrivee}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      >
                        <option value="">Sélectionnez un pôle</option>
                        <option value="Roissy CDG">Roissy CDG</option>
                        <option value="Lyon">Lyon</option>
                        <option value="Marseille">Marseille</option>
                        <option value="Le Havre">Le Havre</option>
                      </select>
                    ) : (
                      <AddressAutocomplete
                        value={formData.villeArrivee}
                        onChange={(value, coords) => {
                          // Extraire automatiquement le code postal
                          const codePostal = extractPostalCode(value)
                          setFormData(prev => ({
                            ...prev, 
                            villeArrivee: value,
                            // Si c'est une adresse d'arrivée et qu'on est en mode "depuis-pole", stocker le code postal
                            ...(typeTransport === 'depuis-pole' && codePostal ? { codePostalDestination: codePostal } : {})
                          }))
                          if (coords !== undefined) {
                            setCoordinates(prev => ({...prev, arrivee: coords}))
                          } else {
                            // Si pas de coordonnées (utilisateur tape sans sélectionner), supprimer les coordonnées
                            setCoordinates(prev => {
                              const newCoords = {...prev}
                              delete newCoords.arrivee
                              return newCoords
                            })
                          }
                        }}
                        placeholder="Ex: Paris, Lyon, Marseille..."
                        required
                      />
                    )}
                  </div>
                </div>

                {/* Code postal automatique - affichage uniquement */}
                {formData.codePostalDestination && (
                  <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-green-800">
                        Code postal détecté : {formData.codePostalDestination}
                      </span>
                      <span className="text-xs text-green-600">
                        (extrait automatiquement de la ville)
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Articles */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    Articles à transporter
                  </h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addArticle}
                    className="flex items-center gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Ajouter un article
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {articles.map((article, index) => (
                    <div key={article.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50 relative">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900 flex items-center gap-2">
                          <Box className="h-4 w-4" />
                          Article {index + 1}
                        </h4>
                        {articles.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeArticle(article.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Type d'article
                          </label>
                          <select
                            value={article.type}
                            onChange={(e) => handleArticleChange(article.id, 'type', e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          >
                            <option value="palette">Palette</option>
                            <option value="cartons">Cartons</option>
                            <option value="tubes">Tubes</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Poids (kg)
                          </label>
                          <input
                            type="number"
                            value={article.poids}
                            onChange={(e) => handleArticleChange(article.id, 'poids', e.target.value)}
                            min="0.1"
                            step="0.1"
                            placeholder="Ex: 500"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Longueur (cm)
                          </label>
                          <input
                            type="number"
                            value={article.longueur}
                            onChange={(e) => handleArticleChange(article.id, 'longueur', e.target.value)}
                            min="1"
                            placeholder="120"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Largeur (cm)
                          </label>
                          <input
                            type="number"
                            value={article.largeur}
                            onChange={(e) => handleArticleChange(article.id, 'largeur', e.target.value)}
                            min="1"
                            placeholder="80"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Hauteur (cm)
                          </label>
                          <input
                            type="number"
                            value={article.hauteur}
                            onChange={(e) => handleArticleChange(article.id, 'hauteur', e.target.value)}
                            min="1"
                            placeholder="100"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            required
                          />
                        </div>
                      </div>
                      
                      {article.type === 'palette' && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre de palettes (optionnel)
                          </label>
                          <input
                            type="number"
                            value={article.nombrePalettes}
                            onChange={(e) => handleArticleChange(article.id, 'nombrePalettes', e.target.value)}
                            min="0"
                            step="1"
                            placeholder="Laissez vide pour calcul automatique"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sécurité */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Options de transport
                </h3>
                
                <div className="space-y-4">
                  <label className="flex items-center cursor-pointer p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                    <input
                      type="checkbox"
                      name="hayon"
                      checked={formData.hayon}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <div>
                      <span className="text-sm font-medium">Hayon</span>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Supplément de 30€ pour déchargement avec hayon
                      </p>
                    </div>
                  </label>
                  
                  <label className="flex items-center cursor-pointer p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                    <input
                      type="checkbox"
                      name="matieresDangereuses"
                      checked={formData.matieresDangereuses}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <div>
                      <span className="text-sm font-medium">Matières dangereuses</span>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Supplément de 25% appliqué au tarif
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-800">{error}</p>
                    {error.includes('code postal') && (
                      <p className="text-xs text-red-600 mt-1">
                        Assurez-vous de sélectionner une ville dans la liste de suggestions.
                      </p>
                    )}
                  </div>
                </div>
              )}

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={false}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculer le tarif
              </Button>
            </form>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/40">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Visualisation du trajet
            </h3>
            <div className="h-[500px] rounded-lg overflow-hidden border border-gray-200">
              <Map 
                depart={formData.villeDepart}
                arrivee={formData.villeArrivee}
                departCoords={coordinates.depart || (poles[formData.villeDepart] ? poles[formData.villeDepart] : undefined)}
                arriveeCoords={coordinates.arrivee || (poles[formData.villeArrivee] ? poles[formData.villeArrivee] : undefined)}
                poles={poles}
              />
            </div>
            
            {/* Informations zones tarifaires */}
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Informations tarifaires</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Tarifs en ligne disponibles pour tous nos pôles</p>
                    <p className="text-xs mt-1">Calculez instantanément vos tarifs pour Roissy CDG, Marseille, Le Havre et Lyon.</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  {formData.poleSelectionne === 'Roissy CDG' && (
                    <>
                      <p className="text-xs font-medium mb-1">Zones tarifaires Roissy :</p>
                      <p className="text-xs"><span className="font-medium">R1:</span> Île-de-France</p>
                      <p className="text-xs"><span className="font-medium">R2-R11:</span> Régions France métropolitaine</p>
                    </>
                  )}
                  {formData.poleSelectionne === 'Marseille' && (
                    <>
                      <p className="text-xs font-medium mb-1">Zones tarifaires Marseille :</p>
                      <p className="text-xs"><span className="font-medium">R1:</span> Bouches-du-Rhône (13)</p>
                      <p className="text-xs"><span className="font-medium">R2:</span> Gard, Var, Vaucluse (30, 83, 84)</p>
                      <p className="text-xs"><span className="font-medium">R3-R11:</span> Autres régions</p>
                    </>
                  )}
                  {formData.poleSelectionne === 'Le Havre' && (
                    <>
                      <p className="text-xs font-medium mb-1">Zones tarifaires Le Havre :</p>
                      <p className="text-xs"><span className="font-medium">R1:</span> Normandie (27, 61, 76)</p>
                      <p className="text-xs"><span className="font-medium">R2-R10:</span> Autres régions</p>
                    </>
                  )}
                  {formData.poleSelectionne === 'Lyon' && (
                    <>
                      <p className="text-xs font-medium mb-1">Zones tarifaires Lyon :</p>
                      <p className="text-xs"><span className="font-medium">R1:</span> Rhône (69)</p>
                      <p className="text-xs"><span className="font-medium">R2:</span> Ain, Isère, Loire, Saône-et-Loire (01, 38, 42, 71)</p>
                      <p className="text-xs"><span className="font-medium">R3-R11:</span> Autres régions</p>
                    </>
                  )}
                  {!formData.poleSelectionne && (
                    <p className="text-xs text-gray-500">Sélectionnez un pôle pour voir les zones tarifaires</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>


        {showResult && resultat && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-primary" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Votre Devis Détaillé</h3>
                {resultat.pole && (
                  <p className="text-sm text-gray-600">Grille tarifaire : {resultat.pole}</p>
                )}
              </div>
            </div>
            
            {/* Détail des articles */}
            {resultat.articles && resultat.articles.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Box className="h-4 w-4" />
                  Détail des articles
                </h4>
                <div className="space-y-3">
                  {resultat.articles.map((item: any, index: number) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-medium text-gray-900">
                          Article {item.article.numero} - {item.article.type.charAt(0).toUpperCase() + item.article.type.slice(1)}
                        </h5>
                        <span className="text-sm font-semibold text-primary">
                          {formatPrice(item.pricing.basePrice)}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-gray-600">Type de transport:</span>
                          <span className="ml-2 font-medium">{item.transport.type}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Poids:</span>
                          <span className="ml-2 font-medium">{item.transport.weight} kg</span>
                        </div>
                        {item.transport.quantity && (
                          <div className="col-span-2">
                            <span className="text-gray-600">Quantité:</span>
                            <span className="ml-2 font-medium">
                              {item.transport.type === 'Mètre de plancher' 
                                ? `${item.transport.quantity} m`
                                : `${item.transport.quantity} palette${item.transport.quantity > 1 ? 's' : ''}`
                              }
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Informations de transport */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Informations générales
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Trajet</span>
                    <span className="font-medium">{resultat.trajet}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Zone de destination</span>
                    <span className="font-medium">{resultat.zone.code} - {resultat.zone.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Nombre d'articles</span>
                    <span className="font-medium">{resultat.transport.nombreArticles}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Poids total</span>
                    <span className="font-medium">{resultat.transport.weight} kg</span>
                  </div>
                  {resultat.transport.poidsFacture && (
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Poids facturé</span>
                      <span className="font-medium">{resultat.transport.poidsFacture.toFixed(0)} kg</span>
                    </div>
                  )}
                  {resultat.transport.selectionReason && (
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Mode sélectionné</span>
                      <span className="text-sm text-blue-600">{resultat.transport.transportMode === 'messagerie' ? 'Messagerie' : 'Palette'}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Délai de livraison</span>
                    <span className="font-medium flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      {resultat.details.delaiLivraison}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Détail des prix */}
              <div className="bg-primary/5 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Euro className="h-4 w-4" />
                  Détail du tarif
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tarif de base</span>
                    <span className="font-medium">{formatPrice(resultat.pricing.basePrice)}</span>
                  </div>
                  
                  {Object.entries(resultat.pricing.supplements).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600">
                        {key === 'hayon' && 'Forfait hayon'}
                        {key === 'attente' && 'Frais d\'attente'}
                        {key === 'matieresDangereuses' && 'Supplément matières dangereuses'}
                        {key === 'assurance' && <span className="flex items-center gap-1"><Shield className="h-3 w-3" /> Assurance</span>}
                      </span>
                      <span className="font-medium">{formatPrice(value as number)}</span>
                    </div>
                  ))}
                  
                  <div className="pt-3 border-t border-gray-300">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold">Total HT</span>
                      <span className="text-lg font-bold text-primary">{formatPrice(resultat.pricing.totalHT)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Information sur la sélection automatique */}
            {resultat.transport.selectionReason && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Sélection automatique du mode de transport
                </h4>
                <p className="text-sm text-blue-800">{resultat.transport.selectionReason}</p>
              </div>
            )}
            
            {/* Information sur le calcul d'affrètement pour dimensions non standard */}
            {resultat.transport.calculAffrètement && (
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <h4 className="font-medium text-amber-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Calcul d'affrètement pour palette non standard
                </h4>
                <p className="text-sm text-amber-800 mb-2">
                  Dimensions de votre palette : {resultat.transport.calculAffrètement.longueur}m × {resultat.transport.calculAffrètement.largeur}m
                </p>
                <p className="text-sm text-amber-800">
                  Formule appliquée : {resultat.transport.calculAffrètement.longueur} × {resultat.transport.calculAffrètement.largeur} ÷ 2.4 = {resultat.transport.calculAffrètement.metresCalcules.toFixed(2)}m
                </p>
                <p className="text-sm text-amber-800 font-medium mt-1">
                  Mètres de plancher facturés : {resultat.transport.calculAffrètement.metresFactures}m
                </p>
              </div>
            )}
            
            {/* Conditions spéciales */}
            {resultat.details.conditionsSpeciales && resultat.details.conditionsSpeciales.length > 0 && (
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-medium text-yellow-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Conditions spéciales
                </h4>
                <ul className="list-disc list-inside text-sm text-yellow-800 space-y-1">
                  {resultat.details.conditionsSpeciales.map((condition: string, index: number) => (
                    <li key={index}>{condition}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-6 flex gap-4 justify-end">
              <Button variant="outline">
                <Printer className="mr-2 h-4 w-4" />
                Imprimer
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Télécharger PDF
              </Button>
              <Button>
                Demander un devis complet
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}