#!/usr/bin/env node

/**
 * Script de test de performance pour Portfolio Tim
 * Mesure les performances des animations et des effets visuels
 */

const fs = require('fs');
const path = require('path');

// Configuration des tests
const PERFORMANCE_CONFIG = {
  // Seuils de performance
  thresholds: {
    bundleSize: 500, // KB
    cssSize: 50, // KB
    animationCount: 100,
    keyframesCount: 50,
  },

  // Fichiers à analyser
  files: {
    css: 'src/app/globals.css',
    build: '.next/static/css',
    bundle: '.next/static/chunks',
  },

  // Métriques à collecter
  metrics: {
    bundleSize: true,
    cssSize: true,
    animationCount: true,
    keyframesCount: true,
    performanceScore: true,
  },
};

class PerformanceTester {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      metrics: {},
      warnings: [],
      recommendations: [],
    };
  }

  // Analyser la taille du bundle
  analyzeBundleSize() {
    try {
      const buildDir = path.join(process.cwd(), '.next');
      if (!fs.existsSync(buildDir)) {
        this.results.warnings.push(
          'Build directory not found. Run npm run build first.'
        );
        return;
      }

      let totalSize = 0;
      let fileCount = 0;

      const analyzeDir = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach((file) => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);

          if (stat.isDirectory()) {
            analyzeDir(filePath);
          } else if (file.endsWith('.js') || file.endsWith('.css')) {
            totalSize += stat.size;
            fileCount++;
          }
        });
      };

      analyzeDir(buildDir);

      this.results.metrics.bundleSize = Math.round(totalSize / 1024); // KB
      this.results.metrics.bundleFiles = fileCount;

      if (
        this.results.metrics.bundleSize >
        PERFORMANCE_CONFIG.thresholds.bundleSize
      ) {
        this.results.warnings.push(
          `Bundle size (${this.results.metrics.bundleSize}KB) exceeds threshold (${PERFORMANCE_CONFIG.thresholds.bundleSize}KB)`
        );
      }
    } catch (error) {
      this.results.warnings.push(
        `Error analyzing bundle size: ${error.message}`
      );
    }
  }

  // Analyser la taille du CSS
  analyzeCSSSize() {
    try {
      const cssPath = path.join(process.cwd(), PERFORMANCE_CONFIG.files.css);
      if (!fs.existsSync(cssPath)) {
        this.results.warnings.push('CSS file not found.');
        return;
      }

      const cssContent = fs.readFileSync(cssPath, 'utf8');
      const cssSize = Buffer.byteLength(cssContent, 'utf8');

      this.results.metrics.cssSize = Math.round(cssSize / 1024); // KB

      if (
        this.results.metrics.cssSize > PERFORMANCE_CONFIG.thresholds.cssSize
      ) {
        this.results.warnings.push(
          `CSS size (${this.results.metrics.cssSize}KB) exceeds threshold (${PERFORMANCE_CONFIG.thresholds.cssSize}KB)`
        );
      }
    } catch (error) {
      this.results.warnings.push(`Error analyzing CSS size: ${error.message}`);
    }
  }

  // Compter les animations CSS
  analyzeAnimations() {
    try {
      const cssPath = path.join(process.cwd(), PERFORMANCE_CONFIG.files.css);
      if (!fs.existsSync(cssPath)) {
        this.results.warnings.push('CSS file not found.');
        return;
      }

      const cssContent = fs.readFileSync(cssPath, 'utf8');

      // Compter les @keyframes
      const keyframesMatches = cssContent.match(/@keyframes\s+\w+/g);
      const keyframesCount = keyframesMatches ? keyframesMatches.length : 0;

      // Compter les animations
      const animationMatches = cssContent.match(/animation:\s*[^;]+/g);
      const animationCount = animationMatches ? animationMatches.length : 0;

      // Compter les classes d'animation
      const animationClassMatches = cssContent.match(/\.\w+.*animation:/g);
      const animationClassCount = animationClassMatches
        ? animationClassMatches.length
        : 0;

      this.results.metrics.keyframesCount = keyframesCount;
      this.results.metrics.animationCount = animationCount;
      this.results.metrics.animationClassCount = animationClassCount;

      if (keyframesCount > PERFORMANCE_CONFIG.thresholds.keyframesCount) {
        this.results.warnings.push(
          `Too many keyframes (${keyframesCount}). Consider optimizing animations.`
        );
      }

      if (animationCount > PERFORMANCE_CONFIG.thresholds.animationCount) {
        this.results.warnings.push(
          `Too many animations (${animationCount}). Consider reducing complexity.`
        );
      }
    } catch (error) {
      this.results.warnings.push(
        `Error analyzing animations: ${error.message}`
      );
    }
  }

  // Analyser les performances des animations
  analyzeAnimationPerformance() {
    try {
      const cssPath = path.join(process.cwd(), PERFORMANCE_CONFIG.files.css);
      if (!fs.existsSync(cssPath)) {
        this.results.warnings.push('CSS file not found.');
        return;
      }

      const cssContent = fs.readFileSync(cssPath, 'utf8');

      // Vérifier l'utilisation de propriétés optimisées
      const optimizedProps = ['transform', 'opacity', 'filter'];
      const unoptimizedProps = [
        'width',
        'height',
        'top',
        'left',
        'margin',
        'padding',
      ];

      let optimizedCount = 0;
      let unoptimizedCount = 0;

      optimizedProps.forEach((prop) => {
        const matches = cssContent.match(new RegExp(prop + ':', 'g'));
        if (matches) optimizedCount += matches.length;
      });

      unoptimizedProps.forEach((prop) => {
        const matches = cssContent.match(new RegExp(prop + ':', 'g'));
        if (matches) unoptimizedCount += matches.length;
      });

      this.results.metrics.optimizedProps = optimizedCount;
      this.results.metrics.unoptimizedProps = unoptimizedCount;
      this.results.metrics.performanceScore = Math.round(
        (optimizedCount / (optimizedCount + unoptimizedCount)) * 100
      );

      if (this.results.metrics.performanceScore < 70) {
        this.results.warnings.push(
          `Low performance score (${this.results.metrics.performanceScore}%). Consider using more optimized CSS properties.`
        );
      }
    } catch (error) {
      this.results.warnings.push(
        `Error analyzing animation performance: ${error.message}`
      );
    }
  }

  // Générer des recommandations
  generateRecommendations() {
    const recommendations = [];

    // Recommandations basées sur les métriques
    if (this.results.metrics.bundleSize > 400) {
      recommendations.push('Consider code splitting for large bundles');
    }

    if (this.results.metrics.cssSize > 40) {
      recommendations.push('Consider CSS purging to reduce file size');
    }

    if (this.results.metrics.keyframesCount > 30) {
      recommendations.push('Consider consolidating similar animations');
    }

    if (this.results.metrics.performanceScore < 80) {
      recommendations.push(
        'Use transform and opacity for better animation performance'
      );
    }

    // Recommandations générales
    recommendations.push('Use will-change property for animated elements');
    recommendations.push(
      'Consider using CSS containment for complex animations'
    );
    recommendations.push('Implement lazy loading for non-critical animations');

    this.results.recommendations = recommendations;
  }

  // Exécuter tous les tests
  async runTests() {
    console.log('🔍 Running performance tests...\n');

    this.analyzeBundleSize();
    this.analyzeCSSSize();
    this.analyzeAnimations();
    this.analyzeAnimationPerformance();
    this.generateRecommendations();

    return this.results;
  }

  // Afficher les résultats
  displayResults() {
    console.log('📊 Performance Test Results\n');
    console.log('='.repeat(50));

    // Métriques
    console.log('\n📈 Metrics:');
    Object.entries(this.results.metrics).forEach(([key, value]) => {
      console.log(`  ${key}: ${value}`);
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
    console.log(`\n🎯 Overall Performance Score: ${score}/100`);

    if (score >= 80) {
      console.log('✅ Performance is excellent!');
    } else if (score >= 60) {
      console.log('⚠️  Performance is good but could be improved.');
    } else {
      console.log('❌ Performance needs optimization.');
    }

    console.log('\n' + '='.repeat(50));
  }

  // Calculer le score global
  calculateOverallScore() {
    let score = 100;

    // Pénalités basées sur les métriques
    if (
      this.results.metrics.bundleSize > PERFORMANCE_CONFIG.thresholds.bundleSize
    ) {
      score -= 20;
    }

    if (this.results.metrics.cssSize > PERFORMANCE_CONFIG.thresholds.cssSize) {
      score -= 15;
    }

    if (
      this.results.metrics.keyframesCount >
      PERFORMANCE_CONFIG.thresholds.keyframesCount
    ) {
      score -= 10;
    }

    if (this.results.metrics.performanceScore < 70) {
      score -= 25;
    }

    // Bonus pour les bonnes pratiques
    if (this.results.metrics.performanceScore >= 80) {
      score += 10;
    }

    return Math.max(0, Math.min(100, score));
  }

  // Sauvegarder les résultats
  saveResults() {
    const resultsPath = path.join(process.cwd(), 'performance-results.json');
    fs.writeFileSync(resultsPath, JSON.stringify(this.results, null, 2));
    console.log(`\n💾 Results saved to: ${resultsPath}`);
  }
}

// Exécution du script
async function main() {
  const tester = new PerformanceTester();
  await tester.runTests();
  tester.displayResults();
  tester.saveResults();
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = PerformanceTester;
