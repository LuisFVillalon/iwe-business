'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useHeaderVisibility } from '@/app/hooks/useHeaderVisibility';
import { useLanguage } from '@/app/components/client-side/LanguageProvider';
import { Language } from '@/app/lib/types';

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

function MexicoFlagIcon() {
  return (
    <div className="absolute inset-0 flex z-0 rounded-lg overflow-hidden" style={{
      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.1)"
    }}>
      {/* Green stripe */}
      <div className="w-1/3 rounded-l relative" style={{
        background: "linear-gradient(135deg, #16a34a 0%, #15803d 50%, #166534 100%)",
        boxShadow: "inset 2px 0 4px rgba(0,0,0,0.1)"
      }}></div>

      {/* White stripe with eagle */}
      <div className="w-1/3 relative flex items-center justify-center" style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)",
        boxShadow: "inset 0 0 4px rgba(0,0,0,0.05)"
      }}>
        <div className="w-2 h-2 rounded-full relative" style={{
          background: "linear-gradient(135deg, #92400e 0%, #78350f 50%, #451a03 100%)",
          boxShadow: "0 1px 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)"
        }}></div>
      </div>

      {/* Red stripe */}
      <div className="w-1/3 rounded-r relative" style={{
        background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)",
        boxShadow: "inset -2px 0 4px rgba(0,0,0,0.1)"
      }}></div>
    </div>
  );
}

function USFlagIcon() {
  return (
    <div className="absolute inset-0 flex flex-col z-0 rounded-lg overflow-hidden" style={{
      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.1)"
    }}>
      {/* Blue canton with stars area */}
      <div className="relative w-full h-full">
      {/* Red and white stripes */}
      <div className="absolute inset-0 flex flex-col">
        {/* Red stripe 1 */}
        <div className="h-1/7 w-full" style={{
          background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)"
        }}></div>
        {/* White stripe 1 */}
        <div className="h-1/7 w-full" style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)"
        }}></div>
        {/* Red stripe 2 */}
        <div className="h-1/7 w-full" style={{
          background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)"
        }}></div>
        {/* White stripe 2 */}
        <div className="h-1/7 w-full" style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)"
        }}></div>
        {/* Red stripe 3 */}
        <div className="h-1/7 w-full" style={{
          background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)"
        }}></div>
        {/* White stripe 3 */}
        <div className="h-1/7 w-full" style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)"
        }}></div>
        {/* Red stripe 4 (bottom) */}
        <div className="h-1/7 w-full rounded-b-lg" style={{
          background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)"
        }}></div>
      </div>

      {/* Blue canton (top-left) - moved after stripes for proper layering */}
      <div className="absolute top-0 left-0 w-1/2 h-3/5 rounded-tl-lg z-10" style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.2)"
      }}>
        {/* Stars representation */}
        <div className="absolute inset-0 grid grid-cols-3 gap-px p-1">
          <div className="w-0.5 h-0.5 bg-white rounded-full opacity-90 justify-self-center self-center"></div>
          <div className="w-0.5 h-0.5 bg-white rounded-full opacity-90 justify-self-center self-center"></div>
          <div className="w-0.5 h-0.5 bg-white rounded-full opacity-90 justify-self-center self-center"></div>
          <div className="w-0.5 h-0.5 bg-white rounded-full opacity-90 justify-self-center self-center"></div>
          <div className="w-0.5 h-0.5 bg-white rounded-full opacity-90 justify-self-center self-center"></div>
          <div className="w-0.5 h-0.5 bg-white rounded-full opacity-90 justify-self-center self-center"></div>
          <div className="w-0.5 h-0.5 bg-white rounded-full opacity-90 justify-self-center self-center"></div>
          <div className="w-0.5 h-0.5 bg-white rounded-full opacity-90 justify-self-center self-center"></div>
          <div className="w-0.5 h-0.5 bg-white rounded-full opacity-90 justify-self-center self-center"></div>
        </div>
      </div>
      </div>
    </div>
  );
}

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
