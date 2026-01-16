import type { Metadata } from 'next'
import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { Image as ImageIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: siteConfig.pages.galeria.title,
  description: siteConfig.pages.galeria.description,
}

// Galería ampliada con más imágenes
const galleryImages = [
  { id: 1, alt: 'Interior de Unicca Moda con prendas de mujer en exposición' },
  { id: 2, alt: 'Escaparate de Unicca Moda en Chamartín con decoración floral' },
  { id: 3, alt: 'Zona de mostrador "Siéntete Unicca" dentro de la tienda' },
  { id: 4, alt: 'Perchero con prendas coloridas de moda de mujer' },
  { id: 5, alt: 'Detalle de prendas en exhibición' },
  { id: 6, alt: 'Ambiente acogedor de la tienda' },
  { id: 7, alt: 'Mostrador de atención al cliente' },
  { id: 8, alt: 'Zona de probadores' },
  { id: 9, alt: 'Exposición de vestidos de fiesta' },
  { id: 10, alt: 'Colección de abrigos y chaquetas' },
  { id: 11, alt: 'Prendas de punto y blusas' },
  { id: 12, alt: 'Complementos y accesorios' },
  { id: 13, alt: 'Ambiente exterior de la tienda' },
  { id: 14, alt: 'Vista general del local' },
  { id: 15, alt: 'Detalles decorativos' }
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

      {/* Galería */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative break-inside-avoid mb-4 overflow-hidden bg-gradient-to-br from-stone-200 to-stone-100 border border-stone-200 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                style={{ aspectRatio: image.id % 3 === 0 ? '4/5' : image.id % 2 === 0 ? '1/1' : '3/4' }}
              >
                {/* Placeholder para imagen */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <ImageIcon className="h-8 w-8 text-stone-400 mb-3" />
                  <p className="text-xs text-muted-foreground text-center line-clamp-2">
                    {image.alt}
                  </p>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
              </div>
            ))}
          </div>
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
                <div className="aspect-[4/5] bg-gradient-to-br from-stone-200 via-stone-100 to-stone-50 border border-stone-200 overflow-hidden">
                  <div className="absolute inset-4 border border-primary/20"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-0.5 bg-primary/40 mx-auto"></div>
                    <p 
                      className="text-primary/60 font-bold tracking-widest text-sm"
                      style={{ fontFamily: '"Times New Roman", Times, serif' }}
                    >
                      UNICCA
                    </p>
                      <p className="text-muted-foreground text-sm">
                        Fachada floral próximamente
                      </p>
                      <div className="w-20 h-0.5 bg-primary/40 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}