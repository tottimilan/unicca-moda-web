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
  title: siteConfig.pages.home.title,
  description: siteConfig.pages.home.description,
  keywords: ["ropa mujer", "tallas grandes", "tallas 38-60", "Chamartín", "Madrid", "moda mujer"],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.pages.home.title,
    description: siteConfig.pages.home.description,
    url: "https://unicca-moda.com",
    siteName: siteConfig.name,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.pages.home.title,
    description: siteConfig.pages.home.description,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteConfig.schema),
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
