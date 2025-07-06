# Grille Tarifaire R DISTRIB SOLUTIONS

## Structure des zones tarifaires

### Zones France métropolitaine

- **R1** : Île-de-France (75, 77, 78, 91, 92, 93, 94, 95)
- **R2** : Nord-Ouest (14, 27, 28, 50, 60, 61, 76, 80)
- **R3** : Nord-Est (02, 08, 10, 51, 52, 54, 55, 57, 59, 62, 67, 68, 88)
- **R4** : Centre (18, 36, 37, 41, 45)
- **R5** : Ouest (22, 29, 35, 44, 49, 53, 56, 72, 85)
- **R6** : Sud-Ouest (16, 17, 19, 23, 24, 33, 40, 47, 64, 79, 86, 87)
- **R7** : Centre-Est (01, 03, 15, 21, 25, 39, 42, 43, 58, 63, 69, 70, 71, 89, 90)
- **R8** : Sud-Est (04, 05, 07, 26, 38, 73, 74)
- **R9** : Midi-Pyrénées (09, 12, 31, 32, 46, 65, 81, 82)
- **R10** : Languedoc-Roussillon (11, 30, 34, 48, 66)
- **R11** : Provence-Alpes-Côte d'Azur (06, 13, 83, 84)

### Zones spéciales

- **MONACO** : Principauté de Monaco (98)
- **CORSE** : Corse (2A, 2B)

## Types de tarification

### 1. Palettes 80x120 cm
- Capacité : 1 à 33 palettes
- Tarification progressive selon la quantité et la zone

### 2. Palettes 100x120 cm
- Capacité : 1 à 26 palettes
- Tarification progressive selon la quantité et la zone

### 3. Mètres de plancher
- De 0,5 à 13,2 mètres
- Poids maximum par palier (de 600 kg à 24 000 kg)
- Tarification selon les mètres et la zone

## Options supplémentaires

- **Forfait hayon** : 30€
- **Frais d'attente** : 50€/heure
- **Matières dangereuses** : +25% sur le tarif de base
- **Assurance** : 0,40% de la valeur HT (minimum 35€)
- **TVA** : 20%

## Délais de livraison

- **France métropolitaine** : 24-48h
- **Monaco** : 48h
- **Corse** : 48-72h

## Calcul automatique

Le système de cotation propose trois modes :

1. **Calcul automatique** : Le système détermine automatiquement le type de transport optimal (palettes ou mètres de plancher) en fonction des dimensions et du poids
2. **Sélection manuelle palettes** : L'utilisateur choisit le type et le nombre de palettes
3. **Sélection manuelle mètres de plancher** : L'utilisateur choisit directement les mètres nécessaires

## Intégration technique

Les fichiers de configuration sont situés dans :
- `/config/zones.ts` : Définition des zones et départements
- `/config/tarifs.ts` : Grilles tarifaires complètes
- `/lib/cotation-calculator.ts` : Logique de calcul des cotations

Le calculateur utilise le code postal de destination pour déterminer automatiquement la zone tarifaire et appliquer les tarifs correspondants.