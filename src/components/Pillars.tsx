import Link from 'next/link'
import { Ruler, User, Palette } from 'lucide-react'

const pillars = [
  {
    icon: Ruler,
    title: 'Tallas 38–60',
    description: 'Especialistas en tallas grandes con cortes favorecedores y comodidad.',
    href: '/tallas-38-60',
    color: 'text-blue-600'
  },
  {
    icon: User,
    title: 'Asesoría con Conchi',
    description: 'Atención personalizada para encontrar el look que mejor te sienta.',
    href: '/asesoria',
    color: 'text-green-600'
  },
  {
    icon: Palette,
    title: 'Estilo con color',
    description: 'Prendas con personalidad y detalles que marcan la diferencia.',
    href: '/galeria',
    color: 'text-rose-600'
  }
]

export function Pillars() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">
            ¿Por qué elegir Unicca?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moda de mujer pensada para cada cuerpo y cada ocasión
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <Link
                key={index}
                href={pillar.href}
                className="group block p-8 rounded-xl border bg-card hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-lg bg-gray-50 ${pillar.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
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