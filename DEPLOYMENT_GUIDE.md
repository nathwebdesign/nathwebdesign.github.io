# Guide de Déploiement RDistrib Website

## Configuration Simplifiée

Toutes les configurations ont été simplifiées pour éviter les erreurs :

### 1. Package.json
- Utilise Next.js 14.2.5 (version stable)
- React 18.3.1 (compatible avec Next.js 14)
- Tailwind CSS 3.4.4 (version stable)
- Tous les packages problématiques ont été mis à jour

### 2. Configuration TypeScript
- Cible ES5 pour une compatibilité maximale
- Module resolution: "node" pour éviter les problèmes d'imports
- Strict mode activé pour une meilleure sécurité du code

### 3. Configuration PostCSS
- Configuration standard pour Tailwind CSS
- Autoprefixer inclus pour la compatibilité navigateur

### 4. Netlify Configuration
- Node version: 18 (LTS stable)
- Build command: npm run build
- Publish directory: out
- Configuration ultra-simple sans redirects complexes

## Instructions de Déploiement

### Étape 1 : Préparation Locale

```bash
# Donner les permissions d'exécution aux scripts
chmod +x deploy.sh check-typescript.sh

# Lancer le script de déploiement
./deploy.sh
```

### Étape 2 : Vérification des Erreurs

```bash
# Vérifier TypeScript et ESLint
./check-typescript.sh
```

### Étape 3 : Déploiement sur Netlify

1. **Créer un compte Netlify** (si pas déjà fait)
   - Aller sur https://app.netlify.com/signup

2. **Importer le projet**
   - Cliquer sur "Add new site" > "Import an existing project"
   - Choisir GitHub et autoriser l'accès
   - Sélectionner le repository rdistrib-website

3. **Configuration du build** (automatique avec netlify.toml)
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18

4. **Variables d'environnement** (si nécessaire)
   - Aucune variable requise pour le fonctionnement de base

5. **Déployer**
   - Cliquer sur "Deploy site"
   - Attendre la fin du build

## Résolution des Problèmes

### Si le build échoue localement :

1. **Nettoyer complètement le projet**
   ```bash
   rm -rf node_modules package-lock.json .next out
   npm install
   ```

2. **Vérifier Node.js**
   ```bash
   node --version  # Doit être >= 18.17.0
   npm --version   # Doit être >= 9.0.0
   ```

3. **Installer Node 18 si nécessaire**
   ```bash
   # Sur macOS avec Homebrew
   brew install node@18
   
   # Ou avec nvm
   nvm install 18
   nvm use 18
   ```

### Si le build échoue sur Netlify :

1. **Vérifier les logs de build**
   - Aller dans l'onglet "Deploys"
   - Cliquer sur le build échoué
   - Lire les logs d'erreur

2. **Problèmes courants et solutions**
   - **"Module not found"** : Vérifier que tous les imports utilisent les bons chemins
   - **"Type error"** : Lancer `./check-typescript.sh` localement
   - **"Build exceeded time limit"** : Le build est trop long, optimiser les imports

3. **Clear cache and retry**
   - Dans Netlify, aller dans "Deploys" > "Trigger deploy" > "Clear cache and deploy site"

## Structure du Projet

```
rdistrib-website/
├── app/              # Pages Next.js
├── components/       # Composants React
├── config/          # Configuration (tarifs, zones)
├── lib/             # Utilitaires
├── public/          # Assets statiques
├── netlify.toml     # Configuration Netlify
├── package.json     # Dépendances
├── tsconfig.json    # Configuration TypeScript
└── next.config.ts   # Configuration Next.js
```

## Checklist Finale

- [ ] Node.js version 18 ou supérieure installée
- [ ] Toutes les dépendances installées (`npm install`)
- [ ] Build local réussi (`npm run build`)
- [ ] Pas d'erreurs TypeScript (`./check-typescript.sh`)
- [ ] Repository GitHub à jour
- [ ] Configuration Netlify correcte
- [ ] Variables d'environnement configurées (si nécessaire)

## Support

Si vous rencontrez des problèmes :

1. Vérifiez d'abord les logs de build
2. Assurez-vous d'utiliser Node.js 18
3. Essayez de nettoyer et reconstruire le projet
4. Vérifiez que tous les fichiers sont bien committés sur GitHub

Le site devrait maintenant se déployer sans problème sur Netlify !