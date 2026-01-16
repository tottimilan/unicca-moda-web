import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { RefreshCw } from 'lucide-react'

export function Novedades() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <RefreshCw className="h-4 w-4" />
            Colección en constante renovación
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Novedades frecuentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {siteConfig.copy.novedades}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-sm">
            <div className="space-y-2">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👗</span>
              </div>
              <p className="font-medium">Vestidos</p>
            </div>
            <div className="space-y-2">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧥</span>
              </div>
              <p className="font-medium">Abrigos</p>
            </div>
            <div className="space-y-2">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👖</span>
              </div>
              <p className="font-medium">Pantalones</p>
            </div>
            <div className="space-y-2">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧶</span>
              </div>
              <p className="font-medium">Punto</p>
            </div>
          </div>

          <div className="pt-8">
            <CTAWhatsApp messageKey="general" />
          </div>
        </div>
      </div>
    </section>
  )
}