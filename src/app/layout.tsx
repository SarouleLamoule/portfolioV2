import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import MouseEffect from '../components/MouseEffect';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-tim-perrichot-chaussat.vercel.app'),
  title: 'Portfolio Tim - Développeur Full Stack',
  description:
    "Portfolio de Tim, développeur Full Stack passionné par l'innovation et la cybersécurité.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.png',
  },
  keywords: [
    'Tim',
    'développeur',
    'full stack',
    'portfolio',
    'cybersécurité',
    'JavaScript',
    'React',
    'Node.js',
  ],
  authors: [{ name: 'Tim' }],
  creator: 'saroulelamoule',
  publisher: 'saroulelamoule',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://portfolio-tim-perrichot-chaussat.vercel.app',
    siteName: 'Portfolio Tim',
    title: 'Portfolio Tim - Développeur Full Stack',
    description:
      "Portfolio de Tim, développeur Full Stack passionné par l'innovation et la cybersécurité.",
    images: [
      {
        url: 'https://portfolio-tim-perrichot-chaussat.vercel.app/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Tim - Développeur Full Stack',
        type: 'image/png',
      },
    ],
  },
  other: {
    'property:fb:app_id': '123456789',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Tim - Développeur Full Stack',
    description:
      "Portfolio de Tim, développeur Full Stack passionné par l'innovation et la cybersécurité.",
    images: ['https://portfolio-tim-perrichot-chaussat.vercel.app/favicon.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {/* Effet de curseur cybersécurité */}
        <MouseEffect />

        {/* Skip links pour l'accessibilité */}
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <a href="#navigation" className="skip-link">
          Aller à la navigation
        </a>
        {children}
      </body>
    </html>
  );
}
