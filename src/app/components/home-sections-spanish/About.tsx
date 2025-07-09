import React from "react"; 
import ClientScrollEffect from "@/app/components/client-side/ClientScrollEffect";
import Link from "next/link";

export default function About(){


  return (
    <div id="about" className="my-4 md:my-[2.5%] flex flex-col justify-start items-center">
      <ClientScrollEffect/>
      <Link href="/sobre">
        <h2 className="hover:cursor-pointer hover:underline hover:text-[#006400] md:my-[2.5%] text-[#0A0A23] inter-text font-bold text-3xl">Sobre nosotros</h2>
      </Link>
      <p className="fade-in-scroll text-center text-xl merriweather-text text-[#333333] flex flex-col gap-4">
        Con sede en Calexico, Imperial Web Experts se enorgullece de servir al Valle Imperial y Mexicali, combinando experiencia técnica con conocimiento local para ofrecer soluciones web a medida. Creamos experiencias de usuario fluidas, optimizamos el rendimiento del sitio web y nos aseguramos de que cada sitio web refleje la identidad única de cada negocio. Nuestra misión es brindar a las pequeñas empresas herramientas digitales confiables y profesionales que les ayuden a destacar y tener éxito en un mercado competitivo.
      </p>    
    </div>
  );
}
