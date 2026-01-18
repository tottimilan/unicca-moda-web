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
    <section className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="container px-4">
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12 lg:mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-xs md:text-sm">
            Lo que nos define
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight">
            Moda pensada para <span className="italic">cada mujer</span>
          </h2>
        </div>

        <div className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <Link
                key={index}
                href={pillar.href}
                className="group block p-5 md:p-8 lg:p-10 bg-stone-50 hover:bg-stone-100 border border-stone-100 hover:border-primary/20 transition-all duration-300 active:scale-[0.98]"
              >
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex p-2.5 md:p-3 text-primary border border-primary/20">
                      <Icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-lg md:text-xl font-medium group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
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