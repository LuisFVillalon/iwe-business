import Header from '@/app/components/header/Header';
import Wrapper from '@/app/components/Wrapper';
import Footer from '@/app/components/footer/Footer';
import Image from 'next/image';
import { Metadata } from 'next';
import CTAButton from '../components/CTAButton';
import Contact from '../components/Contact';
import ClientScrollEffect from '../components/client-side/ClientScrollEffect';
import ServicesPageCard from '../components/services-sections/ServicesPageCard';

export const metadata: Metadata = {
  title: 'Services | Imperial Web Experts',
  description: 'Explore our web development services tailored for small businesses in Imperial Valley and Mexicali — from custom websites and SEO to fast, modern design that drives real results.',
  openGraph: {
    title: 'Services | Imperial Web Experts',
    description: 'Discover how Imperial Web Experts helps small businesses in Mexicali and Imperial Valley grow online through custom web design, SEO, and lead-focused digital solutions.',
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
                  Web Development Services
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
                  Custom websites optimized for visibility, speed, and conversion.
                </h2>
                <CTAButton
                  ctaText="Get Help"
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
             ctaTitle="Not Sure What You Need?"
             ctaText="We customize your website exactly to fit your business needs."
             ctaButton="Get Help"        
             language="english"
        />
        <Footer />
      </Wrapper>
    </div>
  );
}