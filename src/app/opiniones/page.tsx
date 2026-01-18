import type { Metadata } from 'next'
import { siteConfig } from '@/content/site'
import { ReviewsButtons } from '@/components/ReviewsButtons'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { Star, Award, Ruler } from 'lucide-react'

export const metadata: Metadata = {
  title: siteConfig.pages.opiniones.title,
  description: siteConfig.pages.opiniones.description,
}

// Reseñas ampliadas para la página dedicada
const allReviews = [
  {
    text: "Excelente atención personalizada. Siempre me ayudan a encontrar lo que necesito exactamente.",
    author: "María L.",
    rating: 5,
    date: "Hace 2 semanas",
    verified: true
  },
  {
    text: "Gran variedad de tallas y precios muy competitivos. Vuelvo siempre que necesito algo nuevo.",
    author: "Carmen R.",
    rating: 5,
    date: "Hace 1 mes",
    verified: true
  },
  {
    text: "Conchi es un encanto y sabe perfectamente qué le queda bien a cada una. Muy profesional.",
    author: "Ana G.",
    rating: 5,
    date: "Hace 3 semanas",
    verified: true
  },
  {
    text: "Tienda con mucho gusto y prendas de calidad. Altamente recomendable para tallas grandes.",
    author: "Isabel M.",
    rating: 5,
    date: "Hace 1 semana",
    verified: true
  },
  {
    text: "Me siento siempre muy cómoda comprando aquí. Trato cercano y profesional.",
    author: "Pilar S.",
    rating: 5,
    date: "Hace 2 meses",
    verified: true
  },
  {
    text: "Las prendas tienen muy buen corte y los colores son preciosos. Toda la familia compra aquí.",
    author: "Teresa J.",
    rating: 5,
    date: "Hace 4 semanas",
    verified: true
  },
  {
    text: "Servicio impecable. Me ayudaron a encontrar el vestido perfecto para una boda importante.",
    author: "Rosa F.",
    rating: 5,
    date: "Hace 6 semanas",
    verified: true
  },
  {
    text: "Precios justos y calidad excelente. Siempre hay novedades y tallas para todos los gustos.",
    author: "Elena R.",
    rating: 5,
    date: "Hace 8 semanas",
    verified: true
  },
  {
    text: "La decoración floral de la fachada es preciosa. Dentro es aún mejor, muy acogedor.",
    author: "Lucía M.",
    rating: 5,
    date: "Hace 10 semanas",
    verified: true
  },
  {
    text: "Encontré mi estilo gracias a Conchi. Ahora sé exactamente qué prendas me favorecen.",
    author: "Mónica A.",
    rating: 5,
    date: "Hace 3 meses",
    verified: true
  },
  {
    text: "Tienda de referencia en Chamartín para moda de mujer. No busques más.",
    author: "Silvia R.",
    rating: 5,
    date: "Hace 12 semanas",
    verified: true
  },
  {
    text: "Siempre me tratan como si fuera la única clienta. Servicio personalizado excepcional.",
    author: "Beatriz N.",
    rating: 5,
    date: "Hace 14 semanas",
    verified: true
  }
]

const stats = [
  { label: 'Años de experiencia', value: '15+', Icon: Award },
  { label: 'Tallas disponibles', value: '38-60', Icon: Ruler }
]

export default function OpinionesPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-stone-50 to-white py-12 lg:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Testimonios
              </p>
              <h1 className="text-4xl font-light tracking-tight lg:text-5xl xl:text-6xl">
                {siteConfig.pages.opiniones.h1}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Lo que dicen nuestras clientas sobre su experiencia en Unicca Moda
              </p>
            </div>

            <ReviewsButtons />
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-10 lg:py-16 bg-white border-y border-stone-200">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-12 h-12 border border-primary/20 flex items-center justify-center mx-auto">
                  <stat.Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-3xl font-light text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Todas las reseñas */}
      <section className="py-12 lg:py-24 bg-stone-50">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-stone-200 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="space-y-4">
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
                  <div className="flex items-center justify-between text-sm pt-4 border-t border-stone-100">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{review.author}</span>
                      {review.verified && (
                        <span className="inline-flex items-center px-2 py-0.5 text-xs border border-primary/30 text-primary">
                          Verificada
                        </span>
                      )}
                    </div>
                    <span className="text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Llamado a acción */}
      <section className="py-12 lg:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
                ¿Ya has visitado <span className="italic">Unicca Moda</span>?
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Tu opinión es muy importante para nosotras. Comparte tu experiencia y ayúdanos a mejorar.
              </p>
            </div>

            <div className="space-y-6">
              <ReviewsButtons />
              <div className="flex justify-center">
                <CTAWhatsApp
                  messageKey="general"
                  variant="outline"
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}