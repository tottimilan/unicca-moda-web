import { siteConfig } from '@/content/site'
import { StoreInfo } from '@/components/StoreInfo'

export function VisitUs() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-stone-50 border-t border-stone-200">
      <div className="container px-4">
        <div className="text-center space-y-3 mb-8 md:mb-12">
          <p className="text-primary font-medium tracking-wide uppercase text-xs md:text-sm">
            Ubicación
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight">
            Visítanos en <span className="italic">Chamartín</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Te esperamos para asesorarte personalmente
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Mapa primero en móvil */}
          <div className="mb-8">
            <div className="aspect-video md:aspect-[16/9] bg-stone-100 border border-stone-200 overflow-hidden rounded-sm">
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
          </div>

          {/* Info compacta */}
          <div className="bg-white p-5 md:p-8 border border-stone-200">
            <StoreInfo compact={true} />
          </div>
        </div>
      </div>
    </section>
  )
}