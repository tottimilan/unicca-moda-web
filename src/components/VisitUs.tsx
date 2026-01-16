import { siteConfig } from '@/content/site'
import { StoreInfo } from '@/components/StoreInfo'
import { MapPin } from 'lucide-react'

export function VisitUs() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Ubicación
          </p>
          <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
            Visítanos en <span className="italic">Chamartín</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos en el corazón de Chamartín. Te esperamos para asesorarte personalmente.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Información de contacto */}
          <StoreInfo showActions={true} />

          {/* Mapa embebido */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium">Cómo llegar</h3>
            <p className="text-muted-foreground leading-relaxed">
              {siteConfig.pages.contacto.howToArrive}
            </p>

            {/* Mapa placeholder */}
            <div className="aspect-video bg-gradient-to-br from-stone-200 to-stone-100 flex items-center justify-center border border-stone-200">
              <div className="text-center space-y-4 p-6">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center mx-auto">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-sm">Mapa interactivo próximamente</p>
                  <p className="text-xs text-muted-foreground">
                    Haz clic en &ldquo;{siteConfig.copy.ctaDirections}&rdquo; para ver la ubicación
                  </p>
                </div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground space-y-2 border-l-2 border-primary/30 pl-4">
              <p>Fácil acceso en transporte público</p>
              <p>Zona comercial con aparcamiento cercano</p>
              <p>Ambiente tranquilo y acogedor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}