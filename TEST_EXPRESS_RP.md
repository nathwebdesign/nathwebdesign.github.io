# Test du Service Express RP

## Cas de Test

### 1. Test Zone A - Paris (75)
```typescript
const test1 = calculateCotation({
  poleId: 'roissy',
  postalCodeDepart: '95700', // Roissy
  postalCodeDestination: '75001', // Paris 1er
  weight: 300,
  dimensions: { longueur: 120, largeur: 80, hauteur: 100 },
  options: { hayon: true }
});
// Attendu: Break, Zone A, 80€ + 40€ hayon = 120€ HT
```

### 2. Test Zone B - Massy (91)
```typescript
const test2 = calculateCotation({
  poleId: 'roissy',
  postalCodeDepart: '95700',
  postalCodeDestination: '91300', // Massy
  cityNameDestination: 'Massy',
  weight: 800,
  dimensions: { longueur: 200, largeur: 120, hauteur: 150 },
  options: { manutention: true }
});
// Attendu: Fourgon, Zone B, 110€ + 35€ manutention = 145€ HT
```

### 3. Test Zone C - Melun (77)
```typescript
const test3 = calculateCotation({
  poleId: 'roissy',
  postalCodeDestination: '77000', // Melun
  cityNameDestination: 'Melun',
  weight: 2500,
  dimensions: { longueur: 400, largeur: 200, hauteur: 200 },
  options: { hayon: true, attente: 2 }
});
// Attendu: GV 20m³, Zone C, 175€ + 40€ hayon + 80€ attente = 295€ HT
```

### 4. Test Zone D - Fontainebleau (77)
```typescript
const test4 = calculateCotation({
  poleId: 'roissy',
  postalCodeDestination: '77300', // Fontainebleau
  cityNameDestination: 'Fontainebleau',
  weight: 8000,
  dimensions: { longueur: 600, largeur: 240, hauteur: 250 },
  options: { matieresDangereuses: true }
});
// Attendu: Porteur, Zone D, 260€ + 65€ (25%) = 325€ HT
```

### 5. Test Semi - Grande livraison
```typescript
const test5 = calculateCotation({
  poleId: 'roissy',
  postalCodeDestination: '78000', // Versailles
  cityNameDestination: 'Versailles',
  weight: 15000,
  dimensions: { longueur: 1200, largeur: 240, hauteur: 250 },
  options: {}
});
// Attendu: Semi, Zone C, 315€ HT
```

### 6. Test Non Express RP - Province
```typescript
const test6 = calculateCotation({
  poleId: 'roissy',
  postalCodeDestination: '59000', // Lille
  weight: 500,
  dimensions: { longueur: 120, largeur: 80, hauteur: 100 },
  options: {}
});
// Attendu: Transport normal (messagerie ou palettes), pas Express RP
```

## Vérifications Importantes

1. **Activation Express RP**
   - ✓ Départ de Roissy (95)
   - ✓ Destination en Île-de-France (75, 77, 78, 91, 92, 93, 94, 95)
   - ✗ Autres cas → Transport normal

2. **Sélection du véhicule**
   - Basée sur poids ET volume
   - Véhicule le plus petit qui peut contenir la marchandise

3. **Détermination de la zone**
   - Départements entiers pour certaines zones
   - Villes spécifiques pour d'autres
   - Zone D = reste de l'Île-de-France

4. **Options**
   - Hayon : automatique si hauteur > 120cm ou poids > 1000kg
   - Manutention : manuelle
   - Attente : en heures
   - Matières dangereuses : +25% du tarif de base