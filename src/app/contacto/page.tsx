import type { Metadata } from 'next'
import { siteConfig } from '@/content/site'
import { StoreInfo } from '@/components/StoreInfo'
import { ContactButtons } from '@/components/ContactButtons'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, Car, Train, Bus } from 'lucide-react'

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
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
                {siteConfig.pages.contacto.h1}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Te esperamos en el corazón de Chamartín. Fácil acceso y aparcamiento cercano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Información de contacto */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Información detallada */}
            <div className="space-y-8">
              <StoreInfo showActions={false} />

              {/* Botones de acción */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Contáctanos</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAWhatsApp size="lg" />
                  <ContactButtons />
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Ubicación</h3>
              <p className="text-muted-foreground mb-4">
                {siteConfig.pages.contacto.howToArrive}
              </p>

              {/* Mapa embebido placeholder */}
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center space-y-4 p-8">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto" />
                  <div className="space-y-2">
                    <p className="font-medium text-lg">Mapa interactivo de Google Maps</p>
                    <p className="text-muted-foreground">
                      Se integrará el iframe oficial de Google Maps aquí
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
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight">
                Cómo llegar
              </h2>
              <p className="text-lg text-muted-foreground">
                Múltiples opciones de transporte para llegar cómodamente
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {transportOptions.map((option, index) => {
                const Icon = option.icon
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="flex items-start space-x-4">
                      <Icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                      <div className="space-y-2">
                        <h3 className="font-semibold">{option.title}</h3>
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
            <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-blue-900">Información útil</h3>
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>• Zona comercial con fácil aparcamiento</li>
                    <li>• Acceso adaptado para personas con movilidad reducida</li>
                    <li>• A 5 minutos andando de la estación de Chamartín</li>
                    <li>• Cercano a centros comerciales y restaurantes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redes sociales */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                Síguenos en redes
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Descubre nuestras novedades, outfits y consejos de estilo
              </p>
            </div>

            <div className="flex justify-center space-x-8">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.996.014 6.79.067c-1.206.053-2.03.24-2.747.51A5.152 5.152 0 002.047 1.32a5.152 5.152 0 00-1.812 1.812A5.152 5.152 0 00-.51 5.25c-.27.717-.457 1.54-.51 2.747C-.986 8.204-1 8.604-1 12.017s.014 3.813.067 4.96c.053 1.206.24 2.03.51 2.747a5.152 5.152 0 001.812 1.812 5.152 5.152 0 002.438.762c.717.27 1.54.457 2.747.51 1.206.053 1.606.067 4.96.067s3.813-.014 4.96-.067c1.206-.053 2.03-.24 2.747-.51a5.152 5.152 0 002.438-1.812 5.152 5.152 0 001.812-1.812c.27-.717.457-1.54.51-2.747.053-1.206.067-1.606.067-4.96s-.014-3.813-.067-4.96c-.053-1.206-.24-2.03-.51-2.747a5.152 5.152 0 00-1.812-1.812 5.152 5.152 0 00-2.438-.762c-.717-.27-1.54-.457-2.747-.51C16.83.014 16.43 0 13.017 0c-3.613 0-4.013.014-5.22.067z"/>
                </svg>
                <span className="font-medium">@unicca_moda_</span>
              </a>

              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
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