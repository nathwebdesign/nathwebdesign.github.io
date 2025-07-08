#\!/bin/bash

echo "Building the site..."
npm run build

echo "Switching to gh-pages branch..."
git checkout gh-pages

echo "Copying build files..."
cp -r out/* .
cp out/.nojekyll .

echo "Committing changes..."
git add -A
git commit -m "Deploy updates to GitHub Pages"

echo "Pushing to GitHub..."
git push origin gh-pages

echo "Switching back to main branch..."
git checkout main

echo "Deployment complete\!"
EOF < /dev/null