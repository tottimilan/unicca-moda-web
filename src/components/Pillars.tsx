import Link from 'next/link'
import { Ruler, User, Palette, ArrowRight } from 'lucide-react'

const pillars = [
  {
    icon: Ruler,
    title: 'Tallas 38–60',
    description: 'Prendas seleccionadas con cortes favorecedores para cada cuerpo.',
    href: '/tallas-38-60',
  },
  {
    icon: User,
    title: 'Asesoría personal',
    description: 'Conchi te guía para encontrar el look perfecto para cada ocasión.',
    href: '/asesoria',
  },
  {
    icon: Palette,
    title: 'Estilo y variedad',
    description: 'Del clásico al moderno. Prendas con personalidad y color.',
    href: '/galeria',
  }
]

export function Pillars() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Lo que nos define
          </p>
          <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
            Moda pensada para <span className="italic">cada mujer</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <Link
                key={index}
                href={pillar.href}
                className="group block p-8 lg:p-10 bg-stone-50 hover:bg-stone-100 border border-stone-100 hover:border-primary/20 transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex p-3 text-primary border border-primary/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}