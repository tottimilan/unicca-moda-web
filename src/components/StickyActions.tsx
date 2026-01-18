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
    <>
      {/* Versión móvil: barra inferior fija */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-stone-200 safe-area-pb">
        <div className="grid grid-cols-3 divide-x divide-stone-200">
          <button
            onClick={handleWhatsAppClick}
            className="flex flex-col items-center justify-center py-3 gap-1 text-[#25D366] active:bg-stone-50 transition-colors"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-[10px] font-medium">WhatsApp</span>
          </button>

          <button
            onClick={handleCallClick}
            className="flex flex-col items-center justify-center py-3 gap-1 text-primary active:bg-stone-50 transition-colors"
            aria-label="Llamar por teléfono"
          >
            <Phone className="h-5 w-5" />
            <span className="text-[10px] font-medium">Llamar</span>
          </button>

          <button
            onClick={handleDirectionsClick}
            className="flex flex-col items-center justify-center py-3 gap-1 text-foreground active:bg-stone-50 transition-colors"
            aria-label="Cómo llegar"
          >
            <MapPin className="h-5 w-5" />
            <span className="text-[10px] font-medium">Cómo llegar</span>
          </button>
        </div>
      </div>

      {/* Versión desktop: botones flotantes a la derecha */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        {/* WhatsApp - Color verde de WhatsApp */}
        <button
          onClick={handleWhatsAppClick}
          className="group relative bg-[#25D366] hover:bg-[#1ebe5b] text-white p-3.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="absolute right-full mr-4 px-3 py-1.5 bg-foreground text-background text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            WhatsApp
          </span>
        </button>

        {/* Llamar - Color primario */}
        <button
          onClick={handleCallClick}
          className="group relative bg-primary hover:bg-primary/90 text-primary-foreground p-3.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110"
          aria-label="Llamar por teléfono"
        >
          <Phone className="h-5 w-5" />
          <span className="absolute right-full mr-4 px-3 py-1.5 bg-foreground text-background text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Llamar
          </span>
        </button>

        {/* Cómo llegar - Estilo outline */}
        <button
          onClick={handleDirectionsClick}
          className="group relative bg-white border border-stone-300 hover:border-primary text-foreground p-3.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110"
          aria-label="Cómo llegar"
        >
          <MapPin className="h-5 w-5" />
          <span className="absolute right-full mr-4 px-3 py-1.5 bg-foreground text-background text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Cómo llegar
          </span>
        </button>
      </div>
    </>
  )
}