import Link from 'next/link'

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
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Unicca por dentro
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre el ambiente único de nuestra tienda
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              {/* Placeholder para imagen */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-4xl">📸</div>
                  <p className="text-xs text-muted-foreground px-4">
                    {image.alt}
                  </p>
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/galeria"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Ver galería completa
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}