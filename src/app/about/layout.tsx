import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos - Portfolio Tim',
  description:
    'Découvrez mon parcours, mes compétences et ma passion pour le développement. Développeur Full Stack spécialisé en cybersécurité et technologies modernes.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'À propos - Portfolio Tim',
    description:
      'Découvrez mon parcours, mes compétences et ma passion pour le développement.',
    type: 'profile',
    firstName: 'Tim',
    lastName: 'Perrichot-Chaussat',
  },
  keywords: [
    'Tim Perrichot-Chaussat',
    'développeur',
    'full stack',
    'cybersécurité',
    'JavaScript',
    'React',
    'Node.js',
    'portfolio',
    'à propos',
    'parcours',
    'compétences',
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
