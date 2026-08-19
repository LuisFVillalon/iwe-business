'use client';

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/app/components/client-side/LanguageProvider";
import { Language } from "@/app/lib/types";
import { siteConfig, SOCIAL_LINKS } from "@/app/lib/siteConfig";

interface FooterCopy {
  tagline: string;
  navHeading: string;
  navLinks: { href: string; label: string }[];
  servicesHeading: string;
  serviceLinks: { href: string; label: string }[];
  contactHeading: string;
  areaLine: string;
  hoursWeekday: string;
  hoursSaturday: string;
  hoursSunday: string;
  followUsHeading: string;
  rightsReserved: string;
}

const copyByLanguage: Record<Language, FooterCopy> = {
  english: {
    tagline: "Custom, lead-generating websites for small businesses in Imperial Valley & Mexicali.",
    navHeading: "Navigation",
    navLinks: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
    servicesHeading: "Services",
    serviceLinks: [
      { href: "/services#packages", label: "Website Packages" },
      { href: "/services#services", label: "Ongoing Services" },
      { href: "/services#subscriptions", label: "Add-On Subscriptions" },
      { href: "/contact", label: "Get a Free Quote" },
    ],
    contactHeading: "Contact",
    areaLine: "Imperial Valley, CA & Mexicali, B.C.",
    hoursWeekday: "Mon – Fri: 9:00am – 5:00pm",
    hoursSaturday: "Sat: Closed",
    hoursSunday: "Sun: Closed",
    followUsHeading: "Follow Us",
    rightsReserved: "All rights reserved.",
  },
  spanish: {
    tagline: "Sitios web personalizados que generan clientes para negocios en el Valle Imperial y Mexicali.",
    navHeading: "Navegación",
    navLinks: [
      { href: "/", label: "Inicio" },
      { href: "/services", label: "Servicios" },
      { href: "/about", label: "Sobre Nosotros" },
      { href: "/contact", label: "Contacto" },
    ],
    servicesHeading: "Servicios",
    serviceLinks: [
      { href: "/services#packages", label: "Paquetes de sitios web" },
      { href: "/services#services", label: "Servicios continuos" },
      { href: "/services#subscriptions", label: "Suscripciones complementarias" },
      { href: "/contact", label: "Cotización gratis" },
    ],
    contactHeading: "Contacto",
    areaLine: "Valle Imperial, CA y Mexicali, B.C.",
    hoursWeekday: "Lun – Vie: 9:00am – 5:00pm",
    hoursSaturday: "Sáb: Cerrado",
    hoursSunday: "Dom: Cerrado",
    followUsHeading: "Síguenos",
    rightsReserved: "Todos los derechos reservados.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Imperial Web Experts",
  description:
    "Custom, lead-generating websites for small businesses in Imperial Valley, California and Mexicali, Baja California.",
  telephone: "+1-760-234-2481",
  email: siteConfig.email,
  areaServed: [
    { "@type": "City", name: "Calexico" },
    { "@type": "City", name: "Mexicali" },
    { "@type": "AdministrativeArea", name: "Imperial Valley" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calexico",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: SOCIAL_LINKS.map((link) => link.href),
};

export default function Footer() {
  const { language } = useLanguage();
  const copy = copyByLanguage[language];
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 md:mt-10 mb-[5%] md:mb-[2%] inter-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div
        className="relative overflow-hidden rounded-2xl px-6 py-10 md:px-12 md:py-12 text-white"
        style={{ background: "linear-gradient(180deg, #0A0A23 0%, #131336 100%)" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(90deg, transparent, #dab63e, transparent)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "#23508e" }}
        />

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <Image
                src="/iwe-logo.png"
                alt="Imperial Web Experts logo"
                width={36}
                height={36}
                className="w-8 h-8 md:w-9 md:h-9"
              />
              <span className="text-white font-bold text-lg leading-tight">Imperial Web Experts</span>
            </Link>
            <p className="merriweather-text text-white/70 text-[14px] leading-[22px] max-w-xs">
              {copy.tagline}
            </p>
            <div className="flex gap-2 mt-1">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#dab63e] hover:text-[#0A0A23]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label={copy.navHeading} className="flex flex-col gap-3">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#dab63e]">
              {copy.navHeading}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {copy.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/75 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label={copy.servicesHeading} className="flex flex-col gap-3">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#dab63e]">
              {copy.servicesHeading}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {copy.serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/75 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#dab63e]">
              {copy.contactHeading}
            </h3>
            <address className="not-italic flex flex-col gap-2.5 text-[14px] text-white/75">
              <span className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#dab63e]" />
                {copy.areaLine}
              </span>
              <a
                href={siteConfig.phone.href}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 text-[#dab63e]" />
                {siteConfig.phone.display}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#dab63e]" />
                {siteConfig.email}
              </a>
              <span className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[#dab63e]" />
                <span className="flex flex-col gap-0.5">
                  <span>{copy.hoursWeekday}</span>
                  <span>{copy.hoursSaturday}</span>
                  <span>{copy.hoursSunday}</span>
                </span>
              </span>
            </address>
          </div>
        </div>

        <div className="relative mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-[13px] text-white/50">
            &copy; {year} Imperial Web Experts. {copy.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
