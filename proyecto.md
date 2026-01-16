## Site-map (rutas y menú)

**Menú principal**

* `/` Inicio
* `/tallas-38-60` Tallas 38–60
* `/asesoria` Asesoría con Conchi
* `/galeria` Galería
* `/opiniones` Opiniones
* `/contacto` Contacto y cómo llegar

**Páginas legales (footer)**

* `/aviso-legal`
* `/politica-privacidad`
* `/politica-cookies`

**SEO técnico**

* `/sitemap.xml`
* `/robots.txt`

---

<pre class="overflow-visible! px-0!" data-start="580" data-end="9638"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(--spacing(9)+var(--header-height))] @w-xl/main:top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-md"><span><span># UNICCA MODA — Web Spec (Cursor-ready)</span><span>
Versión: 1.0
Stack recomendado: Next.js (App Router) + TypeScript + Tailwind + (opcional) shadcn/ui
Hosting: Railway
Objetivo: SEO local + landing para Google Ads y Meta Ads. Sin e-commerce. Sin formularios. Todo por WhatsApp.

---

</span><span>## 0) Datos del negocio (NAP fijo)</span><span>
Nombre: Unicca Moda  
Dirección: C. de Cartagena, 138, Chamartín, 28002 Madrid  
Teléfono: +34 639 42 97 80  
WhatsApp: +34 639 42 97 80  
Instagram: https://www.instagram.com/unicca</span><span>_moda_</span><span>/  
Facebook: https://www.facebook.com/Uniccamoda  

Horario:
</span><span>-</span><span> Lunes: 11:00–14:00, 17:30–21:00
</span><span>-</span><span> Martes: 11:00–14:00, 17:30–21:00
</span><span>-</span><span> Miércoles: 11:00–14:00, 17:30–21:00
</span><span>-</span><span> Jueves: 11:00–14:00, 17:30–21:00
</span><span>-</span><span> Viernes: 11:00–14:00, 17:30–21:00
</span><span>-</span><span> Sábado: 11:00–14:00
</span><span>-</span><span> Domingo: Cerrado

Claim y mensajes del local:
</span><span>-</span><span> “Siéntete Unicca”
</span><span>-</span><span> “Ropa para cada mujer”
</span><span>-</span><span> “Tallas 38–60”

---

</span><span>## 1) Objetivo y KPIs</span><span>
</span><span>### Objetivo principal</span><span>
Generar visitas a tienda y contactos directos por WhatsApp.

</span><span>### Acciones clave (conversión)</span><span>
1) Click a WhatsApp (principal)
2) Click a Llamar
3) Click a Cómo llegar (Google Maps)
4) Click a Ver reseñas / Dejar reseña

</span><span>### KPI mínimo</span><span>
</span><span>-</span><span> % clicks WhatsApp por sesión
</span><span>-</span><span> % clicks Cómo llegar por sesión
</span><span>-</span><span> % clicks Llamar por sesión

---

</span><span>## 2) Estrategia WhatsApp (sin formularios)</span><span>
</span><span>### Regla</span><span>
No hay formularios. Todos los CTAs abren WhatsApp con mensaje pre-rellenado.

</span><span>### Enlaces WhatsApp (formato)</span><span>
Usar wa.me con teléfono en internacional sin +:
</span><span>-</span><span> Base: https://wa.me/34639429780?text=</span><span><span class="language-xml"><TEXTO_URL_ENCODED</span></span><span>>

</span><span>### Mensajes pre-rellenados (usar según contexto)</span><span>
</span><span>-</span><span> General:
  "Hola Conchi, vengo de la web de Unicca Moda. ¿Me ayudas a encontrar un look?"
</span><span>-</span><span> Tallas:
  "Hola Conchi, vengo de la web. Busco un look en talla __ (aprox). ¿Qué me recomiendas?"
</span><span>-</span><span> Evento:
  "Hola Conchi, tengo un evento y necesito un look. ¿Puedo pasar hoy o mañana?"
</span><span>-</span><span> Reservar visita:
  "Hola Conchi, ¿a qué hora suele haber menos gente para que me asesores con calma?"
</span><span>-</span><span> Complementos:
  "Hola Conchi, busco complementos (bolso/pañuelo/joyita). ¿Tienes novedades?"

</span><span>### Botones fijos (sticky)</span><span>
</span><span>-</span><span> Botón flotante WhatsApp (siempre visible)
</span><span>-</span><span> Botón “Cómo llegar”
</span><span>-</span><span> Botón “Llamar”

---

</span><span>## 3) Arquitectura de información (Site-map)</span><span>
</span><span>### Menú</span><span>
</span><span>-</span><span> Inicio: </span><span>`/`</span><span>
</span><span>-</span><span> Tallas 38–60: </span><span>`/tallas-38-60`</span><span>
</span><span>-</span><span> Asesoría con Conchi: </span><span>`/asesoria`</span><span>
</span><span>-</span><span> Galería: </span><span>`/galeria`</span><span>
</span><span>-</span><span> Opiniones: </span><span>`/opiniones`</span><span>
</span><span>-</span><span> Contacto y cómo llegar: </span><span>`/contacto`</span><span>

</span><span>### Footer</span><span>
</span><span>-</span><span> Aviso legal: </span><span>`/aviso-legal`</span><span>
</span><span>-</span><span> Privacidad: </span><span>`/politica-privacidad`</span><span>
</span><span>-</span><span> Cookies: </span><span>`/politica-cookies`</span><span>
</span><span>-</span><span> Redes sociales
</span><span>-</span><span> NAP y horario

---

</span><span>## 4) Diseño (moderno, sencillo, con color en fotos)</span><span>
</span><span>### Idea visual</span><span>
Fondo limpio y tipografía elegante. Las fotos aportan el color.
</span><span>-</span><span> Base: blanco / negro / grises
</span><span>-</span><span> Acento: un color inspirado en la fachada floral (elegir 1 acento y mantenerlo)

</span><span>### Tipografías (sugerencia)</span><span>
</span><span>-</span><span> Titulares: serif elegante
</span><span>-</span><span> Texto: sans legible

</span><span>### Componentes clave</span><span>
</span><span>-</span><span> Header con navegación + CTA WhatsApp
</span><span>-</span><span> Hero con imagen potente de interior/escaparate
</span><span>-</span><span> Cards (3–6) para beneficios
</span><span>-</span><span> Galería tipo masonry
</span><span>-</span><span> Bloque de reseñas (manual, 6–10 reseñas cortas)
</span><span>-</span><span> Bloque “Visítanos” con mapa y horario
</span><span>-</span><span> Footer completo (NAP + legal)

---

</span><span>## 5) Contenido y copy por página</span><span>
</span><span>### 5.1 Inicio `/`</span><span>
</span><span>**Meta title**</span><span>
Unicca Moda | Ropa de mujer en Chamartín | Tallas 38–60

</span><span>**Meta description**</span><span>
Moda de mujer en Chamartín (Madrid). Tallas 38–60, ropa con color y asesoría personal con Conchi. Ven a probarte y sal vestida sí o sí.

</span><span>**H1**</span><span>
Moda de mujer en Chamartín. Tallas 38–60.

</span><span>**Hero subtexto (2 líneas)**</span><span>
Ropa para cada mujer: del estilo clásico al más moderno.
Asesoría cercana para encontrar tu look.

</span><span>**CTAs**</span><span>
</span><span>-</span><span> “Escribir por WhatsApp”
</span><span>-</span><span> “Cómo llegar”
</span><span>-</span><span> “Llamar”

</span><span>**Secciones (orden)**</span><span>
1) Hero (foto interior + H1 + CTAs)
2) 3 pilares (cards):
</span><span>   -</span><span> Tallas 38–60
</span><span>   -</span><span> Asesoría con Conchi
</span><span>   -</span><span> Estilo con color y cortes favorecedores
3) “Sales vestida sí o sí” (texto corto + 3 reseñas)
4) “Novedades” (explicar rotación):
   “Traemos prendas diferentes cada semana. Ven a descubrir lo nuevo.”
5) Galería destacada (6–10 fotos)
6) Opiniones (6 reseñas cortas + botón “Ver reseñas”)
7) Visítanos (horario + dirección + mapa + CTAs)

---

</span><span>### 5.2 Tallas 38–60 `/tallas-38-60`</span><span>
</span><span>**Meta title**</span><span>
Tallas 38–60 en Madrid | Unicca Moda Chamartín

</span><span>**Meta description**</span><span>
Especialistas en tallas 38–60 en Chamartín. Prendas seleccionadas, cortes favorecedores y asesoría personal. Escríbenos por WhatsApp y ven a probártelo.

</span><span>**H1**</span><span>
Tallas 38–60. Ropa para cada mujer.

</span><span>**Secciones**</span><span>
1) Hero (foto de tienda + H1 + CTA WhatsApp)
2) “El estilo no tiene talla” (3 bullets):
</span><span>   -</span><span> Cortes que favorecen
</span><span>   -</span><span> Comodidad y estilo
</span><span>   -</span><span> Asesoría real en tienda
3) “Qué encontrarás” (categorías genéricas, sin inventar stock):
</span><span>   -</span><span> Vestidos
</span><span>   -</span><span> Abrigos y chaquetas
</span><span>   -</span><span> Pantalones
</span><span>   -</span><span> Blusas y punto
</span><span>   -</span><span> Complementos
4) FAQ (sin blog, pero SEO):
</span><span>   -</span><span> ¿Qué tallas trabajáis? (38–60)
</span><span>   -</span><span> ¿Me ayudáis a elegir? (sí, asesoría)
</span><span>   -</span><span> ¿Tenéis ropa para eventos? (sí, suele haber opciones)
</span><span>   -</span><span> ¿Cada cuánto cambian las prendas? (novedades frecuentes)
5) CTA final:
   “Dime tu talla aproximada y qué ocasión tienes y te guío por WhatsApp.”

---

</span><span>### 5.3 Asesoría `/asesoria`</span><span>
</span><span>**Meta title**</span><span>
Asesoría de estilo en tienda | Unicca Moda Madrid

</span><span>**Meta description**</span><span>
Conchi te asesora para encontrar el look que mejor te sienta. Ven con una idea o déjate guiar. Escríbenos por WhatsApp y te ayudamos.

</span><span>**H1**</span><span>
Asesoría cercana para encontrar tu look.

</span><span>**Secciones**</span><span>
1) Hero + CTA WhatsApp
2) “Cómo funciona” (pasos simples):
</span><span>   1.</span><span> Nos escribes por WhatsApp
</span><span>   2.</span><span> Nos cuentas qué buscas (diario, trabajo, evento)
</span><span>   3.</span><span> Vienes a tienda y te probamos opciones
3) “Para qué ocasiones” (cards):
</span><span>   -</span><span> Diario con estilo
</span><span>   -</span><span> Oficina
</span><span>   -</span><span> Eventos
</span><span>   -</span><span> Viajes y fines de semana
4) CTA final:
   “¿Vienes hoy? Escríbenos y te digo el mejor momento para pasar.”

---

</span><span>### 5.4 Galería `/galeria`</span><span>
</span><span>**Meta title**</span><span>
Galería | Unicca Moda Chamartín

</span><span>**Meta description**</span><span>
Descubre el ambiente de Unicca Moda y su estilo: color, variedad y prendas para cada mujer. Visítanos en Chamartín.

</span><span>**H1**</span><span>
Unicca por dentro: color, estilo y variedad.

</span><span>**Secciones**</span><span>
1) Galería masonry (fotos de interior, detalles, escaparate)
2) Mini texto:
   “Las colecciones cambian continuamente. Lo mejor es venir a descubrirlas.”
3) CTA WhatsApp

</span><span>**Nota**</span><span>
Optimizar imágenes: webp/avif, blur placeholder, lazy.

---

</span><span>### 5.5 Opiniones `/opiniones`</span><span>
</span><span>**Meta title**</span><span>
Opiniones de Unicca Moda | Tienda de ropa en Chamartín

</span><span>**Meta description**</span><span>
Clientes que repiten por la variedad, la atención y las tallas 38–60. Lee opiniones reales y deja la tuya.

</span><span>**H1**</span><span>
Opiniones reales. Atención de verdad.

</span><span>**Secciones**</span><span>
1) Bloque de citas (6–12 reseñas cortas, sin nombres si no quieres)
2) Botones:
</span><span>   -</span><span> “Ver reseñas en Google”
</span><span>   -</span><span> “Dejar reseña”
3) CTA WhatsApp

</span><span>**Implementación**</span><span>
</span><span>-</span><span> Enlace “Ver reseñas”: link al perfil de Google (pendiente de URL exacta).
</span><span>-</span><span> Enlace “Dejar reseña”: link directo a la pantalla de reseña (pendiente de URL exacta).
</span><span>-</span><span> Si más adelante se quiere widget: Elfsight/EmbedSocial (no ahora).

---

</span><span>### 5.6 Contacto `/contacto`</span><span>
</span><span>**Meta title**</span><span>
Contacto | Unicca Moda | C/ Cartagena 138, Chamartín

</span><span>**Meta description**</span><span>
Visítanos en C. de Cartagena 138 (Chamartín). Horario actualizado, WhatsApp y teléfono. Te ayudamos a encontrar tu look.

</span><span>**H1**</span><span>
Visítanos en Chamartín.

</span><span>**Secciones**</span><span>
1) Dirección + horario (en texto)
2) Botones:
</span><span>   -</span><span> WhatsApp
</span><span>   -</span><span> Llamar
</span><span>   -</span><span> Cómo llegar
3) Mapa embebido (Google Maps iframe)
4) Cómo llegar (texto corto):
</span><span>   -</span><span> “Estamos en C/ Cartagena 138, Chamartín, Madrid.”

---

</span><span>## 6) SEO técnico (sin blog)</span><span>
</span><span>### Requisitos</span><span>
</span><span>-</span><span> Titles y meta descriptions por página
</span><span>-</span><span> Open Graph y Twitter cards
</span><span>-</span><span> Canonical por página
</span><span>-</span><span></span><span>`sitemap.xml`</span><span> automático
</span><span>-</span><span></span><span>`robots.txt`</span><span> correcto
</span><span>-</span><span> Core Web Vitals: LCP < 2.5s en móvil (optimizar imágenes)

</span><span>### Estructura de headings</span><span>
</span><span>-</span><span> 1 H1 por página
</span><span>-</span><span> H2 para secciones
</span><span>-</span><span> Evitar bloques largos sin texto (Google necesita texto real)

</span><span>### NAP consistente</span><span>
Repetir exactamente el mismo formato de nombre, dirección, teléfono en footer y contacto.

---

</span><span>## 7) Schema (JSON-LD)</span><span>
Crear </span><span>`LocalBusiness`</span><span> / </span><span>`ClothingStore`</span><span> en layout global.

Plantilla (rellenar </span><span>`url`</span><span> y </span><span>`sameAs`</span><span>):
```json
{
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  "name": "Unicca Moda",
  "telephone": "+34639429780",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C. de Cartagena, 138",
    "addressLocality": "Madrid",
    "postalCode": "28002",
    "addressRegion": "Madrid",
    "addressCountry": "ES"
  },
  "openingHoursSpecification": [
    {"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"11:00","closes":"14:00"},
    {"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"17:30","closes":"21:00"},
    {"@type":"OpeningHoursSpecification","dayOfWeek":["Saturday"],"opens":"11:00","closes":"14:00"}
  ],
  "sameAs": [
    "https://www.instagram.com/unicca_moda_/",
    "https://www.facebook.com/Uniccamoda"
  ]
}
</span></span></code></div></div></pre>

---

## 8) Tracking (GA4 + Meta) sin formularios

### Eventos a disparar

* `click_whatsapp` (con label: page + button_location)
* `click_call`
* `click_directions`
* `click_reviews_view`
* `click_reviews_write`

### Implementación

* Usar GTM o implementación directa en Next con `window.gtag` y Meta Pixel.
* Registrar eventos en todos los CTAs principales y en el botón flotante.

---

## 9) Enlaces clave (generar)

### Cómo llegar

Google Maps link (base):

[https://www.google.com/maps/search/?api=1&amp;query=C.%20de%20Cartagena%2C%20138%2C%2028002%20Madrid]()

### Llamar

tel:+34639429780

### WhatsApp

[https://wa.me/34639429780?text=Hola%20Conchi%2C%20vengo%20de%20la%20web%20de%20Unicca%20Moda.%20%C2%BFMe%20ayudas%20a%20encontrar%20un%20look%3F]()

---

## 10) Assets (fotos)

### Reglas

* Convertir a webp/avif
* Anchos responsivos (320, 640, 1024, 1600)
* Alt text descriptivo (SEO + accesibilidad)

### Alt texts sugeridos (ejemplos)

* "Interior de Unicca Moda con prendas de mujer en exposición"
* "Escaparate de Unicca Moda en Chamartín con decoración floral"
* "Zona de mostrador 'Siéntete Unicca' dentro de la tienda"
* "Perchero con prendas coloridas de moda de mujer"

---

## 11) Implementación Next.js (estructura)

### Rutas

* `app/page.tsx` (Inicio)
* `app/tallas-38-60/page.tsx`
* `app/asesoria/page.tsx`
* `app/galeria/page.tsx`
* `app/opiniones/page.tsx`
* `app/contacto/page.tsx`
* `app/aviso-legal/page.tsx`
* `app/politica-privacidad/page.tsx`
* `app/politica-cookies/page.tsx`

### Componentes

* `components/Header.tsx`
* `components/Footer.tsx`
* `components/CTAWhatsApp.tsx` (genera link con texto por página)
* `components/StickyActions.tsx` (WhatsApp, Llamar, Cómo llegar)
* `components/Gallery.tsx`
* `components/Reviews.tsx`
* `components/StoreInfo.tsx` (NAP + horario)

### Config de contenido (editable)

Crear `content/site.ts` o `content/site.json` con:

* NAP
* horario
* enlaces
* textos por página
* reseñas seleccionadas
* lista de imágenes

---

## 12) Railway (deploy)

### Recomendación

Proyecto Next.js con output estándar.

* `NODE_ENV=production`
* `NEXT_TELEMETRY_DISABLED=1`

### Pasos

1. Push a GitHub
2. Railway: New Project → Deploy from GitHub repo
3. Definir variables env
4. Confirmar build y start (Railway detecta Next)
5. Conectar dominio cuando esté

---

## 13) Checklist final (antes de publicar)

* [ ] Todas las páginas con title/meta/OG
* [ ] Botón WhatsApp funciona y el texto es correcto
* [ ] Tel link funciona
* [ ] Cómo llegar abre Maps
* [ ] Horario visible en Contacto y Footer
* [ ] Imágenes optimizadas y con alt
* [ ] Schema JSON-LD presente
* [ ] sitemap.xml y robots.txt OK
* [ ] Eventos tracking OK

---

## 14) Copys cortos listos (usar en toda la web)

* “Moda de mujer en Chamartín. Tallas 38–60.”
* “Ropa para cada mujer. Siéntete Unicca.”
* “Asesoría cercana para encontrar tu look.”
* “Novedades frecuentes. Ven a descubrir lo nuevo.”
* “Escríbenos por WhatsApp y te guiamos.”
