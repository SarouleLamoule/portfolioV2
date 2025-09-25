#!/usr/bin/env node

/**
 * Script d'optimisation des performances pour Black Water
 * Optimise les animations et les effets visuels pour de meilleures performances
 */

const fs = require('fs');
const path = require('path');

class PerformanceOptimizer {
  constructor() {
    this.cssPath = path.join(process.cwd(), 'src/app/globals.css');
    this.optimizations = [];
  }

  // Optimiser les animations CSS
  optimizeAnimations() {
    try {
      let cssContent = fs.readFileSync(this.cssPath, 'utf8');
      let optimized = false;

      // Optimiser les transitions
      if (cssContent.includes('transition: all')) {
        cssContent = cssContent.replace(
          /transition:\s*all\s+([^;]+);/g,
          'transition: transform $1, opacity $1, box-shadow $1;'
        );
        optimized = true;
        this.optimizations.push(
          'Optimized transitions to use specific properties'
        );
      }

      // Ajouter will-change pour les éléments animés
      const animatedSelectors = [
        '.btn',
        '.classified-document',
        '.nav-link',
        '.member-card-3d',
        '.member-photo-container',
        '.investigation-container',
      ];

      animatedSelectors.forEach((selector) => {
        if (
          cssContent.includes(selector) &&
          !cssContent.includes(`${selector} {`)
        ) {
          const regex = new RegExp(
            `(${selector}\\s*{[^}]*)(transition:[^;]+;)`,
            'g'
          );
          cssContent = cssContent.replace(
            regex,
            (match, before, transition) => {
              if (!before.includes('will-change')) {
                return (
                  before +
                  'will-change: transform, opacity, box-shadow;\n  ' +
                  transition
                );
              }
              return match;
            }
          );
          optimized = true;
        }
      });

      if (optimized) {
        fs.writeFileSync(this.cssPath, cssContent);
        this.optimizations.push(
          'Added will-change properties to animated elements'
        );
      }
    } catch (error) {
      console.error('Error optimizing animations:', error.message);
    }
  }

  // Optimiser les keyframes
  optimizeKeyframes() {
    try {
      let cssContent = fs.readFileSync(this.cssPath, 'utf8');
      let optimized = false;

      // Remplacer les propriétés non optimisées par des propriétés optimisées
      const optimizations = [
        // Remplacer width/height par transform: scale
        {
          from: /width:\s*(\d+px);\s*height:\s*(\d+px);/g,
          to: 'transform: scale($1, $2);',
        },
        // Remplacer top/left par transform: translate
        {
          from: /top:\s*(\d+px);\s*left:\s*(\d+px);/g,
          to: 'transform: translate($2, $1);',
        },
      ];

      optimizations.forEach((opt) => {
        if (cssContent.match(opt.from)) {
          cssContent = cssContent.replace(opt.from, opt.to);
          optimized = true;
        }
      });

      if (optimized) {
        fs.writeFileSync(this.cssPath, cssContent);
        this.optimizations.push(
          'Optimized keyframes to use transform properties'
        );
      }
    } catch (error) {
      console.error('Error optimizing keyframes:', error.message);
    }
  }

  // Ajouter des optimisations de performance
  addPerformanceOptimizations() {
    try {
      let cssContent = fs.readFileSync(this.cssPath, 'utf8');
      let optimized = false;

      // Ajouter des optimisations globales si elles n'existent pas
      const performanceOptimizations = `
/* Optimisations de performance globales */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

/* Optimisations pour les animations */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Optimisations pour les appareils à faible puissance */
@media (max-width: 768px) {
  .btn,
  .classified-document,
  .nav-link {
    will-change: auto;
  }
  
  .btn:hover,
  .classified-document:hover,
  .nav-link:hover {
    animation: none;
  }
}
`;

      if (!cssContent.includes('Optimisations de performance globales')) {
        cssContent = performanceOptimizations + cssContent;
        fs.writeFileSync(this.cssPath, cssContent);
        optimized = true;
        this.optimizations.push('Added global performance optimizations');
      }
    } catch (error) {
      console.error('Error adding performance optimizations:', error.message);
    }
  }

  // Optimiser les images
  optimizeImages() {
    try {
      const publicDir = path.join(process.cwd(), 'public');
      if (!fs.existsSync(publicDir)) return;

      const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg'];
      let optimized = false;

      const optimizeDir = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach((file) => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);

          if (stat.isDirectory()) {
            optimizeDir(filePath);
          } else {
            const ext = path.extname(file).toLowerCase();
            if (imageExtensions.includes(ext)) {
              // Vérifier si l'image est trop grande
              if (stat.size > 500000) {
                // 500KB
                console.log(
                  `⚠️  Large image detected: ${filePath} (${Math.round(stat.size / 1024)}KB)`
                );
                optimized = true;
              }
            }
          }
        });
      };

      optimizeDir(publicDir);

      if (optimized) {
        this.optimizations.push(
          'Detected large images that could be optimized'
        );
      }
    } catch (error) {
      console.error('Error optimizing images:', error.message);
    }
  }

  // Exécuter toutes les optimisations
  async runOptimizations() {
    console.log('🚀 Running performance optimizations...\n');

    this.optimizeAnimations();
    this.optimizeKeyframes();
    this.addPerformanceOptimizations();
    this.optimizeImages();

    return this.optimizations;
  }

  // Afficher les résultats
  displayResults() {
    console.log('✅ Performance Optimizations Complete\n');
    console.log('='.repeat(50));

    if (this.optimizations.length > 0) {
      console.log('\n🔧 Optimizations Applied:');
      this.optimizations.forEach((opt) => {
        console.log(`  • ${opt}`);
      });
    } else {
      console.log('\n✨ No optimizations needed - code is already optimized!');
    }

    console.log('\n💡 Additional Recommendations:');
    console.log('  • Use WebP format for images when possible');
    console.log('  • Implement lazy loading for images');
    console.log(
      '  • Consider using CSS Grid instead of Flexbox for complex layouts'
    );
    console.log('  • Use CSS custom properties for better maintainability');
    console.log('  • Implement service workers for caching');

    console.log('\n' + '='.repeat(50));
  }
}

// Exécution du script
async function main() {
  const optimizer = new PerformanceOptimizer();
  await optimizer.runOptimizations();
  optimizer.displayResults();
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = PerformanceOptimizer;
