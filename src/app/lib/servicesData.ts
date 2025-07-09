export type Feature = {
  feature?: string;
  title?: string;
  description: string;
};
export type packageType = {
  title: string;
  price: string;
  description: string;
  pages: Feature[];    
  features: Feature[];
  seo: Feature[];
};
export type serviceType = {
  title: string;
  price: string;
  description: string;
  features: Feature[];
};
export type subscriptionsType = {
  title: string;
  price: string;
  description: string;
  features: Feature[];
};
const packagesArr = [
    {
        title: "All Web Packages Include:",
        price: "",
        description: "",
        pages: [],
        features: [
            {
                feature:"1 free year of fast, secure web hosting", 
                description: "Enjoy one full year of reliable, high-speed web hosting—free of charge. We’ll make sure your website is online, secure, and ready to impress from day one."
            },
            {
                feature: "Domain setup",
                description: "Just tell us the domain name you want, and we’ll take care of the registration and setup—so you can skip the hassle and get online faster."
            },
            {
                feature: "SSL security certificate (HTTPS)",
                description: "We include SSL security to protect your site and show visitors you’re trustworthy—with the secure padlock icon that builds confidence and keeps data safe."
            },
            {
                feature: "Responsive design (mobile, tablet, desktop)",
                description: "Your website will look and function beautifully on phones, tablets, and desktops—so your customers have a seamless experience no matter how they visit."
            },
            {
                feature: "Basic branding (fonts, colors, logo placement, buttons)", 
                description: "We match your site’s design to your business identity with custom fonts, colors, logos, and button styles—making your brand look polished and professional."
            },
            {
                feature: "Bilingual Websites (English & Spanish)", 
                description: "All websites include bilingual support, with content in both English and Spanish. Reach a wider audience and connect with your community."
            }
        ],
        seo: []
    }, 
    {
        title: "Starter:",
        price: "",
        description: "For individuals aiming to establish a trustworthy online presence and increase their visibility.",
        pages: [
            { title: "Home", description: "Gives visitors a clear and engaging first impression of your business." }
        ],
        features: [
            {
            title: "Hero section",
            description: "The first thing visitors see—an eye-catching area with your business name, tagline, and a strong call to action to guide them toward taking the next step."
            },
            {
            title: "Services section",
            description: "Clearly present what you offer so customers know how you can help—building trust and making it easier for them to choose you over competitors."
            },
            {
            title: "About section",
            description: "Share your story and values to build credibility and human connection—helping customers feel confident in doing business with you."
            },
            {
            title: "Contact section",
            description: "Encourage action with a dedicated space for your contact info and location—this is where visitors turn into real leads or paying customers."
            }
        ],
        seo: [
            {
                title: "Basic SEO",
                description: "Foundational SEO setup that ensures your site is optimized for search engines from the ground up."
            },
            {
                title: "Title tags",
                description: "Each page is given a clear and relevant title to improve visibility on Google and other search engines."
            },
            {
                title: "Meta description",
                description: "We write concise summaries for your pages that show up in search results and increase clicks."
            },
            {
                title: "Header tags",
                description: "Proper use of H1, H2, and H3 tags helps organize content and improve SEO structure."
            },
            {
                title: "Alt text for images",
                description: "Descriptive alt text is added to all images for better accessibility and search engine indexing."
            }
        ]
    },
    {
        title: "Business:",
        description: "For businesses ready to strengthen their presence and create new opportunities for growth.",
        price: "",
        pages: [
            { title: "Home", description: "Gives visitors a clear and engaging first impression of your business." },
            { title: "About", description: "Builds trust by sharing your story, mission, and values." },
            { title: "Services", description: "Highlights what you offer and how you can help customers." },
            { title: "Contact", description: "Encourages visitors to reach out—this is where conversions happen." }
        ],
        features: [
            {
                title: "Funnel-first website design",
                description: "Built to guide visitors toward action—whether it's calling, booking, or buying—by prioritizing user flow and clarity."
            },
            {
                title: "Contact form for visitor inquiries",
                description: "Makes it easy for potential customers to reach out directly, increasing your chances of closing leads."
            },
            {
                title: "Embedded Google Map for location",
                description: "Helps customers quickly find your physical location and improves local search visibility."
            },
            {
                title: "Google review link or custom testimonial form",
                description: "Collect and showcase social proof to build trust and boost your online reputation."
            },
            {
                title: "Home page sections for testimonials, partnerships, and payment options",
                description: "Adds credibility and convenience by showing reviews, business associations, and accepted payment methods."
            }
        ],
        seo: [
            {
                title: "Advanced SEO",
                description: "Advanced SEO techniques designed to increase your online visibility and attract more qualified customers."
            },
            {
                title: "Keyword Strategy",
                description: "We identify and target search terms your customers are actually using to find services like yours."
            },
            {
                title: "Internal Linking",
                description: "Improves site structure and helps search engines crawl your content more effectively."
            },
            {
                title: "Optimized URL Structure",
                description: "Clean, keyword-rich URLs that make your pages easier to understand for both users and search engines."
            },
            {
                title: "Local Business Schema",
                description: "We add structured data to help Google understand your business details—boosting your visibility in local search results."
            }
        ]
    },
    {
        title: "Premium:",
        price: "",
        description: "For businesses that rely on their website to make a powerful, lasting impression.",
        pages: [
            {
                title: "Home",
                description: "Gives visitors a strong first impression and guides them toward taking action."
            },
            {
                title: "About",
                description: "Builds trust by sharing your background, mission, and values."
            },
            {
                title: "Services",
                description: "Clearly outlines what you offer so customers know how you can help them."
            },
            {
                title: "Contact",
                description: "Provides a direct way for customers to reach you—where conversions often happen."
            },
            {
                title: "Testimonials",
                description: "Showcases customer reviews to establish credibility and social proof."
            },
            {
                title: "FAQ",
                description: "Answers common questions to reduce friction and improve SEO through valuable content."
            },
            {
                title: "Staff/Product Highlight",
                description: "Highlights key team members or featured products to humanize your brand or showcase offerings."
            }
        ],
        features: [
            {
                title: "All Business Package features included",
                description: "Everything from the Business Package—plus added features for a more advanced site."
            },
            {
                title: "Up to 3 additional custom pages",
                description: "Add more flexibility to showcase services, events, portfolios, or anything else you need."
            },
            {
                title: "Dedicated pages for testimonials and staff/products to build trust",
                description: "Use targeted content to build social proof and create a more personal connection with your audience."
            },
            {
                title: "FAQ page to boost SEO and enhance customer confidence",
                description: "Improves search engine visibility and addresses common concerns—helping visitors take the next step."
            }
        ],
        seo: [
            {
                title: "Superb SEO",
                description: "Comprehensive on-site SEO strategies to boost search rankings and drive high-intent traffic."
            },
            {
                title: "XML sitemap",
                description: "Automatically generated to help search engines index your site’s content more efficiently."
            },
            {
                title: "robots.txt configuration",
                description: "Controls how search engines crawl your site—optimizing performance and indexing."
            },
            {
                title: "Speed optimization",
                description: "We fine-tune performance so your site loads quickly—improving user experience and search rankings."
            }
        ]

    },    
];
const servicesArr = [
  {
    title: "Hosting Management & Renewal",
    price: "",
    description: "We make sure your website stays online, secure, and fully managed by handling hosting, renewals, and security.",
    features: [
      {
        title: "Hosting account setup & renewal",
        description: "We handle all technical setup and renewals for your hosting plan—so you don’t have to worry about downtime or expirations."
      },
      {
        title: "SSL certificate management",
        description: "We install and renew your SSL certificate to ensure your site stays secure and displays the trusted padlock icon."
      },
      {
        title: "Domain registration & renewal support",
        description: "We help you choose and register a domain, and keep it renewed so your site address never lapses."
      },
      {
        title: "Website uptime monitoring",
        description: "We monitor your site’s availability to catch and resolve hosting issues before your visitors notice."
      }
    ]
  },
  {
    title: "Website Maintenance",
    price: "",
    description: "We regularly update your site’s content, check for technical issues, and optimize performance to ensure everything runs smoothly and professionally.",
    features: [
      {
        title: "Continuous monitoring",
        description: "We keep your website running at all times by tracking uptime and resolving issues quickly if they arise."
      },
      {
        title: "Priority email support",
        description: "Get fast help with any technical or content-related issues through direct email support."
      },
      {
        title: "Monthly content updates",
        description: "We make monthly updates to your site’s text, images, or layout so it stays fresh and relevant."
      },
      {
        title: "Quarterly SEO & performance audits",
        description: "Every 3 months, we evaluate your site’s speed, mobile-friendliness, and SEO to improve performance and visibility."
      }
    ]
  }
];
const subscriptionsArr = [
  {
    title: "Automated Scheduling",
    price: "",
    description: "Let clients easily book appointments online—no back-and-forth messaging, no missed opportunities.",
    features: [
      {
        title: "Client-friendly booking link",
        description: "Share a personalized booking page so clients can schedule with you anytime, from any device."
      },
      {
        title: "Calendar sync",
        description: "Avoid double bookings with automatic syncing to your existing calendar (Google, Outlook, etc.)."
      },
      {
        title: "Custom availability & buffers",
        description: "Set your hours, break times, and booking rules so your schedule works exactly how you need it."
      },
      {
        title: "Automated reminders",
        description: "Reduce no-shows with email reminders automatically sent before appointments."
      }
    ]
  },
  {
    title: "Public Blog",
    price: "",
    description: "Boost your visibility, build trust, and keep your audience engaged with regular blog content—no complex tools required.",
    features: [
      {
        title: "Expertise-driven content",
        description: "Showcase your knowledge with posts that educate, inform, and resonate with your audience."
      },
      {
        title: "SEO benefits",
        description: "Publishing blog content helps improve your website’s search rankings and reach new customers."
      },
      {
        title: "Customer engagement",
        description: "Keep clients updated, answer common questions, and build loyalty through consistent communication."
      },
      {
        title: "Simple posting process",
        description: "Add or update posts easily without needing to manage a complicated CMS or backend system."
      }
    ]
  }
];
const packagesArrSpanish = [ 
  {
    title: "Todos los paquetes web incluyen:",
    price: "",
    description: "",
    pages: [],
    features: [
      {
        feature: "1 año gratis de hosting web rápido y seguro",
        description: "Disfruta de un año completo de alojamiento web confiable y de alta velocidad, sin costo. Nos aseguramos de que tu sitio esté en línea, seguro y listo para impresionar desde el primer día."
      },
      {
        feature: "Configuración de dominio",
        description: "Solo dinos el nombre de dominio que deseas y nos encargamos del registro y la configuración, para que puedas estar en línea más rápido y sin complicaciones."
      },
      {
        feature: "Certificado de seguridad SSL (HTTPS)",
        description: "Incluimos seguridad SSL para proteger tu sitio y mostrar a tus visitantes que eres de confianza, con el ícono de candado que genera seguridad y protege los datos."
      },
      {
        feature: "Diseño responsivo (móvil, tablet, escritorio)",
        description: "Tu sitio web se verá y funcionará perfectamente en teléfonos, tablets y computadoras, ofreciendo una experiencia fluida sin importar el dispositivo."
      },
      {
        feature: "Identidad visual básica (tipografías, colores, logotipo, botones)",
        description: "Adaptamos el diseño de tu sitio a la identidad de tu negocio con tipografías, colores, logotipo y estilos de botón personalizados, haciendo que tu marca luzca profesional y coherente."
      }
    ],
    seo: []
  },
  {
    title: "Inicial:",
    price: "",
    description: "Para personas que buscan establecer una presencia confiable en línea y aumentar su visibilidad.",
    pages: [
      { title: "Inicio", description: "Ofrece a los visitantes una primera impresión clara y atractiva de tu negocio." }
    ],
    features: [
      {
        title: "Sección principal (Hero)",
        description: "Lo primero que verán los visitantes: un área llamativa con el nombre de tu negocio, eslogan y un llamado a la acción claro que los guíe al siguiente paso."
      },
      {
        title: "Sección de servicios",
        description: "Presenta claramente lo que ofreces para generar confianza y ayudar a los clientes a elegirte sobre la competencia."
      },
      {
        title: "Sección sobre nosotros",
        description: "Comparte tu historia y valores para generar conexión humana y credibilidad, ayudando a que los clientes confíen en ti."
      },
      {
        title: "Sección de contacto",
        description: "Invita a la acción con un espacio dedicado para tu información de contacto y ubicación, donde los visitantes se convierten en clientes."
      }
    ],
    seo: [
      {
        title: "SEO básico",
        description: "Configuración inicial que optimiza tu sitio para motores de búsqueda desde el principio."
      },
      {
        title: "Etiquetas de título",
        description: "Cada página tiene un título claro y relevante para mejorar la visibilidad en Google y otros buscadores."
      },
      {
        title: "Meta descripciones",
        description: "Redactamos resúmenes concisos que aparecen en los resultados de búsqueda y aumentan los clics."
      },
      {
        title: "Etiquetas de encabezado",
        description: "Uso adecuado de etiquetas H1, H2 y H3 para organizar el contenido y mejorar la estructura SEO."
      },
      {
        title: "Texto alternativo para imágenes",
        description: "Agregamos texto descriptivo a todas las imágenes para mejorar la accesibilidad y el posicionamiento."
      }
    ]
  },
  {
    title: "Empresial:",
    description: "Para negocios que desean fortalecer su presencia en línea y crear nuevas oportunidades de crecimiento.",
    price: "",
    pages: [
      { title: "Inicio", description: "Primera impresión clara y atractiva de tu negocio para los visitantes." },
      { title: "Sobre Nosotros", description: "Genera confianza compartiendo tu historia, misión y valores." },
      { title: "Servicios", description: "Resalta lo que ofreces y cómo puedes ayudar a tus clientes." },
      { title: "Contacto", description: "Invita a los visitantes a contactarte—donde ocurren las conversiones." }
    ],
    features: [
      {
        title: "Diseño web enfocado en conversiones",
        description: "Estructurado para guiar a los visitantes a tomar acción—ya sea llamar, agendar o comprar—priorizando la claridad y el flujo del usuario."
      },
      {
        title: "Formulario de contacto para consultas",
        description: "Facilita que los clientes potenciales se comuniquen directamente contigo, aumentando las oportunidades de venta."
      },
      {
        title: "Mapa de Google integrado",
        description: "Ayuda a tus clientes a encontrar tu ubicación física y mejora tu presencia en búsquedas locales."
      },
      {
        title: "Enlace de reseñas en Google o formulario de testimonios",
        description: "Recoge y muestra pruebas sociales para aumentar la confianza y tu reputación en línea."
      },
      {
        title: "Secciones en la página de inicio para testimonios, alianzas y métodos de pago",
        description: "Agrega credibilidad mostrando reseñas, asociaciones y formas de pago aceptadas."
      }
    ],
    seo: [
      {
        title: "SEO avanzado",
        description: "Técnicas de posicionamiento más sofisticadas para atraer clientes calificados."
      },
      {
        title: "Estrategia de palabras clave",
        description: "Identificamos y apuntamos a las búsquedas reales que hacen tus clientes potenciales."
      },
      {
        title: "Enlaces internos",
        description: "Mejoran la estructura del sitio y ayudan a los motores de búsqueda a rastrear el contenido."
      },
      {
        title: "Estructura optimizada de URLs",
        description: "URLs limpias y ricas en palabras clave para mejorar el SEO y la comprensión del contenido."
      },
      {
        title: "Marcado Schema para negocios locales",
        description: "Agregamos datos estructurados para que Google entienda mejor tu negocio y te destaque en búsquedas locales."
      }
    ]
  },
  {
    title: "Premium:",
    price: "",
    description: "Para negocios que dependen de su sitio web para causar una impresión poderosa y duradera.",
    pages: [
      { title: "Inicio", description: "Causa una excelente primera impresión y dirige a los visitantes a tomar acción." },
      { title: "Sobre Nosotros", description: "Genera confianza compartiendo tu historia, misión y valores." },
      { title: "Servicios", description: "Muestra claramente lo que ofreces para que los clientes sepan cómo puedes ayudarlos." },
      { title: "Contacto", description: "Proporciona una forma directa para que los clientes te contacten—donde ocurren las conversiones." },
      { title: "Testimonios", description: "Presenta reseñas de clientes para generar credibilidad y prueba social." },
      { title: "Preguntas frecuentes (FAQ)", description: "Responde preguntas comunes y mejora el SEO con contenido valioso." },
      { title: "Equipo o productos destacados", description: "Presenta a los miembros clave de tu equipo o productos importantes para humanizar tu marca." }
    ],
    features: [
      {
        title: "Incluye todas las funciones del paquete Business",
        description: "Todo lo del paquete Business, más funciones adicionales para un sitio más completo."
      },
      {
        title: "Hasta 3 páginas personalizadas adicionales",
        description: "Agrega flexibilidad para mostrar más servicios, portafolio, eventos o lo que necesites."
      },
      {
        title: "Páginas exclusivas para testimonios y equipo/productos",
        description: "Contenido enfocado para crear una conexión más personal y fortalecer la confianza."
      },
      {
        title: "Página de preguntas frecuentes para mejorar SEO",
        description: "Aumenta la visibilidad en buscadores y resuelve dudas comunes para facilitar decisiones."
      }
    ],
    seo: [
      {
        title: "SEO excepcional",
        description: "Estrategias completas de SEO en el sitio para aumentar tu ranking y atraer tráfico calificado."
      },
      {
        title: "Mapa del sitio XML",
        description: "Se genera automáticamente para que los buscadores indexen mejor tu contenido."
      },
      {
        title: "Configuración de robots.txt",
        description: "Controla cómo los motores de búsqueda rastrean tu sitio para un mejor rendimiento."
      },
      {
        title: "Optimización de velocidad",
        description: "Aceleramos el rendimiento para mejorar la experiencia del usuario y el posicionamiento en Google."
      }
    ]
  }
];
const servicesArrSpanish = [
  {
    title: "Gestión y renovación de hosting",
    price: "",
    description: "Nos aseguramos de que tu sitio web esté en línea, seguro y completamente gestionado, encargándonos del hosting, renovaciones y seguridad.",
    features: [
      {
        title: "Configuración y renovación del hosting",
        description: "Nos encargamos de toda la configuración técnica y las renovaciones para que no te preocupes por caídas o vencimientos."
      },
      {
        title: "Gestión del certificado SSL",
        description: "Instalamos y renovamos tu certificado SSL para mantener tu sitio seguro y con el ícono de candado confiable."
      },
      {
        title: "Registro y renovación de dominio",
        description: "Te ayudamos a elegir, registrar y renovar tu dominio para que tu dirección web esté siempre activa."
      },
      {
        title: "Monitoreo de disponibilidad del sitio",
        description: "Supervisamos la disponibilidad de tu sitio para resolver problemas de hosting antes de que los visitantes se den cuenta."
      }
    ]
  },
  {
    title: "Mantenimiento de sitio web",
    price: "",
    description: "Actualizamos regularmente el contenido, revisamos problemas técnicos y optimizamos el rendimiento para asegurar que tu sitio funcione correctamente.",
    features: [
      {
        title: "Monitoreo continuo",
        description: "Mantenemos tu sitio funcionando todo el tiempo, resolviendo rápidamente cualquier problema."
      },
      {
        title: "Soporte prioritario por correo",
        description: "Obtén asistencia rápida ante cualquier problema técnico o de contenido mediante soporte por correo directo."
      },
      {
        title: "Actualizaciones mensuales de contenido",
        description: "Actualizamos mensualmente textos, imágenes o el diseño de tu sitio para mantenerlo fresco y relevante."
      },
      {
        title: "Auditorías trimestrales de SEO y rendimiento",
        description: "Cada 3 meses evaluamos velocidad, adaptabilidad móvil y SEO para mejorar resultados."
      }
    ]
  }
];
const subscriptionsArrSpanish = [
  {
    title: "Agenda automatizada",
    price: "",
    description: "Permite que tus clientes agenden citas en línea fácilmente—sin mensajes innecesarios ni oportunidades perdidas.",
    features: [
      {
        title: "Enlace de reserva amigable para clientes",
        description: "Comparte una página personalizada para que los clientes agenden contigo desde cualquier dispositivo."
      },
      {
        title: "Sincronización con calendario",
        description: "Evita citas dobles sincronizando automáticamente con tu calendario existente (Google, Outlook, etc.)."
      },
      {
        title: "Disponibilidad personalizada y tiempos de descanso",
        description: "Configura tu horario, descansos y reglas para que tu agenda funcione exactamente como necesitas."
      },
      {
        title: "Recordatorios automáticos",
        description: "Reduce ausencias con correos de recordatorio enviados automáticamente antes de cada cita."
      }
    ]
  },
  {
    title: "Blog público",
    price: "",
    description: "Aumenta tu visibilidad, genera confianza y mantiene a tu audiencia conectada con contenido regular en tu blog—sin herramientas complicadas.",
    features: [
      {
        title: "Contenido basado en tu experiencia",
        description: "Demuestra tu conocimiento con publicaciones que educan, informan y conectan con tu audiencia."
      },
      {
        title: "Beneficios SEO",
        description: "Publicar contenido en el blog mejora tu posicionamiento en buscadores y atrae nuevos clientes."
      },
      {
        title: "Interacción con clientes",
        description: "Mantén informados a tus clientes, resuelve dudas comunes y genera fidelidad con comunicación constante."
      },
      {
        title: "Proceso de publicación simple",
        description: "Agrega o actualiza entradas fácilmente, sin necesidad de manejar sistemas complicados."
      }
    ]
  }
];

export {
    packagesArr,
    servicesArr,
    subscriptionsArr,
    packagesArrSpanish,
    servicesArrSpanish,
    subscriptionsArrSpanish    
}; 