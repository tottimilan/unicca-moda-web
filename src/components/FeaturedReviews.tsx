import Link from 'next/link'
import { Star, Quote } from 'lucide-react'

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
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Sales vestida sí o sí
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestras clientas confían en nosotras para encontrar su look perfecto
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {featuredReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border"
            >
              <div className="space-y-4">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="text-muted-foreground italic leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
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
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Ver todas las opiniones
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