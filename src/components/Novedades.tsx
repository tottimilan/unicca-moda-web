import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { Sparkles } from 'lucide-react'

const categories = [
  {
    name: 'Vestidos',
    description: 'Para cada ocasión',
  },
  {
    name: 'Abrigos y chaquetas',
    description: 'Elegancia que abriga',
  },
  {
    name: 'Pantalones',
    description: 'Comodidad y estilo',
  },
  {
    name: 'Punto y blusas',
    description: 'Prendas versátiles',
  }
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="group text-center"
              >
                <div className="aspect-[3/4] bg-gradient-to-b from-stone-100 to-stone-50 rounded-sm mb-4 flex items-end justify-center pb-8 border border-stone-200/50 group-hover:border-primary/30 transition-colors duration-300">
                  <div className="w-16 h-0.5 bg-primary/40"></div>
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