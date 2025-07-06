# Solution pour l'erreur "Origin returned error code" sur Netlify

## 🎯 Cause probable

Cette erreur spécifique sur Netlify est souvent causée par :
1. Des fonctions serverless détectées alors que le site est statique
2. Des redirections ou headers mal configurés
3. Des problèmes de build qui empêchent la génération complète du site

## 🚀 Solution rapide

### Étape 1 : Remplacer netlify.toml

Renommez votre `netlify.toml` actuel et créez-en un nouveau minimal :

```toml
[build]
  command = "npm run build"
  publish = "out"
```

### Étape 2 : Vérifier la présence de fonctions

Assurez-vous qu'il n'y a pas de dossier `functions` ou `api` dans votre projet :
```bash
ls -la | grep -E "functions|api"
```

### Étape 3 : Nettoyer et reconstruire

```bash
# Supprimer tous les caches
rm -rf .next out node_modules/.cache

# Reconstruire
npm run build

# Vérifier que le dossier out existe et contient index.html
ls -la out/index.html
```

### Étape 4 : Dans Netlify

1. **Allez dans Site settings > Build & deploy**
2. **Vérifiez que** :
   - Build command: `npm run build`
   - Publish directory: `out`
   - Functions directory: (laisser vide)

3. **Clear cache and deploy site**

## 🔍 Si l'erreur persiste

### Option A : Test avec un site minimal

1. Créez une branche `test-minimal` :
```bash
git checkout -b test-minimal
```

2. Simplifiez temporairement `app/page.tsx` :
```tsx
export default function Home() {
  return (
    <div>
      <h1>Test R DISTRIB</h1>
      <p>Site en construction</p>
    </div>
  );
}
```

3. Supprimez temporairement tous les autres pages sauf `page.tsx`

4. Déployez cette branche sur Netlify

### Option B : Vérifier les imports

Recherchez et corrigez :
- Imports de modules Node.js (`fs`, `path`, etc.)
- Utilisation de `process` sans vérification
- Références à des APIs backend

### Option C : Configuration alternative

Si vous utilisez des features avancées, essayez d'ajouter dans `next.config.ts` :
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  // Ajouter ces lignes
  experimental: {
    appDir: true,
  },
  // Désactiver la télémétrie
  telemetry: false,
};
```

## ✅ Validation

Une fois déployé avec succès :
1. Vérifiez que toutes les pages sont accessibles
2. Testez les fonctionnalités interactives
3. Vérifiez la console du navigateur pour les erreurs

## 📞 Support

Si le problème persiste après toutes ces étapes :
1. Contactez le support Netlify avec le message d'erreur exact
2. Fournissez le lien vers votre repository
3. Mentionnez que c'est un site Next.js 15 avec export statique