import Header from '@/app/components/header/Header';
import Wrapper from '@/app/components/Wrapper';
import Hero from '@/app/components/home-sections/Hero';
import About from '@/app/components/home-sections/About';
import Services from '@/app/components/home-sections/Services';
import SocialLinks from '@/app/components/home-sections/SocialLinks';
import Contact from '@/app/components//Contact';
import Footer from '@/app/components/footer/Footer';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lead-Generating Websites | Imperial Valley & Mexicali',
  icons: {
    icon: '/iwe-logo.png',
  },
  description: 'Custom, lead-generating websites for small businesses in Imperial Valley & Mexicali. Built to last. Designed to lead. Get more visibility and bookings.',
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
          <SocialLinks/>
          <Contact
             copy={{
               english: {
                 ctaTitle: "Start Growing Your Business Online",
                 ctaText: "Get a website that brings in calls, customers, and results.",
                 ctaButton: "Let's Talk",
               },
               spanish: {
                 ctaTitle: "Contáctanos",
                 ctaText: "Nos encantaría saber cómo podemos ayudarle. ¡Envíenos un mensaje!",
                 ctaButton: "Hablemos",
               },
             }}
          />
          <Footer/> 
        </Wrapper>
      </div>
  );
}
