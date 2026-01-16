import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies | Unicca Moda',
  description: 'Política de cookies y cómo gestionamos las cookies en Unicca Moda',
}

export default function PoliticaCookiesPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Política de Cookies</h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. ¿Qué son las Cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o teléfono móvil) cuando visita nuestro sitio web. Estas cookies permiten recordar sus preferencias, analizar el uso del sitio y mejorar su experiencia de navegación.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. ¿Qué Cookies Utilizamos?</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-3">2.1 Cookies Técnicas Esenciales</h3>
              <p className="mb-2">Son necesarias para el funcionamiento básico del sitio web:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Cookies de sesión:</strong> Mantienen su sesión activa mientras navega</li>
                <li><strong>Cookies de configuración:</strong> Recuerdan sus preferencias de idioma y configuración</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">2.2 Cookies de Análisis</h3>
              <p className="mb-2">Nos ayudan a entender cómo utiliza nuestro sitio web:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Google Analytics:</strong> Analiza el tráfico y comportamiento de los usuarios</li>
                <li><strong>Meta Pixel:</strong> Mide la efectividad de nuestras campañas publicitarias</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">2.3 Cookies de Funcionalidad</h3>
              <p className="mb-2">Mejoran su experiencia en el sitio:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Cookies de preferencias:</strong> Recuerdan sus configuraciones personalizadas</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Finalidad de las Cookies</h2>
          <p className="mb-4">
            Utilizamos cookies para los siguientes propósitos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Garantizar el funcionamiento del sitio web</strong></li>
            <li><strong>Analizar el tráfico y uso del sitio</strong></li>
            <li><strong>Mejorar la experiencia del usuario</strong></li>
            <li><strong>Medir la efectividad de nuestras campañas</strong></li>
            <li><strong>Recordar sus preferencias y configuraciones</strong></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Cookies de Terceros</h2>
          <p className="mb-4">
            Nuestro sitio web puede contener cookies de servicios de terceros:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Google Analytics:</strong> Servicio de análisis web proporcionado por Google Inc.
              <br /><small>Política de privacidad: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">policies.google.com/privacy</a></small>
            </li>
            <li>
              <strong>Meta Pixel:</strong> Servicio de seguimiento de conversiones de Meta Platforms Inc.
              <br /><small>Política de privacidad: <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">facebook.com/privacy/policy</a></small>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Duración de las Cookies</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cookies de sesión:</strong> Se eliminan cuando cierra el navegador</li>
            <li><strong>Cookies persistentes:</strong> Permanecen en su dispositivo durante un período determinado (generalmente 26 meses según la ley)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Gestión de Cookies</h2>
          <p className="mb-4">
            Puede gestionar las cookies de las siguientes formas:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Configuración del Navegador</h3>
              <p>
                Puede configurar su navegador para aceptar, rechazar o eliminar cookies. La configuración varía según el navegador que utilice. Consulte la ayuda de su navegador para más información.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Herramientas de Opt-out</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out</a></li>
                <li><a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Facebook Pixel Opt-out</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Consentimiento</h2>
          <p>
            Al continuar navegando por nuestro sitio web, usted acepta el uso de cookies según esta política. Si no está de acuerdo con el uso de cookies, puede desactivarlas en la configuración de su navegador o utilizar las herramientas de opt-out mencionadas anteriormente.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Actualizaciones de la Política</h2>
          <p>
            Podemos actualizar esta política de cookies en cualquier momento. Le recomendamos que revise esta página periódicamente para estar informado sobre cualquier cambio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contacto</h2>
          <p>
            Si tiene alguna pregunta sobre nuestra política de cookies, puede contactar con nosotros:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>WhatsApp:</strong> +34 639 42 97 80</li>
            <li><strong>Dirección:</strong> C. de Cartagena, 138, Chamartín, 28002 Madrid</li>
          </ul>
        </section>

        <section className="border-t pt-8 mt-12">
          <p className="text-sm text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </section>
      </div>
    </div>
  )
}