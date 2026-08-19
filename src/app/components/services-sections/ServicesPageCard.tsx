'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ArrowRight,
  Check,
  CheckCircle2,
  Info,
  Rocket,
  ShieldCheck,
  Smartphone,
  Globe,
  Palette,
  Search,
  Zap,
  FileText,
  CalendarClock,
  ShoppingCart,
  Plug,
  Workflow,
  Code2,
  Sparkles,
  BarChart3,
  Languages,
  UserPlus,
  type LucideIcon,
} from 'lucide-react';
import ClientScrollEffect from '@/app/components/client-side/ClientScrollEffect';
import { useLanguage } from '@/app/components/client-side/LanguageProvider';
import { Language } from '@/app/lib/types';
import {
  includedWithEveryWebsite,
  websitePackages,
  carePlans,
  addOns,
  type Feature,
  type LocalizedText,
  type WebsitePackage,
  type AddOn,
  type CarePlan,
} from '@/app/lib/servicesData';
import {
  localize as L,
  getPriceParts,
  packageIconMap,
  carePlanIconMap,
  type PriceParts,
} from '@/app/lib/servicesPresentation';

/* -------------------------------------------------------------------------- */
/*                                  COPY                                      */
/* -------------------------------------------------------------------------- */

interface ServicesCopy {
  includedEyebrow: string;
  includedHeading: string;
  includedSubheading: string;
  packagesEyebrow: string;
  packagesHeading: string;
  packagesSubheading: string;
  packageCardCopy: { recommended: string; pagesLabel: string; featuresLabel: string };
  careEyebrow: string;
  careHeading: string;
  careSubheading: string;
  careCardCopy: { recommended: string };
  addOnsEyebrow: string;
  addOnsHeading: string;
  addOnsSubheading: string;
}

const copyByLanguage: Record<Language, ServicesCopy> = {
  english: {
    includedEyebrow: 'Every Website',
    includedHeading: 'Included With Every Website',
    includedSubheading: 'No matter which package you choose, every site we build starts with this solid foundation.',
    packagesEyebrow: '01 — Website Packages',
    packagesHeading: 'Find the Right Package for Your Business',
    packagesSubheading: 'From your first professional site to a fully custom platform, choose the package that fits where your business is today.',
    packageCardCopy: { recommended: 'Most Popular', pagesLabel: 'Pages', featuresLabel: 'Features' },
    careEyebrow: '02 — Website Care',
    careHeading: 'Keep Your Website Running Smoothly',
    careSubheading: 'Ongoing hosting, updates, and support so your website stays fast, secure, and current — without you having to think about it.',
    careCardCopy: { recommended: 'Most Popular' },
    addOnsEyebrow: '03 — Add-Ons & Integrations',
    addOnsHeading: 'Extend Your Website',
    addOnsSubheading: "Add exactly the functionality your business needs, whenever you're ready for it.",
  },
  spanish: {
    includedEyebrow: 'Cada Sitio Web',
    includedHeading: 'Incluido en Cada Sitio Web',
    includedSubheading: 'Sin importar qué paquete elijas, cada sitio que creamos comienza con esta base sólida.',
    packagesEyebrow: '01 — Paquetes de Sitios Web',
    packagesHeading: 'Encuentra el Paquete Ideal para tu Negocio',
    packagesSubheading: 'Desde tu primer sitio profesional hasta una plataforma completamente personalizada, elige el paquete que se ajuste a la etapa actual de tu negocio.',
    packageCardCopy: { recommended: 'Más Popular', pagesLabel: 'Páginas', featuresLabel: 'Características' },
    careEyebrow: '02 — Cuidado del Sitio Web',
    careHeading: 'Mantén tu Sitio Funcionando sin Problemas',
    careSubheading: 'Hosting, actualizaciones y soporte continuo para que tu sitio se mantenga rápido, seguro y al día — sin que tengas que preocuparte por ello.',
    careCardCopy: { recommended: 'Más Popular' },
    addOnsEyebrow: '03 — Complementos e Integraciones',
    addOnsHeading: 'Amplía tu Sitio Web',
    addOnsSubheading: 'Agrega exactamente la funcionalidad que tu negocio necesita, cuando estés listo.',
  },
};

/* -------------------------------------------------------------------------- */
/*                              ICON MAPS                                     */
/* -------------------------------------------------------------------------- */

const includedIconMap: Record<string, LucideIcon> = {
  'responsive-design': Smartphone,
  'domain-setup': Globe,
  ssl: ShieldCheck,
  branding: Palette,
  'technical-seo': Search,
  performance: Zap,
  'search-ai-foundation': Sparkles,
  analytics: BarChart3,
  multilingual: Languages,
};

const addOnCategoryMeta: Record<AddOn['category'], { icon: LucideIcon; label: LocalizedText }> = {
  content: { icon: FileText, label: { en: 'Content', es: 'Contenido' } },
  booking: { icon: CalendarClock, label: { en: 'Booking', es: 'Reservas' } },
  commerce: { icon: ShoppingCart, label: { en: 'Commerce', es: 'Comercio' } },
  integration: { icon: Plug, label: { en: 'Integration', es: 'Integración' } },
  automation: { icon: Workflow, label: { en: 'Automation', es: 'Automatización' } },
  'custom-development': { icon: Code2, label: { en: 'Custom Dev', es: 'A Medida' } },
  seo: { icon: Search, label: { en: 'SEO', es: 'SEO' } },
  leads: { icon: UserPlus, label: { en: 'Leads', es: 'Prospectos' } },
};

/* -------------------------------------------------------------------------- */
/*                             SHARED PIECES                                  */
/* -------------------------------------------------------------------------- */

function SectionHeader({ eyebrow, heading, subheading, id }: { eyebrow: string; heading: string; subheading: string; id?: string }) {
  return (
    <div className="fade-in-scroll mb-8 md:mb-10">
      <p className="inter-text text-[12px] md:text-[13px] font-bold uppercase tracking-[0.12em] text-[#dab63e] mb-2">{eyebrow}</p>
      <h2 id={id} className="inter-text font-bold text-[28px] md:text-[34px] leading-[36px] md:leading-[42px] text-[#0A0A23]">{heading}</h2>
      <p className="merriweather-text text-[15px] md:text-[16px] leading-[24px] text-[#555555] mt-2 max-w-2xl">{subheading}</p>
    </div>
  );
}

function PriceDisplay({ price, size = 'lg' }: { price: PriceParts; size?: 'lg' | 'md' }) {
  const amountClass = size === 'lg' ? 'text-[32px]' : 'text-[26px]';
  return (
    <div className="flex items-baseline gap-1.5 flex-wrap">
      {price.prefix && <span className="text-[13px] text-[#999999] font-medium">{price.prefix}</span>}
      <span className={`inter-text ${amountClass} font-extrabold text-[#0A0A23]`}>{price.amount}</span>
      {price.suffix && <span className="text-[14px] text-[#666666] font-medium">{price.suffix}</span>}
    </div>
  );
}

function FeatureChecklist({ items, language, accent = '#006400' }: { items: Feature[]; language: Language; accent?: string }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="flex gap-2.5">
          <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: accent }} strokeWidth={2.5} />
          <div>
            <p className="inter-text text-[13.5px] font-semibold text-[#0A0A23]">{L(item.title, language)}</p>
            {item.description && (
              <p className="merriweather-text text-[13px] leading-[19px] text-[#666666] mt-0.5">{L(item.description, language)}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function RecommendedBadge({ label }: { label: string }) {
  return (
    <span className="absolute -top-3 left-1/2 -translate-x-1/2 inter-text text-[11px] font-bold uppercase tracking-[0.1em] text-[#0A0A23] bg-[#dab63e] px-3 py-1 rounded-full shadow whitespace-nowrap">
      {label}
    </span>
  );
}

function DetailAccordion({
  label,
  icon: Icon,
  accent,
  items,
  language,
  isOpen,
  onToggle,
  useTooltips = false,
}: {
  label: string;
  icon: LucideIcon;
  accent: string;
  items: Feature[];
  language: Language;
  isOpen: boolean;
  onToggle: () => void;
  useTooltips?: boolean;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="cursor-pointer w-full flex items-center justify-between p-3.5 rounded-lg border transition-colors duration-300"
        style={{
          borderColor: isOpen ? accent : '#d8d8d8',
          backgroundColor: isOpen ? `${accent}0d` : 'transparent',
        }}
      >
        <span className="inter-text font-semibold text-[14px] flex items-center gap-2" style={{ color: isOpen ? accent : '#0A0A23' }}>
          <Icon className="w-4 h-4" style={{ color: accent }} />
          {label}
          <span className="text-[#999999] font-normal">({items.length})</span>
        </span>
        <ChevronDown
          className="w-4 h-4 transition-transform duration-300"
          style={{ color: accent, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="pt-3 pb-1">
            {useTooltips ? (
              <div className="flex flex-col divide-y divide-[#f0f0f0]">
                {items.map((item, i) => (
                  <FeatureTooltip
                    key={item.id}
                    feature={item}
                    language={language}
                    accent={accent}
                    openUpward={i >= items.length - 3}
                  />
                ))}
              </div>
            ) : (
              <FeatureChecklist items={items} language={language} accent={accent} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                          INCLUDED WITH EVERY SITE                          */
/* -------------------------------------------------------------------------- */

function IncludedGrid({ items, language }: { items: Feature[]; language: Language }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        const Icon = includedIconMap[item.id] ?? Check;
        return (
          <div
            key={item.id}
            className="fade-in-scroll bg-white rounded-xl border border-[#d8d8d8] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#dab63e]/40 hover:shadow-lg"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(35, 80, 142, 0.08)' }}>
              <Icon className="w-5 h-5" style={{ color: '#23508e' }} strokeWidth={2} />
            </div>
            <h4 className="inter-text font-bold text-[15px] text-[#0A0A23]">{L(item.title, language)}</h4>
            {item.description && (
              <p className="merriweather-text text-[13px] leading-[20px] text-[#666666] mt-1.5">{L(item.description, language)}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              PACKAGE CARD                                  */
/* -------------------------------------------------------------------------- */

type DetailSection = 'pages' | 'features' | null;

function PackageCard({ pkg, language, copy }: { pkg: WebsitePackage; language: Language; copy: ServicesCopy['packageCardCopy'] }) {
  const [open, setOpen] = useState<DetailSection>(null);
  const toggle = (section: DetailSection) => setOpen((current) => (current === section ? null : section));
  const price = getPriceParts(pkg.price, language);
  const Icon = packageIconMap[pkg.id] ?? Rocket;
  const pagesLabel =
    pkg.id === 'premium'
      ? language === 'english'
        ? 'Custom Functionality'
        : 'Funcionalidad Personalizada'
      : copy.pagesLabel;

  return (
    <div
      className={`fade-in-scroll relative flex flex-col bg-white rounded-2xl transition-all duration-300 ${
        pkg.recommended
          ? 'border-2 border-[#dab63e] shadow-xl md:-translate-y-2'
          : 'border border-[#d8d8d8] hover:-translate-y-1 hover:shadow-lg hover:border-[#0A0A23]/20'
      }`}
    >
      {pkg.recommended && <RecommendedBadge label={copy.recommended} />}

      <div className="p-6 md:p-7 pb-0">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(10, 10, 35, 0.06)' }}>
          <Icon className="w-6 h-6 text-[#0A0A23]" strokeWidth={2} />
        </div>

        <h3 className="inter-text font-bold text-[22px] text-[#0A0A23]">{L(pkg.name, language)}</h3>
        <p className="merriweather-text text-[14px] leading-[20px] text-[#23508e] font-semibold mt-1">{L(pkg.tagline, language)}</p>

        <div className="mt-4">
          <PriceDisplay price={price} />
        </div>

        <p className="merriweather-text text-[14px] leading-[21px] text-[#555555] mt-3">{L(pkg.description, language)}</p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {pkg.idealFor.map((tag, i) => (
            <span
              key={i}
              className="text-[11px] font-medium text-[#23508e] border border-[#23508e]/15 rounded-full px-2.5 py-1"
              style={{ backgroundColor: 'rgba(35, 80, 142, 0.05)' }}
            >
              {L(tag, language)}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 md:p-7 pt-5 mt-2 space-y-2.5">
        <DetailAccordion
          label={pagesLabel}
          icon={Globe}
          accent="#23508e"
          items={pkg.pages}
          language={language}
          isOpen={open === 'pages'}
          onToggle={() => toggle('pages')}
        />
        <DetailAccordion
          label={copy.featuresLabel}
          icon={Sparkles}
          accent="#0A0A23"
          items={pkg.features}
          language={language}
          isOpen={open === 'features'}
          onToggle={() => toggle('features')}
          useTooltips
        />
      </div>

      <div className="p-6 md:p-7 pt-0 mt-auto">
        <Link
          href="/contact"
          className="group flex items-center justify-center gap-1.5 w-full text-center inter-text font-bold text-[15px] rounded-lg px-4 py-3 transition-all duration-300 bg-[#0A0A23] text-white hover:bg-[#23508e]"
        >
          {L(pkg.cta, language)}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              CARE PLAN CARD                                */
/* -------------------------------------------------------------------------- */

function FeatureTooltip({
  feature,
  language,
  accent = '#23508e',
  openUpward = false,
}: {
  feature: Feature;
  language: Language;
  accent?: string;
  openUpward?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const label = L(feature.title, language);
  const detail = feature.description ? L(feature.description, language) : '';

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex items-center gap-2 w-full text-left py-1.5 px-2 -mx-2 rounded-lg transition-colors duration-200"
        style={{ backgroundColor: open ? `${accent}0f` : 'transparent' }}
      >
        <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: accent }} strokeWidth={2} />
        <span className="inter-text text-[14px] text-[#0A0A23] flex-1">{label}</span>
        {detail && (
          <Info
            className="w-3.5 h-3.5 shrink-0 transition-colors duration-200"
            style={{ color: open ? accent : '#c9c9c9' }}
            strokeWidth={2}
          />
        )}
      </button>

      {detail && (
        <div
          role="tooltip"
          className={`absolute left-2 right-2 z-10 rounded-lg bg-[#0A0A23] px-3 py-2 shadow-lg transition-all duration-200 ${
            openUpward ? 'bottom-full mb-1 origin-bottom' : 'top-full mt-1 origin-top'
          } ${
            open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <p className="merriweather-text text-[12.5px] leading-[18px] text-white/90">{detail}</p>
        </div>
      )}
    </div>
  );
}

function CarePlanCard({ plan, language, copy }: { plan: CarePlan; language: Language; copy: ServicesCopy['careCardCopy'] }) {
  const price = getPriceParts(plan.price, language);
  const Icon = carePlanIconMap[plan.id] ?? ShieldCheck;

  return (
    <div
      className={`fade-in-scroll relative flex flex-col bg-white rounded-2xl p-6 md:p-7 transition-all duration-300 ${
        plan.recommended
          ? 'border-2 border-[#dab63e] shadow-xl md:-translate-y-2'
          : 'border border-[#d8d8d8] hover:-translate-y-1 hover:shadow-lg hover:border-[#0A0A23]/20'
      }`}
    >
      {plan.recommended && <RecommendedBadge label={copy.recommended} />}

      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(35, 80, 142, 0.08)' }}>
        <Icon className="w-6 h-6" style={{ color: '#23508e' }} strokeWidth={2} />
      </div>

      <h3 className="inter-text font-bold text-[20px] text-[#0A0A23]">{L(plan.name, language)}</h3>

      <div className="mt-3">
        <PriceDisplay price={price} size="md" />
      </div>

      <p className="merriweather-text text-[13.5px] leading-[20px] text-[#777777] mt-3">
        {L(plan.description, language)}
      </p>

      <div className="mt-5 mb-6 flex flex-col divide-y divide-[#f0f0f0]">
        {plan.features.map((feature, i) => (
          <FeatureTooltip
            key={feature.id}
            feature={feature}
            language={language}
            openUpward={i >= plan.features.length - 3}
          />
        ))}
      </div>

      <Link
        href="/contact"
        className="group mt-auto flex items-center justify-center gap-1.5 w-full text-center inter-text font-bold text-[15px] rounded-lg px-4 py-3 transition-all duration-300 bg-[#0A0A23] text-white hover:bg-[#23508e]"
      >
        {L(plan.cta, language)}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                ADD-ON CARD                                 */
/* -------------------------------------------------------------------------- */

function AddOnCard({ addOn, language }: { addOn: AddOn; language: Language }) {
  const meta = addOnCategoryMeta[addOn.category];
  const Icon = meta.icon;
  const price = getPriceParts(addOn.price, language);

  return (
    <div className="fade-in-scroll bg-white rounded-xl border border-[#d8d8d8] p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#dab63e]/40">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(35, 80, 142, 0.08)' }}>
          <Icon className="w-5 h-5" style={{ color: '#23508e' }} strokeWidth={2} />
        </div>
        <span
          className="text-[11px] font-semibold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full border text-[#23508e] border-[#23508e]/20"
          style={{ backgroundColor: 'rgba(35, 80, 142, 0.05)' }}
        >
          {L(meta.label, language)}
        </span>
      </div>

      <p className="text-[#0A0A23] text-[17px] leading-[24px] font-bold inter-text">{L(addOn.name, language)}</p>
      <p className="merriweather-text text-[#555555] text-[14px] leading-[21px] mt-2 flex-1">{L(addOn.description, language)}</p>

      <div className="flex items-center mt-4 pt-4 border-t border-[#d8d8d8]/70">
        <span className="inter-text text-[14px] font-bold text-[#0A0A23]">
          {price.prefix && <span className="font-medium text-[#999999] text-[12px] mr-1">{price.prefix}</span>}
          {price.amount}
          <span className="font-medium text-[#666666]">{price.suffix}</span>
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */

const ServicesPageCard: React.FC = () => {
  const { language } = useLanguage();
  const copy = copyByLanguage[language];

  return (
    <div className="bg-white">
      <ClientScrollEffect />
      <div className="max-w-[1200px] mx-auto px-4 py-10 md:py-14">
        <section id="included" className="mb-16 md:mb-20">
          <SectionHeader eyebrow={copy.includedEyebrow} heading={copy.includedHeading} subheading={copy.includedSubheading} />
          <IncludedGrid items={includedWithEveryWebsite} language={language} />
        </section>

        <section id="packages" className="mb-16 md:mb-20">
          <SectionHeader eyebrow={copy.packagesEyebrow} heading={copy.packagesHeading} subheading={copy.packagesSubheading} />
          <div className="grid gap-8 md:grid-cols-3 items-stretch">
            {websitePackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} language={language} copy={copy.packageCardCopy} />
            ))}
          </div>
        </section>

        <section id="services" className="mb-16 md:mb-20">
          <SectionHeader eyebrow={copy.careEyebrow} heading={copy.careHeading} subheading={copy.careSubheading} />
          <div className="grid gap-8 md:grid-cols-3 items-stretch">
            {carePlans.map((plan) => (
              <CarePlanCard key={plan.id} plan={plan} language={language} copy={copy.careCardCopy} />
            ))}
          </div>
        </section>

        <section id="subscriptions">
          <SectionHeader eyebrow={copy.addOnsEyebrow} heading={copy.addOnsHeading} subheading={copy.addOnsSubheading} />
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(270px,1fr))]">
            {addOns.map((addOn) => (
              <AddOnCard key={addOn.id} addOn={addOn} language={language} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPageCard;
