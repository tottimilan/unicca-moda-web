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
    <div className="fixed bottom-6 left-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <div className="absolute left-full ml-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          WhatsApp
        </div>
      </button>

      {/* Llamar */}
      <button
        onClick={handleCallClick}
        className="group relative bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Llamar por teléfono"
      >
        <Phone className="h-6 w-6" />
        <div className="absolute left-full ml-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Llamar
        </div>
      </button>

      {/* Cómo llegar */}
      <button
        onClick={handleDirectionsClick}
        className="group relative bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Cómo llegar"
      >
        <MapPin className="h-6 w-6" />
        <div className="absolute left-full ml-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Cómo llegar
        </div>
      </button>
    </div>
  )
}