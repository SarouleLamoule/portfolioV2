import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV - Portfolio Tim',
  description:
    'Consultez mon CV détaillé avec mes expériences professionnelles, formations, compétences techniques et projets réalisés. Téléchargement PDF disponible.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'CV - Portfolio Tim',
    description:
      'Consultez mon CV détaillé avec mes expériences professionnelles et formations.',
    type: 'profile',
    firstName: 'Tim',
    lastName: 'Perrichot-Chaussat',
  },
  keywords: [
    'CV Tim',
    'curriculum vitae',
    'expérience professionnelle',
    'formation',
    'compétences techniques',
    'développeur full stack',
    'alternance',
    'projets',
    'téléchargement PDF',
  ],
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
