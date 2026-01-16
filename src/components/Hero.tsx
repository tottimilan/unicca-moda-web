'use client'

import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

export function Hero() {
  const handleDirectionsClick = () => {
    trackEvent('click_directions', {
      page: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
      button_location: 'hero'
    })
  }

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Contenido */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
                {siteConfig.pages.home.h1}
              </h1>
              <div className="space-y-2 text-lg text-muted-foreground">
                <p>{siteConfig.pages.home.heroSubtitle[0]}</p>
                <p>{siteConfig.pages.home.heroSubtitle[1]}</p>
              </div>
            </div>

            {/* CTAs principales */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAWhatsApp />
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

            {/* Dirección rápida */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{siteConfig.address.locality}, {siteConfig.address.region}</span>
            </div>
          </div>

          {/* Imagen placeholder - se reemplazará con imagen real */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/5] bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-white/50 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl">👗</span>
                </div>
                <p className="text-muted-foreground font-medium">
                  Imagen de tienda próximamente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}