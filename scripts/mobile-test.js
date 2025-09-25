#!/usr/bin/env node

/**
 * Script de test de responsivité mobile pour Portfolio Tim
 * Teste la responsivité et les optimisations mobiles
 */

const fs = require('fs');
const path = require('path');

class MobileTester {
  constructor() {
    this.cssPath = path.join(process.cwd(), 'src/app/globals.css');
    this.results = {
      timestamp: new Date().toISOString(),
      tests: {},
      warnings: [],
      recommendations: [],
    };
  }

  // Tester les media queries
  testMediaQueries() {
    try {
      const cssContent = fs.readFileSync(this.cssPath, 'utf8');

      // Compter les media queries
      const mediaQueries = cssContent.match(/@media[^{]+{/g);
      const mediaQueryCount = mediaQueries ? mediaQueries.length : 0;

      // Vérifier les breakpoints essentiels
      const breakpoints = {
        mobile: cssContent.includes('max-width: 768px'),
        smallMobile: cssContent.includes('max-width: 480px'),
        touch: cssContent.includes('hover: none'),
        reducedMotion: cssContent.includes('prefers-reduced-motion'),
        highRes: cssContent.includes('min-device-pixel-ratio: 2'),
        landscape: cssContent.includes('orientation: landscape'),
      };

      this.results.tests.mediaQueries = {
        count: mediaQueryCount,
        breakpoints: breakpoints,
        coverage: Object.values(breakpoints).filter(Boolean).length,
      };

      // Vérifications
      if (!breakpoints.mobile) {
        this.results.warnings.push(
          'Missing mobile breakpoint (max-width: 768px)'
        );
      }
      if (!breakpoints.smallMobile) {
        this.results.warnings.push(
          'Missing small mobile breakpoint (max-width: 480px)'
        );
      }
      if (!breakpoints.touch) {
        this.results.warnings.push('Missing touch device optimization');
      }
      if (!breakpoints.reducedMotion) {
        this.results.warnings.push('Missing reduced motion support');
      }
    } catch (error) {
      this.results.warnings.push(
        `Error testing media queries: ${error.message}`
      );
    }
  }

  // Tester les optimisations de performance mobile
  testMobilePerformance() {
    try {
      const cssContent = fs.readFileSync(this.cssPath, 'utf8');

      // Vérifier les optimisations de performance
      const optimizations = {
        willChangeDisabled: cssContent.includes('will-change: auto'),
        animationsDisabled: cssContent.includes('animation: none'),
        particlesHidden:
          cssContent.includes('.btn-particles') &&
          cssContent.includes('display: none'),
        scanHidden:
          cssContent.includes('.btn-scan') &&
          cssContent.includes('display: none'),
        glowDisabled: cssContent.includes('box-shadow: none'),
        transformDisabled: cssContent.includes('transform: none'),
      };

      this.results.tests.mobilePerformance = {
        optimizations: optimizations,
        score: Object.values(optimizations).filter(Boolean).length,
      };

      // Vérifications
      if (!optimizations.willChangeDisabled) {
        this.results.warnings.push(
          'Missing will-change optimization for mobile'
        );
      }
      if (!optimizations.animationsDisabled) {
        this.results.warnings.push('Missing animation disabling for mobile');
      }
      if (!optimizations.particlesHidden) {
        this.results.warnings.push('Missing particle hiding for mobile');
      }
    } catch (error) {
      this.results.warnings.push(
        `Error testing mobile performance: ${error.message}`
      );
    }
  }

  // Tester la responsivité des composants
  testComponentResponsiveness() {
    try {
      const cssContent = fs.readFileSync(this.cssPath, 'utf8');

      // Vérifier la responsivité des composants
      const components = {
        buttons: cssContent.includes('.btn {') && cssContent.includes('@media'),
        navigation:
          cssContent.includes('.nav-link') && cssContent.includes('@media'),
        cards:
          cssContent.includes('.member-card-3d') &&
          cssContent.includes('@media'),
        documents:
          cssContent.includes('.classified-document') &&
          cssContent.includes('@media'),
        containers:
          cssContent.includes('.container') && cssContent.includes('@media'),
        images:
          cssContent.includes('.member-photo-container') &&
          cssContent.includes('@media'),
      };

      this.results.tests.componentResponsiveness = {
        components: components,
        responsiveCount: Object.values(components).filter(Boolean).length,
        totalComponents: Object.keys(components).length,
      };

      // Vérifications
      Object.entries(components).forEach(([component, isResponsive]) => {
        if (!isResponsive) {
          this.results.warnings.push(
            `Component ${component} is not responsive`
          );
        }
      });
    } catch (error) {
      this.results.warnings.push(
        `Error testing component responsiveness: ${error.message}`
      );
    }
  }

  // Tester l'accessibilité mobile
  testMobileAccessibility() {
    try {
      const cssContent = fs.readFileSync(this.cssPath, 'utf8');

      // Vérifier l'accessibilité mobile
      const accessibility = {
        touchTargets: cssContent.includes('min-height: 44px'),
        reducedMotion: cssContent.includes('prefers-reduced-motion'),
        highContrast: cssContent.includes('min-device-pixel-ratio'),
        landscapeSupport: cssContent.includes('orientation: landscape'),
        fontSize: cssContent.includes('font-size: var(--font-size-'),
      };

      this.results.tests.mobileAccessibility = {
        features: accessibility,
        score: Object.values(accessibility).filter(Boolean).length,
      };

      // Vérifications
      if (!accessibility.touchTargets) {
        this.results.warnings.push(
          'Missing touch target optimization (44px minimum)'
        );
      }
      if (!accessibility.reducedMotion) {
        this.results.warnings.push('Missing reduced motion support');
      }
    } catch (error) {
      this.results.warnings.push(
        `Error testing mobile accessibility: ${error.message}`
      );
    }
  }

  // Tester les optimisations d'images
  testImageOptimizations() {
    try {
      const cssContent = fs.readFileSync(this.cssPath, 'utf8');

      // Vérifier les optimisations d'images
      const imageOptimizations = {
        responsiveImages: cssContent.includes('max-width: 200px'),
        retinaSupport: cssContent.includes('image-rendering'),
        backgroundAttachment: cssContent.includes(
          'background-attachment: scroll'
        ),
        imageSizing: cssContent.includes('height: 150px'),
      };

      this.results.tests.imageOptimizations = {
        optimizations: imageOptimizations,
        score: Object.values(imageOptimizations).filter(Boolean).length,
      };
    } catch (error) {
      this.results.warnings.push(
        `Error testing image optimizations: ${error.message}`
      );
    }
  }

  // Générer des recommandations
  generateRecommendations() {
    const recommendations = [];

    // Recommandations basées sur les tests
    if (this.results.tests.mobilePerformance?.score < 4) {
      recommendations.push('Add more mobile performance optimizations');
    }

    if (this.results.tests.componentResponsiveness?.responsiveCount < 4) {
      recommendations.push('Make more components responsive');
    }

    if (this.results.tests.mobileAccessibility?.score < 3) {
      recommendations.push('Improve mobile accessibility features');
    }

    // Recommandations générales
    recommendations.push('Test on real mobile devices');
    recommendations.push('Use browser dev tools for mobile testing');
    recommendations.push('Consider implementing touch gestures');
    recommendations.push('Optimize for different screen densities');
    recommendations.push('Test with slow network connections');

    this.results.recommendations = recommendations;
  }

  // Exécuter tous les tests
  async runTests() {
    console.log('📱 Running mobile responsiveness tests...\n');

    this.testMediaQueries();
    this.testMobilePerformance();
    this.testComponentResponsiveness();
    this.testMobileAccessibility();
    this.testImageOptimizations();
    this.generateRecommendations();

    return this.results;
  }

  // Afficher les résultats
  displayResults() {
    console.log('📱 Mobile Responsiveness Test Results\n');
    console.log('='.repeat(50));

    // Tests
    console.log('\n📊 Test Results:');
    Object.entries(this.results.tests).forEach(([test, data]) => {
      console.log(`\n  ${test}:`);
      if (typeof data === 'object') {
        Object.entries(data).forEach(([key, value]) => {
          if (typeof value === 'object') {
            console.log(`    ${key}:`);
            Object.entries(value).forEach(([k, v]) => {
              console.log(`      ${k}: ${v}`);
            });
          } else {
            console.log(`    ${key}: ${value}`);
          }
        });
      } else {
        console.log(`    ${data}`);
      }
    });

    // Avertissements
    if (this.results.warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      this.results.warnings.forEach((warning) => {
        console.log(`  • ${warning}`);
      });
    }

    // Recommandations
    if (this.results.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      this.results.recommendations.forEach((rec) => {
        console.log(`  • ${rec}`);
      });
    }

    // Score global
    const score = this.calculateOverallScore();
    console.log(`\n🎯 Mobile Responsiveness Score: ${score}/100`);

    if (score >= 80) {
      console.log('✅ Mobile responsiveness is excellent!');
    } else if (score >= 60) {
      console.log('⚠️  Mobile responsiveness is good but could be improved.');
    } else {
      console.log('❌ Mobile responsiveness needs optimization.');
    }

    console.log('\n' + '='.repeat(50));
  }

  // Calculer le score global
  calculateOverallScore() {
    let score = 100;

    // Pénalités basées sur les tests
    if (this.results.tests.mobilePerformance?.score < 4) {
      score -= 20;
    }

    if (this.results.tests.componentResponsiveness?.responsiveCount < 4) {
      score -= 15;
    }

    if (this.results.tests.mobileAccessibility?.score < 3) {
      score -= 15;
    }

    if (this.results.tests.imageOptimizations?.score < 3) {
      score -= 10;
    }

    // Pénalités pour les avertissements
    score -= this.results.warnings.length * 5;

    return Math.max(0, Math.min(100, score));
  }

  // Sauvegarder les résultats
  saveResults() {
    const resultsPath = path.join(process.cwd(), 'mobile-test-results.json');
    fs.writeFileSync(resultsPath, JSON.stringify(this.results, null, 2));
    console.log(`\n💾 Results saved to: ${resultsPath}`);
  }
}

// Exécution du script
async function main() {
  const tester = new MobileTester();
  await tester.runTests();
  tester.displayResults();
  tester.saveResults();
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = MobileTester;
