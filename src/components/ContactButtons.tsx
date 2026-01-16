'use client'

import { siteConfig } from '@/content/site'
import { Button } from '@/components/ui/button'
import { Phone, MapPin } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

export function ContactButtons() {
  const handleCallClick = () => {
    trackEvent('click_call', {
      page: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
      button_location: 'contact_page'
    })

    window.location.href = siteConfig.links.call
  }

  const handleDirectionsClick = () => {
    trackEvent('click_directions', {
      page: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
      button_location: 'contact_page'
    })

    window.open(siteConfig.links.directions, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        onClick={handleCallClick}
        size="lg"
        className="inline-flex items-center gap-2"
      >
        <Phone className="h-5 w-5" />
        {siteConfig.copy.ctaCall}
      </Button>
      <Button
        onClick={handleDirectionsClick}
        variant="outline"
        size="lg"
        className="inline-flex items-center gap-2"
      >
        <MapPin className="h-5 w-5" />
        {siteConfig.copy.ctaDirections}
      </Button>
    </div>
  )
}