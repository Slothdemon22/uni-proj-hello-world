import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Onest } from 'next/font/google';
import './globals.css';
import { ToasterProvider } from './providers/toaster';

const onest = Onest({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nexvect.com'),
  title: {
    default: 'Nexvect | AI-Powered Manufacturing Intelligence',
    template: '%s | Nexvect',
  },
  description:
    'Nexvect builds AI-enabled ecosystems for manufacturing—workforce monitoring, process compliance, and intelligent surveillance. Deploy on-prem, hybrid, or cloud.',
  keywords: [
    'AI manufacturing',
    'workforce monitoring',
    'process compliance',
    'industrial AI',
    'computer vision',
    'IoT manufacturing',
    'smart factory',
    'Nexvect',
  ],
  authors: [{ name: 'Nexvect', url: 'https://nexvect.com' }],
  creator: 'Nexvect',
  publisher: 'Nexvect',
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
    locale: 'en_US',
    url: 'https://nexvect.com',
    siteName: 'Nexvect',
    title: 'Nexvect | AI-Powered Manufacturing Intelligence',
    description:
      'Nexvect builds AI-enabled ecosystems for manufacturing—workforce monitoring, process compliance, and intelligent surveillance.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nexvect – AI-Powered Manufacturing Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexvect | AI-Powered Manufacturing Intelligence',
    description:
      'AI-enabled ecosystems for manufacturing—workforce monitoring, process compliance, and intelligent surveillance.',
    images: ['/og-image.png'],
    creator: '@nexvect',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  alternates: {
    canonical: 'https://nexvect.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-gray-50 dark:bg-dark-secondary min-h-screen flex flex-col ${onest.className}`}
        suppressHydrationWarning
      >
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Nexvect',
                url: 'https://nexvect.com',
                logo: 'https://nexvect.com/logo-removebg-preview.png',
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'info@nexvect.com',
                  contactType: 'customer support',
                },
                sameAs: [],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'Nexvect',
                url: 'https://nexvect.com',
                description:
                  'AI-enabled ecosystems for manufacturing—workforce monitoring, process compliance, and intelligent surveillance.',
              },
            ]),
          }}
        />
        <ThemeProvider disableTransitionOnChange>
          {/* ToasterProvider must render before the children components */}
          {/* https://github.com/emilkowalski/sonner/issues/168#issuecomment-1773734618 */}
          <ToasterProvider />

          <div className="isolate flex flex-col flex-1">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
