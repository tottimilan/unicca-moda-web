import type { Metadata } from 'next'
import Image from 'next/image'
import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { GalleryLightbox } from '@/components/GalleryLightbox'

export const metadata: Metadata = {
  title: siteConfig.pages.galeria.title,
  description: siteConfig.pages.galeria.description,
}

// Galería con imágenes reales de la tienda
const galleryImages = [
  { 
    id: 1, 
    src: '/Galeria/video1.png',
    alt: 'Interior de Unicca Moda - Tienda de moda de mujer en Chamartín',
    aspectRatio: '4/5'
  },
  { 
    id: 2, 
    src: '/Galeria/video2.png',
    alt: 'Escaparate de Unicca Moda con prendas de temporada',
    aspectRatio: '4/5'
  },
  { 
    id: 3, 
    src: '/Galeria/video3.png',
    alt: 'Ambiente de la tienda Unicca Moda',
    aspectRatio: '4/5'
  },
  { 
    id: 4, 
    src: '/Galeria/video4.png',
    alt: 'Colección de prendas en Unicca Moda',
    aspectRatio: '4/5'
  },
  { 
    id: 5, 
    src: '/Galeria/video5.png',
    alt: 'Detalle de moda de mujer en Unicca',
    aspectRatio: '4/5'
  },
]

export default function GaleriaPage() {
  return (
    <>
      {/* Hero Section */}
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

      {/* Galería con Lightbox */}
      <section className="py-6 md:py-12 bg-white">
        <div className="container px-4">
          <GalleryLightbox images={galleryImages} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-stone-50 border-t border-stone-200">
        <div className="container px-4">
          <div className="max-w-xl mx-auto text-center space-y-4">
            <h2 className="text-xl md:text-2xl font-light tracking-tight">
              Ven a conocer <span className="italic">el ambiente</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Un local cuidado al detalle donde cada clienta se siente especial
            </p>
            <CTAWhatsApp />
          </div>
        </div>
      </section>
    </>
  )
}
