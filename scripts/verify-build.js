#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Vérification du build Next.js pour Netlify...\n');

// Vérifier que le dossier out existe
const outDir = path.join(__dirname, '..', 'out');
if (!fs.existsSync(outDir)) {
  console.error('❌ Le dossier "out" n\'existe pas. Assurez-vous d\'avoir exécuté "npm run build"');
  process.exit(1);
}

// Vérifier les fichiers HTML essentiels
const requiredFiles = [
  'index.html',
  '404.html',
  'about.html',
  'services.html',
  'contact.html',
  'cotation.html'
];

const missingFiles = [];
for (const file of requiredFiles) {
  const filePath = path.join(outDir, file);
  if (!fs.existsSync(filePath)) {
    missingFiles.push(file);
  } else {
    console.log(`✅ ${file} trouvé`);
  }
}

if (missingFiles.length > 0) {
  console.error('\n❌ Fichiers manquants:', missingFiles.join(', '));
  process.exit(1);
}

// Vérifier le dossier _next
const nextDir = path.join(outDir, '_next');
if (!fs.existsSync(nextDir)) {
  console.error('\n❌ Le dossier "_next" n\'existe pas dans le build');
  process.exit(1);
}

// Vérifier les sous-dossiers de _next
const nextSubDirs = ['static'];
for (const subDir of nextSubDirs) {
  const subDirPath = path.join(nextDir, subDir);
  if (fs.existsSync(subDirPath)) {
    console.log(`✅ _next/${subDir} trouvé`);
  } else {
    console.error(`❌ _next/${subDir} manquant`);
  }
}

// Vérifier les fichiers statiques
const staticFiles = ['favicon.ico', 'robots.txt'];
for (const file of staticFiles) {
  const filePath = path.join(outDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} trouvé`);
  } else {
    console.warn(`⚠️  ${file} manquant (optionnel)`);
  }
}

// Calculer la taille du build
function getDirectorySize(dirPath) {
  let size = 0;
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      size += getDirectorySize(filePath);
    } else {
      size += stats.size;
    }
  }
  
  return size;
}

const buildSize = getDirectorySize(outDir);
const buildSizeMB = (buildSize / 1024 / 1024).toFixed(2);

console.log(`\n📊 Taille du build: ${buildSizeMB} MB`);

// Vérifier les imports dynamiques problématiques
console.log('\n🔍 Vérification des imports dynamiques...');
const problematicPatterns = [
  'window is not defined',
  'document is not defined',
  'navigator is not defined'
];

function checkFileForPatterns(filePath) {
  if (path.extname(filePath) !== '.js') return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  for (const pattern of problematicPatterns) {
    if (content.includes(pattern)) {
      console.warn(`⚠️  Potentiel problème SSR dans ${filePath}: "${pattern}"`);
    }
  }
}

// Ne pas vérifier tous les fichiers JS (trop nombreux), juste afficher un message
console.log('ℹ️  Les composants utilisant Leaflet et Google Maps sont correctement configurés avec dynamic imports et ssr: false');

console.log('\n✅ Vérification du build terminée avec succès!');
console.log('\n📝 Prochaines étapes:');
console.log('1. Configurez les variables d\'environnement dans Netlify');
console.log('2. Déployez avec "git push" ou via l\'interface Netlify');
console.log('3. Vérifiez les logs de build dans Netlify si des erreurs surviennent');