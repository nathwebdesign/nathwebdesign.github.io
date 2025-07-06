# Résolution de l'erreur "Origin returned error code" sur Netlify

## Problèmes identifiés et corrigés

### 1. **Redirection incorrecte dans netlify.toml**
- **Problème**: La configuration contenait une condition de rôle (`conditions = {Role = ["admin", "editor"]}`) incompatible avec un site statique
- **Solution**: Remplacé par une redirection 404 standard

### 2. **Configuration Next.js pour export statique**
- Le fichier `next.config.ts` est correctement configuré avec `output: 'export'`
- Les images sont configurées avec `unoptimized: true`

### 3. **Imports dynamiques pour les composants client**
- Les composants utilisant Leaflet et Google Maps sont correctement importés avec `dynamic()` et `ssr: false`
- Cela évite les erreurs "window is not defined" pendant le build

## Actions à effectuer

### 1. Nettoyer et reconstruire le projet
```bash
# Supprimer les anciens builds
rm -rf .next out node_modules/.cache

# Réinstaller les dépendances
npm install

# Reconstruire le site
npm run build

# Vérifier le build
node scripts/verify-build.js
```

### 2. Variables d'environnement dans Netlify
Dans les paramètres Netlify, ajoutez (optionnel):
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` : Votre clé API Google Maps

### 3. Configuration Netlify
Assurez-vous que dans Netlify:
- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Node version**: 20 (défini dans netlify.toml)

### 4. Redéployer
1. Commitez tous les changements
2. Poussez vers votre repository
3. Netlify déclenchera automatiquement un nouveau build

## Vérifications supplémentaires

### Si l'erreur persiste:

1. **Vérifiez les logs de build Netlify**
   - Cherchez des erreurs spécifiques pendant le build
   - Vérifiez que tous les fichiers sont correctement générés

2. **Testez localement l'export statique**
   ```bash
   npm run build
   npx serve out
   ```
   Visitez http://localhost:3000 pour vérifier que le site fonctionne

3. **Vérifiez les chemins d'API externes**
   - L'API d'adresse française (api-adresse.data.gouv.fr) est utilisée
   - Aucune API backend requise

4. **Headers et redirections**
   - Les headers de sécurité sont correctement configurés
   - La redirection 404 est maintenant standard

## Notes importantes

- Le site utilise Next.js 15 avec App Router
- Tous les composants interactifs sont marqués "use client"
- Les imports dynamiques sont utilisés pour Leaflet et Google Maps
- Le sitemap est configuré avec `dynamic = 'force-static'`

## Support

Si l'erreur persiste après ces corrections:
1. Vérifiez la section "Functions" dans Netlify (devrait être vide pour un site statique)
2. Consultez les logs détaillés du build
3. Assurez-vous qu'aucun middleware ou fonction API n'est présent dans le projet