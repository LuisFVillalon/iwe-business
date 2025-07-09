// components/Hero.tsx
import ClientWordSwitcher from '@/app/components/client-side/ClientWordSwitcher';
import Image from 'next/image';
import ClientScrollEffect from '@/app/components/client-side/ClientScrollEffect';
import CTAButton from '@/app/components/CTAButton';

export default function Hero() {

    return (
        <div id="home" className="min-h-100vh mt-2 md:mt-4 flex flex-col gap-4 md:gap-10 justify-center items-center">
            <ClientScrollEffect/>
            {/* Header Title of Home Page */}
            <h1 className="text-[#0e2c5a] inter-text text-4xl md:text-6xl text-center fade-in-responsive-left-top">
                Sitios Web que <strong className="italic text-[#006400]">Generan Clientes </strong>en el <br />
                <strong>Valle Imperial, CA</strong> y <strong>Mexicali, B.C.</strong><br />
                Que Consiguen <ClientWordSwitcher language="spanish" /> en Línea para Ti
            </h1>
            {/* Quote, Logo, CTA Button */}
            <div className="flex flex-col md:grid grid-cols-2 gap-2 justify-center items-center">
                {/* Bible quote, Logo, Slogan, CTRA Button */}
                <div className="flex flex-col gap-2 justify-center items-center">
                    <Image src="/hero.png" alt={'Imperial Web Experts Logo'} height={400} width={400} className="fade-in-responsive-right-left w-50 md:w-96 h-auto"/>
                    <div className="fade-in-responsive-right-left text-lg md:text-xl text-center text-[#0e2c5a] flex flex-col justify-center items-center">
                        <em>Creado para durar. Diseñado para liderar.</em>
                        <strong>Haz que tu presencia en línea sea imperial.</strong>
                    </div>
                    <CTAButton
                        ctaText="Hablemos"
                    />
                </div>
                {/* Screenshots, Subheadline */}
                <div className="flex flex-col gap-2 justify-center items-center fade-in-scroll-hero">
                    <Image src="/2.png" alt={'Desktop and Mobile view of digital products'} height={300} width={300}/>
                    <h2 className="text-center text-lg md:text-2xl text-[#333333] merriweather-text">
                    En <strong>Imperial Web Experts</strong>, diseñamos sitios web de <em>alto impacto</em> para <strong>pequeñas empresas</strong>
                    , diseñados para aumentar la <em>visibilidad</em>, generar <em>confianza</em>, e impulsar el <em>crecimiento</em> a través de más <strong>clientes potenciales</strong> y <strong>reservas</strong>.
                    </h2>
                </div>
            </div>
        </div>
    );
}