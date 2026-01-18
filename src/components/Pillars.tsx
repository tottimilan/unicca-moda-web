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
    <section className="py-10 md:py-16 lg:py-20 bg-stone-50 border-y border-stone-200">
      <div className="container px-4">
        <div className="text-center space-y-2 md:space-y-3 mb-6 md:mb-10">
          <p className="text-primary font-medium tracking-wide uppercase text-xs">
            Lo que nos define
          </p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight">
            Moda para <span className="italic">cada mujer</span>
          </h2>
        </div>

        <div className="grid gap-3 md:gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <Link
                key={index}
                href={pillar.href}
                className="group flex items-start gap-4 p-4 md:p-6 bg-white border border-stone-200 hover:border-primary/30 transition-colors"
              >
                <div className="p-2 text-primary border border-primary/20 shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium group-hover:text-primary transition-colors mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}