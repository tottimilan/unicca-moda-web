// Configuración de Google Analytics 4
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || 'G-XXXXXXXXXX'

// Configuración de Meta Pixel
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || 'XXXXXXXXXXXXXXXX'

// Tipos de eventos
export type AnalyticsEvent =
  | 'click_whatsapp'
  | 'click_call'
  | 'click_directions'
  | 'click_reviews_view'
  | 'click_reviews_write'
  | 'hero_video_interaction'

// Función para enviar eventos a Google Analytics
export function gtag(event: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, parameters)
  }
}

// Función para enviar eventos a Meta Pixel
export function fbq(event: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', event, parameters)
  }
}

// Función unificada para rastrear eventos
export function trackEvent(
  event: AnalyticsEvent,
  options: {
    page?: string
    button_location?: string
    label?: string
    value?: number
    action?: string
  } = {}
) {
  const { page = 'unknown', button_location = 'unknown', label, value, action } = options

  // Parámetros comunes
  const eventParams = {
    page,
    button_location,
    label,
    value,
    action,
    timestamp: new Date().toISOString()
  }

  // Google Analytics 4
  gtag(event, eventParams)

  // Meta Pixel - convertir eventos a formato Meta
  switch (event) {
    case 'click_whatsapp':
    case 'click_call':
      fbq('Contact', {
        content_name: event,
        content_category: 'contact',
        ...eventParams
      })
      break

    case 'click_directions':
      fbq('FindLocation', eventParams)
      break

    case 'click_reviews_view':
    case 'click_reviews_write':
      fbq('ViewContent', {
        content_type: 'reviews',
        content_name: event,
        ...eventParams
      })
      break

    case 'hero_video_interaction':
      fbq('ViewContent', {
        content_type: 'video',
        content_name: 'hero_video',
        ...eventParams
      })
      break

    default:
      fbq('trackCustom', event)
  }
}

// Declaraciones de tipos para TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string | Record<string, any>, config?: Record<string, any>) => void
    fbq: (command: string, ...args: any[]) => void
    dataLayer: Record<string, any>[]
  }
}