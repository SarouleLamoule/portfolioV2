import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dossier des Membres - Black Water',
  description:
    'Accès restreint aux dossiers personnels des opérateurs de Black Water. Informations classifiées - Niveau de sécurité requis.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
  },
  openGraph: {
    title: 'Dossier des Membres - Black Water',
    description:
      'Accès restreint aux dossiers personnels des opérateurs de Black Water.',
    type: 'website',
  },
};

export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
