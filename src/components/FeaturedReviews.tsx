import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'

const featuredReviews = [
  {
    text: "Siempre encuentro lo que busco. Conchi me ayuda a elegir tallas y colores perfectos.",
    author: "María L.",
    rating: 5
  },
  {
    text: "La variedad de tallas es increíble. Nunca pensé que encontraría tanta ropa bonita en mi talla.",
    author: "Carmen R.",
    rating: 5
  },
  {
    text: "Servicio personalizado excepcional. Salgo vestida para triunfar cada vez que vengo.",
    author: "Ana G.",
    rating: 5
  }
]

export function FeaturedReviews() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white border-y border-stone-200">
      <div className="container px-4">
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12">
          <p className="text-primary font-medium tracking-wide uppercase text-xs md:text-sm">
            Clientas satisfechas
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight">
            Sales vestida <span className="italic">sí o sí</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Nuestras clientas confían en nosotras
          </p>
        </div>

        {/* Grid en todas las pantallas - 1 col móvil, 3 cols desktop */}
        <div className="grid gap-4 md:gap-6 md:grid-cols-3 mb-8">
          {featuredReviews.map((review, index) => (
            <div
              key={index}
              className="bg-stone-50 p-4 md:p-6 border border-stone-100"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-primary/80 text-primary/80"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-xs font-medium text-foreground">
                  — {review.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/opiniones"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Ver todas las opiniones
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}