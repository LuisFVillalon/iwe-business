'use client';

import Wrapper from '@/app/components/Wrapper';
import PageHero from '@/app/components/PageHero';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/footer/Footer';
import ClientScrollEffect from '@/app/components/client-side/ClientScrollEffect';
import ServicesPageCard from '@/app/components/services-sections/ServicesPageCard';
import { useLanguage } from '@/app/components/client-side/LanguageProvider';
import { Language } from '@/app/lib/types';

const heroCopyByLanguage: Record<Language, {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  subheading: string;
  ctaText: string;
  highlights: string[];
}> = {
  english: {
    eyebrow: 'Web Development Services',
    heading: 'Websites Built to',
    headingAccent: 'Grow Your Business',
    subheading: 'Professional websites designed to strengthen your online presence, increase visibility, and turn more visitors into customers.',
    ctaText: 'Get Help',
    highlights: ['Fast, Modern Design', 'Stand Out Online', 'Built to Drive Action'],
  },
  spanish: {
    eyebrow: 'Servicios de desarrollo web',
    heading: 'Sitios web hechos para',
    headingAccent: 'hacer crecer tu negocio',
    subheading: 'Sitios web profesionales diseñados para fortalecer tu presencia en línea, aumentar tu visibilidad y convertir más visitantes en clientes.',
    ctaText: 'Obten ayuda',
    highlights: ['Diseño moderno y rápido', 'Destaca en Línea', 'Diseñado para Generar Acción'],
  },
};

const contactCopy = {
  english: {
    ctaTitle: 'Not Sure What You Need?',
    ctaText: 'We customize your website exactly to fit your business needs.',
    ctaButton: 'Get Help',
  },
  spanish: {
    ctaTitle: '¿No estás seguro de lo que necesitas?',
    ctaText: 'Personalizamos su sitio web exactamente para satisfacer las necesidades de su negocio.',
    ctaButton: 'Obten ayuda',
  },
};

const heroImage = {
  src: '/services/services-hero.png',
  alt: 'Imperial Valley and Mexicali border region',
  imageClassName: 'object-cover object-bottom',
  description: 'A local vendor serves drivers facing long hours under the harsh desert sun at the Mexico–U.S. border.',
  sourceUrl: 'https://www.aljazeera.com/features/2015/2/21/calexico-and-mexicali-twin-cities-separated-at-birth',
  sourceLinkTarget: '_blank',
  sourceLinkRel: 'noopener noreferrer',
};

export default function ServicesPageContent() {
  const { language } = useLanguage();
  const hero = heroCopyByLanguage[language];

  return (
    <>
      <ClientScrollEffect/>
      <Wrapper>
        <PageHero
          eyebrow={hero.eyebrow}
          heading={hero.heading}
          headingAccent={hero.headingAccent}
          subheading={hero.subheading}
          highlights={hero.highlights}
          ctaText={hero.ctaText}
          image={heroImage}
        />
        {/* Content Sections */}
        <ServicesPageCard/>
        <Contact copy={contactCopy} />
        <Footer />
      </Wrapper>
    </>
  );
}
