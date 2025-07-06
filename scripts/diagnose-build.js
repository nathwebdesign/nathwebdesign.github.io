#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Diagnostic du build Next.js pour Netlify\n');

// Vérifier la présence des fichiers critiques
const criticalFiles = [
  'next.config.ts',
  'package.json',
  'tsconfig.json',
  'netlify.toml'
];

console.log('📋 Vérification des fichiers critiques:');
criticalFiles.forEach(file => {
  const exists = fs.existsSync(path.join(process.cwd(), file));
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
});

// Vérifier le dossier out
const outDir = path.join(process.cwd(), 'out');
if (fs.existsSync(outDir)) {
  console.log('\n📁 Contenu du dossier out:');
  const files = fs.readdirSync(outDir);
  console.log(`  Nombre de fichiers: ${files.length}`);
  console.log(`  Fichiers HTML: ${files.filter(f => f.endsWith('.html')).join(', ')}`);
  
  // Vérifier 404.html
  const has404 = fs.existsSync(path.join(outDir, '404.html'));
  console.log(`  ${has404 ? '✅' : '❌'} 404.html présent`);
  
  // Vérifier index.html
  const hasIndex = fs.existsSync(path.join(outDir, 'index.html'));
  console.log(`  ${hasIndex ? '✅' : '❌'} index.html présent`);
} else {
  console.log('\n❌ Le dossier out n\'existe pas. Exécutez "npm run build" d\'abord.');
}

// Vérifier les variables d'environnement
console.log('\n🔐 Variables d\'environnement:');
const envVars = [
  'NEXT_PUBLIC_GOOGLE_MAPS_API_KEY'
];

envVars.forEach(envVar => {
  const hasVar = process.env[envVar] !== undefined;
  console.log(`  ${hasVar ? '✅' : '⚠️ '} ${envVar}: ${hasVar ? 'Définie' : 'Non définie (optionnel)'}`);
});

// Rechercher les imports problématiques
console.log('\n🔍 Recherche de problèmes potentiels:');

function searchInFiles(dir, pattern, filePattern = /\.(ts|tsx|js|jsx)$/) {
  let results = [];
  
  function search(currentDir) {
    if (currentDir.includes('node_modules') || currentDir.includes('.next')) return;
    
    const files = fs.readdirSync(currentDir);
    
    files.forEach(file => {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        search(filePath);
      } else if (filePattern.test(file)) {
        const content = fs.readFileSync(filePath, 'utf8');
        if (pattern.test(content)) {
          const lines = content.split('\n');
          lines.forEach((line, index) => {
            if (pattern.test(line)) {
              results.push({
                file: filePath.replace(process.cwd(), '.'),
                line: index + 1,
                content: line.trim()
              });
            }
          });
        }
      }
    });
  }
  
  search(dir);
  return results;
}

// Rechercher window/document sans protection
const windowRefs = searchInFiles(
  process.cwd(), 
  /(?<!typeof )window\.|document\.|navigator\./,
  /\.(ts|tsx)$/
);

if (windowRefs.length > 0) {
  console.log('  ⚠️  Références à window/document trouvées:');
  windowRefs.slice(0, 5).forEach(ref => {
    console.log(`    ${ref.file}:${ref.line}`);
  });
} else {
  console.log('  ✅ Aucune référence problématique à window/document');
}

// Vérifier les imports dynamiques
const dynamicImports = searchInFiles(
  process.cwd(),
  /dynamic\(/,
  /\.(ts|tsx)$/
);

if (dynamicImports.length > 0) {
  console.log(`  ℹ️  ${dynamicImports.length} imports dynamiques trouvés (OK pour les composants client)`);
}

// Vérifier la configuration Next.js
console.log('\n⚙️  Configuration Next.js:');
try {
  const nextConfig = fs.readFileSync(path.join(process.cwd(), 'next.config.ts'), 'utf8');
  const hasExport = nextConfig.includes("output: 'export'");
  const hasUnoptimized = nextConfig.includes('unoptimized: true');
  
  console.log(`  ${hasExport ? '✅' : '❌'} output: 'export' configuré`);
  console.log(`  ${hasUnoptimized ? '✅' : '❌'} images.unoptimized: true configuré`);
} catch (error) {
  console.log('  ❌ Impossible de lire next.config.ts');
}

// Recommandations
console.log('\n💡 Recommandations:');
console.log('  1. Exécutez "npm run build" pour générer le site statique');
console.log('  2. Testez localement avec "npx serve out"');
console.log('  3. Vérifiez que tous les fichiers HTML sont générés dans /out');
console.log('  4. Assurez-vous que netlify.toml pointe vers le dossier "out"');
console.log('  5. Supprimez tout cache Netlify et redéployez');

console.log('\n✅ Diagnostic terminé\n');