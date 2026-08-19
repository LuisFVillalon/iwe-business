import Header from '@/app/components/header/Header';
import { Metadata } from 'next';
import AboutPageContent from '@/app/components/about-sections/AboutPageContent';

export const metadata: Metadata = {
  title: 'About Us | Imperial Web Experts',
  icons: {
    icon: '/iwe-logo.png',
  },
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

export default function AboutPage() {
  return (
    <div className="bg-[#FFFFFF]">
      <Header />
      {/* div allows hero section to be displayed without the header blocking it */}
      <div className="h-12"></div>
      <AboutPageContent />
    </div>
  );
}
