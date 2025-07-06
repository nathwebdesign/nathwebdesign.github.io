# Test de la configuration Le Havre

## Configuration ajoutée

### 1. Grille tarifaire Le Havre (`config/tarifs-le-havre.ts`)
- Tarifs spécifiques pour palettes 80x120 (33 lignes)
- Tarifs spécifiques pour palettes 100x120 (26 lignes)
- Tarifs spécifiques pour mètres de plancher (27 lignes)
- Tarifs légèrement inférieurs à ceux de Roissy (environ -5%)

### 2. Zones Le Havre (`config/poles.ts`)
- **R1**: Normandie (27, 61, 76)
- **R2**: Nord-Ouest Élargi (02, 14, 28, 35, 45, 50, 53, 59, 60, 62, 72, 80)
- **R3**: Grand Nord-Est (08, 10, 18, 22, 36, 37, 41, 44, 49, 51, 56, 89)
- **R4**: Centre-Est (03, 21, 23, 29, 52, 55, 58, 79, 85, 86)
- **R5**: Est (19, 25, 54, 57, 70, 71, 87, 88)
- **R6**: Centre-Sud (16, 17, 39, 42, 63, 67, 68, 90)
- **R7**: Sud (01, 15, 24, 33, 38, 43, 69, 73, 74)
- **R8**: Grand Sud (07, 12, 26, 32, 40, 46, 47, 48, 81, 82)
- **R9**: Méditerranée Ouest (13, 30, 31, 34, 64, 65, 84)
- **R10**: Méditerranée Est (04, 05, 06, 09, 11, 66, 83)
- **Pas de R11** pour Le Havre (contrairement aux autres pôles)
- **MONACO** et **CORSE** inclus

### 3. Intégration système
- `config/tarifs-manager.ts` mis à jour pour inclure Le Havre
- `app/cotation/page.tsx` mis à jour pour permettre les calculs automatiques
- Interface mise à jour pour indiquer que 3 pôles ont la tarification automatique

## Tests à effectuer

### Test 1: Vérifier les zones
- Code postal 76600 (Le Havre) → devrait être en R1
- Code postal 14000 (Caen) → devrait être en R2
- Code postal 69000 (Lyon) → devrait être en R7

### Test 2: Vérifier les tarifs
- 1 palette 80x120 vers R1 → 48€ HT
- 5 palettes 100x120 vers R5 → 298€ HT
- 3 mètres de plancher vers R3 → 263€ HT

### Test 3: Vérifier l'interface
- Sélectionner "Le Havre" dans le calculateur
- Vérifier que le calcul automatique fonctionne
- Vérifier que le message indique bien les 3 pôles avec tarifs automatiques