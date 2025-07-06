# Test de l'automatisation du formulaire de cotation

## Changements implémentés :

### 1. Debug de la carte
- Ajout de logs détaillés pour comprendre pourquoi la carte ne zoome pas
- Ajout d'une clé unique sur le composant Map pour forcer le re-rendu
- Augmentation du délai de zoom à 200ms
- Vérification après zoom pour confirmer que la vue a changé

### 2. Code postal automatique
- Le code postal est maintenant extrait automatiquement de l'adresse sélectionnée
- Affichage du code postal détecté dans un encadré vert
- Suppression du champ de saisie manuelle du code postal

### 3. Options automatiques
- **Hayon** : Automatiquement activé si :
  - Hauteur > 120cm OU
  - Poids > 1000kg
- **Assurance** : Calculée automatiquement basée sur la valeur déclarée (0,40%, minimum 35€)
- **Matières dangereuses** : Reste manuel pour la sécurité
- **Frais d'attente** : Supprimés complètement

### 4. Interface ultra simplifiée
L'utilisateur n'a plus qu'à saisir :
- Les adresses (départ/arrivée)
- Les dimensions (longueur, largeur, hauteur)
- Le poids
- La valeur de la marchandise (optionnel)
- Cocher matières dangereuses si applicable

## Tests à effectuer :

### Test 1 : Code postal automatique
1. Sélectionner "Départ depuis un pôle" → Roissy CDG
2. Dans "Adresse d'arrivée", taper "25 avenue" et sélectionner une adresse dans la liste
3. **Vérifier** : Le code postal doit apparaître automatiquement dans l'encadré vert

### Test 2 : Hayon automatique (hauteur)
1. Entrer des dimensions : 100 x 100 x 150 cm
2. **Vérifier** : Dans la section "Options automatiques", le hayon doit indiquer "Sera ajouté automatiquement"

### Test 3 : Hayon automatique (poids)
1. Entrer un poids : 1200 kg
2. **Vérifier** : Le hayon doit s'activer automatiquement

### Test 4 : Assurance automatique
1. Entrer une valeur de marchandise : 20000€
2. **Vérifier** : L'assurance doit afficher "Calculée automatiquement (80,00 €)"

### Test 5 : Zoom de la carte
1. Sélectionner une adresse complète avec l'autocomplete
2. **Vérifier dans la console** : Les logs doivent montrer les tentatives de zoom
3. **Observer** : La carte devrait zoomer sur l'adresse sélectionnée après un court délai

## Logs de débogage ajoutés (console du navigateur) :

- `[CotationPage]` : Extraction du code postal, changements d'adresse
- `[AddressAutocomplete]` : Résultats de l'API, coordonnées sélectionnées
- `[Map]` : Toutes les étapes du zoom et de l'affichage des marqueurs

## Notes pour la production :

Avant la mise en production, supprimer tous les `console.log` de débogage dans :
- `/app/cotation/page.tsx`
- `/components/cotation/map.tsx`
- `/components/cotation/address-autocomplete-free.tsx`