'use client';

import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '@/app/components/client-side/LanguageProvider';

export default function ClientWordSwitcher(): React.ReactElement {
  const { language } = useLanguage();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const words = useMemo(() => [
    'Found',
    'Trusted',
    'Leads',
    'Booked',
    'Clients',
  ], []);

  const wordsSpanish = useMemo(() => [
    'Valor',
    'Citas',
    'Alcance',
    'Clientes',
    'Impacto',
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex(prev => (prev + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <span className="inline-flex items-center justify-center relative w-[6ch] md:w-[7ch] h-8 md:h-12 text-center">
      <em
        className={`text-[#dab63e] font-bold transition-all duration-300 ease-in-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4'
        }`}
      >
        {
          (language == "spanish") ?
            wordsSpanish[currentWordIndex] :
            words[currentWordIndex]
        }
      </em>
    </span>
  );
}
