#!/bin/bash

# Script de vérification TypeScript
echo "=== Vérification TypeScript ==="

# Vérification de TypeScript
echo "1. Vérification des types..."
npx tsc --noEmit

# Vérification ESLint
echo "2. Vérification ESLint..."
npm run lint

echo ""
echo "=== Vérification terminée ==="