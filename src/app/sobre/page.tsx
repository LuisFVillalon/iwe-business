import Header from '@/app/components/header/Header-Spanish';
import Wrapper from '@/app/components/Wrapper';
import Footer from '@/app/components/footer/Footer-Spanish';
import Image from 'next/image';
import { Metadata } from 'next';
import CTAButton from '@/app/components/CTAButton';
import Contact from '@/app/components/Contact';
import ClientScrollEffect from '@/app/components/client-side/ClientScrollEffect';

export const metadata: Metadata = {
  title: 'About Us | Imperial Web Experts',
  description:
    'Learn more about Imperial Web Experts — a local web development agency helping small businesses grow with high-converting websites, SEO strategies, and modern design.',
  openGraph: {
    title: 'About Us | Imperial Web Experts',
    description:
      'Learn more about Imperial Web Experts. We are dedicated to helping small businesses in Mexicali and Imperial Valley succeed online with custom websites and digital solutions.',
    url: '',
    siteName: 'Imperial Web Experts',
  },
};

interface AboutSection {
  title: string;
  content: string;
  image: {
    src: string;
    alt: string;
  };
}

const aboutSections: AboutSection[] = [
  {
    title: 'Quiénes Somos',
    content: 'Imperial Web Experts es una pequeña agencia local de desarrollo web con sede en Calexico, California, dedicada a ayudar a los pequeños negocios locales a crecer mediante soluciones digitales de alto rendimiento y orientadas a resultados. Nos especializamos en crear sitios web y aplicaciones web personalizadas, estáticas y renderizadas del lado del servidor, que mejoran la visibilidad en línea, fortalecen la credibilidad y generan clientes potenciales calificados, todo respaldado por un diseño moderno, limpio, adaptable y un código robusto de calidad profesional.',
    image: {
      src: '/about/1.png',
      alt: 'Región fronteriza de Mexicali y Calexico.'
    }
  },
  {
    title: 'Nuestra Misión y Enfoque',
    content: 'Fundados con el objetivo de ofrecer servicios profesionales y personalizados de desarrollo web, trabajamos con pequeños negocios y emprendedores que desean hacer crecer sus proyectos en línea de manera estratégica. Hoy en día, no basta con tener un sitio web; debe estar diseñado con intención y construido estratégicamente para generar confianza, atraer clientes y fomentar un crecimiento real. Brindamos a los emprendedores locales las herramientas digitales y la experiencia necesaria para empoderar a nuestra comunidad y fortalecer la economía local.',
    image: {
      src: '/about/2.png',
      alt: 'Entorno de trabajo de un desarrollador web.'
    }
  },
  {
    title: 'Nuestra Experiencia y Habilidades',
    content: 'Con experiencia real en desarrollo web full stack y estrategias de marketing digital — como SEO local, optimización de conversiones y experiencia de usuario (UX) — aportamos las habilidades técnicas y el enfoque estratégico necesarios para crear sitios web que no solo se vean bien, sino que también generen resultados y apoyen el crecimiento del negocio. Ya sea un sitio sencillo o una solución personalizada, cada proyecto se alinea con tus objetivos. Priorizamos la comunicación directa, plazos claros y resultados a la medida de tu presupuesto.',
    image: {
      src: '/about/4.png',
      alt: 'Análisis SEO.'
    }
  },
  {
    title: 'Nuestro Equipo y Compromiso con la Comunidad',
    content: 'Somos un equipo pequeño pero capaz, liderado por un desarrollador y estratega que entiende tanto la tecnología como el mercado local. Con el respaldo de un sólido sistema de apoyo y un fuerte compromiso con los negocios de nuestra región, en Imperial Web Experts ofrecemos calidad de nivel agencia con un enfoque local. Al trabajar con nosotros, no solo obtienes un sitio web: estás invirtiendo en crecimiento sostenible, visibilidad y confianza a largo plazo.',
    image: {
      src: '/about/3.png',
      alt: 'Colaboradores de Imperial Web Experts.'
    }
  }
];


export default function AboutPage() {
  return (
    <div className="bg-[#FFFFFF]">
      <ClientScrollEffect/>
      <Header />
      <div className="h-6"></div>
      {/* Hero Section */}
    <section className="relative flex justify-center items-center h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/about/about-hero.png"
        alt="About Hero Background"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10">
        <Wrapper>
          <div className="flex justify-center items-center">
            <Image
              className="fade-in-hero-left hidden md:block"
              src="/iwe-logo.png"
              alt="Imperial Web Experts Logo"
              width={250}
              height={250}
              priority
            />
            <div className="flex flex-col gap-2 md:gap-4 justify-center items-center">
              <h1 className="text-[#ffffff] inter-text text-5xl md:text-6xl text-center font-bold fade-in-responsive-right-top">
                Acerca de Imperial Web Experts
              </h1>
              <Image
                className="fade-in-hero-left md:hidden"
                src="/iwe-logo.png"
                alt="Imperial Web Experts Logo"
                width={150}
                height={150}
                priority
              />
              <h2 className="font-bold fade-in-hero-right text-[#ffffff] inter-text text-lg md:text-2xl text-center fade-in-responsive-right-top">
                Expertos web locales que crean sitios web modernos, confiables y optimizados para la conversión.
              </h2>
              <CTAButton
                ctaText="Contactanos"
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
      <Wrapper>
        {/* Content Sections */}
        {aboutSections.map((section, index) => (
        <section key={index} className="my-12">
            <h2 className="text-center text-3xl inter-text font-bold text-[#333333] mb-6">
            {section.title}
            </h2>
            <div
            className={`md:flex justify-center items-center ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
            >
            <div className="flex-1 mb-6 md:mb-0">
                <p className={` md:text-xl text-left merriweather-text text-base text-[#333333] leading-relaxed
                  ${index % 2 !== 0 ? 'fade-in-scroll-left' : 'fade-in-scroll-right'}`}
                >
                {section.content}
                </p>
            </div>
            <div className="flex-1 flex justify-center">
                <Image
                alt={section.image.alt}
                src={section.image.src}
                width={600}
                height={400}
                className={`rounded-xl shadow-md ${index % 2 !== 0 ? 'fade-in-scroll-right' : 'fade-in-scroll-left'}`}
                loading="lazy"
                />
            </div>
            </div>
        </section>
        ))}
        <Contact
          ctaText="Servicios digitales personalizados para impulsar el crecimiento de su negocio."
          ctaTitle="Soluciones web profesionales de confianza"
          ctaButton="Contactanos"
          language="spanish"
        />
        <Footer />
      </Wrapper>
    </div>
  );
}