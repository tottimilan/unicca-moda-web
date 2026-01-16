import type { Metadata } from 'next'
import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'

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
      <section className="relative bg-gradient-to-br from-purple-50 to-pink-100 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
                {siteConfig.pages.galeria.h1}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {siteConfig.pages.galeria.subtitle}
              </p>
            </div>

            <CTAWhatsApp />
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative break-inside-avoid mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer"
                style={{ aspectRatio: Math.random() > 0.5 ? '4/5' : '3/4' }}
              >
                {/* Placeholder para imagen */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="text-center space-y-2">
                    <div className="text-3xl">
                      {image.id <= 6 ? '🏪' : image.id <= 9 ? '👗' : image.id <= 12 ? '🧥' : '📸'}
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {image.alt}
                    </p>
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Información adicional */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Conoce nuestro espacio
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Un local cuidado al detalle donde cada prenda tiene su lugar y cada clienta se siente especial.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Ambiente acogedor y luminoso</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Prendas organizadas por estilos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Zona de probadores cómodos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Atención personalizada</span>
                  </div>
                </div>

                <CTAWhatsApp variant="outline" />
              </div>

              {/* Imagen destacada */}
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-white/50 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-5xl">💐</span>
                    </div>
                    <p className="text-muted-foreground font-medium">
                      Fachada floral próximamente
                    </p>
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