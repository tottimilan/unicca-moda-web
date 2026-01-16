'use client'

import Link from 'next/link'
import { useState } from 'react'
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span 
            className="text-2xl font-bold text-primary tracking-wide"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            UNICCA
          </span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm">
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

        {/* CTA WhatsApp */}
        <div className="flex items-center gap-4">
          <CTAWhatsApp size="sm" className="hidden md:inline-flex" />
          
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white">
          <nav className="container py-4 flex flex-col space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "py-3 px-4 transition-colors",
                  pathname === item.href
                    ? "text-primary font-medium bg-stone-50"
                    : "text-muted-foreground hover:text-foreground hover:bg-stone-50"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <CTAWhatsApp className="w-full justify-center" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}