# 🚀 Portfolio Tim - Développeur Full Stack

> **Portfolio personnel moderne avec thème cybersécurité**  
> Développé avec Next.js 14, TypeScript et CSS moderne

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://portfolio-tim-perrichot-chaussat.vercel.app/)

## 🌟 Aperçu

Portfolio personnel développé avec une esthétique cybersécurité moderne. Le site présente mes projets, compétences et parcours professionnel avec des animations fluides et un design responsive.

### ✨ Fonctionnalités

- 🎨 **Design Cybersécurité** : Thème sombre avec effets visuels avancés
- 📱 **Responsive** : Optimisé pour tous les appareils
- ⚡ **Performance** : Next.js 14 avec optimisations
- 🎭 **Animations** : Effets de glitch, scanlines, et transitions fluides
- 🔍 **SEO** : Métadonnées optimisées et sitemap
- ♿ **Accessibilité** : Navigation au clavier et lecteurs d'écran

## 🛠️ Technologies

### Frontend

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **CSS Modules** - Styles modulaires
- **Design Tokens** - Système de design cohérent

### Outils & Déploiement

- **Vercel** - Déploiement et hosting
- **ESLint** - Linting du code
- **Prettier** - Formatage du code
- **Git** - Contrôle de version

## 📁 Structure du Projet

```
portfolioV2/
├── src/
│   ├── app/                 # Pages Next.js (App Router)
│   │   ├── about/          # Page À propos
│   │   ├── cv/             # Page CV
│   │   ├── formation/      # Page Formation
│   │   ├── projects/       # Page Projets
│   │   └── layout.tsx      # Layout principal
│   ├── components/         # Composants réutilisables
│   │   ├── Header.tsx      # Navigation
│   │   ├── Footer.tsx     # Pied de page
│   │   ├── ProjectCard.tsx # Cartes de projets
│   │   └── Animations.tsx # Animations
│   ├── styles/            # Styles globaux
│   │   └── design-tokens.css # Tokens de design
│   └── contexts/          # Contextes React
├── public/                # Assets statiques
│   ├── projects/          # Images de projets
│   └── CV_TIM_PERRICHOT-CHAUSSAT.pdf
└── scripts/              # Scripts utilitaires
```

## 🚀 Installation & Développement

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/SarouleLamoule/portfolioV2.git
cd portfolioV2

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Scripts Disponibles

```bash
# Développement
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linting ESLint
npm run lint:fix     # Correction automatique

# Tests & Performance
npm run test:perf    # Test de performance
npm run mobile-test  # Test mobile
```

## 📱 Pages & Fonctionnalités

### 🏠 Accueil

- Hero section avec effet typewriter
- Présentation interactive
- Navigation vers les sections

### 👨‍💻 À Propos

- Parcours professionnel
- Compétences techniques
- Effets visuels (glitch, scanlines)

### 🎓 Formation

- Diplômes et certifications
- Projets académiques
- Animations Matrix

### 💼 Projets

- **Projets Professionnels** : Expériences en entreprise
- **Projets Académiques** : Formations et apprentissages
- **Projets Personnels** : Créations personnelles avec modales interactives

### 📄 CV

- Téléchargement du CV PDF
- Aperçu des compétences
- Liens de contact

## 🎨 Design System

### Couleurs

- **Primaire** : `#00ff41` (Vert terminal)
- **Secondaire** : `#00d4ff` (Bleu cybersécurité)
- **Arrière-plan** : `#0a0a0a` (Noir terminal)
- **Texte** : `#ffffff` (Blanc)

### Typographie

- **Primaire** : Inter (Interface)
- **Mono** : Space Grotesk (Code)
- **Display** : Space Grotesk (Titres)

## 🔧 Configuration

### Variables d'Environnement

```env
# Optionnel - Configuration Vercel
NEXT_PUBLIC_VERCEL_URL=your-domain.com
```

### Design Tokens

Le projet utilise un système de design tokens centralisé dans `src/styles/design-tokens.css` :

- Couleurs cohérentes
- Espacements standardisés
- Typographie harmonieuse
- Animations fluides

## 📊 Performance

- **Lighthouse Score** : 80/100
- **Core Web Vitals** : Optimisés
- **Bundle Size** : Optimisé avec Next.js
- **Images** : Optimisées avec Next.js Image

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# Déploiement automatique
git push origin main
```

### Build Manuel

```bash
npm run build
npm run start
```

## 📈 Optimisations

- **Code Splitting** : Chargement à la demande
- **Image Optimization** : Next.js Image component
- **CSS Optimization** : Minification automatique
- **Bundle Analysis** : Analyse de la taille

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

**Tim Perrichot-Chaussat**

- 📧 Email : chaussat.tim@gmail.com
- 💼 LinkedIn : [Tim Perrichot-Chaussat](https://www.linkedin.com/in/tim-p-6824831a1/)
- 🐙 GitHub : [SarouleLamoule](https://github.com/SarouleLamoule)
- 🌐 Portfolio : [portfolio-tim-perrichot-chaussat.vercel.app](https://portfolio-tim-perrichot-chaussat.vercel.app/)

---

<div align="center">
  <p>Développé avec ❤️ par Tim Perrichot-Chaussat</p>
  <p>© 2025 - Tous droits réservés</p>
</div>
