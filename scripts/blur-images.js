#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const SOURCE_DIR = path.join(__dirname, '..', 'assets', 'members-src');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'members');

// Couleurs pour la console
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function createWatermark(width, height) {
  // Créer un watermark "CLASSIFIED" avec Sharp
  const watermarkSvg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="watermark" patternUnits="userSpaceOnUse" width="200" height="100">
          <text x="100" y="50" 
                font-family="Arial, sans-serif" 
                font-size="16" 
                font-weight="bold" 
                fill="rgba(180, 35, 45, 0.3)" 
                text-anchor="middle" 
                transform="rotate(-45 100 50)">
            CLASSIFIED
          </text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#watermark)" />
    </svg>
  `;

  return Buffer.from(watermarkSvg);
}

async function processImage(inputPath, outputPath) {
  try {
    const fileName = path.basename(inputPath, path.extname(inputPath));
    const outputFileName = `${fileName}_blur.webp`;
    const fullOutputPath = path.join(OUTPUT_DIR, outputFileName);

    log(`🖼️  Traitement: ${path.basename(inputPath)}`, 'blue');

    // Lire l'image source
    const imageBuffer = fs.readFileSync(inputPath);
    const image = sharp(imageBuffer);
    const metadata = await image.metadata();

    // Appliquer le flou gaussian (sigma 12-16)
    const blurredImage = await image
      .blur(14) // Sigma de 14 pour un flou moyen
      .resize(400, 400, {
        fit: 'cover',
        position: 'center',
      })
      .webp({ quality: 80 })
      .toBuffer();

    // Créer le watermark
    const watermarkBuffer = await createWatermark(400, 400);

    // Superposer le watermark
    const finalImage = await sharp(blurredImage)
      .composite([
        {
          input: watermarkBuffer,
          blend: 'overlay',
        },
      ])
      .webp({ quality: 80 })
      .toBuffer();

    // Sauvegarder l'image finale
    fs.writeFileSync(fullOutputPath, finalImage);

    log(`✅ Généré: ${outputFileName}`, 'green');
    return outputFileName;
  } catch (error) {
    log(
      `❌ Erreur lors du traitement de ${inputPath}: ${error.message}`,
      'red'
    );
    return null;
  }
}

async function main() {
  log('🖼️  Traitement des images Black Water', 'cyan');
  log('='.repeat(50), 'cyan');

  // Vérifier que les dossiers existent
  if (!fs.existsSync(SOURCE_DIR)) {
    log(`❌ Dossier source non trouvé: ${SOURCE_DIR}`, 'red');
    process.exit(1);
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    log(`📁 Dossier de sortie créé: ${OUTPUT_DIR}`, 'yellow');
  }

  // Lister les fichiers images dans le dossier source
  const files = fs.readdirSync(SOURCE_DIR).filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  });

  if (files.length === 0) {
    log('⚠️  Aucune image trouvée dans le dossier source', 'yellow');
    log(`   Placez vos images dans: ${SOURCE_DIR}`, 'yellow');
    process.exit(0);
  }

  log(`📸 ${files.length} image(s) trouvée(s)`, 'blue');

  const processedFiles = [];

  for (const file of files) {
    const inputPath = path.join(SOURCE_DIR, file);
    const outputFileName = await processImage(inputPath, OUTPUT_DIR);
    if (outputFileName) {
      processedFiles.push(outputFileName);
    }
  }

  log('='.repeat(50), 'cyan');

  if (processedFiles.length > 0) {
    log(
      `🎉 ${processedFiles.length} image(s) traitée(s) avec succès !`,
      'green'
    );
    log('📁 Images floutées disponibles dans:', 'blue');
    log(`   ${OUTPUT_DIR}`, 'blue');
  } else {
    log("💥 Aucune image n'a pu être traitée", 'red');
    process.exit(1);
  }
}

// Exécuter si appelé directement
if (require.main === module) {
  main().catch((error) => {
    log(`💥 Erreur fatale: ${error.message}`, 'red');
    process.exit(1);
  });
}

module.exports = { processImage, main };
