'use client'

import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Clock } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

interface StoreInfoProps {
  showActions?: boolean
  compact?: boolean
  className?: string
}

export function StoreInfo({ showActions = true, compact = false, className = '' }: StoreInfoProps) {
  const handleCallClick = () => {
    trackEvent('click_call', {
      page: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
      button_location: 'store_info'
    })
  }

  const handleDirectionsClick = () => {
    trackEvent('click_directions', {
      page: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
      button_location: 'store_info'
    })
  }

  if (compact) {
    return (
      <div className={`space-y-3 ${className}`}>
        <div className="flex items-center gap-3 text-sm">
          <MapPin className="h-4 w-4 text-primary shrink-0" />
          <span>{siteConfig.address.full}</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Phone className="h-4 w-4 text-primary shrink-0" />
          <a
            href={siteConfig.links.call}
            onClick={handleCallClick}
            className="hover:text-primary transition-colors"
          >
            {siteConfig.phone}
          </a>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Clock className="h-4 w-4 text-primary shrink-0" />
          <span>L-V: 11-14h / 17:30-21h | S: 11-14h</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Dirección */}
      <div className="flex items-start gap-4">
        <div className="p-3 border border-primary/20 text-primary shrink-0">
          <MapPin className="h-5 w-5" />
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Dirección</h3>
          <p className="text-muted-foreground">{siteConfig.address.full}</p>
          {showActions && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={handleDirectionsClick}
            >
              <a
                href={siteConfig.links.directions}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.copy.ctaDirections}
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Teléfono */}
      <div className="flex items-start gap-4">
        <div className="p-3 border border-primary/20 text-primary shrink-0">
          <Phone className="h-5 w-5" />
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Teléfono</h3>
          <a
            href={siteConfig.links.call}
            onClick={handleCallClick}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {siteConfig.phone}
          </a>
          {showActions && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="mt-2"
            >
              <a href={siteConfig.links.call}>
                {siteConfig.copy.ctaCall}
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Horario */}
      <div className="flex items-start gap-4">
        <div className="p-3 border border-primary/20 text-primary shrink-0">
          <Clock className="h-5 w-5" />
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Horario</h3>
          <div className="text-muted-foreground space-y-1 text-sm">
            <div className="flex justify-between gap-8">
              <span>Lunes - Viernes</span>
              <span className="text-foreground">11:00–14:00 / 17:30–21:00</span>
            </div>
            <div className="flex justify-between gap-8">
              <span>Sábado</span>
              <span className="text-foreground">11:00–14:00</span>
            </div>
            <div className="flex justify-between gap-8">
              <span>Domingo</span>
              <span className="text-foreground">Cerrado</span>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp */}
      {showActions && (
        <div className="pt-4 border-t border-stone-200">
          <CTAWhatsApp />
        </div>
      )}
    </div>
  )
}