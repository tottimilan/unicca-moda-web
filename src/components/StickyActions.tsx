'use client'

import { siteConfig } from '@/content/site'
import { MessageCircle, Phone, MapPin } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

export function StickyActions() {
  const handleWhatsAppClick = () => {
    const message = siteConfig.links.whatsapp.messages.general
    const whatsappUrl = `${siteConfig.links.whatsapp.base}${message}`

    trackEvent('click_whatsapp', {
      page: window.location.pathname,
      button_location: 'sticky_button',
      label: 'general'
    })

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const handleCallClick = () => {
    trackEvent('click_call', {
      page: window.location.pathname,
      button_location: 'sticky_button'
    })

    window.location.href = siteConfig.links.call
  }

  const handleDirectionsClick = () => {
    trackEvent('click_directions', {
      page: window.location.pathname,
      button_location: 'sticky_button'
    })

    window.open(siteConfig.links.directions, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp - Color verde de WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-[#25D366] hover:bg-[#1ebe5b] text-white p-3.5 shadow-lg transition-all duration-300 hover:shadow-xl"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="absolute left-full ml-4 px-3 py-1.5 bg-foreground text-background text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          WhatsApp
        </span>
      </button>

      {/* Llamar - Color primario */}
      <button
        onClick={handleCallClick}
        className="group relative bg-primary hover:bg-primary/90 text-primary-foreground p-3.5 shadow-lg transition-all duration-300 hover:shadow-xl"
        aria-label="Llamar por teléfono"
      >
        <Phone className="h-5 w-5" />
        <span className="absolute left-full ml-4 px-3 py-1.5 bg-foreground text-background text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Llamar
        </span>
      </button>

      {/* Cómo llegar - Estilo outline */}
      <button
        onClick={handleDirectionsClick}
        className="group relative bg-white border border-stone-300 hover:border-primary text-foreground p-3.5 shadow-lg transition-all duration-300 hover:shadow-xl"
        aria-label="Cómo llegar"
      >
        <MapPin className="h-5 w-5" />
        <span className="absolute left-full ml-4 px-3 py-1.5 bg-foreground text-background text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Cómo llegar
        </span>
      </button>
    </div>
  )
}