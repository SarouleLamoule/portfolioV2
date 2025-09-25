import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projet - Portfolio Tim',
  description:
    'Détails du projet - Découvrez les technologies utilisées et les fonctionnalités développées.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Projet - Portfolio Tim',
    description:
      'Détails du projet - Technologies et fonctionnalités développées.',
    type: 'website',
  },
};

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
