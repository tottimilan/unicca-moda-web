import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const galleryImages = [
  { id: 1, src: '/Galeria/look-1.webp', alt: 'Vestido plisado fucsia con chaleco - Unicca Moda' },
  { id: 2, src: '/Galeria/look-2.webp', alt: 'Jersey beige con pantalón rojo - Unicca Moda' },
  { id: 3, src: '/Galeria/look-3.webp', alt: 'Conjunto negro con estrellas - Unicca Moda' },
  { id: 4, src: '/Hero/hero-principal.webp', alt: 'Vestido verde lima con plumas - Unicca Moda' },
  { id: 5, src: '/Galeria/look-5.webp', alt: 'Chaqueta bordada artística - Unicca Moda' },
  { id: 6, src: '/Galeria/look-6.webp', alt: 'Abrigo verde militar con detalle animal print - Unicca Moda' },
]

export function Gallery() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-stone-50">
      <div className="container px-4">
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12 lg:mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-xs md:text-sm">
            Galería
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight">
            Unicca <span className="italic">por dentro</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre el ambiente único de nuestra tienda
          </p>
        </div>

        {/* Grid responsive: 2 columnas en móvil, 3 en desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden bg-stone-100 border border-stone-200 hover:border-primary/30 transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link
            href="/galeria"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group text-sm md:text-base"
          >
            Ver galería completa
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}