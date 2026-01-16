'use client'

import Link from 'next/link'
import { siteConfig } from '@/content/site'
import { Button } from '@/components/ui/button'
import { Star, ExternalLink } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

const reviews = [
  {
    text: "Excelente atención personalizada. Siempre me ayudan a encontrar lo que necesito.",
    author: "Cliente satisfecha",
    rating: 5,
    date: "Hace 2 semanas"
  },
  {
    text: "Gran variedad de tallas y precios muy competitivos. Vuelvo siempre.",
    author: "Cliente habitual",
    rating: 5,
    date: "Hace 1 mes"
  },
  {
    text: "Conchi es un encanto y sabe perfectamente qué le queda bien a cada una.",
    author: "Cliente fiel",
    rating: 5,
    date: "Hace 3 semanas"
  },
  {
    text: "Tienda con mucho gusto y prendas de calidad. Altamente recomendable.",
    author: "Nueva clienta",
    rating: 5,
    date: "Hace 1 semana"
  },
  {
    text: "Me siento siempre muy cómoda comprando aquí. Trato cercano y profesional.",
    author: "Cliente desde hace años",
    rating: 5,
    date: "Hace 2 meses"
  },
  {
    text: "Las prendas tienen muy buen corte y los colores son preciosos.",
    author: "Cliente contenta",
    rating: 5,
    date: "Hace 4 semanas"
  }
]

export function Reviews() {
  const handleViewReviewsClick = () => {
    trackEvent('click_reviews_view', {
      page: window.location.pathname,
      button_location: 'reviews_section'
    })
  }

  const handleWriteReviewClick = () => {
    trackEvent('click_reviews_write', {
      page: window.location.pathname,
      button_location: 'reviews_section'
    })
  }

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">
            {siteConfig.pages.opiniones.h1}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lo que dicen nuestras clientas sobre Unicca Moda
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{review.author}</span>
                  <span className="text-muted-foreground">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            variant="outline"
            onClick={handleViewReviewsClick}
          >
            <a
              href={siteConfig.links.reviews.view || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              {siteConfig.copy.ctaReviews}
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            onClick={handleWriteReviewClick}
          >
            <a
              href={siteConfig.links.reviews.write || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Star className="h-4 w-4" />
              {siteConfig.copy.ctaWriteReview}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}