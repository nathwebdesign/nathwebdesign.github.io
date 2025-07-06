# Test du système de sélection automatique Messagerie/Palette

## Critères de sélection

Le système choisit automatiquement entre messagerie et palette selon ces critères :
- **Messagerie** : Poids < 200kg ET Volume < 0.8m³
- **Palette** : Poids ≥ 200kg OU Volume ≥ 0.8m³

## Cas de test pour la MESSAGERIE

### Test 1 : Petit colis léger
- Dimensions : 50 x 40 x 30 cm
- Poids : 15 kg
- Volume : 0.06 m³
- **Résultat attendu** : Messagerie (tranche 10-19 kg)

### Test 2 : Colis moyen
- Dimensions : 80 x 60 x 50 cm
- Poids : 45 kg
- Volume : 0.24 m³
- **Résultat attendu** : Messagerie (tranche 40-49 kg)

### Test 3 : Colis volumineux mais léger
- Dimensions : 100 x 80 x 70 cm
- Poids : 50 kg
- Volume : 0.56 m³
- Poids volumétrique : 140 kg (0.56 × 250)
- **Résultat attendu** : Messagerie (poids facturé = 140 kg, tranche 100-199 kg)

### Test 4 : Colis lourd mais compact
- Dimensions : 60 x 50 x 40 cm
- Poids : 180 kg
- Volume : 0.12 m³
- **Résultat attendu** : Messagerie (tranche 100-199 kg)

## Cas de test pour les PALETTES

### Test 5 : Dépassement du poids limite
- Dimensions : 80 x 60 x 50 cm
- Poids : 250 kg
- Volume : 0.24 m³
- **Résultat attendu** : Palette (poids ≥ 200 kg)

### Test 6 : Dépassement du volume limite
- Dimensions : 120 x 100 x 80 cm
- Poids : 150 kg
- Volume : 0.96 m³
- **Résultat attendu** : Palette (volume ≥ 0.8 m³)

### Test 7 : Grande charge
- Dimensions : 200 x 150 x 120 cm
- Poids : 800 kg
- Volume : 3.6 m³
- **Résultat attendu** : Palette (estimation ~4 palettes)

## Vérifications spécifiques pour la messagerie

1. **Zones tarifaires** : Toujours utiliser les zones Roissy (R1-R11, MONACO, CORSE)
2. **Poids volumétrique** : 1m³ = 250kg
3. **Poids facturé** : Maximum entre poids réel et poids volumétrique
4. **Tarification > 100kg** : Utiliser la tranche 100-199kg, arrondi à la dizaine supérieure

## Comment tester

1. Aller sur la page de cotation `/cotation`
2. Sélectionner un pôle de départ (Roissy, Marseille, Lyon ou Le Havre)
3. Entrer une adresse de destination
4. Saisir les dimensions et le poids selon les cas de test
5. Vérifier que :
   - Le système sélectionne automatiquement le bon mode (Messagerie ou Palette)
   - La raison de la sélection est affichée
   - Pour la messagerie, le poids volumétrique est calculé et affiché
   - Les tarifs correspondent aux zones Roissy pour la messagerie

## Notes importantes

- Le hayon est automatiquement ajouté si hauteur > 120cm ou poids > 1000kg
- L'assurance est calculée automatiquement (0,40% de la valeur, minimum 35€)
- Les matières dangereuses ajoutent 25% au tarif de base