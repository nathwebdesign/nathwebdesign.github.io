#!/bin/bash

echo "🧪 Test de build Next.js pour Netlify"
echo "===================================="
echo ""

# Nettoyer les anciens builds
echo "🧹 Nettoyage des anciens builds..."
rm -rf .next out

# Vérifier les dépendances
echo ""
echo "📦 Vérification des dépendances..."
if [ ! -d "node_modules" ]; then
  echo "⚠️  node_modules manquant. Exécutez 'npm install' d'abord."
  exit 1
fi

# Build du projet
echo ""
echo "🔨 Construction du projet..."
npm run build

# Vérifier le résultat
echo ""
echo "✅ Vérification du build..."

if [ -d "out" ]; then
  echo "✅ Dossier 'out' créé avec succès"
  
  # Compter les fichiers
  HTML_COUNT=$(find out -name "*.html" | wc -l)
  echo "📄 Fichiers HTML générés: $HTML_COUNT"
  
  # Vérifier les fichiers essentiels
  if [ -f "out/index.html" ]; then
    echo "✅ index.html présent"
  else
    echo "❌ index.html manquant!"
  fi
  
  if [ -f "out/404.html" ]; then
    echo "✅ 404.html présent"
  else
    echo "❌ 404.html manquant!"
  fi
  
  # Lister les pages générées
  echo ""
  echo "📋 Pages générées:"
  find out -name "*.html" -type f | sort
  
else
  echo "❌ Le dossier 'out' n'a pas été créé!"
  echo "Vérifiez les erreurs de build ci-dessus."
  exit 1
fi

echo ""
echo "🎯 Test terminé. Si tout est vert, le site devrait fonctionner sur Netlify."
echo ""
echo "Pour tester localement: npx serve out"