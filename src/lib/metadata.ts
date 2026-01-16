import type { Metadata } from 'next'
import { siteConfig } from '@/content/site'

interface PageMetadataOptions {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
}

export function generateMetadata(options: PageMetadataOptions = {}): Metadata {
  const {
    title = siteConfig.pages.home.title,
    description = siteConfig.pages.home.description,
    keywords = ["ropa mujer", "tallas grandes", "tallas 38-60", "Chamartín", "Madrid", "moda mujer"],
    image,
    url = "https://unicca-moda.com",
    type = 'website'
  } = options

  const ogImage = image || `${url}/og-image.jpg` // Placeholder para imagen OG

  return {
    title,
    description,
    keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "es_ES",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@uniccamoda",
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
      // Google Search Console verification (pendiente)
      google: "pendiente-verification-code",
    },
  }
}

// Utilidad para generar structured data por página
export function generateStructuredData(pageType: string, pageData?: any) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: siteConfig.name,
    description: siteConfig.pages.home.description,
    url: `https://unicca-moda.com${pageType === 'home' ? '' : `/${pageType}`}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: "https://unicca-moda.com"
    },
    about: {
      "@type": "ClothingStore",
      name: siteConfig.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.locality,
        postalCode: siteConfig.address.postalCode,
        addressRegion: siteConfig.address.region,
        addressCountry: siteConfig.address.country
      },
      telephone: siteConfig.phone
    }
  }

  // Añadir datos específicos por tipo de página
  switch (pageType) {
    case 'home':
      return {
        ...baseData,
        "@type": "WebPage",
        mainEntity: siteConfig.schema
      }

    case 'tallas-38-60':
      return {
        ...baseData,
        "@type": "WebPage",
        name: siteConfig.pages.tallas.h1,
        description: siteConfig.pages.tallas.description,
        about: {
          ...baseData.about,
          description: "Especialistas en tallas 38-60"
        }
      }

    case 'asesoria':
      return {
        ...baseData,
        "@type": "WebPage",
        name: siteConfig.pages.asesoria.h1,
        description: siteConfig.pages.asesoria.description,
        about: {
          ...baseData.about,
          description: "Asesoría personalizada de estilo"
        }
      }

    case 'galeria':
      return {
        ...baseData,
        "@type": "ImageGallery",
        name: siteConfig.pages.galeria.h1,
        description: siteConfig.pages.galeria.description
      }

    case 'opiniones':
      return {
        ...baseData,
        "@type": "WebPage",
        name: siteConfig.pages.opiniones.h1,
        description: siteConfig.pages.opiniones.description
      }

    case 'contacto':
      return {
        ...baseData,
        "@type": "ContactPage",
        name: siteConfig.pages.contacto.h1,
        description: siteConfig.pages.contacto.description
      }

    default:
      return baseData
  }
}