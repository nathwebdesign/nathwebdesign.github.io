# Configuration Google Maps API

Pour utiliser l'autocomplétion des adresses avec Google Places, suivez ces étapes :

## 1. Obtenir une clé API Google Maps

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Activez les APIs suivantes :
   - **Places API**
   - **Maps JavaScript API**
   - **Geocoding API** (optionnel mais recommandé)

4. Créez une clé API :
   - Allez dans "APIs & Services" > "Credentials"
   - Cliquez sur "Create Credentials" > "API Key"
   - Copiez la clé générée

5. Sécurisez votre clé API :
   - Cliquez sur votre clé API
   - Dans "Application restrictions", sélectionnez "HTTP referrers"
   - Ajoutez vos domaines :
     - `http://localhost:3000/*` (développement)
     - `https://rdistrib-solutions.fr/*` (production)
   - Dans "API restrictions", sélectionnez les APIs autorisées

## 2. Configurer le projet

1. Créez un fichier `.env.local` à la racine du projet :
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=votre_clé_api_ici
```

2. Redémarrez le serveur de développement

## 3. Coûts

Google Maps offre un crédit mensuel de 200$ gratuit. Pour un site de cotation transport :
- Places Autocomplete : ~0.0032$ par requête
- Geocoding : ~0.005$ par requête
- Environ 40 000 requêtes gratuites par mois

## 4. Alternative sans Google Maps

Si vous ne souhaitez pas utiliser Google Maps, vous pouvez :
- Utiliser une liste prédéfinie de villes françaises
- Utiliser l'API gouvernementale gratuite : https://api-adresse.data.gouv.fr/
- Utiliser OpenStreetMap avec Nominatim (gratuit mais limité)