import Link from 'next/link'
import { siteConfig } from '@/content/site'
import { CTAWhatsApp } from '@/components/CTAWhatsApp'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Información de la tienda */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{siteConfig.name}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{siteConfig.address.full}</p>
              <p>{siteConfig.phone}</p>
              <p className="font-medium text-foreground">{siteConfig.tagline}</p>
            </div>
            <CTAWhatsApp variant="outline" size="sm" />
          </div>

          {/* Horario */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Horario
            </h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span>11:00–14:00 / 17:30–21:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado:</span>
                <span>11:00–14:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo:</span>
                <span>Cerrado</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Enlaces
            </h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                href="/tallas-38-60"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Tallas 38–60
              </Link>
              <Link
                href="/asesoria"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Asesoría con Conchi
              </Link>
              <Link
                href="/galeria"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Galería
              </Link>
              <Link
                href="/opiniones"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Opiniones
              </Link>
            </nav>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Síguenos
            </h4>
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.996.014 6.79.067c-1.206.053-2.03.24-2.747.51A5.152 5.152 0 002.047 1.32a5.152 5.152 0 00-1.812 1.812A5.152 5.152 0 00-.51 5.25c-.27.717-.457 1.54-.51 2.747C-.986 8.204-1 8.604-1 12.017s.014 3.813.067 4.96c.053 1.206.24 2.03.51 2.747a5.152 5.152 0 001.812 1.812 5.152 5.152 0 002.438.762c.717.27 1.54.457 2.747.51 1.206.053 1.606.067 4.96.067s3.813-.014 4.96-.067c1.206-.053 2.03-.24 2.747-.51a5.152 5.152 0 002.438-1.812 5.152 5.152 0 001.812-1.812c.27-.717.457-1.54.51-2.747.053-1.206.067-1.606.067-4.96s-.014-3.813-.067-4.96c-.053-1.206-.24-2.03-.51-2.747a5.152 5.152 0 00-1.812-1.812 5.152 5.152 0 00-2.438-.762c-.717-.27-1.54-.457-2.747-.51C16.83.014 16.43 0 13.017 0c-3.613 0-4.013.014-5.22.067z"/>
                </svg>
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Enlaces legales */}
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {siteConfig.name}. Todos los derechos reservados.
            </p>
            <nav className="flex space-x-6 text-sm">
              <Link
                href="/aviso-legal"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Aviso legal
              </Link>
              <Link
                href="/politica-privacidad"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacidad
              </Link>
              <Link
                href="/politica-cookies"
                className="text-muted-foreground hover:text-foreground transition-colors"
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