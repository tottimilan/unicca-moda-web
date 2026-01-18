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
    <section className="relative bg-gradient-to-b from-stone-50 to-white py-10 md:py-16 lg:py-28 overflow-hidden">
      {/* Decorative elements - oculto en móvil */}
      <div className="hidden md:block absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-stone-100/50 to-transparent pointer-events-none"></div>
      
      <div className="container px-4 relative">
        {/* En móvil: primero video, luego contenido */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Contenido */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <p className="text-primary font-medium tracking-wide uppercase text-xs md:text-sm">
                {siteConfig.tagline}
              </p>
              <h1 className="text-3xl md:text-4xl font-light tracking-tight lg:text-5xl xl:text-6xl leading-tight">
                Moda de mujer en <span className="italic">Chamartín</span>
                <span className="block mt-1 md:mt-2 text-primary font-normal">Tallas 38–60</span>
              </h1>
              <div className="space-y-2 md:space-y-3 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                <p>{siteConfig.pages.home.heroSubtitle[0]}</p>
                <p className="hidden md:block">{siteConfig.pages.home.heroSubtitle[1]}</p>
              </div>
            </div>

            {/* CTAs principales */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <CTAWhatsApp size="lg" className="w-full sm:w-auto" />
              <Button
                asChild
                variant="outline"
                size="lg"
                onClick={handleDirectionsClick}
                className="w-full sm:w-auto"
              >
                <a
                  href={siteConfig.links.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <MapPin className="h-4 w-4" />
                  {siteConfig.copy.ctaDirections}
                </a>
              </Button>
            </div>

            {/* Info rápida - oculto en móvil pequeño */}
            <div className="hidden sm:flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground pt-4 border-t border-stone-200 justify-center lg:justify-start">
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
          <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
            <div 
              className="aspect-[4/5] bg-stone-100 rounded-sm shadow-xl overflow-hidden relative cursor-pointer group"
              onClick={handlePlayClick}
            >
              {/* Imagen siempre visible como fondo */}
              <Image
                src="/Hero/video1.png"
                alt="Unicca Moda - Tienda de moda de mujer en Chamartín"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Video superpuesto */}
              <video
                ref={videoRef}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  isPlaying ? 'opacity-100' : 'opacity-0'
                }`}
                poster="/Hero/video1.png"
                loop
                muted={isMuted}
                playsInline
                preload="none"
              >
                <source src="/Hero/Unicca video1.mp4" type="video/mp4" />
              </video>

              {/* Play button overlay */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                  <Play className="h-6 w-6 text-primary fill-primary" />
                </div>
              </div>

              {/* Pause indicator */}
              {isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/40 backdrop-blur-sm rounded-full p-3">
                    <Pause className="h-5 w-5 text-white" />
                  </div>
                </div>
              )}

              {/* Mute/Unmute button */}
              {isPlaying && (
                <button
                  onClick={handleMuteToggle}
                  className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-2.5 text-white z-10"
                  aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                >
                  {isMuted ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </button>
              )}
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-3 left-2 md:-bottom-4 md:left-0 bg-primary text-primary-foreground px-4 py-2 md:px-5 md:py-3 shadow-lg">
              <p className="text-[10px] uppercase tracking-wider opacity-80">Desde hace</p>
              <p className="text-lg md:text-xl font-light">15+ años</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
