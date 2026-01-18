import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/content/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyActions } from "@/components/StickyActions";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://unicca-moda.com'),
  title: {
    default: siteConfig.pages.home.title,
    template: '%s | Unicca Moda'
  },
  description: siteConfig.pages.home.description,
  keywords: [
    "ropa mujer Madrid",
    "tallas grandes Madrid",
    "tallas 38-60",
    "tienda tallas grandes Chamartín",
    "moda mujer tallas grandes",
    "vestidos tallas grandes Madrid",
    "ropa talla 50 Madrid",
    "ropa talla 52 Madrid", 
    "ropa talla 54 Madrid",
    "ropa talla 56 Madrid",
    "ropa talla 58 Madrid",
    "ropa talla 60 Madrid",
    "tienda ropa mujer Chamartín",
    "asesoría de imagen Madrid",
    "moda curvy Madrid",
    "plus size Madrid"
  ],
  authors: [{ name: siteConfig.name, url: 'https://unicca-moda.com' }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://unicca-moda.com',
  },
  openGraph: {
    title: siteConfig.pages.home.title,
    description: siteConfig.pages.home.description,
    url: "https://unicca-moda.com",
    siteName: siteConfig.name,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Unicca Moda - Tienda de ropa de mujer en Chamartín, Madrid',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.pages.home.title,
    description: siteConfig.pages.home.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Añadir cuando se tenga la verificación de Google
    // google: 'verification_token',
  },
  category: 'shopping',
};

// FAQPage Schema para rich snippets
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: siteConfig.faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
}

// WebSite Schema para sitelinks search box
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Unicca Moda',
  url: 'https://unicca-moda.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://unicca-moda.com/?s={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Favicon y iconos */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6e4936" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Schema.org - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteConfig.schema),
          }}
        />
        {/* Schema.org - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        {/* Schema.org - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Analytics />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyActions />
      </body>
    </html>
  );
}
