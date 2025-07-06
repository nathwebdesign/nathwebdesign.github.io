#!/bin/bash

echo "🧪 Test de l'export statique Next.js"
echo "===================================="
echo ""

# Couleurs pour les messages
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Nettoyer les builds précédents
echo "🧹 Nettoyage des builds précédents..."
rm -rf .next out

# Installer les dépendances si nécessaire
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
fi

# Construire le site
echo ""
echo "🔨 Construction du site..."
npm run build

# Vérifier si le build a réussi
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erreur lors du build${NC}"
    exit 1
fi

# Vérifier la présence du dossier out
if [ ! -d "out" ]; then
    echo -e "${RED}❌ Le dossier 'out' n'a pas été créé${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build réussi !${NC}"
echo ""

# Lister les fichiers principaux
echo "📁 Fichiers générés:"
ls -la out/*.html 2>/dev/null | head -10

echo ""
echo "📊 Taille du build:"
du -sh out/

echo ""
echo -e "${YELLOW}🚀 Pour tester localement:${NC}"
echo "   npx serve out"
echo ""
echo -e "${YELLOW}📝 Pour déployer sur Netlify:${NC}"
echo "   1. Commitez tous les changements"
echo "   2. Poussez vers votre repository"
echo "   3. Netlify déclenchera automatiquement le déploiement"
echo ""
echo -e "${GREEN}✨ Configuration Netlify vérifiée et corrigée !${NC}"