// components/Navbar.tsx
'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Mapping of Spanish routes to English routes
  const routeMapping: { [key: string]: string } = {
    '/es': '/',
    '/servicios': '/services',
    '/sobre': '/about',
    '/contacto': '/contact',
    // Add more mappings as needed
    '/productos': '/products',
    '/blog': '/blog',
    '/portafolio': '/portfolio',
  };

  // Function to get the English equivalent of current route
  const getEnglishRoute = () => {
    // If already on English version, return the current path
    if (!pathname.startsWith('/es') && !pathname.startsWith('/servicios') && 
        !pathname.startsWith('/sobre') && !pathname.startsWith('/contacto') &&
        !pathname.startsWith('/productos') && !pathname.startsWith('/portafolio')) {
      return pathname;
    }
    
    // Return mapped English route or default to /
    return routeMapping[pathname] || '/';
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
                <Link href="/es">Inicio</Link>
            </p>
              
            <p className="
                hover:cursor-pointer
              hover:underline
              hover:text-[#006400] transition-colors"
              style={{ animation: "fadeDown 0.5s ease-in 0s forwards" }}>
                <Link href="/servicios">Servicios</Link>
            </p>
                        
            <p className="
                hover:cursor-pointer
              hover:underline
              hover:text-[#006400] transition-colors"
              style={{ animation: "fadeDown 0.5s ease-in 0s forwards" }}>
                <Link href="/sobre">Sobre</Link>
            </p>
                    
            <p className="
                hover:cursor-pointer
              hover:underline
              hover:text-[#006400] transition-colors"
              style={{ animation: "fadeDown 0.5s ease-in 0s forwards" }}>
                <Link href="/contacto">Contacto</Link>
            </p>
            
            {/* Dynamic English Language Switcher - USA Flag */}
            <Link
              href={getEnglishRoute()}
              className="rounded-lg cursor-pointer relative transform shadow-lg hover:scale-105 transition-transform duration-200"
              style={{ 
                animation: "fadeDown 0.5s ease-in 0s forwards",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)"
              }}
              aria-label="Switch to English / Cambiar a Inglés"
              title="Switch to English"
            >
              <div className="relative w-6 h-6 md:w-10 md:h-10">
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