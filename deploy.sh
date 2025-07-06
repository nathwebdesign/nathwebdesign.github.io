#!/bin/bash

# Script de déploiement pour RDistrib Website
echo "=== Déploiement RDistrib Website ==="

# Nettoyage
echo "1. Nettoyage des fichiers..."
rm -rf node_modules package-lock.json .next out

# Installation des dépendances
echo "2. Installation des dépendances..."
npm install

# Build du projet
echo "3. Build du projet..."
npm run build

# Vérification du build
echo "4. Vérification du build..."
if [ -d "out" ]; then
  echo "✓ Le dossier 'out' a été créé avec succès"
  echo "✓ Contenu du dossier out:"
  ls -la out/
else
  echo "✗ Erreur: Le dossier 'out' n'a pas été créé"
  exit 1
fi

echo ""
echo "=== Build terminé avec succès! ==="
echo ""
echo "Pour déployer sur Netlify:"
echo "1. Connectez-vous à Netlify"
echo "2. Importez votre projet depuis GitHub"
echo "3. Les paramètres de build sont déjà configurés dans netlify.toml"
echo ""
echo "Configuration Netlify:"
echo "- Build command: npm run build"
echo "- Publish directory: out"
echo "- Node version: 18"