'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Tallas 38–60', href: '/tallas-38-60' },
  { name: 'Asesoría', href: '/asesoria' },
  { name: 'Galería', href: '/galeria' },
  { name: 'Opiniones', href: '/opiniones' },
  { name: 'Contacto', href: '/contacto' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white">
      <div className="container px-4 flex h-14 md:h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
          <span 
            className="text-xl md:text-2xl font-bold text-primary tracking-wide"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            UNICCA
          </span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary relative py-1",
                pathname === item.href
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
              {pathname === item.href && (
                <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA WhatsApp + Menu button */}
        <div className="flex items-center gap-2 md:gap-4">
          <CTAWhatsApp size="sm" className="hidden md:inline-flex" />
          
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -mr-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Simple dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-14 left-0 right-0 bg-white border-b border-stone-200 shadow-lg z-40">
          <nav className="container px-4 py-4">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block py-3 px-3 rounded-md transition-colors",
                    pathname === item.href
                      ? "text-primary font-medium bg-stone-50"
                      : "text-foreground hover:bg-stone-50"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-stone-100">
              <CTAWhatsApp className="w-full justify-center" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}