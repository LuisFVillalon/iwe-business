'use client';

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import CTAButton from "./CTAButton";
import ClientScrollEffect from "@/app/components/client-side/ClientScrollEffect";
import { useLanguage } from "@/app/components/client-side/LanguageProvider";
import { Language } from "@/app/lib/types";

export interface ContactCopyVariant {
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

interface ContactProps {
  copy: Record<Language, ContactCopyVariant>;
}

export default function Contact({ copy }: ContactProps): React.ReactElement {
  const { language } = useLanguage();
  const { ctaTitle, ctaText, ctaButton } = copy[language];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="mt-5 md:mt-[5%]">
      <ClientScrollEffect />
      <div
        className="fade-in-scroll relative overflow-hidden rounded-2xl px-6 py-10 md:px-12 md:py-14 shadow-xl"
        style={{ background: 'linear-gradient(135deg, #0A0A23 0%, #23508e 100%)' }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[41%] right-[-8.5%] z-0 aspect-[5/2] w-[68%] -translate-y-1/2 opacity-[0.1]"
        >
          <Image
            src="/iwe-logo.png"
            alt=""
            fill
            className="object-cover object-[50%_61%]"
          />
        </div>
        <div className="relative z-10 flex flex-col items-start text-left gap-3 max-w-2xl">
          <h2 id="contact-heading" className="inter-text text-3xl md:text-4xl font-semibold tracking-tight text-white">
            {ctaTitle}
          </h2>
          <p className="text-white/80 text-base md:text-lg">{ctaText}</p>

          <div className="relative mt-2">
            <CTAButton ctaText={ctaButton} />
          </div>

          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-2 text-sm text-white/70">
            <a
              href="tel:+17602342481"
              className="inline-flex items-center gap-2 hover:text-[#dab63e] transition-colors"
            >
              <Phone className="w-4 h-4" />
              (760) 234-2481
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
            <a
              href="mailto:imperialwebexperts@gmail.com"
              className="inline-flex items-center gap-2 hover:text-[#dab63e] transition-colors"
            >
              <Mail className="w-4 h-4" />
              imperialwebexperts@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
