'use client';

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import ClientScrollEffect from "@/app/components/client-side/ClientScrollEffect";
import { useLanguage } from "@/app/components/client-side/LanguageProvider";
import { Language } from "@/app/lib/types";

// Centralized so the destination is easy to change later without touching markup.
const ABOUT_HREF = "/about";

interface Principle {
  number: string;
  title: string;
  body: string;
}

interface CapabilityStep {
  title: string;
  items: string[];
}

const copyByLanguage: Record<Language, {
  eyebrow: string;
  heading: string;
  subheading: string;
  principles: Principle[];
  capability: CapabilityStep[];
  cta: string;
}> = {
  english: {
    eyebrow: "About",
    heading: "Websites built to help Imperial Valley and Mexicali businesses grow.",
    subheading: "We build modern, mobile-friendly websites for local businesses that want to look professional, rank better online, and turn more website visitors into customers.",
    principles: [
      {
        number: "CUSTOM",
        title: "Built for your business",
        body: "Custom design and development centered around your goals, not generic templates.",
      },
      {
        number: "PERFORMANCE",
        title: "Fast & responsive",
        body: "Designed to perform well and deliver a polished experience across phones, tablets, and desktops.",
      },
      {
        number: "GROWTH",
        title: "Built to grow",
        body: "Built for local search visibility and conversions, helping you get found online and turn visitors into customers.",
      },
    ],
    capability: [
      { title: "Design", items: ["Clear layouts", "Your branding", "Mobile-first"] },
      { title: "Development", items: ["Custom functionality", "Fast performance", "Integrations"] },
      { title: "Launch", items: ["SEO fundamentals", "Analytics", "Deployment"] },
      { title: "Support", items: ["Updates", "Maintenance", "Hosting"] },
    ],
    cta: "Learn more about us",
  },
  spanish: {
    eyebrow: "Acerca de",
    heading: "Sitios web diseñados para ayudar a negocios de Mexicali y Valle Imperial a crecer.",
    subheading: "Creamos sitios web modernos y adaptados a dispositivos móviles para negocios locales que buscan lucir profesionales, posicionarse mejor en línea y convertir más visitantes en clientes.",
    principles: [
      {
        number: "PERSONALIZADO",
        title: "Hecho para tu negocio",
        body: "Diseño y desarrollo personalizados centrados en los objetivos de tu negocio, no en plantillas genéricas.",
      },
      {
        number: "RENDIMIENTO",
        title: "Rápido y responsivo",
        body: "Diseñado para funcionar bien y ofrecer una experiencia pulida en teléfonos, tablets y computadoras.",
      },
      {
        number: "CRECIMIENTO",
        title: "Hecho para crecer",
        body: "Diseñado para mejorar tu visibilidad en búsquedas locales y aumentar conversiones, ayudándote a que te encuentren en línea y a convertir visitantes en clientes.",
      },
    ],
    capability: [
      { title: "Diseño", items: ["Diseños claros", "Tu marca", "Prioridad móvil"] },
      { title: "Desarrollo", items: ["Funcionalidad personalizada", "Rendimiento rápido", "Integraciones"] },
      { title: "Lanzamiento", items: ["Fundamentos de SEO", "Analítica", "Publicación"] },
      { title: "Soporte", items: ["Actualizaciones", "Mantenimiento", "Hospedaje"] },
    ],
    cta: "Conoce más sobre nosotros",
  },
};

export default function About() {
  const { language } = useLanguage();
  const copy = copyByLanguage[language];

  return (
    <section id="about" aria-labelledby="about-heading" className="relative flex flex-col items-center mt-5 md:mt-[5%] text-[#333333] overflow-hidden">
      <ClientScrollEffect />
      <Image
        src="/iwe-logo.png"
        alt=""
        aria-hidden="true"
        fill
        className="pointer-events-none select-none object-contain object-center opacity-5 z-0"
      />
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Headline + supporting copy + CTA */}
          <div className="fade-in-scroll-left">
            <p className="inter-text text-[12px] md:text-[13px] font-bold uppercase tracking-[0.12em] text-[#dab63e] mb-2">
              {copy.eyebrow}
            </p>
            <h2 id="about-heading" className="inter-text font-bold text-[30px] md:text-[38px] leading-[38px] md:leading-[46px] text-[#0A0A23]">
              {copy.heading}
            </h2>
            <p className="merriweather-text text-[15px] md:text-[16px] leading-[24px] text-[#555555] mt-4 max-w-md">
              {copy.subheading}
            </p>
            <Link
              href={ABOUT_HREF}
              className="group inline-flex items-center gap-1.5 mt-6 text-[#dab63e] text-[14px] font-semibold inter-text"
            >
              <span className="border-b border-transparent group-hover:border-[#dab63e] transition-colors">
                {copy.cta}
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Numbered principles */}
          <ol className="flex flex-col list-none">
            {copy.principles.map((principle, index) => (
              <li
                key={index}
                className={`fade-in-scroll group py-6 md:py-7 border-t border-[#d8d8d8] first:border-t-0 first:pt-0 ${
                  index === 1 ? "md:ml-6" : index === 2 ? "md:ml-12" : ""
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <span className="inter-text text-[11px] md:text-[12px] leading-none font-bold uppercase tracking-[0.14em] text-[#0A0A23]/30 group-hover:text-[#dab63e] transition-colors">
                  {principle.number}
                </span>
                <h3 className="inter-text font-bold text-[18px] md:text-[20px] text-[#0A0A23] mt-2">
                  {principle.title}
                </h3>
                <p className="merriweather-text text-[14px] md:text-[15px] leading-[22px] text-[#555555] mt-1.5 max-w-sm">
                  {principle.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Capability strip */}
        <div className="fade-in-scroll mt-8 md:mt-10 pt-6 md:pt-8 border-t border-[#d8d8d8]">
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:items-stretch md:gap-5">
            {copy.capability.map((step, index) => (
              <Fragment key={step.title}>
                <div className="relative bg-white rounded-xl border border-[#d8d8d8] p-5 pt-8 md:p-6 md:pt-9 md:flex-1 transition-all duration-300 hover:-translate-y-1 hover:border-[#dab63e]/40 hover:shadow-lg">
                  <span className="absolute top-3 left-4 inter-text text-[15px] md:text-[16px] font-extrabold text-[#dab63e] tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="inter-text text-[12px] md:text-[13px] font-bold uppercase tracking-[0.12em] text-[#23508e]">
                    {step.title}
                  </h4>
                  <ul className="mt-3 space-y-1.5">
                    {step.items.map((item) => (
                      <li key={item} className="merriweather-text text-[13px] md:text-[14px] leading-[20px] text-[#666666] flex items-start gap-2">
                        <span className="text-[#23508e]/50 leading-[20px]">&ndash;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < copy.capability.length - 1 && (
                  <div className="hidden md:flex items-center justify-center shrink-0 text-[#006400]">
                    <ArrowRight className="w-7 h-7" strokeWidth={2.75} />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
