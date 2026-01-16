import type { Metadata } from 'next'
import { siteConfig } from '@/content/site'
import { ReviewsButtons } from '@/components/ReviewsButtons'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { Star } from 'lucide-react'

export const metadata: Metadata = {
  title: siteConfig.pages.opiniones.title,
  description: siteConfig.pages.opiniones.description,
}

// Reseñas ampliadas para la página dedicada
const allReviews = [
  {
    text: "Excelente atención personalizada. Siempre me ayudan a encontrar lo que necesito exactamente.",
    author: "María López",
    rating: 5,
    date: "Hace 2 semanas",
    verified: true
  },
  {
    text: "Gran variedad de tallas y precios muy competitivos. Vuelvo siempre que necesito algo nuevo.",
    author: "Carmen Rodríguez",
    rating: 5,
    date: "Hace 1 mes",
    verified: true
  },
  {
    text: "Conchi es un encanto y sabe perfectamente qué le queda bien a cada una. Muy profesional.",
    author: "Ana García",
    rating: 5,
    date: "Hace 3 semanas",
    verified: true
  },
  {
    text: "Tienda con mucho gusto y prendas de calidad. Altamente recomendable para tallas grandes.",
    author: "Isabel Martín",
    rating: 5,
    date: "Hace 1 semana",
    verified: true
  },
  {
    text: "Me siento siempre muy cómoda comprando aquí. Trato cercano y profesional.",
    author: "Pilar Sánchez",
    rating: 5,
    date: "Hace 2 meses",
    verified: true
  },
  {
    text: "Las prendas tienen muy buen corte y los colores son preciosos. Toda la familia compra aquí.",
    author: "Teresa Jiménez",
    rating: 5,
    date: "Hace 4 semanas",
    verified: true
  },
  {
    text: "Servicio impecable. Me ayudaron a encontrar el vestido perfecto para una boda importante.",
    author: "Rosa Fernández",
    rating: 5,
    date: "Hace 6 semanas",
    verified: true
  },
  {
    text: "Precios justos y calidad excelente. Siempre hay novedades y tallas para todos los gustos.",
    author: "Elena Ruiz",
    rating: 5,
    date: "Hace 8 semanas",
    verified: true
  },
  {
    text: "La decoración floral de la fachada es preciosa. Dentro es aún mejor, muy acogedor.",
    author: "Lucía Moreno",
    rating: 5,
    date: "Hace 10 semanas",
    verified: true
  },
  {
    text: "Encontré mi estilo gracias a Conchi. Ahora sé exactamente qué prendas me favorecen.",
    author: "Mónica Álvarez",
    rating: 5,
    date: "Hace 3 meses",
    verified: true
  },
  {
    text: "Tienda de referencia en Chamartín para moda de mujer. No busques más.",
    author: "Silvia Romero",
    rating: 5,
    date: "Hace 12 semanas",
    verified: true
  },
  {
    text: "Siempre me tratan como si fuera la única clienta. Servicio personalizado excepcional.",
    author: "Beatriz Navarro",
    rating: 5,
    date: "Hace 14 semanas",
    verified: true
  }
]

const stats = [
  { label: 'Reseñas', value: '150+', icon: '⭐' },
  { label: 'Clientes satisfechas', value: '500+', icon: '💃' },
  { label: 'Años de experiencia', value: '15+', icon: '🏆' },
  { label: 'Tallas disponibles', value: '38-60', icon: '📏' }
]

export default function OpinionesPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-orange-100 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
                {siteConfig.pages.opiniones.h1}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Lo que dicen nuestras clientas sobre su experiencia en Unicca Moda
              </p>
            </div>

            <ReviewsButtons />
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-white border-b">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Todas las reseñas */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border shadow-sm"
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
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{review.author}</span>
                      {review.verified && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          ✓ Verificada
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                ¿Ya has visitado Unicca Moda?
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Tu opinión es muy importante para nosotras. Comparte tu experiencia y ayúdanos a mejorar.
              </p>
            </div>

            <div className="space-y-4">
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