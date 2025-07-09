'use client';

import { useEffect } from 'react';

export default function ClientScrollEffect() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with either fade-in-scroll or fade-in-scroll-hero class
    const elements = document.querySelectorAll('.fade-in-scroll, .fade-in-scroll-right, .fade-in-scroll-left, .fade-in-scroll-hero');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null; // This component only handles behavior
}
