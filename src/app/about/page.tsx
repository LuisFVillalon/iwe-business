import Header from '@/app/components/header/Header';
import Wrapper from '@/app/components/Wrapper';
import Footer from '@/app/components/footer/Footer';
import Image from 'next/image';
import { Metadata } from 'next';
import CTAButton from '../components/CTAButton';
import Contact from '../components/Contact';
import ClientScrollEffect from '../components/client-side/ClientScrollEffect';

export const metadata: Metadata = {
  title: 'About Us | Imperial Web Experts',
  description:
    'Learn more about Imperial Web Experts — a local web development agency helping small businesses grow with high-converting websites, SEO strategies, and modern design.',
  openGraph: {
    title: 'About Us | Imperial Web Experts',
    description:
      'Learn more about Imperial Web Experts. We are dedicated to helping small businesses in Mexicali and Imperial Valley succeed online with custom websites and digital solutions.',
    url: '',
    siteName: 'Imperial Web Experts',
  },
};

interface AboutSection {
  title: string;
  content: string;
  image: {
    src: string;
    alt: string;
  };
}

const aboutSections: AboutSection[] = [
  {
    title: 'Who We Are',
    content: 'Imperial Web Experts is a small local web development agency based in Calexico, California, dedicated to helping local small businesses grow through high-performance, results-driven digital solutions. We specialize in building custom, server-side rendered static websites and web applications that enhance online visibility, establish credibility, and generate qualified leads — all backed by clean, modern, responsive designs and robust, production-grade code.',
    image: {
      src: '/about/1.png',
      alt: 'Mexicali and Calexico border region.'
    }
  },
  {
    title: 'Our Mission & Approach',
    content: 'Founded to deliver professional, one-on-one web development services, we serve small businesses and entrepreneurs who want to grow their ventures online the right way — not just by having a website, but by fully leveraging it as a powerful tool for their business. In today’s digital landscape, simply having a website isn’t enough; it needs to be thoughtfully designed and strategically built to earn trust, attract customers, and drive meaningful growth. By providing local entrepreneurs and small businesses with the right digital tools and expertise, we aim to empower our community and strengthen the local economy.',
    image: {
      src: '/about/2.png',
      alt: 'Web developer work environement.'
    }
  },
  {
    title: 'Our Experience & Skills',
    content: 'With real experience in full stack web development and digital marketing strategies — such as local SEO, conversion optimization, and user experience (UX) — we bring the technical skills and strategic insight needed to build websites that don’t just look good but also generate leads and support business growth. Whether it’s a simple website or a custom solution, we ensure every project aligns with your business goals. We prioritize 1-on-1 communication, clear timelines, and tailored results that fit your budget.',
    image: {
      src: '/about/4.png',
      alt: 'SEO analytics.'
    }
  },
  {
    title: 'Our Team & Community Commitment',
    content: 'We are a small but capable team, led by a developer and strategist who understands both technology and the local market. Backed by a strong support system and a deep commitment to the businesses around us, Imperial Web Experts offers agency-level quality with a local touch. When you work with us, you’re not just getting a website — you’re investing in long-term growth, visibility, and trust.',
    image: {
      src: '/about/3.png',
      alt: 'Imperial Web Experts collaborators.'
    }
  }
];

export default function AboutPage() {
  return (
    <div className="bg-[#FFFFFF]">
      <ClientScrollEffect/>
      <Header />
      <div className="h-6"></div>
      {/* Hero Section */}
    <section className="relative flex justify-center items-center h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/about/about-hero.png"
        alt="About Hero Background"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10">
        <Wrapper>
          <div className="flex justify-center items-center">
            <Image
              className="fade-in-hero-left hidden md:block"
              src="/iwe-logo.png"
              alt="Imperial Web Experts Logo"
              width={250}
              height={250}
              priority
            />
            <div className="flex flex-col gap-2 md:gap-4 justify-center items-center">
              <h1 className="text-[#ffffff] inter-text text-5xl md:text-6xl text-center font-bold fade-in-responsive-right-top">
                About Imperial Web Experts
              </h1>
              <Image
                className="fade-in-hero-left md:hidden"
                src="/iwe-logo.png"
                alt="Imperial Web Experts Logo"
                width={150}
                height={150}
                priority
              />
              <h2 className="font-bold fade-in-hero-right text-[#ffffff] inter-text text-lg md:text-2xl text-center fade-in-responsive-right-top">
                Local web experts crafting modern, reliable, conversion-optimized websites.
              </h2>
              <CTAButton
                ctaText="Contact Us"
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
      <Wrapper>
        {/* Content Sections */}
        {aboutSections.map((section, index) => (
        <section key={index} className="my-12">
            <h2 className="text-center text-3xl inter-text font-bold text-[#333333] mb-6">
            {section.title}
            </h2>
            <div
            className={`md:flex justify-center items-center ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
            >
            <div className="flex-1 mb-6 md:mb-0">
                <p className={` md:text-xl text-left merriweather-text text-base text-[#333333] leading-relaxed
                  ${index % 2 !== 0 ? 'fade-in-scroll-left' : 'fade-in-scroll-right'}`}
                >
                {section.content}
                </p>
            </div>
            <div className="flex-1 flex justify-center">
                <Image
                alt={section.image.alt}
                src={section.image.src}
                width={600}
                height={400}
                className={`rounded-xl shadow-md ${index % 2 !== 0 ? 'fade-in-scroll-right' : 'fade-in-scroll-left'}`}
                loading="lazy"
                />
            </div>
            </div>
        </section>
        ))}
        <Contact
          ctaText="Tailored digital services to drive your business growth."
          ctaTitle="Trusted Professional Web Solutions"
          ctaButton="Contact Us"
          language="english"
        />
        <Footer />
      </Wrapper>
    </div>
  );
}