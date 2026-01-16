import { generateMetadata } from '@/lib/metadata'
import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { CheckCircle, HelpCircle, Shirt, ShoppingBag } from 'lucide-react'

export const metadata = generateMetadata({
  title: siteConfig.pages.tallas.title,
  description: siteConfig.pages.tallas.description,
  url: 'https://unicca-moda.com/tallas-38-60'
})

const faqs = [
  {
    question: siteConfig.faqs.tallas.question,
    answer: siteConfig.faqs.tallas.answer
  },
  {
    question: siteConfig.faqs.ayuda.question,
    answer: siteConfig.faqs.ayuda.answer
  },
  {
    question: siteConfig.faqs.eventos.question,
    answer: siteConfig.faqs.eventos.answer
  },
  {
    question: siteConfig.faqs.cambio.question,
    answer: siteConfig.faqs.cambio.answer
  }
]

export default function TallasPage() {
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
                  Especialistas en tallas
                </p>
                <h1 className="text-4xl font-light tracking-tight lg:text-5xl xl:text-6xl leading-tight">
                  {siteConfig.pages.tallas.h1}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Especialistas en moda de mujer para tallas 38–60. Prendas seleccionadas con cortes favorecedores.
                </p>
              </div>

              <CTAWhatsApp messageKey="tallas" size="lg" />
            </div>

            {/* Imagen placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-stone-200 via-stone-100 to-stone-50 border border-stone-200 overflow-hidden">
                <div className="absolute inset-4 border border-primary/20"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-0.5 bg-primary/40 mx-auto"></div>
                    <Shirt className="h-12 w-12 text-primary/40 mx-auto" />
                    <p className="text-muted-foreground text-sm">
                      Imagen de tienda próximamente
                    </p>
                    <div className="w-20 h-0.5 bg-primary/40 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* El estilo no tiene talla */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Nuestra filosofía
              </p>
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
                {siteConfig.copy.styleNoSize}
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Cada mujer merece sentirse cómoda y elegante con su ropa
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {siteConfig.pages.tallas.benefits.map((benefit, index) => (
                <div key={index} className="text-center space-y-6 p-8 bg-stone-50 border border-stone-100">
                  <div className="inline-flex p-3 text-primary border border-primary/20">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-medium">{benefit}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Diseños pensados para realzar tu figura natural
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qué encontrarás */}
      <section className="py-24 bg-stone-50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Nuestras prendas
            </p>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
              Qué <span className="italic">encontrarás</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una selección cuidada de prendas para cada ocasión
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {siteConfig.pages.tallas.categories.map((category, index) => (
              <div key={index} className="bg-white p-8 border border-stone-200 hover:border-primary/30 transition-colors duration-300 text-center group">
                <div className="space-y-4">
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center mx-auto group-hover:border-primary/40 transition-colors">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium">{category}</h3>
                  <p className="text-sm text-muted-foreground">
                    Variedad de estilos y colores
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Dudas resueltas
              </p>
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
                Preguntas <span className="italic">frecuentes</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-stone-50 p-6 border border-stone-100 hover:border-primary/20 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 border border-primary/20 text-primary shrink-0">
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                ¿Buscas algo <span className="italic">específico</span>?
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                {siteConfig.copy.whatsappGuide}
              </p>
            </div>

            <CTAWhatsApp
              messageKey="tallas"
              variant="secondary"
              size="lg"
            />
          </div>
        </div>
      </section>
    </>
  )
}