#!/bin/bash

# Script pour appliquer le style liquid glass à tous les fichiers HTML

for file in exercice.html rythme.html niveaux.html progression.html reglages.html; do
    echo "🎨 Transformation de $file en liquid glass..."

    # Modifier le background du body pour ajouter l'animation liquid
    sed -i '/body {/,/}/ {
        s|background: linear-gradient([^;]*);|/* Liquid glass background */|
    }' "$file"

    # Ajouter le style liquid-bg au body (après les propriétés existantes)
    sed -i '/body {/a\            /* Style ajouté par liquid glass */' "$file"

    # Transformer les backgrounds blancs en glass
    sed -i 's|background: white;|background: rgba(255, 255, 255, 0.15);\n            backdrop-filter: blur(10px) saturate(180%);\n            -webkit-backdrop-filter: blur(10px) saturate(180%);|g' "$file"

    # Transformer les backgrounds rgba avec forte opacité en glass
    sed -i 's|background: rgba(255, 255, 255, 0\.9[0-9]*);|background: rgba(255, 255, 255, 0.15);\n            backdrop-filter: blur(10px) saturate(180%);\n            -webkit-backdrop-filter: blur(10px) saturate(180%);|g' "$file"

    # Ajouter des bordures glass
    sed -i 's|border: 2px solid var(--pastel-[^)]*);|border: 1px solid rgba(255, 255, 255, 0.18);|g' "$file"

    echo "✅ $file transformé"
done

echo "🎉 Toutes les pages ont été transformées en liquid glass!"
