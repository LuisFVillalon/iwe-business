import Header from '@/app/components/header/Header';
import { Metadata } from 'next';
import ServicesPageContent from '@/app/components/services-sections/ServicesPageContent';

export const metadata: Metadata = {
  title: 'Services | Imperial Web Experts',
  icons: {
    icon: '/iwe-logo.png',
  },
  description: 'Explore our web development services tailored for small businesses in Imperial Valley and Mexicali — from custom websites and SEO to fast, modern design that drives real results.',
  openGraph: {
    title: 'Services | Imperial Web Experts',
    description: 'Discover how Imperial Web Experts helps small businesses in Mexicali and Imperial Valley grow online through custom web design, SEO, and lead-focused digital solutions.',
    url: '',
    siteName: 'Imperial Web Experts',
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-[#FFFFFF]">
      <Header />
      {/* div allows hero section to be displayed without the header blocking it */}
      <div className="h-12"></div>
      <ServicesPageContent />
    </div>
  );
}
