import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal | Unicca Moda',
  description: 'Aviso legal y condiciones de uso del sitio web de Unicca Moda',
}

export default function AvisoLegalPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Aviso Legal</h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Información General</h2>
          <p className="mb-4">
            En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan los siguientes datos de información general de este sitio web:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Razón Social:</strong> Unicca Moda</li>
            <li><strong>Dirección:</strong> C. de Cartagena, 138, Chamartín, 28002 Madrid</li>
            <li><strong>Teléfono:</strong> +34 639 42 97 80</li>
            <li><strong>Email:</strong> contacto@uniccamoda.com</li>
            <li><strong>Actividad:</strong> Comercio al por menor de prendas de vestir</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Condiciones de Uso</h2>
          <p className="mb-4">
            La utilización del sitio web de Unicca Moda implica la aceptación plena y sin reservas de todas y cada una de las condiciones generales de uso que se indican a continuación:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>El usuario se compromete a utilizar el sitio web de forma diligente y correcta.</li>
            <li>No se permitirá ninguna actuación que vulnere la legalidad, derechos o intereses de terceros.</li>
            <li>Unicca Moda se reserva el derecho a modificar las condiciones de uso sin previo aviso.</li>
            <li>Los contenidos del sitio web son propiedad de Unicca Moda o de sus licenciadores.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Propiedad Intelectual</h2>
          <p className="mb-4">
            Todos los contenidos del sitio web, incluyendo pero no limitándose a textos, imágenes, gráficos, logotipos, iconos, software y cualquier otro material, son propiedad intelectual de Unicca Moda o de sus proveedores de contenidos y están protegidos por las leyes españolas e internacionales de propiedad intelectual.
          </p>
          <p>
            Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación de los contenidos sin la autorización expresa y por escrito de Unicca Moda.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Limitación de Responsabilidad</h2>
          <p className="mb-4">
            Unicca Moda no se hace responsable de los daños y perjuicios de cualquier naturaleza que puedan derivarse de:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>La interrupción del funcionamiento del sitio web</li>
            <li>La inexactitud, incompletitud o actualización de los contenidos</li>
            <li>La presencia de virus u otros elementos lesivos</li>
            <li>El uso indebido del sitio web por parte de los usuarios</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Enlaces a Terceros</h2>
          <p className="mb-4">
            El sitio web puede contener enlaces a otros sitios web gestionados por terceros. Unicca Moda no controla ni se hace responsable del contenido, políticas de privacidad o prácticas de estos sitios web externos.
          </p>
          <p>
            La inclusión de enlaces no implica la aprobación o asociación con dichos sitios por parte de Unicca Moda.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Legislación Aplicable</h2>
          <p>
            Las presentes condiciones de uso se rigen por la legislación española. Para cualquier controversia que pudiera derivarse de la interpretación o aplicación de las presentes condiciones, las partes se someten expresamente a la jurisdicción de los tribunales de Madrid, renunciando a cualquier otro fuero que pudiera corresponderles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Contacto</h2>
          <p>
            Para cualquier consulta relacionada con el aviso legal o las condiciones de uso, puede contactar con nosotros a través de WhatsApp al +34 639 42 97 80 o visitándonos en nuestra tienda física en C. de Cartagena, 138, Chamartín, 28002 Madrid.
          </p>
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