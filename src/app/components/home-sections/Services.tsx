'use client';

import { useState } from "react";
import Link from "next/link";
import ServiceCard from "@/app/components/home-sections/ServiceCard";
import { useLanguage } from "@/app/components/client-side/LanguageProvider";
import { Language } from "@/app/lib/types";
import {
  websitePackages,
  carePlans,
  type LocalizedText,
  type Price,
} from "@/app/lib/servicesData";
import {
  Rocket,
  Building2,
  Workflow,
  ShieldCheck,
  TrendingUp,
  Gem,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const ACCENT_NAVY = "#0A0A23";
const ACCENT_STEEL_BLUE = "#23508e";

type Group = "packages" | "care";

const L = (text: LocalizedText, language: Language): string =>
  language === "english" ? text.en : text.es;

function getPriceParts(price: Price, language: Language) {
  const en = language === "english";
  const unitSuffix: Record<"project" | "month" | "year" | "page", string> = {
    project: en ? "/project" : "/proyecto",
    month: en ? "/mo" : "/mes",
    year: en ? "/yr" : "/año",
    page: en ? "/page" : "/página",
  };
  const suffix = price.unit ? unitSuffix[price.unit] : "";

  switch (price.type) {
    case "custom":
      return { prefix: "", amount: en ? "Custom" : "Personalizado", suffix: "" };
    case "fixed":
      return { prefix: "", amount: `$${price.amount}`, suffix };
    case "startingAt":
    default:
      return { prefix: en ? "Starting at" : "Desde", amount: `$${price.amount}`, suffix };
  }
}

const packageIconMap: Record<string, LucideIcon> = {
  starter: Rocket,
  business: Building2,
  premium: Workflow,
};

const carePlanIconMap: Record<string, LucideIcon> = {
  "essential-care": ShieldCheck,
  "business-care": TrendingUp,
  "premium-care": Gem,
};

const packageCtaMap: Record<string, LocalizedText> = {
  starter: { en: "Get Started", es: "Comenzar" },
  business: { en: "Choose Business", es: "Elegir Empresarial" },
  premium: { en: "Explore Custom Solutions", es: "Explorar Soluciones Personalizadas" },
};

const copyByLanguage: Record<Language, {
  eyebrow: string;
  heading: string;
  subheading: string;
  packagesTab: string;
  careTab: string;
  recommended: string;
  careCtaLabel: string;
  expandLabel: string;
  hideLabel: string;
  addOnsTitle: string;
  addOnsText: string;
  addOnsCta: string;
  fullPricingCta: string;
}> = {
  english: {
    eyebrow: "Web Development Services",
    heading: "Websites Built for Your Business",
    subheading: "Choose the package or care plan that fits where your business is today.",
    packagesTab: "Website Packages",
    careTab: "Website Care",
    recommended: "Most Popular",
    careCtaLabel: "View details",
    expandLabel: "See what's included",
    hideLabel: "Hide details",
    addOnsTitle: "Need more functionality?",
    addOnsText: "Add booking, bilingual content, blogs, custom integrations, AI tools, and more based on your business needs.",
    addOnsCta: "Explore Add-ons",
    fullPricingCta: "View All Services & Add-ons",
  },
  spanish: {
    eyebrow: "Servicios de Desarrollo Web",
    heading: "Sitios Web Diseñados para tu Negocio",
    subheading: "Elige el paquete o plan de mantenimiento que mejor se adapte a las necesidades de tu negocio.",
    packagesTab: "Paquetes de Sitios Web",
    careTab: "Cuidado del Sitio Web",
    recommended: "Más Popular",
    careCtaLabel: "Ver detalles",
    expandLabel: "Ver qué incluye",
    hideLabel: "Ocultar detalles",
    addOnsTitle: "¿Necesitas más funcionalidades?",
    addOnsText: "Agrega reservaciones, contenido bilingüe, blogs, integraciones personalizadas, herramientas de IA y más según las necesidades de tu negocio.",
    addOnsCta: "Explorar Servicios Adicionales",
    fullPricingCta: "Ver Todos los Servicios y Adicionales",
  },
};

export default function Services() {
  const { language } = useLanguage();
  const copy = copyByLanguage[language];
  const [group, setGroup] = useState<Group>("packages");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const selectGroup = (next: Group) => {
    setGroup(next);
    setExpandedId(null);
  };

  const tabClass = (active: boolean) =>
    `text-[13px] font-semibold px-[18px] py-[9px] rounded-[9px] border-none cursor-pointer transition-colors duration-200 ${
      active ? "bg-[#0A0A23] text-white" : "bg-transparent text-[#0A0A23]"
    }`;

  return (
    <div id="services" className="flex flex-col items-center mt-5 md:mt-[5%] text-[#333333]">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <div className="fade-in-scroll mb-7">
          <p className="inter-text text-[12px] md:text-[13px] font-bold uppercase tracking-[0.12em] text-[#dab63e] mb-2">
            {copy.eyebrow}
          </p>
          <h2 className="inter-text font-bold text-[28px] md:text-[34px] leading-[36px] md:leading-[42px] text-[#0A0A23]">
            {copy.heading}
          </h2>
          <p className="merriweather-text text-[15px] md:text-[16px] leading-[24px] text-[#555555] mt-2 max-w-2xl">
            {copy.subheading}
          </p>
        </div>

        <div className="border-t-2 border-[#0A0A23] mb-8" />

        <div className="fade-in-scroll flex flex-wrap items-center justify-between gap-4 mb-9">
          <div className="inline-flex gap-1 bg-[#f3f2f1] p-1 rounded-xl">
            <button type="button" onClick={() => selectGroup("packages")} className={tabClass(group === "packages")}>
              {copy.packagesTab}
            </button>
            <button type="button" onClick={() => selectGroup("care")} className={tabClass(group === "care")}>
              {copy.careTab}
            </button>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#0A0A23] text-white text-[15px] font-semibold px-7 py-[14px] rounded-[10px] no-underline transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span>{copy.fullPricingCta}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:gap-7 md:grid-cols-3">
          {group === "packages"
            ? websitePackages.map((pkg) => (
                <ServiceCard
                  key={pkg.id}
                  href="/services#packages"
                  icon={packageIconMap[pkg.id] ?? Rocket}
                  accent={ACCENT_NAVY}
                  title={L(pkg.name, language)}
                  tagline={L(pkg.tagline, language)}
                  price={getPriceParts(pkg.price, language)}
                  description={L(pkg.homeSummary, language)}
                  features={pkg.features.map((feature) => L(feature.title, language))}
                  recommended={pkg.recommended}
                  recommendedLabel={copy.recommended}
                  ctaLabel={L(packageCtaMap[pkg.id] ?? pkg.cta, language)}
                  expandLabel={copy.expandLabel}
                  hideLabel={copy.hideLabel}
                  expanded={expandedId === pkg.id}
                  onToggleExpand={() => setExpandedId((current) => (current === pkg.id ? null : pkg.id))}
                />
              ))
            : carePlans.map((plan) => (
                <ServiceCard
                  key={plan.id}
                  href="/services#services"
                  icon={carePlanIconMap[plan.id] ?? ShieldCheck}
                  accent={ACCENT_STEEL_BLUE}
                  title={L(plan.name, language)}
                  price={getPriceParts(plan.price, language)}
                  description={L(plan.homeSummary, language)}
                  features={plan.features.map((feature) => L(feature.title, language))}
                  recommended={plan.recommended}
                  recommendedLabel={copy.recommended}
                  ctaLabel={copy.careCtaLabel}
                  expandLabel={copy.expandLabel}
                  hideLabel={copy.hideLabel}
                  expanded={expandedId === plan.id}
                  onToggleExpand={() => setExpandedId((current) => (current === plan.id ? null : plan.id))}
                />
              ))}
        </div>

        <div className="fade-in-scroll flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 mt-8 bg-[#f9f8f6] border border-[#d8d8d8] rounded-xl px-5 py-4 sm:px-6">
          <div className="text-center sm:text-left">
            <p className="inter-text font-bold text-[14px] text-[#0A0A23]">{copy.addOnsTitle}</p>
            <p className="merriweather-text text-[13px] leading-[19px] text-[#666666] mt-0.5 max-w-xl">
              {copy.addOnsText}
            </p>
          </div>
          <Link
            href="/services#subscriptions"
            className="group/addons shrink-0 inline-flex items-center gap-1.5 text-[#dab63e] text-[13.5px] font-semibold no-underline whitespace-nowrap"
          >
            <span>{copy.addOnsCta}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/addons:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
