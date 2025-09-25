// Export des composants de base (toujours chargés)
export { default as Header } from './Header';
export { default as Footer } from './Footer';
export { default as Button } from './Button';
export { default as Link } from './Link';
export { default as MouseEffect } from './MouseEffect';

// Export des composants d'images optimisés
export { default as ProjectImage } from './ProjectImage';

// Export des animations (légères)
export { FadeIn, StaggeredFadeIn } from './Animations';
export { default as TypewriterEffect } from './TypewriterEffect';

// Export des éléments visuels (légers)
export {
  ProjectBadge,
  ProjectStamp,
  ProjectWatermark,
  ScanlineEffect,
  GlitchText,
  NoiseOverlay,
} from './VisualElements';

// Export des composants lourds (lazy loading)
export { default as ProjectCard } from './ProjectCard';
export { default as ProjectModal } from './ProjectModal';
export { default as ProjectDocument } from './ProjectDocument';
