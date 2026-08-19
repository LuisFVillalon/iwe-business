'use client';

import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";
import ClientScrollEffect from "@/app/components/client-side/ClientScrollEffect";
import { useLanguage } from "@/app/components/client-side/LanguageProvider";
import { Language } from "@/app/lib/types";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/imperial-web-experts", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/imperialwebexperts/", Icon: Instagram },
];

const copyByLanguage: Record<Language, { heading: string; subheading: string }> = {
  english: {
    heading: "Follow Us",
    subheading: "See our latest work, tips, and behind-the-scenes updates.",
  },
  spanish: {
    heading: "Síguenos",
    subheading: "Mira nuestro trabajo más reciente, consejos y lo que pasa detrás de cámaras.",
  },
};

export default function SocialLinks() {
  const { language } = useLanguage();
  const copy = copyByLanguage[language];

  return (
    <section aria-labelledby="social-links-heading" className="mt-5 md:mt-[5%]">
      <ClientScrollEffect />
      <div
        className="fade-in-scroll relative overflow-hidden rounded-2xl px-6 py-10 md:px-12 md:py-14"
        style={{ background: 'linear-gradient(180deg, #0A0A23 0%, #23508e 100%)' }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[60.5%] right-[-8.5%] z-0 aspect-[5/2] w-[68%] -translate-y-1/2 opacity-[0.1]"
        >
          <Image
            src="/iwe-logo.png"
            alt=""
            fill
            className="object-cover object-[50%_20%]"
          />
        </div>
        <div className="relative z-10 flex flex-col items-start text-left">
          <h2 id="social-links-heading" className="dm-serif-text-regular text-3xl font-bold text-[#dab63e]">
            {copy.heading}
          </h2>
          <p className="merriweather-text text-white/80 mt-2 mb-7 max-w-md text-[15px] md:text-[16px] leading-[24px]">
            {copy.subheading}
          </p>
          <div className="flex flex-wrap justify-start gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group inline-flex items-center gap-3 rounded-full bg-white/10 py-2 pr-5 pl-2 text-[14px] font-bold text-white transition-colors hover:bg-[#dab63e]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0A0A23] transition-colors group-hover:bg-[#0A0A23] group-hover:text-[#dab63e]">
                  <Icon className="h-5 w-5" />
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
