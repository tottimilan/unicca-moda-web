import type { Metadata } from 'next'
import { siteConfig } from '@/content/site'
import { StoreInfo } from '@/components/StoreInfo'
import { ContactButtons } from '@/components/ContactButtons'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { Button } from '@/components/ui/button'
import { MapPin, Car, Train, Bus, Instagram, Facebook } from 'lucide-react'

export const metadata: Metadata = {
  title: siteConfig.pages.contacto.title,
  description: siteConfig.pages.contacto.description,
}

const transportOptions = [
  {
    icon: Car,
    title: 'En coche',
    description: 'Aparcamiento fácil en zona azul. Calle Cartagena tiene plazas disponibles.'
  },
  {
    icon: Bus,
    title: 'Autobús',
    description: 'Líneas 1, 74, 146. Parada Cartagena-Chamartín a 2 minutos.'
  },
  {
    icon: Train,
    title: 'Metro/Tren',
    description: 'Estación Chamartín (Líneas 1, 8, 10, Cercanías C-3, C-4, C-7, C-8).'
  }
]

export default function ContactoPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-stone-50 to-white py-20 lg:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Contacto
              </p>
              <h1 className="text-4xl font-light tracking-tight lg:text-5xl xl:text-6xl">
                {siteConfig.pages.contacto.h1}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Te esperamos en el corazón de Chamartín. Fácil acceso y aparcamiento cercano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Información de contacto */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Información detallada */}
            <div className="space-y-10">
              <StoreInfo showActions={false} />

              {/* Botones de acción */}
              <div className="space-y-6 pt-6 border-t border-stone-200">
                <h3 className="text-lg font-medium">Contáctanos</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAWhatsApp size="lg" />
                  <ContactButtons />
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Ubicación</h3>
              <p className="text-muted-foreground leading-relaxed">
                {siteConfig.pages.contacto.howToArrive}
              </p>

              {/* Mapa embebido placeholder */}
              <div className="aspect-video bg-gradient-to-br from-stone-200 to-stone-100 flex items-center justify-center border border-stone-200">
                <div className="text-center space-y-4 p-8">
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center mx-auto">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <p className="font-medium">Mapa interactivo de Google Maps</p>
                    <p className="text-sm text-muted-foreground">
                      Se integrará el iframe oficial de Google Maps
                    </p>
                    <Button asChild variant="outline">
                      <a
                        href={siteConfig.links.directions}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver en Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo llegar */}
      <section className="py-24 bg-stone-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Transporte
              </p>
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
                Cómo <span className="italic">llegar</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Múltiples opciones de transporte para llegar cómodamente
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {transportOptions.map((option, index) => {
                const Icon = option.icon
                return (
                  <div key={index} className="bg-white p-8 border border-stone-200 hover:border-primary/30 transition-colors duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 border border-primary/20 text-primary shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">{option.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Información adicional */}
            <div className="mt-12 p-8 bg-white border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="p-3 border border-primary/20 text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-medium">Información útil</h3>
                  <div className="text-muted-foreground space-y-2 text-sm">
                    <p>Zona comercial con fácil aparcamiento</p>
                    <p>Acceso adaptado para personas con movilidad reducida</p>
                    <p>A 5 minutos andando de la estación de Chamartín</p>
                    <p>Cercano a centros comerciales y restaurantes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redes sociales */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
                Síguenos en <span className="italic">redes</span>
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Descubre nuestras novedades, outfits y consejos de estilo
              </p>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 border border-primary-foreground/30 hover:border-primary-foreground/60 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="font-medium">@unicca_moda_</span>
              </a>

              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 border border-primary-foreground/30 hover:border-primary-foreground/60 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="font-medium">Unicca Moda</span>
              </a>
            </div>

            <CTAWhatsApp
              messageKey="general"
              variant="secondary"
              size="lg"
            />
          </div>
        </div>
      </section>
    </>
  )
}