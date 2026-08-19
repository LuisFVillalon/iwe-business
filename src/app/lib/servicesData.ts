export type LocalizedText = {
  en: string;
  es: string;
};

export type Feature = {
  id: string;
  title: LocalizedText;
  description?: LocalizedText;
};

export type Price = {
  type: "fixed" | "startingAt" | "custom";
  amount?: number;
  unit?: "project" | "month" | "year" | "page";
  currency: "USD";
};

export type WebsitePackage = {
  id: "starter" | "business" | "premium";
  name: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  homeSummary: LocalizedText;
  price: Price;
  recommended?: boolean;
  idealFor: LocalizedText[];
  pages: Feature[];
  features: Feature[];
  cta: LocalizedText;
};

export type AddOn = {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  price: Price;
  category:
    | "content"
    | "booking"
    | "commerce"
    | "integration"
    | "automation"
    | "custom-development"
    | "seo"
    | "leads";
};

export type CarePlan = {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  homeSummary: LocalizedText;
  price: Price;
  recommended?: boolean;
  features: Feature[];
  cta: LocalizedText;
};

/* -------------------------------------------------------------------------- */
/*                      INCLUDED WITH EVERY WEBSITE                           */
/* -------------------------------------------------------------------------- */

export const includedWithEveryWebsite: Feature[] = [
  {
    id: "responsive-design",
    title: {
      en: "Responsive Design",
      es: "Diseño Responsivo",
    },
    description: {
      en: "Designed to work seamlessly across phones, tablets, and desktop computers.",
      es: "Diseñado para funcionar perfectamente en teléfonos, tablets y computadoras.",
    },
  },
  {
    id: "branding",
    title: {
      en: "Brand Styling",
      es: "Estilo de Marca",
    },
    description: {
      en: "Fonts, colors, logo placement, buttons, and visual styling matched to your business.",
      es: "Tipografías, colores, logotipo, botones y estilo visual adaptados a tu negocio.",
    },
  },
  {
    id: "domain-setup",
    title: {
      en: "Domain Setup",
      es: "Configuración de Dominio",
    },
    description: {
      en: "We configure your domain and connect it to your website.",
      es: "Configuramos tu dominio y lo conectamos con tu sitio web.",
    },
  },
  {
    id: "ssl",
    title: {
      en: "SSL Security",
      es: "Seguridad SSL",
    },
    description: {
      en: "HTTPS security configuration to protect your website and build visitor trust.",
      es: "Configuración HTTPS para proteger tu sitio web y generar confianza.",
    },
  },
  {
    id: "performance",
    title: {
      en: "Performance Optimization",
      es: "Optimización de Rendimiento",
    },
    description: {
      en: "Optimized images, code, and loading performance for a fast customer experience.",
      es: "Imágenes, código y tiempos de carga optimizados para una experiencia rápida.",
    },
  },
  {
    id: "technical-seo",
    title: {
      en: "Technical SEO Foundation",
      es: "Base Técnica de SEO",
    },
    description: {
      en: "Search-friendly structure, metadata, headings, sitemap, robots configuration, and indexing setup.",
      es: "Estructura optimizada para buscadores, metadatos, encabezados, sitemap, robots e indexación.",
    },
  },
  {
    id: "search-ai-foundation",
    title: {
      en: "Search & AI-Friendly Structure",
      es: "Estructura Optimizada para Búsqueda e IA",
    },
    description: {
      en: "Clear, structured content that helps search engines and AI systems understand your business.",
      es: "Contenido claro y estructurado que ayuda a buscadores y sistemas de IA a comprender tu negocio.",
    },
  },
  {
    id: "multilingual",
    title: {
      en: "Multilingual Websites",
      es: "Sitios Web Multilingües",
    },
    description: {
      en: "Built in both English and Spanish when needed, with additional languages available upon request.",
      es: "Desarrollado en inglés y en español cuando es necesario, con idiomas adicionales disponibles bajo petición.",
    },
  },
];


/* -------------------------------------------------------------------------- */
/*                            WEBSITE PACKAGES                                */
/* -------------------------------------------------------------------------- */

export const websitePackages: WebsitePackage[] = [
  {
    id: "starter",

    name: {
      en: "Starter",
      es: "Inicial",
    },

    tagline: {
      en: "A professional website for your business.",
      es: "Un sitio web profesional para tu negocio.",
    },

    description: {
      en: "A professional website designed to give small businesses a strong online presence, showcase their services, and help customers take the next step.",
      es: "Un sitio web profesional diseñado para dar a pequeños negocios una presencia sólida en línea, presentar sus servicios y ayudar a los clientes a dar el siguiente paso.",
    },

    homeSummary: {
      en: "Get your business online with a professional site built to attract customers.",
      es: "Lleva tu negocio en línea con un sitio profesional que atrae clientes.",
    },

    price: {
      type: "startingAt",
      amount: 999,
      currency: "USD",
      unit: "project",
    },

    idealFor: [
      {
        en: "Small local businesses",
        es: "Pequeños negocios locales",
      },
      {
        en: "Independent professionals",
        es: "Profesionales independientes",
      },
      {
        en: "New businesses getting established online",
        es: "Negocios nuevos estableciendo su presencia en línea",
      },
    ],

    pages: [
      {
        id: "single-page",
        title: {
          en: "1-Page Website",
          es: "Sitio Web de 1 Página",
        },
        description: {
          en: "A professionally designed single-page website with all of your essential business information organized into clear sections.",
          es: "Un sitio web profesional de una sola página con la información esencial de tu negocio organizada en secciones claras.",
        },
      },
    ],

    features: [
      {
    id: "hero-section",
    title: {
      en: "Hero & Call-to-Action Section",
      es: "Sección Principal y Llamado a la Acción",
    },
    description: {
      en: "Introduce your business with a clear message and an easy next step for potential customers.",
      es: "Presenta tu negocio con un mensaje claro y una forma fácil para que los clientes potenciales tomen el siguiente paso.",
    },
      },
      {
        id: "about-section",
        title: {
          en: "About Your Business Section",
          es: "Sección Sobre tu Negocio",
        },
        description: {
          en: "Tell customers who you are, what you do, and why they should choose your business.",
          es: "Explica a tus clientes quién eres, qué haces y por qué deberían elegir tu negocio.",
        },
      },
      {
        id: "services-section",
        title: {
          en: "Services Section",
          es: "Sección de Servicios",
        },
        description: {
          en: "Showcase your main services so customers can quickly understand what your business offers.",
          es: "Muestra tus principales servicios para que los clientes comprendan rápidamente lo que ofrece tu negocio.",
        },
      },
      {
        id: "reviews-section",
        title: {
          en: "Reviews & Testimonials Section",
          es: "Sección de Reseñas y Testimonios",
        },
        description: {
          en: "Build trust by highlighting reviews or testimonials from your customers.",
          es: "Genera confianza mostrando reseñas o testimonios de tus clientes.",
        },
      },
      {
        id: "contact-section",
        title: {
          en: "Contact Section",
          es: "Sección de Contacto",
        },
        description: {
          en: "Give customers a clear way to call, message, or contact your business.",
          es: "Ofrece a tus clientes una forma clara de llamar, enviar un mensaje o contactar tu negocio.",
        },
      },
      {
        id: "social-links",
        title: {
          en: "Social Media Links",
          es: "Enlaces a Redes Sociales",
        },
      },
    ],

    cta: {
      en: "Build Your Online Presence",
      es: "Fortalece tu Presencia en Línea",
    },
  },

  {
    id: "business",

    name: {
      en: "Business",
      es: "Negocio",
    },

    tagline: {
      en: "Turn more visitors into customers.",
      es: "Convierte más visitantes en clientes.",
    },

    description: {
      en: "A complete website designed to give growing businesses a stronger online presence, increase visibility, and turn more visitors into customers.",
      es: "Un sitio web completo diseñado para dar a negocios en crecimiento una presencia en línea más sólida, aumentar su visibilidad y convertir más visitantes en clientes.",
    },

    homeSummary: {
      en: "A complete site that builds trust and turns more visitors into paying customers.",
      es: "Un sitio completo que genera confianza y convierte más visitantes en clientes.",
    },

    price: {
      type: "startingAt",
      amount: 1999,
      currency: "USD",
      unit: "project",
    },

    recommended: true,

    idealFor: [
      {
        en: "Established local businesses",
        es: "Negocios locales establecidos",
      },
      {
        en: "Professional practices",
        es: "Consultorios y servicios profesionales",
      },
      {
        en: "Service-based businesses",
        es: "Negocios de servicios",
      },
      {
        en: "Businesses that depend on leads and appointments",
        es: "Negocios que dependen de prospectos y citas",
      },
    ],

    pages: [
      {
        id: "home",
        title: {
          en: "Home Page",
          es: "Página de Inicio",
        },
      },
      {
        id: "about",
        title: {
          en: "About Page",
          es: "Página Sobre Nosotros",
        },
      },
      {
        id: "services",
        title: {
          en: "Services Page",
          es: "Página de Servicios",
        },
      },
      {
        id: "contact",
        title: {
          en: "Contact & Location Page",
          es: "Página de Contacto y Ubicación",
        },
      },
      {
        id: "strategic-page",
        title: {
          en: "Strategic Custom Page",
          es: "Página Estratégica Personalizada",
        },
        description: {
          en: "A page built around your business goals to improve visibility and guide customers toward the next step.",
          es: "Una página creada según los objetivos de tu negocio para mejorar la visibilidad y guiar a los clientes hacia el siguiente paso.",
        },
      },
    ],    

    features: [
      {
        id: "includes-starter",
        title: {
          en: "Everything Included in Starter",
          es: "Todo lo Incluido en el Paquete Inicial",
        },
      },
      {
        id: "booking",
        title: {
          en: "Appointment Booking Integration",
          es: "Integración para Reservación de Citas",
        },
        description: {
          en: "Included when your business takes appointments or scheduled bookings.",
          es: "Incluido cuando tu negocio maneja citas o reservaciones programadas.",
        },
      },
      {
        id: "contact-form",
        title: {
          en: "Contact & Lead Form",
          es: "Formulario de Contacto y Prospectos",
        },
        description: {
          en: "Give customers an easy way to contact your business directly from the website.",
          es: "Permite que los clientes contacten tu negocio fácilmente desde el sitio web.",
        },
      },
      {
        id: "search-ai-optimization",
        title: {
          en: "Optimized for Search & AI",
          es: "Optimizado para Búsqueda e IA",
        },
        description: {
          en: "Your website is structured to help search engines and AI platforms better understand your business, services, and location.",
          es: "Tu sitio web está estructurado para ayudar a los buscadores y plataformas de IA a comprender mejor tu negocio, servicios y ubicación.",
        },
      },
      {
        id: "google-maps",
        title: {
          en: "Google Maps & Location",
          es: "Google Maps y Ubicación",
        },
        description: {
          en: "Included for businesses with a physical location or service area.",
          es: "Incluido para negocios con una ubicación física o área de servicio.",
        },
      },
    ],

    cta: {
      en: "Grow Your Business",
      es: "Haz Crecer tu Negocio",
    },
  },

  {
    id: "premium",

    name: {
      en: "Custom Solutions",
      es: "Soluciones Personalizadas",
    },

    tagline: {
      en: "Built around how your business works.",
      es: "Diseñado en torno a cómo funciona su negocio.",
    },

    description: {
      en: "A custom website designed for businesses that need advanced functionality, greater control, and digital tools that support how their business operates and grows.",
      es: "Un sitio web personalizado diseñado para negocios que necesitan funcionalidad avanzada, mayor control y herramientas digitales que apoyen la operación y el crecimiento de su negocio.",
    },

    homeSummary: {
      en: "A tailored platform built around exactly how your business operates.",
      es: "Una plataforma a medida, diseñada según cómo opera tu negocio.",
    },

    price: {
      type: "startingAt",
      amount: 3499,
      currency: "USD",
      unit: "project",
    },

    idealFor: [
      {
        en: "Growing businesses with complex needs",
        es: "Negocios en crecimiento con necesidades complejas",
      },
      {
        en: "Custom business tools and systems",
        es: "Sistemas empresariales personalizados",
      },
      {
        en: "AI-powered tools and workflows",
        es: "Herramientas y procesos con IA",
      },
    ],

    pages: [
      {
        id: "custom-functionality",
        title: {
          en: "Custom Functionality",
          es: "Funcionalidad Personalizada",
        },
        description: {
          en: "Page structure and count are fully custom, built around what your business needs.",
          es: "La estructura y cantidad de páginas es completamente personalizada, según las necesidades de tu negocio.",
        },
      },
    ],

    features: [
      {
        id: "includes-business",
        title: {
          en: "Everything Included in Business",
          es: "Todo lo Incluido en el Paquete Negocio",
        },
      },
      {
        id: "custom-functionality",
        title: {
          en: "Custom Website Functionality",
          es: "Funcionalidad Web Personalizada",
        },
        description: {
          en: "Custom features built around the specific needs and operations of your business.",
          es: "Funciones personalizadas desarrolladas según las necesidades y operaciones de tu negocio.",
        },
      },
      {
        id: "cms",
        title: {
          en: "Content Management System",
          es: "Sistema de Gestión de Contenido",
        },
        description: {
          en: "Manage selected website content, services, resources, or business information without editing code.",
          es: "Administra contenido, servicios, recursos o información de tu negocio sin modificar código.",
        },
      },
      {
        id: "advanced-workflows",
        title: {
          en: "Custom Forms & Workflows",
          es: "Formularios y Procesos Personalizados",
        },
        description: {
          en: "Advanced forms and digital workflows tailored to how your business collects and manages information.",
          es: "Formularios avanzados y procesos digitales adaptados a cómo tu negocio recopila y administra información.",
        },
      },
      {
        id: "integrations",
        title: {
          en: "Business Tool Integrations",
          es: "Integraciones con Herramientas Empresariales",
        },
        description: {
          en: "Connect your website with selected platforms, APIs, databases, and services your business uses.",
          es: "Conecta tu sitio con plataformas, APIs, bases de datos y servicios que utiliza tu negocio.",
        },
      },
      {
        id: "customer-systems",
        title: {
          en: "Customer-Facing Systems",
          es: "Sistemas para Clientes",
        },
        description: {
          en: "Custom portals, accounts, dashboards, or interactive tools when your business requires them.",
          es: "Portales, cuentas, paneles o herramientas interactivas personalizadas cuando tu negocio las requiera.",
        },
      },
      {
        id: "ai-tools",
        title: {
          en: "AI-Powered Tools & Workflows",
          es: "Herramientas y Procesos con IA",
        },
        description: {
          en: "AI-powered tools designed around practical business use cases and workflows.",
          es: "Herramientas con IA diseñadas alrededor de casos de uso y procesos reales de tu negocio.",
        },
      },
    ],

    cta: {
      en: "Build Your Custom Solution",
      es: "Desarrolla tu Solución Personalizada",
    },
  },
];

/* -------------------------------------------------------------------------- */
/*                                ADD-ONS                                     */
/* -------------------------------------------------------------------------- */

export const addOns: AddOn[] = [
  {
    id: "booking",

    name: {
      en: "Online Appointment Booking",
      es: "Agenda de Citas en Línea",
    },

    description: {
      en: "Let customers schedule appointments directly from your website without back-and-forth messaging.",
      es: "Permite que tus clientes agenden citas directamente desde tu sitio sin mensajes innecesarios.",
    },

    price: {
      type: "startingAt",
      amount: 400,
      currency: "USD",
      unit: "project",
    },

    category: "booking",
  },

  {
    id: "lead-quote-system",

    name: {
      en: "Lead & Quote Request System",
      es: "Sistema de Prospectos y Cotizaciones",
    },

    description: {
      en: "Capture more qualified leads with custom forms for estimates, service requests, project details, and customer inquiries.",
      es: "Captura prospectos más calificados con formularios personalizados para cotizaciones, solicitudes de servicio y consultas de clientes.",
    },

    price: {
      type: "startingAt",
      amount: 400,
      currency: "USD",
      unit: "project",
    },

    category: "leads",
  },

  {
    id: "direct-messaging",

    name: {
      en: "WhatsApp & Direct Messaging",
      es: "WhatsApp y Mensajería Directa",
    },

    description: {
      en: "Make it easy for customers to start a conversation with your business through WhatsApp or other direct messaging options.",
      es: "Facilita que tus clientes inicien una conversación con tu negocio por WhatsApp u otras opciones de mensajería directa.",
    },

    price: {
      type: "startingAt",
      amount: 200,
      currency: "USD",
      unit: "project",
    },

    category: "leads",
  },

  {
    id: "payments",

    name: {
      en: "Online Payments",
      es: "Pagos en Línea",
    },

    description: {
      en: "Accept deposits, invoices, or customer payments directly through your website.",
      es: "Acepta depósitos, facturas o pagos directamente desde tu sitio web.",
    },

    price: {
      type: "startingAt",
      amount: 500,
      currency: "USD",
      unit: "project",
    },

    category: "commerce",
  },

  {
    id: "external-data",

    name: {
      en: "External Data Integration",
      es: "Integración de Datos Externos",
    },

    description: {
      en: "Connect your website to external platforms to display content, listings, availability, reviews, or other live business data.",
      es: "Conecta tu sitio con plataformas externas para mostrar contenido, listados, disponibilidad, reseñas u otros datos actualizados de tu negocio.",
    },

    price: {
      type: "startingAt",
      amount: 500,
      currency: "USD",
      unit: "project",
    },

    category: "integration",
  },

  {
    id: "additional-page",

    name: {
      en: "Additional Custom Page",
      es: "Página Personalizada Adicional",
    },

    description: {
      en: "Add another professionally designed page for a service, location, team member, campaign, or business need.",
      es: "Agrega otra página profesional para un servicio, ubicación, miembro del equipo, campaña o necesidad del negocio.",
    },

    price: {
      type: "startingAt",
      amount: 150,
      currency: "USD",
      unit: "page",
    },

    category: "content",
  },

  {
    id: "blog",

    name: {
      en: "Blog & Content Manager",
      es: "Blog y Administrador de Contenido",
    },

    description: {
      en: "Publish articles, company updates, educational content, and helpful resources for your customers.",
      es: "Publica artículos, noticias, contenido educativo y recursos útiles para tus clientes.",
    },

    price: {
      type: "startingAt",
      amount: 350,
      currency: "USD",
      unit: "project",
    },

    category: "content",
  },

  {
    id: "ai-automation",

    name: {
      en: "AI & Business Automation",
      es: "IA y Automatización Empresarial",
    },

    description: {
      en: "Custom AI-powered workflows, assistants, content tools, or business process automation.",
      es: "Flujos personalizados con IA, asistentes, herramientas de contenido o automatización de procesos.",
    },

    price: {
      type: "startingAt",
      amount: 1000,
      currency: "USD",
      unit: "project",
    },

    category: "automation",
  },
];

/* -------------------------------------------------------------------------- */
/*                              WEBSITE CARE                                  */
/* -------------------------------------------------------------------------- */

export const carePlans: CarePlan[] = [
  {
    id: "essential-care",

    name: {
      en: "Essential Care",
      es: "Mantenimiento Esencial",
    },

    description: {
      en: "Reliable website care to keep your site online, secure, maintained, and up to date.",
      es: "Mantenimiento confiable para mantener tu sitio activo, seguro, actualizado y funcionando correctamente.",
    },

    homeSummary: {
      en: "Keep your site online, secure, and running smoothly.",
      es: "Mantén tu sitio en línea, seguro y funcionando sin problemas.",
    },

    cta: {
      en: "Keep Your Website Protected",
      es: "Mantén tu Sitio Protegido",
    },

    price: {
      type: "fixed",
      amount: 89,
      currency: "USD",
      unit: "month",
    },

    features: [
      {
        id: "website-updates-fixes",
        title: {
          en: "Website Updates & Fixes",
          es: "Actualizaciones y Correcciones",
        },
        description: {
          en: "Minor changes/updates to text, images, links, styling, and other website content.",
          es: "Cambios/actualizaciones menores en texto, imágenes, enlaces, estilos y otro contenido del sitio web.",
        },
      },
      {
        id: "managed-hosting",
        title: {
          en: "Managed Hosting",
          es: "Hosting Administrado",
        },
        description: {
          en: "We manage your website hosting, deployment, and hosting configuration.",
          es: "Administramos el hosting, despliegue y configuración de tu sitio web.",
        },
      },
      {
        id: "ssl-security",
        title: {
          en: "SSL & Security Management",
          es: "Administración de SSL y Seguridad",
        },
        description: {
          en: "We manage SSL and essential security configuration to keep your website protected and HTTPS working properly.",
          es: "Administramos SSL y la configuración esencial de seguridad para mantener tu sitio protegido y HTTPS funcionando correctamente.",
        },
      },
      {
        id: "uptime-monitoring",
        title: {
          en: "Uptime Monitoring",
          es: "Monitoreo de Disponibilidad",
        },
        description: {
          en: "We monitor your website for downtime and availability issues.",
          es: "Monitoreamos tu sitio para detectar caídas y problemas de disponibilidad.",
        },
      },
      {
        id: "technical-maintenance",
        title: {
          en: "Technical Maintenance",
          es: "Mantenimiento Técnico",
        },
        description: {
          en: "We handle routine technical updates, compatibility issues, and behind-the-scenes maintenance to keep your website running properly.",
          es: "Nos encargamos de actualizaciones técnicas, problemas de compatibilidad y mantenimiento interno para mantener tu sitio funcionando correctamente.",
        },
      },
      {
        id: "domain-management",
        title: {
          en: "Domain Management Support",
          es: "Soporte de Administración de Dominio",
        },
        description: {
          en: "We help keep your domain correctly connected and assist with renewal and configuration issues.",
          es: "Ayudamos a mantener tu dominio correctamente conectado y te apoyamos con renovaciones y configuración.",
        },
      },
    ],
  },

  {
    id: "business-care",

    name: {
      en: "Growth Care",
      es: "Crecimiento y Mantenimiento",
    },

    description: {
      en: "Ongoing website care focused on improving performance, visibility, and the customer experience.",
      es: "Mantenimiento continuo enfocado en mejorar el rendimiento, la visibilidad y la experiencia de tus clientes.",
    },

    homeSummary: {
      en: "Ongoing improvements that grow your visibility and results.",
      es: "Mejoras continuas que hacen crecer tu visibilidad y resultados.",
    },

    cta: {
      en: "Grow Your Online Presence",
      es: "Haz Crecer tu Presencia en Línea",
    },

    price: {
      type: "fixed",
      amount: 249,
      currency: "USD",
      unit: "month",
    },

    recommended: true,

    features: [
      {
        id: "ongoing-website-improvements",
        title: {
          en: "Ongoing Website Improvements",
          es: "Mejoras Continuas del Sitio",
        },
        description: {
          en: "Regular improvements to content, layouts, navigation, calls to action, and website functionality as your business evolves.",
          es: "Mejoras continuas al contenido, diseño, navegación, llamados a la acción y funcionalidad conforme evoluciona tu negocio.",
        },
      },
      {
        id: "search-ai-optimization",
        title: {
          en: "Search & AI Visibility Optimization",
          es: "Optimización para Búsqueda e IA",
        },
        description: {
          en: "Ongoing improvements to website content and structure to strengthen visibility across search engines and AI-powered search.",
          es: "Mejoras continuas al contenido y estructura del sitio para fortalecer su visibilidad en buscadores y plataformas de búsqueda con IA.",
        },
      },
      {
        id: "priority-support",
        title: {
          en: "Priority Support",
          es: "Soporte Prioritario",
        },
        description: {
          en: "Faster assistance for website-related issues, updates, and improvement requests.",
          es: "Atención más rápida para problemas, actualizaciones y solicitudes de mejora del sitio.",
        },
      },
      {
        id: "analytics-search-review",
        title: {
          en: "Analytics & Search Review",
          es: "Revisión de Analítica y Búsqueda",
        },
        description: {
          en: "Regular review of website traffic, search performance, visitor behavior, and important trends.",
          es: "Revisión periódica del tráfico, rendimiento en búsquedas, comportamiento de visitantes y tendencias importantes.",
        },
      },
      {
        id: "performance-monitoring",
        title: {
          en: "Performance Monitoring",
          es: "Monitoreo de Rendimiento",
        },
        description: {
          en: "Regular checks for website speed, mobile usability, technical health, and performance issues.",
          es: "Revisiones periódicas de velocidad, usabilidad móvil, estado técnico y problemas de rendimiento.",
        },
      },
      {
        id: "essential-care-included",
        title: {
          en: "Everything in Essential Care",
          es: "Todo lo Incluido en Mantenimiento Esencial",
        },
        description: {
          en: "Includes hosting, monitoring, security, technical maintenance, and website updates.",
          es: "Incluye hosting, monitoreo, seguridad, mantenimiento técnico y actualizaciones del sitio.",
        },
      },
    ],
  },

  {
    id: "premium-care",

    name: {
      en: "Premium Care",
      es: "Mantenimiento Premium",
    },

    description: {
      en: "Advanced maintenance and technical support for websites with custom functionality, integrations, AI tools, and connected digital systems.",
      es: "Mantenimiento avanzado y soporte técnico para sitios con funcionalidad personalizada, integraciones, herramientas de IA y sistemas digitales conectados.",
    },

    homeSummary: {
      en: "Advanced support for custom features and integrations.",
      es: "Soporte avanzado para funciones e integraciones personalizadas.",
    },

    cta: {
      en: "Support Your Custom Solution",
      es: "Mantén tu Solución Personalizada",
    },

    price: {
      type: "startingAt",
      amount: 449,
      currency: "USD",
      unit: "month",
    },

    features: [
      {
        id: "advanced-technical-support",
        title: {
          en: "Advanced Technical Support",
          es: "Soporte Técnico Avanzado",
        },
        description: {
          en: "Advanced troubleshooting and technical support across your website and connected digital systems.",
          es: "Diagnóstico y soporte técnico avanzado para tu sitio y los sistemas digitales conectados.",
        },
      },
      {
        id: "custom-functionality-maintenance",
        title: {
          en: "Custom Functionality Maintenance",
          es: "Mantenimiento de Funcionalidad Personalizada",
        },
        description: {
          en: "Ongoing maintenance and troubleshooting for custom website features and business-specific functionality.",
          es: "Mantenimiento y resolución de problemas para funciones personalizadas y soluciones específicas de tu negocio.",
        },
      },
      {
        id: "api-integration-maintenance",
        title: {
          en: "API & Integration Maintenance",
          es: "Mantenimiento de APIs e Integraciones",
        },
        description: {
          en: "Ongoing support for third-party services, APIs, booking systems, CRM connections, and other integrations.",
          es: "Soporte continuo para servicios externos, APIs, sistemas de reservación, conexiones con CRM y otras integraciones.",
        },
      },
      {
        id: "ai-workflow-maintenance",
        title: {
          en: "AI Tool & Workflow Maintenance",
          es: "Mantenimiento de Herramientas y Flujos de IA",
        },
        description: {
          en: "Maintenance and support for AI-powered tools, workflows, and automated processes connected to your website or business.",
          es: "Mantenimiento y soporte para herramientas, flujos y procesos impulsados por IA conectados a tu sitio o negocio.",
        },
      },
      {
        id: "cms-database-maintenance",
        title: {
          en: "CMS & Database Maintenance",
          es: "Mantenimiento de CMS y Bases de Datos",
        },
        description: {
          en: "Technical maintenance for content management systems, databases, dashboards, and dynamic website features.",
          es: "Mantenimiento técnico para sistemas de gestión de contenido, bases de datos, paneles y funciones dinámicas.",
        },
      },
      {
        id: "business-care-included",
        title: {
          en: "Everything in Business Care",
          es: "Todo lo Incluido en Mantenimiento Empresarial",
        },
        description: {
          en: "Includes ongoing website optimization, analytics, performance monitoring, updates, and priority support.",
          es: "Incluye optimización continua, analítica, monitoreo de rendimiento, actualizaciones y soporte prioritario.",
        },
      },
    ],
  },
];
