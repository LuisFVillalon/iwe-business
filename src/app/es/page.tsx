import Header from '@/app/components/header/Header-Spanish';
import Wrapper from '@/app/components/Wrapper';
import Hero from '@/app/components/home-sections-spanish/Hero';
import About from '@/app/components/home-sections-spanish/About';
import Services from '@/app/components/home-sections-spanish/Services';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/footer/Footer-Spanish';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sitios Web que Generan Clientes Potenciales | Valle Imperial y Mexicali',
  description: 'Sitios web personalizados que generan clientes potenciales para pequeños negocios en el Valle Imperial y Mexicali. Construidos para durar. Diseñados para liderar. Obtén más visibilidad y reservas.',
  openGraph: {
    title: 'Lead-Generating Websites | Imperial Valley & Mexicali',
    description: 'Custom, lead-generating websites for small businesses in Imperial Valley & Mexicali. Built to last. Designed to lead. Get more visibility and bookings.',
    url: '',
    siteName: 'Imperial Web Experts',    
  },
}

export default function Home() {
  return (
      <div className="bg-[#FFFFFF]">
        <Header/>
        {/* div allows hero section to be displayed without the header blocking it */}
        <div className="h-12"></div> 
        <Wrapper>
          <Hero/>
          <Services/>
          <About/>
          <Contact
             ctaTitle="Contáctanos"
             ctaText="Nos encantaría saber cómo podemos ayudarle. ¡Envíenos un mensaje!"
             ctaButton="Hablemos"
             language="spanish"
          />
          <Footer/> 
        </Wrapper>
      </div>
  );
}
