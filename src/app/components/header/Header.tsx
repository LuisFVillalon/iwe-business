'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useHeaderVisibility } from '@/app/hooks/useHeaderVisibility';
import { useLanguage } from '@/app/components/client-side/LanguageProvider';
import { Language } from '@/app/lib/types';
import { MexicoFlagIcon, USFlagIcon } from '@/app/components/header/FlagIcons';

const navLinksByLanguage: Record<Language, { href: string; label: string }[]> = {
  english: [
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  spanish: [
    { href: '/services', label: 'Servicios' },
    { href: '/about', label: 'Sobre' },
    { href: '/contact', label: 'Contacto' },
  ],
};

export default function Header() {
  const isVisible = useHeaderVisibility();
  const { language, toggleLanguage } = useLanguage();
  const navLinks = navLinksByLanguage[language];

  return (
    <nav
      className={`inter-text fixed top-0 w-full z-50 bg-white shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ animation: "fadeDown 0.5s ease-in 0s forwards" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 px-4 md:px-8 py-3">

        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 text-[#0A0A23]"
        >
          <Image
            src="/iwe-logo.png"
            alt="Imperial Web Experts logo"
            width={32}
            height={32}
            className="w-7 h-7 md:w-9 md:h-9"
          />
          <span className="hidden sm:inline text-sm md:text-base font-semibold tracking-tight whitespace-nowrap">
            Imperial Web Experts
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center justify-end gap-3 sm:gap-5 md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm md:text-base font-semibold text-[#0A0A23] hover:text-[#006400] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-md border border-[#d8d8d8] bg-white px-2 py-1.5 cursor-pointer hover:border-[#23508e] hover:shadow-sm transition-all duration-200"
            aria-label="Switch to Spanish / Cambiar a Español"
            title={language === 'english' ? 'Cambiar a Español' : 'Switch to English'}
          >
            <div className="relative w-5 h-5 md:w-6 md:h-6">
              {language === 'english' ? <MexicoFlagIcon/> : <USFlagIcon/>}
            </div>
            <span className="text-xs md:text-sm font-semibold text-[#0A0A23]">
              {language === 'english' ? 'ESP' : 'US'}
            </span>
          </button>
        </div>

      </div>

      <style>{`
        @keyframes fadeDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
