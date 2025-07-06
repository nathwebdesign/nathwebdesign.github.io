# Guide d'Intégration Express RP

## Modifications nécessaires dans l'interface de cotation

### 1. Ajouter un champ ville (optionnel)

Dans le formulaire de cotation, ajouter un champ pour le nom de la ville de destination :

```typescript
// Dans app/cotation/page.tsx
const [formData, setFormData] = useState({
  // ... autres champs existants
  cityNameDestination: '', // Nouveau champ
  // ...
})

// Dans le formulaire
<div>
  <label>Ville de destination (optionnel)</label>
  <input
    type="text"
    name="cityNameDestination"
    value={formData.cityNameDestination}
    onChange={handleInputChange}
    placeholder="Ex: Massy, Melun..."
    className="..."
  />
  <p className="text-sm text-gray-500">
    Nécessaire uniquement pour Express RP dans certaines zones
  </p>
</div>
```

### 2. Modifier l'appel à calculateCotation

```typescript
const handleCalculer = () => {
  // ... validation existante

  const result = calculateCotation({
    poleId: poleActif,
    postalCodeDepart: formData.codePostalDepart, // Si disponible
    postalCodeDestination: formData.codePostalDestination,
    cityNameDestination: formData.cityNameDestination, // Nouveau
    weight: parseFloat(formData.poids),
    dimensions: {
      longueur: parseFloat(formData.longueur),
      largeur: parseFloat(formData.largeur),
      hauteur: parseFloat(formData.hauteur)
    },
    options: {
      hayon: formData.hayon,
      attente: formData.attente ? parseFloat(formData.attente) : undefined,
      matieresDangereuses: formData.matieresDangereuses,
      valeurMarchandise: formData.valeurMarchandise ? parseFloat(formData.valeurMarchandise) : undefined,
      manutention: formData.manutention // Nouvelle option
    }
  });

  setResultat(result);
}
```

### 3. Afficher les résultats Express RP

```typescript
// Dans l'affichage des résultats
{resultat.data.transport.transportMode === 'expressRP' && (
  <div className="bg-blue-50 p-4 rounded-lg mb-4">
    <h4 className="font-semibold text-blue-900 flex items-center gap-2">
      <Truck className="w-5 h-5" />
      Service Express Région Parisienne
    </h4>
    <p className="text-sm text-blue-700 mt-1">
      Livraison garantie J+1 avant 13h
    </p>
    <p className="text-sm text-blue-700">
      Véhicule : {resultat.data.transport.vehicleType}
    </p>
  </div>
)}
```

### 4. Ajouter l'option manutention

```typescript
// Dans le formulaire des options
<label className="flex items-center space-x-2">
  <input
    type="checkbox"
    name="manutention"
    checked={formData.manutention}
    onChange={handleInputChange}
    className="..."
  />
  <span>Manutention (35€)</span>
</label>
```

## Logique de sélection automatique

Le système détecte automatiquement si c'est une livraison Express RP selon ces critères :

1. **Pôle de départ** : Roissy
2. **Destination** : Code postal en Île-de-France (75, 77, 78, 91, 92, 93, 94, 95)
3. **Sélection du véhicule** : Automatique selon poids/volume
4. **Zone tarifaire** : Déterminée par code postal et ville

## Exemple d'utilisation complète

```typescript
// Cas 1 : Express RP activé
const cotation1 = calculateCotation({
  poleId: 'roissy',
  postalCodeDestination: '91300',
  cityNameDestination: 'Massy',
  weight: 800,
  dimensions: { longueur: 200, largeur: 120, hauteur: 150 },
  options: { hayon: true, manutention: true }
});
// Résultat : Express RP, Fourgon, Zone B

// Cas 2 : Transport normal (hors Île-de-France)
const cotation2 = calculateCotation({
  poleId: 'roissy',
  postalCodeDestination: '59000', // Lille
  weight: 800,
  dimensions: { longueur: 200, largeur: 120, hauteur: 150 },
  options: { hayon: true }
});
// Résultat : Transport normal, messagerie ou palettes

// Cas 3 : Départ d'un autre pôle
const cotation3 = calculateCotation({
  poleId: 'marseille',
  postalCodeDestination: '75001',
  weight: 500,
  dimensions: { longueur: 120, largeur: 80, hauteur: 100 },
  options: {}
});
// Résultat : Transport normal, pas Express RP
```

## Points d'attention

1. **Nom de ville** : Nécessaire uniquement pour les départements 77, 78, 91, 95 où certaines villes sont dans des zones différentes
2. **Départements complets** : 75, 92, 93, 94 sont entièrement dans leur zone respective
3. **Zone D** : Toutes les communes d'Île-de-France non listées dans les zones A, B, C
4. **Véhicule** : Sélection automatique basée sur poids ET volume
5. **Options** : Manutention est spécifique à Express RP