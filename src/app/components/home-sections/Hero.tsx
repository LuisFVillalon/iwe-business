// components/Hero.tsx
import ClientWordSwitcher from '@/app/components/client-side/ClientWordSwitcher';
import Image from 'next/image';
import ClientScrollEffect from '../client-side/ClientScrollEffect';
import CTAButton from '../CTAButton';

export default function Hero() {

    return (
        <div id="home" className="min-h-100vh mt-2 md:mt-4 flex flex-col gap-4 md:gap-10 justify-center items-center">
            <ClientScrollEffect/>
            {/* Header Title of Home Page */}
            <h1 className="text-[#0e2c5a] inter-text text-4xl md:text-6xl text-center fade-in-responsive-left-top">
                <strong className="italic text-[#006400]">Lead-Generating </strong>Websites in <br />
                <strong>Imperial Valley, CA</strong> & <strong>Mexicali, B.C.</strong><br />
                That Get You <ClientWordSwitcher language="english"/> Online
            </h1>
            {/* Quote, Logo, CTA Button */}
            <div className="flex flex-col md:grid grid-cols-2 gap-2 justify-center items-center">
                {/* Bible quote, Logo, Slogan, CTRA Button */}
                <div className="flex flex-col gap-2 justify-center items-center">
                    <Image src="/hero.png" alt={'Imperial Web Experts Logo'} height={400} width={400} className="fade-in-responsive-right-left w-50 md:w-96 h-auto"/>
                    <div className="fade-in-responsive-right-left text-lg md:text-xl text-center text-[#0e2c5a] flex flex-col justify-center items-center">
                        <em>Built to Last. Designed to Lead.</em>
                        <strong>Make Your Online Presence Imperial.</strong>
                    </div>
                    <CTAButton
                        ctaText="Let's Talk"
                    />
                </div>
                {/* Screenshots, Subheadline */}
                <div className="flex flex-col gap-2 justify-center items-center fade-in-scroll-hero">
                    <Image src="/2.png" alt={'Desktop and Mobile view of digital products'} height={300} width={300}/>
                    <h2 className="text-center text-lg md:text-2xl text-[#333333] merriweather-text">
                    At <strong>Imperial Web Experts</strong>, we design <em>high-impact</em> websites for <strong>small businesses</strong>—crafted to boost <em>visibility</em>, build <em>trust</em>, and drive <em>growth</em> through more <strong>leads</strong> and <strong>bookings</strong>.
                    </h2>
                </div>
            </div>
        </div>
    );
}