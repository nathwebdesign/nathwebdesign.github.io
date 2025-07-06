# Grille Tarifaire - Pôle Marseille

## Vue d'ensemble

Le système de cotation a été étendu pour supporter plusieurs pôles avec leurs propres grilles tarifaires. Marseille est maintenant configuré avec sa propre grille tarifaire automatique.

## Zones tarifaires Marseille

Les zones pour le pôle de Marseille sont définies différemment de celles de Roissy :

### Détail des zones

- **R1** : Bouches-du-Rhône (13)
- **R2** : Gard, Var, Vaucluse (30, 83, 84)
- **R3** : Alpes-Méditerranée (04, 05, 06, 07, 26, 34)
- **R4** : Languedoc-Rhône (11, 12, 38, 42, 48, 66, 69)
- **R5** : Massif Central-Sud (01, 09, 15, 31, 43, 71, 73, 74, 81, 82)
- **R6** : Centre-France (03, 21, 32, 39, 63)
- **R7** : Sud-Ouest Élargi (18, 19, 23, 24, 25, 33, 36, 40, 46, 47, 58, 64, 65)
- **R8** : Est-France (10, 16, 41, 45, 70, 87, 88, 89, 90)
- **R9** : Centre-Est (37, 51, 52, 54, 68, 86)
- **R10** : Nord-Ouest (02, 17, 27, 28, 44, 49, 53, 55, 57, 60, 61, 67, 72, 76, 79, 80, 85)
- **R11** : Nord-France (08, 14, 22, 29, 35, 50, 56, 59, 62)
- **MONACO** : Monaco (98)
- **CORSE** : Corse (2A, 2B)

## Tarifs Marseille

Les tarifs pour Marseille sont légèrement différents de ceux de Roissy, reflétant les distances et coûts logistiques spécifiques au pôle :

### Exemples de tarifs (Palette 80x120)
- **R1 (13)** : 50€ pour 1 palette
- **R2 (30, 83, 84)** : 55€ pour 1 palette
- **R3 (04, 05, 06...)** : 60€ pour 1 palette
- Et ainsi de suite...

## Architecture technique

### Nouveaux fichiers créés

1. **`/config/poles.ts`** : Configuration centralisée des pôles et leurs zones
2. **`/config/tarifs-marseille.ts`** : Grille tarifaire spécifique à Marseille
3. **`/config/tarifs-manager.ts`** : Gestionnaire centralisé des tarifs par pôle

### Modifications apportées

1. **`/lib/cotation-calculator.ts`** : 
   - Ajout du paramètre `poleId` dans `CotationInput`
   - Utilisation des fonctions spécifiques au pôle pour calculer les zones et tarifs

2. **`/app/cotation/page.tsx`** :
   - Support de Marseille dans l'interface
   - Affichage dynamique des zones selon le pôle sélectionné
   - Messages mis à jour pour indiquer la disponibilité des tarifs automatiques

## Utilisation

### Pour les utilisateurs
1. Sélectionner "Marseille" comme pôle de départ ou d'arrivée
2. Le système utilisera automatiquement la grille tarifaire de Marseille
3. Les zones affichées seront celles spécifiques à Marseille

### Pour les développeurs
```typescript
// Exemple d'utilisation
const cotation = calculateCotation({
  poleId: 'marseille',
  postalCodeDestination: '75001',
  typeTransport: 'palette80x120',
  quantity: 5,
  options: {
    hayon: true,
    matieresDangereuses: false,
    valeurMarchandise: 5000
  }
});
```

## Prochaines étapes

Pour ajouter Lyon et Le Havre :
1. Définir leurs zones dans `/config/poles.ts`
2. Créer leurs fichiers de tarifs (`tarifs-lyon.ts`, `tarifs-le-havre.ts`)
3. Mettre à jour `tarifs-manager.ts` pour inclure ces pôles
4. Modifier `hasAutomaticPricing` à `true` dans la configuration des pôles
5. L'interface s'adaptera automatiquement