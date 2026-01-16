import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Unicca Moda',
  description: 'Política de privacidad y protección de datos personales en Unicca Moda',
}

export default function PoliticaPrivacidadPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Responsable del Tratamiento</h2>
          <p className="mb-4">
            En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD), y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se facilita la siguiente información sobre el tratamiento de datos personales:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Responsable:</strong> Unicca Moda</li>
            <li><strong>Dirección:</strong> C. de Cartagena, 138, Chamartín, 28002 Madrid</li>
            <li><strong>Teléfono:</strong> +34 639 42 97 80</li>
            <li><strong>Email:</strong> contacto@uniccamoda.com</li>
            <li><strong>Finalidad:</strong> Comercio al por menor de prendas de vestir</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Datos Personales Recopilados</h2>
          <p className="mb-4">
            Unicca Moda no recopila datos personales a través de formularios web, ya que toda la comunicación se realiza directamente por WhatsApp. Sin embargo, podemos recopilar la siguiente información:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Datos de navegación:</strong> Información técnica sobre su dispositivo y navegación (IP, navegador, etc.)</li>
            <li><strong>Cookies:</strong> Pequeños archivos que se almacenan en su dispositivo para mejorar la experiencia</li>
            <li><strong>Datos proporcionados voluntariamente:</strong> Información que nos facilita a través de WhatsApp o redes sociales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Finalidad del Tratamiento</h2>
          <p className="mb-4">
            Los datos personales recopilados se utilizan únicamente para las siguientes finalidades:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gestionar y responder a sus consultas y solicitudes de información</li>
            <li>Mejorar la experiencia de navegación en nuestro sitio web</li>
            <li>Cumplir con obligaciones legales</li>
            <li>Analizar el uso del sitio web para mejorar nuestros servicios</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Base Legal</h2>
          <p className="mb-4">
            El tratamiento de sus datos personales se basa en:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Consentimiento:</strong> Cuando nos facilita datos voluntariamente</li>
            <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y sitio web</li>
            <li><strong>Cumplimiento de obligaciones legales:</strong> Cuando sea requerido por ley</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Conservación de Datos</h2>
          <p className="mb-4">
            Conservamos sus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recopilados:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Datos de navegación:</strong> Hasta 26 meses según la Ley de Servicios de la Sociedad de la Información</li>
            <li><strong>Datos proporcionados:</strong> Mientras mantengamos una relación comercial o hasta que solicite su eliminación</li>
            <li><strong>Datos para fines legales:</strong> Durante el tiempo establecido por la legislación aplicable</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Compartir Datos</h2>
          <p className="mb-4">
            Unicca Moda no vende, alquila ni comparte sus datos personales con terceros, salvo en los siguientes casos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cuando sea necesario para prestar nuestros servicios (proveedores técnicos)</li>
            <li>Cuando lo exija la ley o una autoridad competente</li>
            <li>Con su consentimiento expreso</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Sus Derechos</h2>
          <p className="mb-4">
            De acuerdo con el RGPD, usted tiene derecho a:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Acceder</strong> a sus datos personales</li>
            <li><strong>Rectificar</strong> datos inexactos o incompletos</li>
            <li><strong>Suprimir</strong> sus datos personales</li>
            <li><strong>Limitar</strong> el tratamiento de sus datos</li>
            <li><strong>Oponerse</strong> al tratamiento</li>
            <li><strong>Portabilidad</strong> de sus datos</li>
          </ul>
          <p>
            Para ejercer estos derechos, puede contactar con nosotros a través de WhatsApp al +34 639 42 97 80.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Cookies</h2>
          <p className="mb-4">
            Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Para más información detallada sobre las cookies que utilizamos, consulte nuestra <a href="/politica-cookies" className="text-primary hover:underline">Política de Cookies</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Seguridad</h2>
          <p>
            Implementamos medidas técnicas y organizativas apropiadas para garantizar la seguridad de sus datos personales y prevenir su alteración, pérdida, tratamiento o acceso no autorizado, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a los que están expuestos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Contacto</h2>
          <p>
            Si tiene cualquier duda sobre esta política de privacidad o desea ejercer sus derechos, puede contactar con nosotros:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>WhatsApp:</strong> +34 639 42 97 80</li>
            <li><strong>Dirección:</strong> C. de Cartagena, 138, Chamartín, 28002 Madrid</li>
            <li><strong>Email:</strong> contacto@uniccamoda.com</li>
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