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

            {/* Mapa de Google Maps */}
            <div className="aspect-video bg-stone-100 border border-stone-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0095!2d-3.6739!3d40.4456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422886c89ed34b%3A0x61547f2d031a1b79!2sUnicca%20Moda!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Unicca Moda en Google Maps"
              ></iframe>
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