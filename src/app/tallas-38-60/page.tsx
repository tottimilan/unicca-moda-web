import type { Metadata } from 'next'
import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { FAQs } from '@/components/FAQs'
import { CheckCircle, Shirt, ShoppingBag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tallas Grandes 38-60 Madrid | Ropa Mujer Tallas 50, 52, 54, 56, 58, 60',
  description: 'Tienda especializada en tallas grandes en Madrid. Ropa de mujer tallas 38-60 con cortes favorecedores. Vestidos, pantalones, blusas y más. Asesoría personalizada en Chamartín.',
  keywords: [
    'tallas grandes Madrid',
    'ropa talla 50 Madrid',
    'ropa talla 52 Madrid',
    'ropa talla 54 Madrid',
    'ropa talla 56 Madrid',
    'ropa talla 58 Madrid',
    'ropa talla 60 Madrid',
    'vestidos tallas grandes',
    'pantalones tallas grandes Madrid',
    'moda curvy Madrid',
    'plus size Madrid',
    'tienda tallas grandes Chamartín'
  ],
  alternates: {
    canonical: 'https://unicca-moda.com/tallas-38-60',
  },
  openGraph: {
    title: 'Tallas Grandes 38-60 en Madrid | Unicca Moda',
    description: 'Especialistas en moda de mujer tallas grandes. Vestidos, pantalones, blusas y más en tallas 38-60 con asesoría personalizada.',
    url: 'https://unicca-moda.com/tallas-38-60',
  },
}

export default function TallasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-stone-50 to-white py-12 lg:py-28">
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
      <section className="py-12 lg:py-24 bg-white">
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
      <section className="py-12 lg:py-24 bg-stone-50">
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

      {/* FAQ - Preguntas sobre tallas grandes */}
      <FAQs 
        indices={[0, 1, 2, 3, 4, 9, 10]} 
        title="Preguntas frecuentes sobre tallas grandes"
        subtitle="Resolvemos tus dudas"
      />

      {/* CTA Final */}
      <section className="py-12 lg:py-24 bg-primary text-primary-foreground">
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