# Guide de débogage pour l'erreur "Origin returned error code" sur Netlify

## 🔍 Analyse du problème

Cette erreur sur Netlify peut avoir plusieurs causes. Voici un guide complet pour la résoudre.

## 📋 Checklist de diagnostic

### 1. Vérifications de base

- [ ] Le build local fonctionne-t-il ? (`npm run build`)
- [ ] Le dossier `out` est-il créé après le build ?
- [ ] Le site fonctionne-t-il localement ? (`npx serve out`)
- [ ] Y a-t-il des erreurs TypeScript ? (`npx tsc --noEmit`)

### 2. Configuration Next.js

Vérifiez que `next.config.ts` contient :
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};
```

### 3. Problèmes courants identifiés

#### a) Références à window/document
- **Fichier concerné** : `components/cotation/address-autocomplete-free.tsx`
- **Ligne** : 130-131 (utilisation de `document`)
- **Solution** : Le composant est déjà importé avec `dynamic` et `ssr: false` ✅

#### b) Variables d'environnement
- **Variable optionnelle** : `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- **Impact** : Non critique, le site utilise l'API d'adresse française par défaut

## 🔧 Solutions à tester

### Solution 1 : Configuration Netlify minimale

1. Renommez temporairement `netlify.toml` :
```bash
mv netlify.toml netlify.toml.backup
```

2. Créez un `netlify.toml` minimal :
```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "20"
```

3. Commitez et redéployez

### Solution 2 : Nettoyage complet

```bash
# Nettoyer tous les caches
rm -rf .next out node_modules package-lock.json

# Réinstaller proprement
npm install

# Reconstruire
npm run build

# Vérifier le résultat
ls -la out/
```

### Solution 3 : Vérifier les imports problématiques

Recherchez dans votre code :
- Imports de modules Node.js (fs, path, etc.) dans le code client
- Utilisation de `require()` au lieu de `import`
- Références à des APIs serveur

### Solution 4 : Désactiver temporairement les fonctionnalités

1. Commentez temporairement dans `app/cotation/page.tsx` :
   - L'import de Map
   - L'import d'AddressAutocomplete
   - Les composants correspondants dans le JSX

2. Testez le déploiement

3. Si ça fonctionne, réactivez progressivement

### Solution 5 : Vérifier la structure des pages

Assurez-vous que chaque dossier dans `app/` contient :
- Un fichier `page.tsx` pour les pages
- Pas de fichiers avec des exports nommés incorrects

## 🚨 Actions immédiates

1. **Exécutez le script de test** :
```bash
chmod +x test-build.sh
./test-build.sh
```

2. **Vérifiez les logs Netlify** :
- Allez dans Netlify > Deploys > Cliquez sur le déploiement échoué
- Cherchez l'erreur exacte dans les logs

3. **Testez avec une configuration minimale** :
- Utilisez `netlify-minimal.toml` au lieu de `netlify.toml`
- Supprimez temporairement les headers et redirections

## 📝 Information à fournir pour le support

Si le problème persiste, collectez :

1. **Logs de build complets de Netlify**
2. **Résultat de** :
```bash
npm run build 2>&1 | tee build.log
```
3. **Liste des fichiers dans out/** :
```bash
find out -type f -name "*.html" | sort
```
4. **Version de Node utilisée localement** :
```bash
node --version
```

## 🔄 Process de déploiement recommandé

1. Nettoyez le cache Netlify :
   - Netlify Dashboard > Site settings > Build & deploy > Clear cache and retry

2. Forcez un redéploiement propre :
   - Supprimez et recréez le site sur Netlify
   - OU utilisez "Clear cache and deploy site"

3. Si l'erreur persiste :
   - Créez un nouveau site Netlify pour tester
   - Utilisez la configuration minimale

## 💡 Derniers recours

Si aucune solution ne fonctionne :

1. **Créez une branche de test** avec seulement :
   - Une page d'accueil simple
   - Pas de composants dynamiques
   - Configuration minimale

2. **Utilisez Vercel** temporairement pour vérifier que le code est correct

3. **Contactez le support Netlify** avec :
   - Les logs complets
   - Un lien vers votre repository
   - Les étapes de reproduction

## ✅ Validation finale

Une fois le site déployé avec succès :
1. Testez toutes les pages
2. Vérifiez la console pour les erreurs JavaScript
3. Testez les fonctionnalités interactives (carte, formulaires)
4. Validez que le sitemap est accessible