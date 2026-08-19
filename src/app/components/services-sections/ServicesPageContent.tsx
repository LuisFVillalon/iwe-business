'use client';

import Image from 'next/image';
import { useState } from 'react';
import Wrapper from '@/app/components/Wrapper';
import CTAButton from '@/app/components/CTAButton';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/footer/Footer';
import ClientScrollEffect from '@/app/components/client-side/ClientScrollEffect';
import ServicesPageCard from '@/app/components/services-sections/ServicesPageCard';
import { useLanguage } from '@/app/components/client-side/LanguageProvider';
import { Language } from '@/app/lib/types';
import { CheckCircle2, ExternalLink } from 'lucide-react';

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

export default function ServicesPageContent() {
  const { language } = useLanguage();
  const hero = heroCopyByLanguage[language];
  const [showHeroOverlay, setShowHeroOverlay] = useState(false);

  return (
    <>
      <ClientScrollEffect/>
      <Wrapper>
        {/* Hero Section */}
        <div className="py-10 md:py-4 w-screen relative left-1/2 right-1/2 -mx-[50vw] min-h-100vh bg-[#0A0A23]">
          <div className="max-w-4xl md:max-w-7xl mx-auto px-4 md:px-2 py-+20 md:py-3 flex flex-col gap-10 md:gap-14 justify-center items-center">
            <div className="w-full grid md:grid-cols-2 gap-10 md:gap-8 items-center">
              {/* Copy column */}
              <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
                {/* Eyebrow badge */}
                <span className="fade-in-responsive-left-top inline-flex items-center gap-2 rounded-sm bg-white/10 border border-white/20 px-3 py-1 text-[13px] md:text-[15px] tracking-[1.5px] uppercase font-semibold text-[#dab63e]">
                  {hero.eyebrow}
                </span>

                <h1 className="fade-in-responsive-left-top inter-text text-white text-4xl md:text-5xl leading-tight font-semibold tracking-tight">
                  {hero.heading}{' '}
                  <strong className="italic text-[#dab63e]">{hero.headingAccent}</strong>
                </h1>

                <p className="fade-in-responsive-left-top text-[#999999] text-lg md:text-xl font-medium max-w-md">
                  {hero.subheading}
                </p>

                <div className="fade-in-responsive-left-top flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2">
                  {hero.highlights.map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-[#23508e]" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="fade-in-responsive-left-top mt-2">
                  <CTAButton ctaText={hero.ctaText} />
                </div>
              </div>

              {/* Visual column */}
              <div
                className="group fade-in-scroll-hero relative rounded-md overflow-hidden border border-white/10 shadow-xl h-64 md:h-96 cursor-pointer"
                onClick={() => setShowHeroOverlay((v) => !v)}
              >
                <Image
                  src="/services/about-hero.png"
                  alt="Imperial Valley and Mexicali border region"
                  fill
                  className="object-cover object-bottom"
                  priority
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A23]/85 via-[#0A0A23]/10 to-transparent" />

                {/* Hover/tap darken overlay */}
                <div
                  className={`absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:opacity-100 ${
                    showHeroOverlay ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Description, centered */}
                <div
                  className={`absolute inset-0 flex items-center justify-center px-6 text-center transition-opacity duration-300 group-hover:opacity-100 ${
                    showHeroOverlay ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <p className="inter-text text-white text-sm md:text-base font-medium max-w-xs">
                    A local vendor serves drivers facing long hours under the harsh desert sun at the Mexico–U.S. border.
                  </p>
                </div>

                {/* Source link */}
                <div
                  className={`absolute top-3 right-3 transition-opacity duration-300 group-hover:opacity-100 ${
                    showHeroOverlay ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <a
                    href="https://www.aljazeera.com/features/2015/2/21/calexico-and-mexicali-twin-cities-separated-at-birth"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-[11px] text-white/80 underline underline-offset-2 hover:text-white"
                  >
                    Source
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div
                  className={`absolute bottom-4 left-4 transition-opacity duration-300 group-hover:opacity-100 ${
                    showHeroOverlay ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src="/iwe-logo.png"
                    alt="Imperial Web Experts Logo"
                    width={36}
                    height={36}
                    className="rounded-sm bg-white/90 p-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content Sections */}
        <ServicesPageCard/>
        <Contact copy={contactCopy} />
        <Footer />
      </Wrapper>
    </>
  );
}
