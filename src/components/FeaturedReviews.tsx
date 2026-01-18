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
    <section className="py-12 md:py-20 lg:py-24 bg-stone-50">
      <div className="container px-4">
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12 lg:mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-xs md:text-sm">
            Clientas satisfechas
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight">
            Sales vestida <span className="italic">sí o sí</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestras clientas confían en nosotras para encontrar su look perfecto
          </p>
        </div>

        {/* Scroll horizontal en móvil, grid en desktop */}
        <div className="flex md:grid gap-4 md:gap-8 md:grid-cols-3 mb-8 md:mb-12 overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none">
          {featuredReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-5 md:p-8 border border-stone-200 hover:border-primary/30 transition-colors duration-300 min-w-[280px] md:min-w-0 snap-center flex-shrink-0 md:flex-shrink"
            >
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary/80 text-primary/80"
                    />
                  ))}
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="pt-3 md:pt-4 border-t border-stone-100">
                  <span className="text-sm font-medium">
                    {review.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/opiniones"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group text-sm md:text-base"
          >
            Ver todas las opiniones
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}