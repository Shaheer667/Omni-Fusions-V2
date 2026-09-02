import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Analytics from './components/Analytics';
import { site } from '@/data/site';

import {
  Manrope,
  Syne,
  Instrument_Serif
} from 'next/font/google';

/* ---------------------------------------
   Fonts
--------------------------------------- */

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap'
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap'
});

/* ---------------------------------------
   Metadata
--------------------------------------- */

export const metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: 'Omni Fusions | Graphic Design, Video Editing & Web Development',
    template: '%s | Omni Fusions'
  },

  description: site.description,

  alternates: {
    canonical: '/'
  },

  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: 'Omni Fusions | Creative + Technology Partner',
    description: site.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Omni Fusions'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Omni Fusions | Creative + Technology Partner',
    description: site.description,
    images: ['/og-image.png']
  },

  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      }
    : undefined,

  icons: {
    icon: '/favicon.png'
  }
};

/* ---------------------------------------
   Viewport
--------------------------------------- */

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F4F2EE'
};

/* ---------------------------------------
   Layout
--------------------------------------- */

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',

    name: site.name,
    url: site.url,
    email: site.email,
    logo: `${site.url}/brand/mark.png`,
    description: site.description,

    foundingLocation: {
      '@type': 'Country',
      name: 'Pakistan'
    },

    areaServed: [
      'United States',
      'United Kingdom',
      'Canada',
      'Australia',
      'Worldwide'
    ],

    knowsAbout: [
      'Graphic Design',
      'Video Editing',
      'Next.js Development',
      'React Development',
      'WordPress Development',
      'Web Development'
    ]
  };

  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${syne.variable} ${instrumentSerif.variable}`}
      >
        <a className="skipLink" href="#main">
          Skip to content
        </a>

        <Header />

        <main id="main">
          {children}
        </main>

        <Footer />

        <Analytics />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
      </body>
    </html>
  );
}