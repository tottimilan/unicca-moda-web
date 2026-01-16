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
      <section className="relative bg-gradient-to-b from-stone-50 to-white py-20 lg:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Galería
              </p>
              <h1 className="text-4xl font-light tracking-tight lg:text-5xl xl:text-6xl">
                {siteConfig.pages.galeria.h1}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {siteConfig.pages.galeria.subtitle}
              </p>
            </div>

            <CTAWhatsApp />
          </div>
        </div>
      </section>

      {/* Galería con Lightbox */}
      <section className="py-16 bg-white">
        <div className="container">
          <GalleryLightbox images={galleryImages} />
        </div>
      </section>

      {/* Información adicional */}
      <section className="py-24 bg-stone-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-primary font-medium tracking-wide uppercase text-sm">
                    Nuestro espacio
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
                    Conoce <span className="italic">el ambiente</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Un local cuidado al detalle donde cada prenda tiene su lugar y cada clienta se siente especial.
                  </p>
                </div>

                <div className="space-y-4 border-l-2 border-primary/30 pl-6">
                  <p className="text-muted-foreground">Ambiente acogedor y luminoso</p>
                  <p className="text-muted-foreground">Prendas organizadas por estilos</p>
                  <p className="text-muted-foreground">Zona de probadores cómodos</p>
                  <p className="text-muted-foreground">Atención personalizada</p>
                </div>

                <CTAWhatsApp variant="outline" />
              </div>

              {/* Imagen destacada */}
              <div className="relative">
                <div className="aspect-[4/5] bg-stone-100 border border-stone-200 overflow-hidden">
                  <Image
                    src="/Galeria/video1.png"
                    alt="Interior de Unicca Moda en Chamartín"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-4 border border-white/30 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
