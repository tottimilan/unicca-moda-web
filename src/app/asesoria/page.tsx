import { generateMetadata } from '@/lib/metadata'
import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { Button } from '@/components/ui/button'
import { ArrowRight, User, Calendar, CheckCircle } from 'lucide-react'

export const metadata = generateMetadata({
  title: siteConfig.pages.asesoria.title,
  description: siteConfig.pages.asesoria.description,
  url: 'https://unicca-moda.com/asesoria'
})

const steps = [
  {
    step: 1,
    title: 'Nos escribes por WhatsApp',
    description: 'Cuéntanos qué buscas: diario, trabajo, evento...'
  },
  {
    step: 2,
    title: 'Vienes a tienda',
    description: 'Te esperamos para mostrarte opciones personalizadas'
  },
  {
    step: 3,
    title: 'Sales vestida sí o sí',
    description: 'Encontramos el look perfecto para ti'
  }
]

const occasions = siteConfig.pages.asesoria.occasions.map(occasion => ({
  title: occasion,
  description: `Asesoramiento especializado para ${occasion.toLowerCase()}`,
  icon: occasion === 'Diario con estilo' ? '👗' :
        occasion === 'Oficina' ? '💼' :
        occasion === 'Eventos' ? '🎉' : '🏖️'
}))

export default function AsesoriaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20 lg:py-32">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Contenido */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
                  {siteConfig.pages.asesoria.h1}
                </h1>
                <p className="text-lg text-muted-foreground">
                  Conchi te ayuda a encontrar las prendas que mejor te sientan
                </p>
              </div>

              <CTAWhatsApp messageKey="general" />
            </div>

            {/* Imagen placeholder */}
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/5] bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/50 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl">💃</span>
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Asesoría personal próximamente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight">
              Cómo funciona
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un proceso simple para encontrar tu look perfecto
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={index} className="text-center space-y-6">
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-xl font-bold">
                      {step.step}
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-muted-foreground" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para qué ocasiones */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight">
              Para qué ocasiones
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Te ayudamos con cualquier estilo y momento
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {occasions.map((occasion, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border text-center space-y-4 hover:shadow-md transition-shadow">
                <div className="text-4xl">{occasion.icon}</div>
                <h3 className="font-semibold">{occasion.title}</h3>
                <p className="text-sm text-muted-foreground">{occasion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios de la asesoría */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight">
                ¿Por qué asesoría personal?
              </h2>
              <p className="text-lg text-muted-foreground">
                Más que vender, queremos que encuentres lo que te hace sentir bien
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Atención individual</h3>
                  <p className="text-muted-foreground">
                    Tiempo dedicado exclusivamente a ti, sin prisas
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Experiencia profesional</h3>
                  <p className="text-muted-foreground">
                    Conchi conoce cada prenda y sabe cómo combinarlas
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Sin compromiso</h3>
                  <p className="text-muted-foreground">
                    Ven a probar, mira y decide con calma
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Resultados garantizados</h3>
                  <p className="text-muted-foreground">
                    Sales vestida sí o sí, con prendas que te encantan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                ¿Quieres que te asesoremos?
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                {siteConfig.copy.whatsappToday}
              </p>
            </div>

            <CTAWhatsApp
              messageKey="general"
              variant="secondary"
              size="lg"
            />
          </div>
        </div>
      </section>
    </>
  )
}