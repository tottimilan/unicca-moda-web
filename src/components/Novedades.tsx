import Image from 'next/image'
import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { Sparkles } from 'lucide-react'

const categories = [
  {
    name: 'Vestidos',
    description: 'Para cada ocasión',
    image: '/novedades/vestidos.webp',
    alt: 'Vestidos de mujer tallas 38-60 - Novedades Unicca Moda Madrid',
  },
  {
    name: 'Abrigos y chaquetas',
    description: 'Elegancia que abriga',
    image: '/novedades/abrigos.webp',
    alt: 'Abrigos y chaquetas talla grande - Novedades Unicca Moda Chamartín',
  },
  {
    name: 'Pantalones',
    description: 'Comodidad y estilo',
    image: '/novedades/pantalones.webp',
    alt: 'Pantalones mujer tallas grandes Madrid - Novedades Unicca Moda',
  },
  {
    name: 'Punto y blusas',
    description: 'Prendas versátiles',
    image: '/novedades/punto-blusas.webp',
    alt: 'Punto y blusas talla grande - Novedades Unicca Moda Madrid',
  },
]

export function Novedades() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary/20 text-primary rounded-full text-sm tracking-wide uppercase">
              <Sparkles className="h-4 w-4" />
              Colección renovada
            </div>

            <h2 className="text-4xl font-light tracking-tight">
              Novedades <span className="italic">cada semana</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {siteConfig.copy.novedades}
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 mb-16">
            {categories.map((category, index) => (
              <div key={index} className="group text-center">
                <div className="aspect-[3/4] relative overflow-hidden rounded-sm border border-stone-200/50 group-hover:border-primary/30 transition-colors duration-300 mb-4">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-medium text-foreground mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              ¿Quieres saber qué ha llegado nuevo?
            </p>
            <CTAWhatsApp messageKey="general" />
          </div>
        </div>
      </div>
    </section>
  )
}
