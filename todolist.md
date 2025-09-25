# 🚀 TODO - Transformation Portfolio Tim

## 📋 Vue d'ensemble

Transformation du site "Black Water" (thème militaire) en portfolio de développeur moderne pour Tim.

---

## 🎨 **1. TRANSFORMATION DU THÈME**

### 1.1 Branding et Identité

- [x] ✅ Remplacer "BLACK WATER" par "PORTFOLIO TIM"
- [x] ✅ Modifier le logo (actuellement `/logo.png`) -> mettre le texte TIM en styliser a la place
- [x] ✅ Changer le nom du projet dans `package.json` (actuellement "black-water")
- [x] ✅ Mettre à jour le titre dans `src/app/layout.tsx`

### 1.2 Couleurs et Design Tokens

- [x] ✅ **THÈME CHOISI** : **Cybersécurité/Terminal**
- [x] ✅ Modifier `src/styles/design-tokens.css`
  - [x] ✅ Remplacer le rouge militaire (`--color-accent-red`) par des couleurs cybersécurité
  - [x] ✅ **Palette cybersécurité** :
    - 🟢 **Vert terminal** : #00FF41 (vert matrix)
    - 🔵 **Bleu cybersécurité** : #00D4FF (bleu terminal)
    - ⚫ **Noir terminal** : #0A0A0A (fond sombre)
    - 🔴 **Rouge alerte** : #FF0040 (pour les erreurs/alertes)
    - 🟡 **Jaune warning** : #FFFF00 (pour les avertissements)

### 1.3 Effets Visuels

- [x] ✅ Adapter les animations dans `src/app/globals.css`
  - [x] ✅ Remplacer les effets militaires par des effets cybersécurité
  - [x] ✅ **Effets cybersécurité** :
    - [x] ✅ **Scanlines** : Lignes de scan horizontales vertes/bleues
    - [x] ✅ **Terminal typing** : Effet de frappe au clavier
    - [x] ✅ **Matrix rain** : Code qui tombe (vert)
    - [x] ✅ **Glitch effects** : Effets de glitch sur les textes
    - [x] ✅ **Terminal cursor** : Curseur clignotant
    - [x] ✅ **Data streams** : Flux de données qui défilent
    - [x] ✅ **Security grid** : Grille de sécurité en arrière-plan

---

## 🧭 **2. NAVIGATION ET STRUCTURE**

### 2.1 Header et Navigation

- [x] ✅ Modifier `src/components/Header.tsx`
  - [x] ✅ **Navigation à 5 pages** :
    - [x] ✅ "Accueil" (lien vers `/`)
    - [x] ✅ "À propos" (lien vers `/about`)
    - [x] ✅ "Formation" (lien vers `/formation`)
    - [x] ✅ "Projets" (lien vers `/projects`)
    - [x] ✅ "CV" (lien vers `/cv`)
  - [x] ✅ Adapter les effets de navigation cybersécurité

### 2.2 Pages et Routes

- [x] ✅ **Structure des 5 pages** :
  - [x] ✅ `/` - Page d'accueil (à modifier)
  - [x] ✅ `/about` - À propos (déjà adapté)
  - [x] ✅ `/formation` - Formation (créée)
  - [x] ✅ `/projects` - Projets (transformée depuis `/members`)
  - [x] ✅ `/cv` - CV (créée)

---

## 📄 **3. CONTENU ET PAGES**

### 3.1 Page d'Accueil (`src/app/page.tsx`)

- [x] ✅ Modifier la section hero
  - [x] ✅ Remplacer "Organisation clandestine opérant dans les ombres de Los Santos"
  - [x] ✅ Par : "Développeur Full Stack passionné par l'innovation et la cybersécurité"
- [x] ✅ Adapter les boutons d'action
  - [x] ✅ "Qui sommes Nous" → "À propos"
  - [x] ✅ "Nos Opérateurs" → "Mes Projets"

### 3.2 Page About (`src/app/about/page.tsx`)

- [x] ✅ **DÉJÀ ADAPTÉE** - Contenu portfolio existant dans `content/about.md`
- [x] ✅ Créer la page Next.js correspondante
- [x] ✅ Améliorer le design du titre avec effets cybersécurité

### 3.3 Page Formation (`src/app/formation/page.tsx`)

- [x] ✅ **CONTENU EXISTANT** - Parcours académique dans `content/formation.md`
- [x] ✅ Créer la page Next.js `/formation`
- [x] ✅ Adapter le contenu avec le thème cybersécurité

### 3.4 Page Projets (`src/app/projects/page.tsx`)

- [x] ✅ **CONTENU EXISTANT** - Projets dans `content/project.md`
- [x] ✅ Transformer `/members` en `/projects`
- [ ] Adapter le contenu avec le thème cybersécurité

### 3.5 Page CV (`src/app/cv/page.tsx`)

- [x] ✅ **NOUVELLE PAGE** - Créer la page CV
- [ ] Intégrer un CV interactif avec le thème cybersécurité
- [ ] Ajouter un bouton de téléchargement PDF
- [ ] Inclure les compétences techniques, expériences, formations

### 3.6 Transformation Members → Projects

- [ ] Modifier `src/app/members/` → `src/app/projects/`
- [ ] **Supprimer** `data/members.json` (pas de fichier JSON)
- [ ] Intégrer les données des projets directement dans les composants Next.js
- [ ] **Référence** : `content/project.md` (pour savoir quoi mettre, puis supprimer)
- [ ] Créer des composants avec les données hardcodées directement dans les `page.tsx`

---

## 📝 **APPROCHE SANS JSON**

### Données des Projets

- [ ] **Pas de fichier JSON** - Contenu écrit directement dans les composants Next.js
- [ ] **Source de référence** : `content/project.md` (pour savoir quoi mettre, puis supprimer)
- [ ] **Intégration** : Données hardcodées directement dans les `page.tsx`
- [ ] **Avantages** : Plus simple, pas de parsing, contenu intégré dans les composants

### Suppression des fichiers markdown

- [ ] **Après création des pages** : Supprimer les fichiers `content/` (ils ne servent que de référence)
- [ ] **Fichiers à supprimer** :
  - [ ] `content/about.md` (après création de `/about`)
  - [ ] `content/formation.md` (après création de `/formation`)
  - [ ] `content/project.md` (après création de `/projects`)
  - [ ] `content/accueil.md` (après création de `/`)

---

## 🎯 **4. COMPOSANTS À ADAPTER**

### 4.1 Composants Principaux

- [x] ✅ `src/components/OperatorCard.tsx` → `ProjectCard.tsx`
- [x] ✅ `src/components/OperatorModal.tsx` → `ProjectModal.tsx`
- [x] ✅ `src/components/MemberImage.tsx` → `ProjectImage.tsx`
- [x] ✅ `src/components/ClassifiedDocument.tsx` → `ProjectDocument.tsx`
- [x] ✅ **Approche sans JSON** : Données directement hardcodées dans les composants Next.js

### 4.2 Composants Visuels

- [x] ✅ Adapter `src/components/VisualElements.tsx`

---

## 🎨 **5. STYLES ET ANIMATIONS**

### 5.1 Design Tokens (`src/styles/design-tokens.css`)

- [ ] Définir la nouvelle palette de couleurs
- [ ] Adapter les variables CSS
- [ ] Modifier les ombres et effets

### 5.2 Animations (`src/app/globals.css`)

- [ ] Remplacer les références militaires dans les animations
- [ ] Adapter les effets de particules
- [ ] Modifier les effets de scan et glow

### 5.3 Responsive Design

- [ ] Vérifier l'adaptabilité mobile
- [ ] Optimiser les performances sur mobile
- [ ] Tester sur différents écrans

---

## 📱 **6. OPTIMISATIONS**

### 6.1 Performance

- [ ] Vérifier les scripts d'optimisation dans `/scripts/`
- [ ] Tester les performances avec `npm run test:perf`
- [ ] Optimiser les images dans `/public/`

### 6.2 SEO et Accessibilité

- [ ] Mettre à jour `src/app/robots.ts`
- [ ] Modifier `src/app/sitemap.ts`
- [ ] Vérifier l'accessibilité des composants

---

## 🧪 **7. TESTS ET VALIDATION**

### 7.1 Tests Fonctionnels

- [ ] Tester toutes les pages
- [ ] Vérifier la navigation
- [ ] Tester les animations et effets

### 7.2 Tests Visuels

- [ ] Vérifier sur desktop
- [ ] Tester sur mobile
- [ ] Valider les couleurs et contrastes

### 7.3 Tests de Performance

- [ ] `npm run build`
- [ ] `npm run test:perf`
- [ ] Vérifier les Core Web Vitals

---

## 🚀 **8. DÉPLOIEMENT**

### 8.1 Préparation

- [ ] Mettre à jour le README.md
- [ ] Vérifier la configuration de déploiement
- [ ] Tester en local avec `npm run dev`

### 8.2 Déploiement

- [ ] Build de production : `npm run build`
- [ ] Déploiement sur Vercel/Netlify
- [ ] Vérification en production

---

## 📝 **9. CONTENU À PERSONNALISER**

### 9.1 Informations Personnelles

- [ ] Vérifier et mettre à jour les informations dans `content/about.md`
- [ ] Ajouter une photo de profil
- [ ] Mettre à jour les liens sociaux

### 9.2 Projets

- [ ] Ajouter des captures d'écran des projets
- [ ] Mettre à jour les descriptions
- [ ] Ajouter des liens vers les projets en ligne

### 9.3 Contact

- [ ] Ajouter une section contact
- [ ] Intégrer un formulaire de contact
- [ ] Ajouter les liens vers GitHub, LinkedIn, etc.

---

## 🎯 **PRIORITÉS**

### 🔥 **URGENT (Phase 1)**

1. Changer le branding (nom, logo, couleurs)
2. Modifier la navigation (5 pages)
3. Transformer la page d'accueil
4. Créer les 5 pages de base

### ⚡ **IMPORTANT (Phase 2)**

5. Adapter les composants
6. Transformer Members → Projects
7. Créer la page CV
8. Mettre à jour les styles cybersécurité

### 📋 **SECONDAIRE (Phase 3)**

9. Optimisations
10. Tests
11. Déploiement

---

## 💡 **THÈME CHOISI**

### 🟢 **Cybersécurité/Terminal** ✅

- **Couleurs** :
  - Vert terminal (#00FF41) - Texte principal
  - Bleu cybersécurité (#00D4FF) - Accents
  - Noir terminal (#0A0A0A) - Fond
  - Rouge alerte (#FF0040) - Erreurs/alertes
  - Jaune warning (#FFFF00) - Avertissements

- **Effets** :
  - Scanlines horizontales
  - Terminal typing effect
  - Matrix rain (code qui tombe)
  - Glitch effects sur les textes
  - Curseur clignotant
  - Data streams
  - Security grid

- **Style** : Terminal de cybersécurité, professionnel, tech, futuriste

---

## 📞 **CONTACT**

Pour toute question ou modification, n'hésite pas à demander !

**Prochaines étapes suggérées :**

1. ✅ Thème cybersécurité choisi
2. Commencer par la transformation du branding
3. Modifier la navigation (5 pages)
4. Créer les 5 pages de base
5. Adapter les styles cybersécurité

---

_Dernière mise à jour : $(date)_
