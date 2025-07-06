# Guide de déploiement RDistrib Website sur Netlify

## 📋 Checklist pré-déploiement

- [ ] Node.js 20+ installé
- [ ] Clé API Google Maps obtenue
- [ ] Compte Netlify créé
- [ ] Repository Git initialisé (optionnel pour méthode Git)

## 🚀 Déploiement en 5 minutes

### Option A : Via Git (Recommandé pour les mises à jour automatiques)

1. **Créez un fichier `.env.local`** avec votre clé API :
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=votre_clé_ici
   ```

2. **Testez le build localement** :
   ```bash
   ./check-build.sh
   ```

3. **Poussez sur Git** et **connectez à Netlify**

### Option B : Netlify Drop (Pour un déploiement rapide)

1. **Buildez le projet** :
   ```bash
   npm install
   npm run build
   ```

2. **Glissez le dossier `out`** sur [app.netlify.com/drop](https://app.netlify.com/drop)

## 🔧 Configuration Netlify

### Variables d'environnement à ajouter dans Netlify :

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = votre_clé_api_google_maps
```

### Structure des fichiers importants :

```
rdistrib-website/
├── netlify.toml          # Configuration Netlify
├── .env.example          # Variables d'environnement exemple
├── .env.local           # Vos variables (non commité)
├── .gitignore           # Fichiers ignorés par Git
├── next.config.ts       # Config Next.js (export statique)
├── check-build.sh       # Script de vérification
└── out/                 # Dossier de build (après npm run build)
```

## 🎯 URLs importantes

- **Site de production** : https://[votre-site].netlify.app
- **Panel Netlify** : https://app.netlify.com
- **Console Google Cloud** : https://console.cloud.google.com

## ⚡ Performance

Le site est optimisé pour :
- Chargement < 2 secondes
- Score Lighthouse > 90
- SEO optimisé avec sitemap automatique
- Images optimisées et lazy-loaded

## 🆘 Besoin d'aide ?

1. Vérifiez les logs dans le panel Netlify
2. Consultez `DEPLOY_INSTRUCTIONS.md` pour plus de détails
3. Testez avec `./check-build.sh` en local

---

💡 **Tip** : Après le premier déploiement, configurez votre domaine personnalisé dans les paramètres Netlify pour utiliser rdistrib-solutions.fr