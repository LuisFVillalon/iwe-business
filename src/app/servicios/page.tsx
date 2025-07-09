import Header from '@/app/components/header/Header-Spanish';
import Wrapper from '@/app/components/Wrapper';
import Footer from '@/app/components/footer/Footer-Spanish';
import Image from 'next/image';
import { Metadata } from 'next';
import CTAButton from '@/app/components/CTAButton';
import Contact from '@/app/components/Contact';
import ClientScrollEffect from '@/app/components/client-side/ClientScrollEffect';
import ServicesPageCard from '@/app/components/services-sections/ServicesPageCard-Spanish';

export const metadata: Metadata = {
  title: 'Servicios | Imperial Web Experts',
  icons: {
    icon: '/iwe-logo.png',
  },
  description: 'Explore nuestros servicios de desarrollo web diseñados para pequeñas empresas en el Valle Imperial y Mexicali: desde sitios web personalizados y SEO hasta diseños rápidos y modernos que generan resultados reales.',
  openGraph: {
    title: 'Servicios | Imperial Web Experts',
    description: 'Explore nuestros servicios de desarrollo web diseñados para pequeñas empresas en el Valle Imperial y Mexicali: desde sitios web personalizados y SEO hasta diseños rápidos y modernos que generan resultados reales.',
    url: '',
    siteName: 'Imperial Web Experts',
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-[#FFFFFF]">
      <ClientScrollEffect/>
      <Header />
      <div className="h-6"></div>
      {/* Hero Section */}
      <section className="relative flex justify-center items-center h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src="/services/services-hero.png"
          alt="Services Hero Background"
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
                  Servicios de desarrollo web
                </h1>
                <Image
                  className="fade-in-hero-left md:hidden"
                  src="/iwe-logo.png"
                  alt="Imperial Web Experts Logo"
                  width={150}
                  height={150}
                  priority
                />
                <h2 className="font-bold text-[#ffffff] inter-text text-lg md:text-2xl text-center fade-in-responsive-right-top">
                  Sitios web personalizados optimizados para visibilidad, velocidad y conversión.
                </h2>
                <CTAButton
                  ctaText="Obten ayuda"
                />
              </div>
            </div>
          </Wrapper>
        </div>
      </section>
      {/* Content Sections */}
      <Wrapper>
        <ServicesPageCard/>
        <Contact
             ctaTitle="¿No estás seguro de lo que necesitas?"
             ctaText="Personalizamos su sitio web exactamente para satisfacer las necesidades de su negocio."
             ctaButton="Obten ayuda"        
             language="spanish"
        />
        <Footer />
      </Wrapper>
    </div>
  );
}