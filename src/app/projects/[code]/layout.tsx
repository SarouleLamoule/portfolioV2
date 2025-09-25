import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profil Classifié - Black Water',
  description:
    'Dossier personnel classifié - Accès restreint aux informations sensibles.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
  },
  openGraph: {
    title: 'Profil Classifié - Black Water',
    description: 'Dossier personnel classifié - Accès restreint.',
    type: 'profile',
  },
};

export default function MemberProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
