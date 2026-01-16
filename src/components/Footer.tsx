import Link from 'next/link'
import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'
import { Instagram, Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Información de la tienda */}
          <div className="space-y-6">
            <h3 
              className="text-xl font-bold text-primary tracking-wide"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              UNICCA
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>{siteConfig.address.full}</p>
              <p>{siteConfig.phone}</p>
            </div>
            <p className="text-sm font-medium text-foreground italic">
              {siteConfig.tagline}
            </p>
            <CTAWhatsApp variant="outline" size="sm" />
          </div>

          {/* Horario */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-widest text-foreground">
              Horario
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between gap-4">
                <span>Lunes - Viernes</span>
                <span className="text-foreground">11:00–14:00, 17:30–21:00</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sábado</span>
                <span className="text-foreground">11:00–14:00</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Domingo</span>
                <span className="text-foreground">Cerrado</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-widest text-foreground">
              Explorar
            </h4>
            <nav className="flex flex-col space-y-3 text-sm">
              <Link
                href="/tallas-38-60"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Tallas 38–60
              </Link>
              <Link
                href="/asesoria"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Asesoría con Conchi
              </Link>
              <Link
                href="/galeria"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Galería
              </Link>
              <Link
                href="/opiniones"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Opiniones
              </Link>
            </nav>
          </div>

          {/* Redes sociales */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-widest text-foreground">
              Síguenos
            </h4>
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-stone-200 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-stone-200 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Enlaces legales */}
        <div className="mt-12 pt-8 border-t border-stone-200">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {siteConfig.name}. Todos los derechos reservados.
            </p>
            <nav className="flex gap-6 text-sm">
              <Link
                href="/aviso-legal"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Aviso legal
              </Link>
              <Link
                href="/politica-privacidad"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacidad
              </Link>
              <Link
                href="/politica-cookies"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Cookies
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}