import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mes Projets - Portfolio Tim',
  description:
    'Découvrez mes projets de développement, de la cybersécurité au DevOps. Projets professionnels, académiques et personnels.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Mes Projets - Portfolio Tim',
    description:
      'Découvrez mes projets de développement, de la cybersécurité au DevOps.',
    type: 'website',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
