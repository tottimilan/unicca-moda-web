import type { Metadata } from 'next'
import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { GalleryLightbox } from '@/components/GalleryLightbox'

export const metadata: Metadata = {
  title: siteConfig.pages.galeria.title,
  description: siteConfig.pages.galeria.description,
  keywords: [
    'galería Unicca Moda',
    'fotos tienda ropa mujer Madrid',
    'colecciones moda mujer Chamartín',
    'ropa tallas grandes fotos',
    'tienda ropa mujer Madrid fotos',
    'looks tallas 38-60 Madrid',
  ],
  alternates: {
    canonical: 'https://uniccamoda.com/galeria',
  },
  openGraph: {
    title: siteConfig.pages.galeria.title,
    description: siteConfig.pages.galeria.description,
    url: 'https://uniccamoda.com/galeria',
    siteName: 'Unicca Moda',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Galería Unicca Moda - Tienda de ropa mujer Chamartín' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.pages.galeria.title,
    description: siteConfig.pages.galeria.description,
    images: ['/og-image.jpg'],
  },
}

const storeImages = [
  {
    id: 1,
    src: '/Galeria/video1.webp',
    alt: 'Fachada exterior de Unicca Moda en Chamartín, Madrid - Tienda de ropa mujer tallas 38-60',
    aspectRatio: '4/5'
  },
  {
    id: 2,
    src: '/Galeria/video2.webp',
    alt: 'Escaparate interior de Unicca Moda con prendas de temporada - Madrid',
    aspectRatio: '4/5'
  },
  {
    id: 3,
    src: '/Galeria/video3.webp',
    alt: 'Interior de la tienda Unicca Moda en Chamartín - Amplia selección de ropa mujer',
    aspectRatio: '4/5'
  },
  {
    id: 4,
    src: '/Galeria/video4.webp',
    alt: 'Mostrador Siéntete Unicca - Tienda de moda mujer Madrid',
    aspectRatio: '4/5'
  },
  {
    id: 5,
    src: '/Galeria/video5.webp',
    alt: 'Percheros con colección actual de Unicca Moda - Ropa mujer tallas grandes',
    aspectRatio: '4/5'
  },
]

const clothesImages = [
  {
    id: 6,
    src: '/Galeria/look-1.webp',
    alt: 'Vestido plisado fucsia con pañuelo y chaleco - Moda mujer talla grande Madrid',
    aspectRatio: '4/5'
  },
  {
    id: 7,
    src: '/Galeria/look-2.webp',
    alt: 'Jersey beige de punto con pantalón rojo - Ropa mujer tallas 38-60 Madrid',
    aspectRatio: '4/5'
  },
  {
    id: 8,
    src: '/Galeria/look-3.webp',
    alt: 'Conjunto negro terciopelo con estrellas plateadas - Unicca Moda Chamartín',
    aspectRatio: '4/5'
  },
  {
    id: 9,
    src: '/Hero/hero-principal.webp',
    alt: 'Vestido verde lima con plumas en puños - Moda mujer talla grande Unicca',
    aspectRatio: '4/5'
  },
  {
    id: 10,
    src: '/Galeria/look-5.webp',
    alt: 'Chaqueta artística bordada con ilustraciones - Unicca Moda Madrid',
    aspectRatio: '4/5'
  },
  {
    id: 11,
    src: '/Galeria/look-6.webp',
    alt: 'Abrigo verde militar con cuello y puños animal print - Tallas grandes Madrid',
    aspectRatio: '4/5'
  },
]

export default function GaleriaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-stone-50 to-white py-10 md:py-16">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-xs">
              Galería
            </p>
            <h1 className="text-2xl md:text-3xl font-light tracking-tight">
              {siteConfig.pages.galeria.h1}
            </h1>
            <p className="text-sm text-muted-foreground">
              {siteConfig.pages.galeria.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Sección: Colecciones */}
      <section className="py-8 md:py-14 bg-white">
        <div className="container px-4">
          <div className="text-center space-y-2 mb-8">
            <p className="text-primary font-medium tracking-wide uppercase text-xs">
              Colecciones
            </p>
            <h2 className="text-xl md:text-2xl font-light tracking-tight">
              Nuestras <span className="italic">prendas</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Vestidos, abrigos, pantalones, conjuntos y más — tallas 38 a 60
            </p>
          </div>
          <GalleryLightbox images={clothesImages} />
        </div>
      </section>

      {/* Separador */}
      <div className="border-t border-stone-200" />

      {/* Sección: La tienda */}
      <section className="py-8 md:py-14 bg-stone-50">
        <div className="container px-4">
          <div className="text-center space-y-2 mb-8">
            <p className="text-primary font-medium tracking-wide uppercase text-xs">
              El local
            </p>
            <h2 className="text-xl md:text-2xl font-light tracking-tight">
              Nuestra <span className="italic">tienda</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              C/ Cartagena 138, Chamartín · Madrid
            </p>
          </div>
          <GalleryLightbox images={storeImages} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-xl mx-auto text-center space-y-4">
            <h2 className="text-xl md:text-2xl font-light tracking-tight">
              ¿Vienes a vernos?
            </h2>
            <p className="text-sm opacity-80">
              Las colecciones cambian cada semana. Lo mejor es pasarte a descubrirlo.
            </p>
            <CTAWhatsApp variant="secondary" />
          </div>
        </div>
      </section>
    </>
  )
}
