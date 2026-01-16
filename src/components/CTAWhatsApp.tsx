'use client'

import { siteConfig } from '@/content/site'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

interface CTAWhatsAppProps {
  messageKey?: keyof typeof siteConfig.links.whatsapp.messages
  variant?: 'default' | 'outline' | 'secondary'
  size?: 'default' | 'sm' | 'lg'
  className?: string
  children?: React.ReactNode
}

export function CTAWhatsApp({
  messageKey = 'general',
  variant = 'default',
  size = 'default',
  className = '',
  children
}: CTAWhatsAppProps) {
  const message = siteConfig.links.whatsapp.messages[messageKey]
  const whatsappUrl = `${siteConfig.links.whatsapp.base}${message}`

  const handleClick = () => {
    trackEvent('click_whatsapp', {
      page: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
      button_location: 'cta_button',
      label: messageKey
    })
  }

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={`inline-flex items-center gap-2 ${className}`}
      onClick={handleClick}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <MessageCircle className="h-4 w-4" />
        {children || siteConfig.copy.ctaWhatsapp}
      </a>
    </Button>
  )
}

// Componente para botón flotante de WhatsApp
export function WhatsAppFloatButton() {
  const message = siteConfig.links.whatsapp.messages.general
  const whatsappUrl = `${siteConfig.links.whatsapp.base}${message}`

  const handleClick = () => {
    trackEvent('click_whatsapp', {
      page: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
      button_location: 'float_button',
      label: 'general'
    })
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-colors duration-200 group"
      onClick={handleClick}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        {siteConfig.copy.ctaWhatsapp}
      </div>
    </a>
  )
}