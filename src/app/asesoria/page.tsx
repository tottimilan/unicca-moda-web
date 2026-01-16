import { generateMetadata } from '@/lib/metadata'
import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { ArrowRight, CheckCircle, User, Briefcase, PartyPopper, Plane } from 'lucide-react'

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

const occasionIcons = {
  'Diario con estilo': User,
  'Oficina': Briefcase,
  'Eventos': PartyPopper,
  'Viajes y fines de semana': Plane
}

export default function AsesoriaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-stone-50 to-white py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Contenido */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-primary font-medium tracking-wide uppercase text-sm">
                  Asesoría personalizada
                </p>
                <h1 className="text-4xl font-light tracking-tight lg:text-5xl xl:text-6xl leading-tight">
                  {siteConfig.pages.asesoria.h1}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Conchi te ayuda a encontrar las prendas que mejor te sientan. Atención cercana y sin prisas.
                </p>
              </div>

              <CTAWhatsApp messageKey="general" size="lg" />
            </div>

            {/* Imagen placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-stone-200 via-stone-100 to-stone-50 border border-stone-200 overflow-hidden">
                <div className="absolute inset-4 border border-primary/20"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-0.5 bg-primary/40 mx-auto"></div>
                    <User className="h-12 w-12 text-primary/40 mx-auto" />
                    <p className="text-muted-foreground text-sm">
                      Asesoría personal próximamente
                    </p>
                    <div className="w-20 h-0.5 bg-primary/40 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Proceso
            </p>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
              Cómo <span className="italic">funciona</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un proceso simple para encontrar tu look perfecto
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={index} className="relative text-center space-y-6 p-8 bg-stone-50 border border-stone-100">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground text-xl font-light">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-12 -right-4 w-8 h-8 text-stone-300 z-10" />
                  )}
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para qué ocasiones */}
      <section className="py-24 bg-stone-50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Ocasiones
            </p>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
              Para qué <span className="italic">momentos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Te ayudamos con cualquier estilo y ocasión
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {siteConfig.pages.asesoria.occasions.map((occasion, index) => {
              const IconComponent = occasionIcons[occasion as keyof typeof occasionIcons] || User
              return (
                <div key={index} className="bg-white p-8 border border-stone-200 hover:border-primary/30 transition-colors duration-300 text-center group">
                  <div className="space-y-4">
                    <div className="w-12 h-12 border border-primary/20 flex items-center justify-center mx-auto group-hover:border-primary/40 transition-colors">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium">{occasion}</h3>
                    <p className="text-sm text-muted-foreground">
                      Asesoramiento especializado
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Beneficios de la asesoría */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Beneficios
              </p>
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
                ¿Por qué asesoría <span className="italic">personal</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Más que vender, queremos que encuentres lo que te hace sentir bien
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4 p-6 bg-stone-50 border border-stone-100">
                <div className="p-2 border border-primary/20 text-primary shrink-0">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Atención individual</h3>
                  <p className="text-muted-foreground">
                    Tiempo dedicado exclusivamente a ti, sin prisas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-stone-50 border border-stone-100">
                <div className="p-2 border border-primary/20 text-primary shrink-0">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Experiencia profesional</h3>
                  <p className="text-muted-foreground">
                    Conchi conoce cada prenda y sabe cómo combinarlas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-stone-50 border border-stone-100">
                <div className="p-2 border border-primary/20 text-primary shrink-0">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Sin compromiso</h3>
                  <p className="text-muted-foreground">
                    Ven a probar, mira y decide con calma
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-stone-50 border border-stone-100">
                <div className="p-2 border border-primary/20 text-primary shrink-0">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Resultados garantizados</h3>
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
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
                ¿Quieres que te <span className="italic">asesoremos</span>?
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