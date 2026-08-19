'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Language } from '@/app/lib/types';

const STORAGE_KEY = 'iwe-language';

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('english');

  // Restore the visitor's saved preference after mount (localStorage isn't available during SSR).
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'english' || stored === 'spanish') {
      setLanguage(stored);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((current) => {
      const next: Language = current === 'english' ? 'spanish' : 'english';
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
