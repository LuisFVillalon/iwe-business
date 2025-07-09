// components/WordSwitcher.tsx
'use client';

import { useEffect, useMemo, useState } from 'react';

interface LangProps {
  language: string;
}

export default function ClientWordSwitcher({ language }: LangProps): React.ReactElement {
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
    <span className="inline-block relative w-[6ch] md:w-[7ch] h-8 md:h-12 text-center">
      <em
        className={`text-[#006400] font-bold transition-all duration-300 ease-in-out absolute left-1/2 top-0 transform -translate-x-1/2 ${
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
