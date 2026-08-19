'use client';

import Image from 'next/image';
import { useState } from 'react';
import Wrapper from '@/app/components/Wrapper';
import CTAButton from '@/app/components/CTAButton';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/footer/Footer';
import ClientScrollEffect from '@/app/components/client-side/ClientScrollEffect';
import { useLanguage } from '@/app/components/client-side/LanguageProvider';
import { Language } from '@/app/lib/types';
import { CheckCircle2, Users, Code2, Target, ExternalLink, type LucideIcon } from 'lucide-react';

interface AboutSection {
  slug: string;
  title: string;
  summary: string;
  lead: string;
  content: string;
  image: {
    src: string;
    alt: string;
    caption: string;
    description: string;
    sourceUrl: string;
  };
}

// Positional (not localized) — paired with aboutSectionsByLanguage entries by index.
const aboutSectionAccents: { icon: LucideIcon; color: string; tint: string }[] = [
  { icon: Users, color: '#0A0A23', tint: 'rgba(10, 10, 35, 0.06)' },
  { icon: Code2, color: '#23508e', tint: 'rgba(35, 80, 142, 0.08)' },
  { icon: Target, color: '#006400', tint: 'rgba(0, 100, 0, 0.08)' },
];

const aboutSectionsByLanguage: Record<Language, AboutSection[]> = {
  english: [
    {
      slug: 'quienes-somos',
      title: 'About Us',
      summary: 'Modern websites that build trust and win more customers.',
      lead: 'Imperial Web Experts help local businesses build a stronger online presence through modern, professional websites designed around their goals.',
      content: 'We focus on creating websites that increase visibility, build trust, and help turn more visitors into leads, bookings, and customers.',
      image: {
        src: '/about/1.png',
        alt: 'Mexicali and Calexico border region.',
        caption: 'Bighorn Sheep',
        description: 'Native to the Sonoran Desert, representing the local spirit of resilience, strength, and adaptability.',
        sourceUrl: 'https://www.azgfd.com/species/bighorn-sheep/',
      }
    },
    {
      slug: 'nuestra-experiencia',
      title: 'Our Experience',
      summary: 'Web development, integrations, and AI-powered solutions.',
      lead: 'Our experience spans modern web development, custom integrations, and AI-powered solutions.',
      content: 'We use modern technologies to build everything from professional marketing websites to advanced custom solutions tailored to how a business operates.',
      image: {
        src: '/about/2.png',
        alt: 'Web developer work environement.',
        caption: 'Modern Workflow',
        description: 'Building tailored, scalable digital solutions with advanced tools, clean architecture, and modern development practices.',
        sourceUrl: 'https://blackdigitalgroup.com/website-development/',
      }
    },
    {
      slug: 'nuestra-mision',
      title: 'Our Mission',
      summary: 'Helping local businesses grow online.',
      lead: 'Our mission is to help small businesses in Imperial Valley, Mexicali, and surrounding region compete more effectively online.',
      content: 'We make professional web services straightforward and accessible while building websites that improve visibility, strengthen credibility, and support real business growth.',
      image: {
        src: '/about/4.png',
        alt: 'SEO analytics.',
        caption: 'SEO Statistics',
        description: 'Monitoring search traffic, user engagement, and performance metrics to maximize online visibility.',
        sourceUrl: 'https://www.seemeedigital.com/local/medford',
      }
    },
  ],
  spanish: [
    {
      slug: 'quienes-somos',
      title: 'Quiénes Somos',
      summary: 'Sitios modernos que generan confianza y más clientes.',
      lead: 'Imperial Web Experts ayuda a negocios locales a construir una presencia en línea más sólida mediante sitios web modernos y profesionales diseñados alrededor de sus objetivos.',
      content: 'Creamos sitios que aumentan la visibilidad, generan confianza y ayudan a convertir más visitantes en prospectos, citas y clientes.',
      image: {
        src: '/about/1.png',
        alt: 'Región fronteriza de Mexicali y Calexico.',
        caption: 'Borrego cimarrón',
        description: 'Originario del desierto de Sonora, representa el espíritu local de resiliencia, fuerza y adaptabilidad.',
        sourceUrl: 'https://www.azgfd.com/species/bighorn-sheep/',
      }
    },
    {
      slug: 'nuestra-experiencia',
      title: 'Nuestra Experiencia',
      summary: 'Desarrollo web, integraciones y soluciones con IA.',
      lead: 'Nuestra experiencia abarca desarrollo web moderno, integraciones personalizadas y soluciones impulsadas por inteligencia artificial.',
      content: 'Utilizamos tecnologías modernas para crear desde sitios web profesionales de marketing hasta soluciones personalizadas avanzadas adaptadas a la forma en que opera cada negocio.',
      image: {
        src: '/about/2.png',
        alt: 'Entorno de trabajo de un desarrollador web.',
        caption: 'Flujo de Trabajo Moderno',
        description: 'Texto de descripción de marcador de posición.',
        sourceUrl: '#',
      }
    },
    {
      slug: 'nuestra-mision',
      title: 'Nuestra Misión',
      summary: 'Ayudamos a negocios locales a crecer en línea.',
      lead: 'Nuestra misión es ayudar a pequeños negocios de Mexicali, el Valle Imperial, y regiones cercanas a competir de manera más efectiva en línea.',
      content: 'Hacemos que los servicios web profesionales sean claros y accesibles mientras creamos sitios que mejoran la visibilidad, fortalecen la credibilidad y apoyan el crecimiento real del negocio.',
      image: {
        src: '/about/4.png',
        alt: 'Análisis de SEO y rendimiento web.',
        caption: 'Estadísticas de SEO',
        description: 'Texto de descripción de marcador de posición.',
        sourceUrl: '#',
      }
    }
  ],
};

const heroCopyByLanguage: Record<Language, {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  subheading: string;
  ctaText: string;
  highlights: string[];
}> = {
  english: {
    eyebrow: 'About Us',
    heading: 'Web Solutions Built for',
    headingAccent: 'Local Businesses',
    subheading:
      'We build reliable markerting websites designed to strengthen your online presence and attract more customers across Imperial Valley & Mexicali grow.',
    ctaText: 'Contact Us',
    highlights: ['Local Expertise', 'Bilingual Service', 'Built Around Your Business'],
  },

  spanish: {
    eyebrow: 'Sobre Nosotros',
    heading: 'Soluciones Web Creadas para',
    headingAccent: 'Negocios Locales',
    subheading:
      'Creamos sitios web modernos y confiables diseñados para fortalecer tu presencia en línea, atraer más clientes y ayudar a crecer a negocios en Mexicali y el Valle Imperial.',
    ctaText: 'Contáctanos',
    highlights: ['Experiencia Local', 'Servicio Bilingüe', 'Diseñado para tu Negocio'],
  },
};

const sectionsIntroByLanguage: Record<Language, { eyebrow: string; heading: string; subheading: string }> = {
  english: {
    eyebrow: 'Get to Know Us',
    heading: 'What We Do & Why It Matters',
    subheading: 'A quick overview — jump to what interests you most.',
  },
  spanish: {
    eyebrow: 'Conócenos',
    heading: 'Qué Hacemos y Por Qué Importa',
    subheading: 'Un vistazo rápido — ve directo a lo que más te interese.',
  },
};

const contactCopy = {
  english: {
    ctaTitle: 'Trusted Professional Web Solutions',
    ctaText: 'Tailored digital services to drive your business growth.',
    ctaButton: 'Contact Us',
  },
  spanish: {
    ctaTitle: 'Soluciones web profesionales de confianza',
    ctaText: 'Servicios digitales personalizados para impulsar el crecimiento de su negocio.',
    ctaButton: 'Contactanos',
  },
};

export default function AboutPageContent() {
  const { language } = useLanguage();
  const aboutSections = aboutSectionsByLanguage[language];
  const hero = heroCopyByLanguage[language];
  const sectionsIntro = sectionsIntroByLanguage[language];
  const [showHeroOverlay, setShowHeroOverlay] = useState(false);
  const [expandedSectionIndex, setExpandedSectionIndex] = useState<number | null>(null);

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
                  src="/about/new-hero.png"
                  alt="Imperial Web Experts team and workspace"
                  fill
                  className="object-cover object-center"
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
                    Rooted in the Imperial Valley and Mexicali region, we bridge two distinct communities through powerful, modern web solutions.
                  </p>
                </div>

                {/* Source link */}
                <div
                  className={`absolute top-3 right-3 transition-opacity duration-300 group-hover:opacity-100 ${
                    showHeroOverlay ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <a
                    href="https://www.pbase.com/bmcmorrow/image/74771071"
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
      </Wrapper>
      <Wrapper>
        {/* Section intro + jump nav */}
        <section className="mt-16 md:mt-24 flex flex-col items-center text-center gap-3">
          <span className="inter-text text-[11px] md:text-[12px] font-bold uppercase tracking-[0.14em] text-[#dab63e]">
            {sectionsIntro.eyebrow}
          </span>
          <h2 className="inter-text font-bold text-[26px] md:text-[32px] leading-[34px] md:leading-[40px] text-[#0A0A23]">
            {sectionsIntro.heading}
          </h2>
          <p className="merriweather-text text-[15px] md:text-[16px] leading-[24px] text-[#555555] max-w-xl">
            {sectionsIntro.subheading}
          </p>

          <div className="grid md:grid-cols-3 gap-4 w-full mt-6">
            {aboutSections.map((section, index) => {
              const { icon: Icon, color, tint } = aboutSectionAccents[index % aboutSectionAccents.length];

              return (
                <a
                  key={section.slug}
                  href={`#${section.slug}`}
                  className="group text-left flex flex-col gap-3 bg-white rounded-2xl border border-[#d8d8d8] p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-[var(--accent)]"
                  style={{ '--accent': color } as React.CSSProperties}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: tint }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} strokeWidth={2} />
                  </div>
                  <span
                    className="inter-text text-[11px] font-bold uppercase tracking-[0.14em]"
                    style={{ color }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="inter-text font-bold text-[17px] leading-[22px] text-[#0A0A23]">
                    {section.title}
                  </h3>
                  <p className="merriweather-text text-[14px] leading-[20px] text-[#555555]">
                    {section.summary}
                  </p>
                </a>
              );
            })}
          </div>
        </section>

        {/* Content Sections */}
        <section aria-label={hero.eyebrow} className="my-16 md:my-24 flex flex-col gap-6 md:gap-8">
          {aboutSections.map((section, index) => {
            const { icon: Icon, color, tint } = aboutSectionAccents[index % aboutSectionAccents.length];
            const reversed = index % 2 !== 0;

            return (
              <div
                key={index}
                id={section.slug}
                style={{ scrollMarginTop: '96px' }}
                className="fade-in-scroll bg-white rounded-2xl border border-[#d8d8d8] p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-[#0A0A23]/15"
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
                  <div
                    className={`group relative rounded-2xl overflow-hidden border border-[#d8d8d8] shadow-md aspect-[4/3] cursor-pointer ${
                      reversed ? 'md:order-2' : ''
                    }`}
                    onClick={() =>
                      setExpandedSectionIndex((prev) => (prev === index ? null : index))
                    }
                  >
                    <Image
                      alt={section.image.alt}
                      src={section.image.src}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A23]/25 via-transparent to-transparent" />

                    {/* Hover/tap darken overlay */}
                    <div
                      className={`absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:opacity-100 ${
                        expandedSectionIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    />

                    {/* Description, centered */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center px-6 text-center transition-opacity duration-300 group-hover:opacity-100 ${
                        expandedSectionIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <p className="inter-text text-white text-sm font-medium max-w-xs">
                        {section.image.description}
                      </p>
                    </div>

                    {/* Source link */}
                    <div
                      className={`absolute top-3 right-3 transition-opacity duration-300 group-hover:opacity-100 ${
                        expandedSectionIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <a
                        href={section.image.sourceUrl}
                        target={section.image.sourceUrl !== '#' ? '_blank' : undefined}
                        rel={section.image.sourceUrl !== '#' ? 'noopener noreferrer' : undefined}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[11px] text-white/80 underline underline-offset-2 hover:text-white"
                      >
                        Source
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                      <Image
                        src="/iwe-logo.png"
                        alt="Imperial Web Experts Logo"
                        width={36}
                        height={36}
                        className="rounded-sm bg-white/90 p-1"
                      />
                      <span className="text-white text-sm md:text-base font-semibold inter-text">
                        {section.image.caption}
                      </span>
                    </div>
                  </div>

                  <div className={reversed ? 'md:order-1' : ''}>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: tint }}
                    >
                      <Icon className="w-6 h-6" style={{ color }} strokeWidth={2} />
                    </div>
                    <span
                      className="inter-text text-[11px] md:text-[12px] font-bold uppercase tracking-[0.14em]"
                      style={{ color }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="inter-text font-bold text-[24px] md:text-[28px] leading-[32px] md:leading-[36px] text-[#0A0A23] mt-2 mb-3">
                      {section.title}
                    </h2>
                    <p className="merriweather-text text-[15px] md:text-[16px] leading-[24px] text-[#555555]">
                      <strong className="text-[#333333]">{section.lead}</strong> {section.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <Contact copy={contactCopy} />
        <Footer />
      </Wrapper>
    </>
  );
}
