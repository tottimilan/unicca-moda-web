import type { Metadata } from 'next'
import Image from 'next/image'
import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { FAQs } from '@/components/FAQs'
import { CheckCircle } from 'lucide-react'

const categories = [
  {
    name: 'Vestidos',
    tagline: 'Para cada ocasión',
    description: 'Vestidos favorecedores en tallas 38–60: eventos, diario y mucho más.',
    image: '/Hero/hero-principal.webp',
    alt: 'Vestidos talla grande Madrid - Unicca Moda tallas 38-60',
  },
  {
    name: 'Abrigos y chaquetas',
    tagline: 'Elegancia que abriga',
    description: 'Abrigos y chaquetas con cortes favorecedores para tallas grandes.',
    image: '/Galeria/look-6.webp',
    alt: 'Abrigos y chaquetas talla grande Madrid - Unicca Moda',
  },
  {
    name: 'Pantalones',
    tagline: 'Comodidad y estilo',
    description: 'Pantalones en tallas 38–60: desde el casual hasta el más elegante.',
    image: '/Galeria/look-2.webp',
    alt: 'Pantalones talla grande Madrid - Ropa mujer tallas grandes',
  },
  {
    name: 'Punto y blusas',
    tagline: 'Prendas versátiles',
    description: 'Jerseys, blusas y punto: prendas clave para completar cualquier look.',
    image: '/Galeria/look-5.webp',
    alt: 'Blusas y punto talla grande Madrid - Unicca Moda Chamartín',
  },
  {
    name: 'Conjuntos',
    tagline: 'Look completo',
    description: 'Conjuntos coordinados para un look perfecto de una vez.',
    image: '/Galeria/look-3.webp',
    alt: 'Conjuntos talla grande Madrid - Unicca Moda tallas 38-60',
  },
]

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

            <div className="relative aspect-[4/5] overflow-hidden border border-stone-200">
              <Image
                src="/tallas/gabardina-beige.webp"
                alt="Gabardina larga beige - Unicca Moda tallas 38-60"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
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

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((cat, index) => (
              <div key={index} className="group relative overflow-hidden border border-stone-200 bg-stone-50 hover:border-primary/30 transition-colors duration-300">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <p className="text-[10px] uppercase tracking-wider opacity-75 leading-tight">{cat.tagline}</p>
                    <h3 className="text-sm font-medium leading-tight">{cat.name}</h3>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs text-muted-foreground leading-relaxed">{cat.description}</p>
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