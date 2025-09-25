import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formation - Portfolio Tim',
  description:
    "Découvrez mon parcours académique, mes certifications et mes compétences techniques. Formation en architecture des systèmes d'information et certifications cybersécurité.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Formation - Portfolio Tim',
    description:
      'Découvrez mon parcours académique, mes certifications et mes compétences techniques.',
    type: 'profile',
    firstName: 'Tim',
    lastName: 'Perrichot-Chaussat',
  },
  keywords: [
    'formation Tim',
    'parcours académique',
    'certifications',
    'compétences techniques',
    "architecture systèmes d'information",
    'cybersécurité',
    'développement',
    'alternance',
    'études',
    'diplômes',
  ],
};

export default function FormationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
