import Link from 'next/link'
import { ArrowRight, Image as ImageIcon } from 'lucide-react'

// Placeholder images - se reemplazarán con imágenes reales
const galleryImages = [
  { id: 1, alt: 'Interior de Unicca Moda con prendas de mujer en exposición' },
  { id: 2, alt: 'Escaparate de Unicca Moda en Chamartín con decoración floral' },
  { id: 3, alt: 'Zona de mostrador "Siéntete Unicca" dentro de la tienda' },
  { id: 4, alt: 'Perchero con prendas coloridas de moda de mujer' },
  { id: 5, alt: 'Detalle de prendas en exhibición' },
  { id: 6, alt: 'Ambiente acogedor de la tienda' },
]

export function Gallery() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Galería
          </p>
          <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
            Unicca <span className="italic">por dentro</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre el ambiente único de nuestra tienda
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden bg-gradient-to-br from-stone-200 to-stone-100 border border-stone-200 hover:border-primary/30 transition-all duration-300"
            >
              {/* Placeholder para imagen */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <ImageIcon className="h-10 w-10 text-stone-400 mb-3" />
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  {image.alt}
                </p>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/galeria"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            Ver galería completa
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}