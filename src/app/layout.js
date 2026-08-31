import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { site } from '@/data/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Omni Fusions | Graphic Design, Video Editing & Web Development',
    template: '%s | Omni Fusions'
  },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: 'Omni Fusions | Creative + Technology Partner',
    description: site.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Omni Fusions' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omni Fusions | Creative + Technology Partner',
    description: site.description,
    images: ['/og-image.png']
  },
  icons: { icon: '/favicon.png' }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F4F2EE'
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    email: site.email,
    logo: `${site.url}/brand/mark.png`,
    description: site.description,
    areaServed: ['US', 'GB', 'CA', 'AU', 'PK'],
    knowsAbout: ['Graphic Design', 'Video Editing', 'Next.js Development', 'WordPress Development', 'Web Development']
  };

  return (
    <html lang="en">
      <body>
        <a className="skipLink" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
