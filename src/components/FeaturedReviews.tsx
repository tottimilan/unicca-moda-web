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
    <section className="py-24 bg-stone-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Clientas satisfechas
          </p>
          <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
            Sales vestida <span className="italic">sí o sí</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestras clientas confían en nosotras para encontrar su look perfecto
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {featuredReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-stone-200 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary/80 text-primary/80"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-stone-100">
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
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            Ver todas las opiniones
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}