#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');

const svgBuffer = fs.readFileSync('apple-touch-icon.svg');

const sizes = [
    { size: 180, name: 'apple-touch-icon-180.png' },
    { size: 192, name: 'apple-touch-icon-192.png' },
    { size: 512, name: 'apple-touch-icon-512.png' }
];

async function generateIcons() {
    console.log('🎵 Génération des icônes PNG pour iOS/Android...\n');

    for (const { size, name } of sizes) {
        try {
            await sharp(svgBuffer)
                .resize(size, size)
                .png()
                .toFile(name);
            console.log(`✅ ${name} (${size}x${size}px) - Créé avec succès`);
        } catch (error) {
            console.error(`❌ Erreur pour ${name}:`, error.message);
        }
    }

    console.log('\n🎉 Toutes les icônes ont été générées !');
}

generateIcons().catch(console.error);
