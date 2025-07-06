# Instructions de déploiement sur Netlify

## 🚀 Méthode 1 : Déploiement via Git (Recommandé)

### Prérequis
- Un compte GitHub, GitLab ou Bitbucket
- Un compte Netlify (gratuit sur netlify.com)

### Étapes

1. **Poussez votre code sur Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/votre-username/rdistrib-website.git
   git push -u origin main
   ```

2. **Connectez-vous à Netlify**
   - Allez sur [app.netlify.com](https://app.netlify.com)
   - Cliquez sur "Add new site" > "Import an existing project"

3. **Importez votre projet**
   - Choisissez votre provider Git (GitHub, GitLab, etc.)
   - Sélectionnez le repository `rdistrib-website`
   - Netlify détectera automatiquement les paramètres grâce au fichier `netlify.toml`

4. **Configurez les variables d'environnement**
   - Dans les paramètres de build, ajoutez :
     ```
     NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = votre_clé_api_google_maps
     ```

5. **Déployez**
   - Cliquez sur "Deploy site"
   - Le déploiement prendra 2-3 minutes

## 🎯 Méthode 2 : Netlify Drop (Déploiement rapide)

1. **Construisez le projet localement**
   ```bash
   npm install
   npm run build
   ```

2. **Ouvrez Netlify Drop**
   - Allez sur [app.netlify.com/drop](https://app.netlify.com/drop)

3. **Glissez-déposez le dossier `out`**
   - Glissez le dossier `out` (pas le fichier ZIP) dans la zone de dépôt
   - Le site sera en ligne en quelques secondes

## 🔧 Configuration

### Variables d'environnement

Les variables suivantes doivent être configurées dans Netlify :

| Variable | Description | Requis |
|----------|-------------|--------|
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Clé API Google Maps pour l'autocomplétion | ✅ Oui |
| `NEXT_PUBLIC_SITE_URL` | URL du site en production | ❌ Non |

### Configuration du domaine

1. **Dans Netlify, allez dans Domain settings**
2. **Ajoutez votre domaine personnalisé** (ex: rdistrib-solutions.fr)
3. **Configurez les DNS** selon les instructions de Netlify
4. **HTTPS est automatiquement configuré** avec Let's Encrypt

## 📝 Fichiers importants

- **`netlify.toml`** : Configuration de build et déploiement
- **`.env.example`** : Exemple des variables d'environnement nécessaires
- **`.gitignore`** : Fichiers à exclure du repository Git
- **`next.config.ts`** : Configuration Next.js (export statique)

## ✅ Vérification post-déploiement

Après le déploiement, vérifiez :

- [ ] La page d'accueil s'affiche correctement
- [ ] Le calculateur de cotation fonctionne
- [ ] L'autocomplétion des adresses est active (API Google Maps)
- [ ] Les animations sont fluides
- [ ] Le site est responsive sur mobile
- [ ] Le sitemap est accessible (`/sitemap.xml`)
- [ ] Les meta tags SEO sont présents

## 🔄 Mises à jour

### Avec Git (automatique)
Chaque push sur la branche `main` déclenchera automatiquement un nouveau déploiement.

### Avec Netlify Drop
Répétez le processus de build et glissez-déposez le nouveau dossier `out`.

## 🚨 Dépannage

### Le build échoue
- Vérifiez que Node.js 20+ est installé
- Supprimez `node_modules` et `package-lock.json`, puis `npm install`
- Vérifiez les logs de build dans Netlify

### L'autocomplétion ne fonctionne pas
- Vérifiez que la clé API Google Maps est correctement configurée
- Vérifiez que les APIs Places et Maps JavaScript sont activées

### Erreur 404 sur les routes
- Le fichier `netlify.toml` configure déjà les redirections SPA
- Si le problème persiste, vérifiez la configuration dans Netlify

## 📞 Support

Pour toute question :
- Documentation Netlify : [docs.netlify.com](https://docs.netlify.com)
- Documentation Next.js : [nextjs.org/docs](https://nextjs.org/docs)
- Support Google Maps : [developers.google.com/maps](https://developers.google.com/maps)