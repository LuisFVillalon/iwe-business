// components/Navbar.tsx
'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Mapping of English routes to Spanish routes
  const routeMapping: { [key: string]: string } = {
    '/': '/es',
    '/services': '/servicios',
    '/about': '/sobre',
    '/contact': '/contacto',
  };

  // Function to get the Spanish equivalent of current route
  const getSpanishRoute = () => {
    // If already on Spanish version, return the current path
    if (pathname.startsWith('/es') || pathname.startsWith('/servicios') || 
        pathname.startsWith('/sobre') || pathname.startsWith('/contacto')) {
      return pathname;
    }
    
    // Return mapped Spanish route or default to /es
    return routeMapping[pathname] || '/es';
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      }
      
      // Hide header when scrolling down and not at the top
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`inter-text fixed top-0 w-[100%] shadow-md bg-[#EEEEEE] bg-opacity-70 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div
        className={`text-xl md:text-3xl text-[#0A0A23] flex justify-center transition-all duration-300`}
        style={{ animation: "fadeDown 0.5s ease-in 0s forwards" }}
      >
        <div className={`w-full p-2 flex justify-center items-center
          inset-0 bg-[#0A0A23] w-[100%] text-[#FFFFFF] bg-opacity-100
          `}>
          
          {/* Navigation Links */}
          <div className="flex items-center justify-center space-x-3 md:space-x-5 space-y-0 flex-1">
            <p className="
                hover:cursor-pointer
              hover:underline
              hover:text-[#006400] transition-colors"
              style={{ animation: "fadeDown 0.5s ease-in 0s forwards" }}>
                <Link href="/">Home</Link>
            </p>
              
            <p className="
                hover:cursor-pointer
              hover:underline
              hover:text-[#006400] transition-colors"
              style={{ animation: "fadeDown 0.5s ease-in 0s forwards" }}>
                <Link href="/services">Services</Link>
            </p>
                        
            <p className="
                hover:cursor-pointer
              hover:underline
              hover:text-[#006400] transition-colors"
              style={{ animation: "fadeDown 0.5s ease-in 0s forwards" }}>
                <Link href="/about">About</Link>
            </p>
                    
            <p className="
                hover:cursor-pointer
              hover:underline
              hover:text-[#006400] transition-colors"
              style={{ animation: "fadeDown 0.5s ease-in 0s forwards" }}>
                <Link href="/contact">Contact</Link>
            </p>
            
            {/* Dynamic Spanish Language Switcher */}
            <Link
              href={getSpanishRoute()}
              className="rounded-lg cursor-pointer relative transform shadow-lg hover:scale-105 transition-transform duration-200"
              style={{ 
                animation: "fadeDown 0.5s ease-in 0s forwards",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)"
              }}
              aria-label="Switch to Spanish / Cambiar a Español"
              title="Cambiar a Español"
            >
              <div className="relative w-6 h-6 md:w-10 md:h-10">
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
                
                {/* 3D highlight effect */}
                <div className="absolute inset-0 rounded-lg" style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)",
                  pointerEvents: "none"
                }}></div>
              </div>
            </Link>
          </div>

          {/* Right side spacer to balance the layout */}
          {/* <div className="w-12 md:w-16"></div> */}
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