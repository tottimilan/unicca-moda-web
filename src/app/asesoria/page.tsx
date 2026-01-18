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
      <section className="relative bg-gradient-to-b from-stone-50 to-white py-10 md:py-16 lg:py-20">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-primary font-medium tracking-wide uppercase text-xs">
              Asesoría personalizada
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-tight">
              {siteConfig.pages.asesoria.h1}
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Conchi te ayuda a encontrar las prendas que mejor te sientan
            </p>
            <CTAWhatsApp messageKey="general" />
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-10 md:py-16 bg-white border-y border-stone-200">
        <div className="container px-4">
          <div className="text-center space-y-2 mb-8">
            <p className="text-primary font-medium tracking-wide uppercase text-xs">
              Proceso
            </p>
            <h2 className="text-xl md:text-2xl font-light tracking-tight">
              Cómo <span className="italic">funciona</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-stone-50 border border-stone-100">
                  <div className="w-8 h-8 bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para qué ocasiones */}
      <section className="py-10 md:py-16 bg-stone-50">
        <div className="container px-4">
          <div className="text-center space-y-2 mb-6">
            <p className="text-primary font-medium tracking-wide uppercase text-xs">
              Ocasiones
            </p>
            <h2 className="text-xl md:text-2xl font-light tracking-tight">
              Para qué <span className="italic">momentos</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {siteConfig.pages.asesoria.occasions.map((occasion, index) => {
              const IconComponent = occasionIcons[occasion as keyof typeof occasionIcons] || User
              return (
                <div key={index} className="bg-white p-4 border border-stone-200 text-center">
                  <IconComponent className="h-5 w-5 text-primary mx-auto mb-2" />
                  <h3 className="text-sm font-medium">{occasion}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Beneficios de la asesoría */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-xl md:text-2xl font-light tracking-tight">
                ¿Por qué asesoría <span className="italic">personal</span>?
              </h2>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Atención individual', desc: 'Tiempo dedicado a ti' },
                { title: 'Experiencia profesional', desc: 'Conchi sabe cómo combinar prendas' },
                { title: 'Sin compromiso', desc: 'Prueba y decide con calma' },
                { title: 'Sales vestida sí o sí', desc: 'Encontramos tu look perfecto' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-stone-50 border border-stone-100">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-medium">{item.title}</span>
                    <span className="text-sm text-muted-foreground"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-10 md:py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <h2 className="text-xl md:text-2xl font-light tracking-tight">
              ¿Quieres que te <span className="italic">asesoremos</span>?
            </h2>
            <CTAWhatsApp
              messageKey="general"
              variant="secondary"
            />
          </div>
        </div>
      </section>
    </>
  )
}