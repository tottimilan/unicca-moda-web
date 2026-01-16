import { siteConfig } from '@/content/site'
import { StoreInfo } from '@/components/StoreInfo'
import { MapPin, Clock, Phone } from 'lucide-react'

export function VisitUs() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Visítanos en Chamartín
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos en el corazón de Chamartín. Te esperamos para asesorarte personalmente.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Información de contacto */}
          <StoreInfo showActions={true} />

          {/* Mapa embebido */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Ubicación</h3>
            <p className="text-muted-foreground">
              {siteConfig.pages.contacto.howToArrive}
            </p>

            {/* Mapa placeholder - se reemplazará con iframe real de Google Maps */}
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center border">
              <div className="text-center space-y-4">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto" />
                <div className="space-y-2">
                  <p className="font-medium">Mapa interactivo próximamente</p>
                  <p className="text-sm text-muted-foreground">
                    Haz clic en "{siteConfig.copy.ctaDirections}" para ver la ubicación
                  </p>
                </div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground space-y-1">
              <p>• Fácil acceso en transporte público</p>
              <p>• Zona comercial con aparcamiento cercano</p>
              <p>• Ambiente tranquilo y acogedor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}