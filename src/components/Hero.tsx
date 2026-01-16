'use client'

import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { Button } from '@/components/ui/button'
import { MapPin, ArrowRight } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

export function Hero() {
  const handleDirectionsClick = () => {
    trackEvent('click_directions', {
      page: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
      button_location: 'hero'
    })
  }

  return (
    <section className="relative bg-gradient-to-b from-stone-50 to-white py-20 lg:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-stone-100/50 to-transparent pointer-events-none"></div>
      
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Contenido */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                {siteConfig.tagline}
              </p>
              <h1 className="text-4xl font-light tracking-tight lg:text-5xl xl:text-6xl leading-tight">
                Moda de mujer en <span className="italic">Chamartín</span>
                <span className="block mt-2 text-primary font-normal">Tallas 38–60</span>
              </h1>
              <div className="space-y-3 text-lg text-muted-foreground leading-relaxed max-w-lg">
                <p>{siteConfig.pages.home.heroSubtitle[0]}</p>
                <p>{siteConfig.pages.home.heroSubtitle[1]}</p>
              </div>
            </div>

            {/* CTAs principales */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAWhatsApp size="lg" />
              <Button
                asChild
                variant="outline"
                size="lg"
                onClick={handleDirectionsClick}
              >
                <a
                  href={siteConfig.links.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="h-4 w-4" />
                  {siteConfig.copy.ctaDirections}
                </a>
              </Button>
            </div>

            {/* Info rápida */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground pt-4 border-t border-stone-200">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span>Atención personalizada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span>Asesoría de estilo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span>Novedades semanales</span>
              </div>
            </div>
          </div>

          {/* Imagen placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-stone-200 via-stone-100 to-stone-50 rounded-sm shadow-xl overflow-hidden">
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-primary/20 rounded-sm"></div>
              
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-full max-w-xs space-y-6 text-center">
                  <div className="w-20 h-0.5 bg-primary/40 mx-auto"></div>
                  <p 
                    className="text-primary/60 font-bold tracking-widest text-sm"
                    style={{ fontFamily: '"Times New Roman", Times, serif' }}
                  >
                    UNICCA
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Imagen del escaparate próximamente
                  </p>
                  <div className="w-20 h-0.5 bg-primary/40 mx-auto"></div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-4 shadow-lg">
              <p className="text-xs uppercase tracking-wider mb-1 opacity-80">Desde hace</p>
              <p className="text-2xl font-light">15+ años</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}