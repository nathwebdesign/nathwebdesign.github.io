#!/bin/bash

# Script de vérification du build pour RDistrib Website

echo "🔍 Vérification du build RDistrib Website..."
echo "=========================================="

# Vérifier Node.js
echo "✓ Vérification de Node.js..."
node_version=$(node -v)
echo "  Version Node.js : $node_version"

# Vérifier npm
echo "✓ Vérification de npm..."
npm_version=$(npm -v)
echo "  Version npm : $npm_version"

# Nettoyer les anciens builds
echo "✓ Nettoyage des anciens builds..."
rm -rf .next out

# Installer les dépendances
echo "✓ Installation des dépendances..."
npm install

# Vérifier les variables d'environnement
echo "✓ Vérification des variables d'environnement..."
if [ -f .env.local ]; then
    echo "  ✅ Fichier .env.local trouvé"
else
    echo "  ⚠️  Fichier .env.local non trouvé"
    echo "  💡 Créez un fichier .env.local basé sur .env.example"
fi

# Lancer le build
echo "✓ Lancement du build..."
npm run build

# Vérifier le résultat
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build réussi !"
    echo ""
    echo "📁 Fichiers générés dans le dossier 'out/'"
    echo "📊 Taille du build :"
    du -sh out/
    echo ""
    echo "🚀 Prêt pour le déploiement sur Netlify !"
else
    echo ""
    echo "❌ Échec du build"
    echo "Vérifiez les erreurs ci-dessus"
    exit 1
fi