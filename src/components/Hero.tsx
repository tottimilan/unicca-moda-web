'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { Button } from '@/components/ui/button'
import { MapPin, Play, Volume2, VolumeX, Pause } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleDirectionsClick = () => {
    trackEvent('click_directions', {
      page: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
      button_location: 'hero'
    })
  }

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
      trackEvent('hero_video_interaction', {
        action: isPlaying ? 'pause' : 'play'
      })
    }
  }

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
      trackEvent('hero_video_interaction', {
        action: isMuted ? 'unmute' : 'mute'
      })
    }
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

          {/* Video/Imagen Hero */}
          <div className="relative">
            <div 
              className="aspect-[4/5] bg-stone-100 rounded-sm shadow-xl overflow-hidden relative cursor-pointer group"
              onClick={handlePlayClick}
            >
              {/* Video */}
              <video
                ref={videoRef}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  isPlaying ? 'opacity-100' : 'opacity-0'
                }`}
                src="/Hero/Unicca video1.mp4"
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
              />

              {/* Thumbnail (imagen de portada) */}
              <div 
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <Image
                  src="/Hero/video1.png"
                  alt="Unicca Moda - Tienda de moda de mujer en Chamartín"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Play button overlay */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-5 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-8 w-8 text-primary fill-primary" />
                </div>
              </div>

              {/* Pause indicator (shows briefly on pause) */}
              {isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/40 backdrop-blur-sm rounded-full p-4">
                    <Pause className="h-6 w-6 text-white" />
                  </div>
                </div>
              )}

              {/* Mute/Unmute button */}
              {isPlaying && (
                <button
                  onClick={handleMuteToggle}
                  className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-3 text-white hover:bg-black/70 transition-all duration-300 z-10"
                  aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </button>
              )}

              {/* Decorative frame */}
              <div className="absolute inset-4 border border-white/30 rounded-sm pointer-events-none"></div>
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
