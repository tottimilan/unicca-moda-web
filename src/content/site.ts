// Configuración del sitio Unicca Moda
export const siteConfig = {
  // NAP (Name, Address, Phone)
  name: 'Unicca Moda',
  address: {
    street: 'C. de Cartagena, 138',
    locality: 'Chamartín',
    region: 'Madrid',
    postalCode: '28002',
    country: 'ES',
    full: 'C. de Cartagena, 138, Chamartín, 28002 Madrid'
  },
  phone: '+34 639 42 97 80',
  whatsapp: '+34 639 42 97 80',

  // Redes sociales
  social: {
    instagram: 'https://www.instagram.com/unicca_moda_/',
    facebook: 'https://www.facebook.com/Uniccamoda'
  },

  // Horario de apertura
  openingHours: {
    monday: { morning: '11:00–14:00', afternoon: '17:30–21:00' },
    tuesday: { morning: '11:00–14:00', afternoon: '17:30–21:00' },
    wednesday: { morning: '11:00–14:00', afternoon: '17:30–21:00' },
    thursday: { morning: '11:00–14:00', afternoon: '17:30–21:00' },
    friday: { morning: '11:00–14:00', afternoon: '17:30–21:00' },
    saturday: { morning: '11:00–14:00', afternoon: null },
    sunday: null
  },

  // Claims y mensajes
  tagline: 'Siéntete Unicca',
  claims: [
    'Ropa para cada mujer',
    'Tallas 38–60'
  ],

  // Enlaces importantes
  links: {
    whatsapp: {
      base: 'https://wa.me/34639429780?text=',
      messages: {
        general: 'Hola%20Conchi%2C%20vengo%20de%20la%20web%20de%20Unicca%20Moda.%20%C2%BFMe%20ayudas%20a%20encontrar%20un%20look%3F',
        tallas: 'Hola%20Conchi%2C%20vengo%20de%20la%20web.%20Busco%20un%20look%20en%20talla%20__[TALLA]__%20(aprox).%20%C2%BFQu%C3%A9%20me%20recomiendas%3F',
        evento: 'Hola%20Conchi%2C%20tengo%20un%20evento%20y%20necesito%20un%20look.%20%C2%BFPuedo%20pasar%20hoy%20o%20ma%C3%B1ana%3F',
        reserva: 'Hola%20Conchi%2C%20%C2%BFa%20qu%C3%A9%20hora%20suele%20haber%20menos%20gente%20para%20que%20me%20asesores%20con%20calma%3F',
        complementos: 'Hola%20Conchi%2C%20busco%20complementos%20(bolso/pa%C3%B1uelo/joyita).%20%C2%BFTienes%20novedades%3F'
      }
    },
    call: 'tel:+34639429780',
    directions: 'https://maps.app.goo.gl/nnVeMxDNnDjnm4yk6',
    reviews: {
      view: 'https://www.google.com/search?sca_esv=c889e3cf512c13a4&sxsrf=ANbL-n6xqmicXIZ91PjYMHHs59AuqMuwqg:1768744191130&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOWn4j5dY6cpcw2daudRdqWiVQBvAUgGVSMqt3b674PHVLFMuiDYcChj6Yhpjs7_I23nMm11AgjEbC9NxMlVkBvDsv634&q=Unicca+Moda+Rese%C3%B1as&sa=X&ved=2ahUKEwiCw9fJnZWSAxWDlokEHRzjAdkQ0bkNegQINRAF&biw=1707&bih=932&dpr=1.5&aic=0',
      write: 'https://g.page/r/CXsbGgMt_1RhEBM/review'
    }
  },

  // Contenido por página
  pages: {
    home: {
      title: 'Unicca Moda | Ropa de mujer en Chamartín | Tallas 38–60',
      description: 'Moda de mujer en Chamartín (Madrid). Tallas 38–60, ropa con color y asesoría personal con Conchi. Ven a probarte y sal vestida sí o sí.',
      h1: 'Moda de mujer en Chamartín. Tallas 38–60.',
      heroSubtitle: [
        'Ropa para cada mujer: del estilo clásico al más moderno.',
        'Asesoría cercana para encontrar tu look.'
      ]
    },
    tallas: {
      title: 'Tallas 38–60 en Madrid | Unicca Moda Chamartín',
      description: 'Especialistas en tallas 38–60 en Chamartín. Prendas seleccionadas, cortes favorecedores y asesoría personal. Escríbenos por WhatsApp y ven a probártelo.',
      h1: 'Tallas 38–60. Ropa para cada mujer.',
      benefits: [
        'Cortes que favorecen',
        'Comodidad y estilo',
        'Asesoría real en tienda'
      ],
      categories: [
        'Vestidos',
        'Abrigos y chaquetas',
        'Pantalones',
        'Blusas y punto',
        'Complementos'
      ]
    },
    asesoria: {
      title: 'Asesoría de estilo en tienda | Unicca Moda Madrid',
      description: 'Conchi te asesora para encontrar el look que mejor te sienta. Ven con una idea o déjate guiar. Escríbenos por WhatsApp y te ayudamos.',
      h1: 'Asesoría cercana para encontrar tu look.',
      occasions: [
        'Diario con estilo',
        'Oficina',
        'Eventos',
        'Viajes y fines de semana'
      ]
    },
    galeria: {
      title: 'Galería | Unicca Moda Chamartín',
      description: 'Descubre el ambiente de Unicca Moda y su estilo: color, variedad y prendas para cada mujer. Visítanos en Chamartín.',
      h1: 'Unicca por dentro: color, estilo y variedad.',
      subtitle: 'Las colecciones cambian continuamente. Lo mejor es venir a descubrirlas.'
    },
    opiniones: {
      title: 'Opiniones de Unicca Moda | Tienda de ropa en Chamartín',
      description: 'Clientes que repiten por la variedad, la atención y las tallas 38–60. Lee opiniones reales y deja la tuya.',
      h1: 'Opiniones reales. Atención de verdad.'
    },
    contacto: {
      title: 'Contacto | Unicca Moda | C/ Cartagena 138, Chamartín',
      description: 'Visítanos en C. de Cartagena 138 (Chamartín). Horario actualizado, WhatsApp y teléfono. Te ayudamos a encontrar tu look.',
      h1: 'Visítanos en Chamartín.',
      howToArrive: 'Estamos en C/ Cartagena 138, Chamartín, Madrid.'
    }
  },

  // Textos reutilizables
  copy: {
    ctaWhatsapp: 'Escribir por WhatsApp',
    ctaDirections: 'Cómo llegar',
    ctaCall: 'Llamar',
    ctaReviews: 'Ver reseñas',
    ctaWriteReview: 'Dejar reseña',
    salesVestida: 'Sales vestida sí o sí',
    novedades: 'Traemos prendas diferentes cada semana. Ven a descubrir lo nuevo.',
    whatsappGuide: 'Dime tu talla aproximada y qué ocasión tienes y te guío por WhatsApp.',
    whatsappToday: '¿Vienes hoy? Escríbenos y te digo el mejor momento para pasar.',
    styleNoSize: 'El estilo no tiene talla'
  },

  // FAQs para SEO - Especialmente sobre tallas grandes (nicho principal)
  faqs: [
    {
      question: '¿Qué tallas de ropa tenéis disponibles?',
      answer: 'Trabajamos tallas de la 38 a la 60. Somos especialistas en tallas grandes y tenemos una amplia variedad de prendas favorecedoras para todas las tallas.'
    },
    {
      question: '¿Tenéis ropa de tallas grandes en Madrid?',
      answer: 'Sí, somos una tienda especializada en tallas grandes en Madrid, ubicada en el barrio de Chamartín. Tenemos vestidos, pantalones, blusas, abrigos y complementos en tallas 38-60.'
    },
    {
      question: '¿Qué tipo de ropa tenéis para tallas 50, 52, 54, 56, 58 y 60?',
      answer: 'Tenemos todo tipo de prendas en tallas grandes: vestidos de fiesta, ropa casual, conjuntos de oficina, abrigos, pantalones, blusas, faldas y complementos. Todo seleccionado con cortes que favorecen y estilizan.'
    },
    {
      question: '¿Me ayudáis a elegir la ropa que mejor me sienta?',
      answer: 'Por supuesto. Conchi te asesora personalmente para encontrar las prendas que mejor te favorecen según tu tipo de cuerpo, estilo y ocasión. Es nuestro valor diferencial.'
    },
    {
      question: '¿Tenéis vestidos de fiesta en tallas grandes?',
      answer: 'Sí, tenemos una selección de vestidos para eventos, bodas, comuniones y celebraciones en todas las tallas hasta la 60. Prendas elegantes con cortes estudiados para favorecer.'
    },
    {
      question: '¿Cada cuánto recibís ropa nueva?',
      answer: 'Recibimos novedades semanalmente. Las colecciones cambian continuamente, por eso recomendamos visitarnos con frecuencia o escribirnos por WhatsApp para ver las últimas llegadas.'
    },
    {
      question: '¿Dónde está la tienda Unicca Moda?',
      answer: 'Estamos en la Calle de Cartagena 138, en el barrio de Chamartín, Madrid (28002). Fácil acceso en metro, bus y con aparcamiento cercano.'
    },
    {
      question: '¿Cuál es el horario de la tienda?',
      answer: 'Abrimos de lunes a viernes de 11:00 a 14:00 y de 17:30 a 21:00. Los sábados de 11:00 a 14:00. Domingos cerrado.'
    },
    {
      question: '¿Puedo pedir cita para asesoramiento personalizado?',
      answer: 'No es necesaria cita previa, pero si quieres que te atendamos con más calma, escríbenos por WhatsApp y te decimos el mejor momento para venir.'
    },
    {
      question: '¿Tenéis ropa cómoda para el día a día en tallas grandes?',
      answer: 'Sí, tenemos ropa casual y cómoda perfecta para el día a día: pantalones, blusas, punto, chaquetas... Todo en tallas hasta la 60 y con tejidos de calidad.'
    },
    {
      question: '¿La ropa de tallas grandes también está de moda?',
      answer: 'Absolutamente. Seleccionamos prendas modernas, con color y estilo, que siguen las tendencias actuales. Creemos que el estilo no tiene talla.'
    },
    {
      question: '¿Tenéis complementos y accesorios?',
      answer: 'Sí, además de ropa tenemos bolsos, pañuelos, bisutería y otros complementos para completar tu look.'
    }
  ],

  // Schema.org JSON-LD - LocalBusiness/ClothingStore
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    '@id': 'https://unicca-moda.com/#organization',
    name: 'Unicca Moda',
    alternateName: 'Unicca Moda Chamartín',
    description: 'Tienda de moda de mujer especializada en tallas grandes (38-60) en Chamartín, Madrid. Asesoramiento personalizado y prendas favorecedoras.',
    url: 'https://unicca-moda.com',
    telephone: '+34639429780',
    email: 'info@unicca-moda.com',
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Efectivo, Tarjeta de crédito, Tarjeta de débito',
    image: 'https://unicca-moda.com/og-image.jpg',
    logo: 'https://unicca-moda.com/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C. de Cartagena, 138',
      addressLocality: 'Madrid',
      postalCode: '28002',
      addressRegion: 'Madrid',
      addressCountry: 'ES'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.4456,
      longitude: -3.6739
    },
    hasMap: 'https://maps.app.goo.gl/nnVeMxDNnDjnm4yk6',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '11:00',
        closes: '14:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '17:30',
        closes: '21:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '11:00',
        closes: '14:00'
      }
    ],
    sameAs: [
      'https://www.instagram.com/unicca_moda_/',
      'https://www.facebook.com/Uniccamoda'
    ],
    areaServed: {
      '@type': 'City',
      name: 'Madrid'
    },
    knowsAbout: [
      'Moda de mujer',
      'Tallas grandes',
      'Asesoría de imagen',
      'Ropa talla 38-60',
      'Vestidos de fiesta tallas grandes'
    ]
  },

  // URL base del sitio
  baseUrl: 'https://unicca-moda.com'
} as const

export type SiteConfig = typeof siteConfig