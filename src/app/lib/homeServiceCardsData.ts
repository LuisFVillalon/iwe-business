export type serviceType = {
    title: string;
    price: string;
    icon: string;
    purpose: string;
    category: string;
  };

const homeServiceCardsArr = [
    {
        title: "Starter Package",
        price: "",
        icon: "/services/services-icons/starter.png",
        purpose: "For individuals aiming to establish a trustworthy online presence and increase their visibility.",
        category: "packages"

    }, 
    {
        title: "Business Package",
        price: "",
        icon: "/services/services-icons/business.png",
        purpose: "For businesses ready to strengthen their presence and create new opportunities for growth.",
        category: "packages"

    }, 
    {
        title: "Premium Package",
        price: "",
        icon: "/services/services-icons/premium.png",
        purpose: "For businesses that rely on their website to make a powerful, lasting impression.",
        category: "packages"

    },    
    {
        title: "Hosting Management & Renewal",
        price: "",
        icon: "/services/services-icons/host.png",
        purpose: "We make sure your website stays online and safe by handling your hosting and security renewals.",
        category: "services"

    },  
    {
        title: "Website Maintenance",
        price: "",
        icon: "/services/services-icons/webm.png",
        purpose: "We regularly update your site and fix any problems to keep it running smoothly.",
        category: "services"

    }, 
    {
        title: "Automated Scheduling",
        price: "",
        icon: "/services/services-icons/scheduling.png",
        purpose: "Let clients easily book appointments online—no back-and-forth messaging, no missed opportunities.",
        category: "subscriptions"

    }, 
    {
        title: "Public Blog",
        price: "",
        icon: "/services/services-icons/blog.png",
        purpose: "Boost your visibility, build trust, and keep your audience engaged with regular blog content—no complex tools required.",
        category: "subscriptions"

    }         
];

const homeServiceCardsArrSpanish = [
    {
        title: "Paquete Inicial",
        price: "",
        icon: "/services/services-icons/starter.png",
        purpose: "Para personas que desean establecer una presencia confiable en línea y aumentar su visibilidad.",
        category: "packages"

    }, 
    {
        title: "Paquete Empresarial",
        price: "",
        icon: "/services/services-icons/business.png",
        purpose: "Para empresas listas para fortalecer su presencia y crear nuevas oportunidades de crecimiento.",
        category: "packages"

    }, 
    {
        title: "Paquete Premium",
        price: "",
        icon: "/services/services-icons/premium.png",
        purpose: "Para empresas que dependen de su sitio web para causar una impresión inolvidable y duradera.",
        category: "packages"

    },    
    {
        title: "Gestión y Renovación de Hosting",
        price: "",
        icon: "/services/services-icons/host.png",
        purpose: "Nos aseguramos de que tu sitio web esté siempre en línea y seguro, manejando la renovación de hosting y seguridad.",
        category: "services"

    },  
    {
        title: "Mantenimiento de Sitio Web",
        price: "",
        icon: "/services/services-icons/webm.png",
        purpose: "Actualizamos tu sitio regularmente y solucionamos problemas para que funcione sin inconvenientes.",
        category: "services"

    }, 
    {
        title: "Agenda Automática",
        price: "",
        icon: "/services/services-icons/scheduling.png",
        purpose: "Permite que tus clientes reserven citas fácilmente en línea, sin mensajes de ida y vuelta ni oportunidades perdidas.",
        category: "subscriptions"

    }, 
    {
        title: "Blog Público",
        price: "",
        icon: "/services/services-icons/blog.png",
        purpose: "Aumenta tu visibilidad, genera confianza y mantén a tu audiencia comprometida con contenido regular, sin herramientas complejas.",
        category: "subscriptions"

    }         
];


export {
    homeServiceCardsArr,
    homeServiceCardsArrSpanish
}; 