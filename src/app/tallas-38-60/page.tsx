import { generateMetadata } from '@/lib/metadata'
import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { Button } from '@/components/ui/button'
import { CheckCircle, HelpCircle } from 'lucide-react'

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
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Contenido */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
                  {siteConfig.pages.tallas.h1}
                </h1>
                <p className="text-lg text-muted-foreground">
                  Especialistas en moda de mujer para tallas 38–60
                </p>
              </div>

              <CTAWhatsApp messageKey="tallas" />
            </div>

            {/* Imagen placeholder */}
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/5] bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/50 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl">👗</span>
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Imagen de tienda próximamente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* El estilo no tiene talla */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight">
                {siteConfig.copy.styleNoSize}
              </h2>
              <p className="text-lg text-muted-foreground">
                Cada mujer merece sentirse cómoda y elegante con su ropa
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {siteConfig.pages.tallas.benefits.map((benefit, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="inline-flex p-4 bg-primary/10 text-primary rounded-full">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit}</h3>
                  <p className="text-muted-foreground">
                    Diseños pensados para realzar tu figura natural
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qué encontrarás */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight">
              Qué encontrarás
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una selección cuidada de prendas para cada ocasión
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {siteConfig.pages.tallas.categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl">
                    {category === 'Vestidos' && '👗'}
                    {category === 'Abrigos y chaquetas' && '🧥'}
                    {category === 'Pantalones' && '👖'}
                    {category === 'Blusas y punto' && '🧶'}
                    {category === 'Complementos' && '👜'}
                  </span>
                </div>
                <h3 className="font-semibold">{category}</h3>
                <p className="text-sm text-muted-foreground">
                  Variedad de estilos y colores
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight">
                Preguntas frecuentes
              </h2>
              <p className="text-lg text-muted-foreground">
                Todo lo que necesitas saber sobre nuestras tallas
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div className="space-y-2">
                      <h3 className="font-semibold">{faq.question}</h3>
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                ¿Buscas algo específico?
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