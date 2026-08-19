'use client';

import ClientWordSwitcher from '@/app/components/client-side/ClientWordSwitcher';
import Image from 'next/image';
import ClientScrollEffect from '../client-side/ClientScrollEffect';
import CTAButton from '../CTAButton';
import { useLanguage } from '@/app/components/client-side/LanguageProvider';
import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
    const { language } = useLanguage();
    const isSpanish = language === 'spanish';

    const highlights = isSpanish
        ? ['Gana visibilidad', 'Diseñado para convertir', 'Servicio Bilingüe']
        : ['Boost Visibility', 'Conversion-driven', 'Bilingual Service'];

    return (
        <div id="home" className="py-10 md:py-4 w-screen relative left-1/2 right-1/2 -mx-[50vw] min-h-100vh bg-[#0A0A23]">
            <ClientScrollEffect/>
            <div className="max-w-4xl md:max-w-7xl mx-auto px-4 md:px-2 py-+20 md:py-3 flex flex-col gap-10 md:gap-14 justify-center items-center">
                <div className="w-full grid md:grid-cols-2 gap-10 md:gap-8 items-center">
                    {/* Copy column */}
                    <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
                        {/* Eyebrow badge */}
                        <span className="fade-in-responsive-left-top inline-flex items-center gap-2 rounded-sm bg-white/10 border border-white/20 px-3 py-1 text-[13px] md:text-[15px] tracking-[1.5px] uppercase font-semibold text-[#dab63e]">
                            {isSpanish ? 'Soluciones Web · Valle Imperial y Mexicali' : 'Web Solutions · Imperial Valley & Mexicali'}
                        </span>

                        <h1 className="fade-in-responsive-left-top inter-text text-white text-4xl md:text-6xl leading-tight font-semibold tracking-tight">
                            {isSpanish ? (
                                <>
                                    Sitios Web que <strong className="italic text-[#dab63e]">Generan Clientes</strong> en{' '}
                                    <strong>Mexicali, B.C.</strong> y <strong>Valle Imperial, CA</strong>
                                </>
                            ) : (
                                <>
                                    <strong className="italic text-[#dab63e]">Lead-Generating</strong> Websites in{' '}
                                    <strong>Imperial Valley, CA</strong> & <strong>Mexicali, B.C.</strong>
                                </>
                            )}
                        </h1>

                        <p className="fade-in-responsive-left-top text-[#999999] text-lg md:text-xl font-medium flex flex-wrap justify-center md:justify-start items-center gap-x-2 max-w-md">
                            {isSpanish ? (
                                <>Que Consiguen <ClientWordSwitcher/> en Línea para Ti</>
                            ) : (
                                <>That Get You <ClientWordSwitcher/> Online</>
                            )}
                        </p>

                        <div className="fade-in-responsive-left-top flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2">
                            {highlights.map((item) => (
                                <span key={item} className="inline-flex items-center gap-1.5 text-sm text-white/80">
                                    <CheckCircle2 className="w-4 h-4 text-[#23508e]" />
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="fade-in-responsive-left-top mt-2">
                            <CTAButton ctaText={isSpanish ? 'Comienza Hoy' : 'Get Started Today'} />
                        </div>
                    </div>

                    {/* Visual column */}
                    <div className="fade-in-scroll-hero relative">
                        <div className="flex flex-col items-center gap-6 bg-white rounded-md border border-[#0A0A23]/10 shadow-xl px-6 pt-8 pb-12">
                            <Image src="/iwe-logo.png" alt={'Imperial Web Experts Logo'} height={400} width={400} className="w-24 md:w-32 h-auto"/>
                            <Image src="/2.png" alt={'Desktop and Mobile view of digital products'} height={300} width={300} className="w-full max-w-[260px] h-auto"/>
                            <p className="text-center text-sm md:text-base text-[#333333] inter-text">
                            {isSpanish ? (
                                <>
                                Nos especializamos en diseñar y desarrollar sitios web de marketing de{" "}<em className="text-[#23508e]">alto impacto</em> para{" "}<strong>empresasas locales</strong>, creados para{" "}<strong>impulsar tu visibilidad</strong> y convertir más visitantes en{" "}<strong>clientes potenciales, reservas y ventas</strong>.
                                </>
                            ) : (
                                <>
                                We specialize in designing and developing <em className="text-[#23508e]">high-impact</em> marketing websites for <strong>local businesses</strong> that increase online visibility and turn more visitors into <strong>leads, bookings, and customers</strong>.
                                </>
                            )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
