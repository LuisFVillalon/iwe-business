'use client';
import ClientScrollEffect from "../client-side/ClientScrollEffect";
import { useState } from "react";
import { packagesArrSpanish, servicesArrSpanish, subscriptionsArrSpanish } from "@/app/lib/servicesData";
import { ChevronDown, Globe, Palette, LineChart, Calendar, BookOpen, Server, Wrench } from 'lucide-react';

interface Feature {
  feature?: string;
  title?: string;
  description: string;
}

interface PackageType {
  title: string;
  price: string;
  description: string;
  pages: Feature[];
  features: Feature[];
  seo: Feature[];
}

// Deals with the logic for the dropdown menu with smooth animations
const Feature: React.FC<Feature> = ({ feature, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm backdrop-blur-sm bg-opacity-95">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer w-full p-4 text-left bg-white flex items-center justify-between transition-all duration-300"
        style={{ 
          background: isExpanded 
            ? 'linear-gradient(135deg, #0A0A23 0%, #23508e 100%)' 
            : 'rgba(255, 255, 255, 0.95)',
          color: isExpanded ? '#dab63e' : '#0A0A23',
          fontWeight: isExpanded ? 700 : 400
        }}
      >
        <span className="">{feature || title}</span>
        <ChevronDown 
          className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
          style={{ color: '#dab63e' }}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div 
          className={`p-4 border-t transform transition-all duration-300 ${
            isExpanded ? 'translate-y-0 scale-100' : 'translate-y-[-10px] scale-95'
          }`}
          style={{ 
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.95) 100%)',
            borderColor: '#dab63e'
          }}
        >
          <p className="leading-relaxed" style={{ color: '#0A0A23' }}>{description}</p>
        </div>
      </div>
    </div>
  );
};

interface ServiceSectionProps {
  title: string;
  description: string;
  items: Feature[];
  icon: React.ComponentType<{ className?: string }>;
  bgColor?: string;
}

// Services and Subscriptions Card
const ServiceSection: React.FC<ServiceSectionProps> = ({ title, description, items, icon: Icon, bgColor = "bg-white" }) => {
  return (
    <div className={`${bgColor} rounded-xl p-8 shadow-xl border border-gray-100  transition-all duration-300 backdrop-blur-sm bg-opacity-95`}>
      <div className="flex items-center mb-6">
        <Icon className="w-8 h-8 mr-3" style={{ color: '#23508e' }} />
        <h3 className="text-2xl font-bold" style={{ color: '#0A0A23' }}>{title}</h3>
      </div>
      {description && (
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">{description}</p>
      )}
      <div className="space-y-3">
        {items.map((item, index) => (
          <Feature key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

interface PackageCardProps {
  package: PackageType;
}
type SectionType = 'pages' | 'features' | 'seo' | null;

// Card for packages with smooth animations
const PackageCard: React.FC<PackageCardProps> = ({ package: pkg }) => {
  const [activeSection, setActiveSection] = useState<SectionType>(null);

  const toggleSection = (section: SectionType) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="fade-in-scroll bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200  transition-all duration-300 transform backdrop-blur-sm bg-opacity-95">
      <div className="p-6 border-b border-gray-200" style={{ background: 'linear-gradient(180deg, #0A0A23  0%, #23508e 100%)' }}>
        <h3 className="text-center text-3xl font-bold text-[#dab63e] mb-2">{pkg.title}</h3>
        {pkg.description && (
          <p className="text-center text-gray-200 leading-relaxed">{pkg.description}</p>
        )}
      </div>

      <div className="p-6 space-y-4">
        {pkg.pages && pkg.pages.length > 0 && (
          <div>
            <button
              onClick={() => toggleSection('pages')}
              className="cursor-pointer w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 backdrop-blur-sm"
              style={{ 
                background: activeSection === 'pages' 
                  ? 'linear-gradient(90deg, #0A0A23 0%, #23508e 100%)' 
                  : 'rgba(255, 255, 255, 0.9)',
                border: `1px solid ${activeSection === 'pages' ? '#dab63e' : '#23508e'}`,
                color: activeSection === 'pages' ? '#FFFFFF' : '#0A0A23'
              }}
            >
              <span className="font-semibold flex items-center">
                <Globe className="w-5 h-5 mr-2" style={{ color: activeSection === 'pages' ? '#ffffff' : '#23508e' }} />
                Páginas incluidas ({pkg.pages.length})
              </span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 ${activeSection === 'pages' ? 'rotate-180' : 'rotate-0'}`}
                style={{ color: '#dab63e' }}
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeSection === 'pages' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div 
                className={`mt-3 space-y-2 transform transition-all duration-300 ${
                  activeSection === 'pages' ? 'translate-y-0 scale-100' : 'translate-y-[-10px] scale-95'
                }`}
              >
                {pkg.pages.map((page, index) => (
                  <Feature key={index} {...page} />
                ))}
              </div>
            </div>
          </div>
        )}

        {pkg.features && pkg.features.length > 0 && (
          <div>
            <button
              onClick={() => toggleSection('features')}
              className="cursor-pointer w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 backdrop-blur-sm"
              style={{ 
                background: activeSection === 'features' 
                  ? 'linear-gradient(135deg, #0A0A23 0%, #23508e 100%)' 
                  : 'rgba(255, 255, 255, 0.9)',
                border: `1px solid ${activeSection === 'features' ? '#23508e' : '#dab63e'}`,
                color: activeSection === 'features' ? '#FFFFFF' : '#0A0A23'
              }}
            >
              <span className="font-semibold flex items-center">
                <Palette className="w-5 h-5 mr-2" style={{ color: activeSection === 'features' ? '#FFFFFF' : '#dab63e' }} />
                Características ({pkg.features.length})
              </span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 ${activeSection === 'features' ? 'rotate-180' : 'rotate-0'}`}
                style={{ color: activeSection === 'features' ? '#dab63e' : '#23508e' }}
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeSection === 'features' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div 
                className={`mt-3 space-y-2 transform transition-all duration-300 ${
                  activeSection === 'features' ? 'translate-y-0 scale-100' : 'translate-y-[-10px] scale-95'
                }`}
              >
                {pkg.features.map((feature, index) => (
                  <Feature key={index} {...feature} />
                ))}
              </div>
            </div>
          </div>
        )}

        {pkg.seo && pkg.seo.length > 0 && (
          <div>
            <button
              onClick={() => toggleSection('seo')}
              className="cursor-pointer w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 backdrop-blur-sm"
              style={{ 
                background: activeSection === 'seo' 
                  ? 'linear-gradient(135deg, #0A0A23 0%, #23508e 100%)' 
                  : 'rgba(255, 255, 255, 0.9)',
                border: `1px solid ${activeSection === 'seo' ? '#dab63e' : '#0A0A23'}`,
                color: activeSection === 'seo' ? '#FFFFFF' : '#0A0A23'
              }}
            >
              <span className="font-semibold flex items-center">
                <LineChart className="w-5 h-5 mr-2" style={{ color: activeSection === 'seo' ? '#FFFFFF' : '#0A0A23' }} />
                {pkg.seo[0].feature || pkg.seo[0].title}
              </span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 ${activeSection === 'seo' ? 'rotate-180' : 'rotate-0'}`}
                style={{ color: '#dab63e' }}
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeSection === 'seo' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div 
                className={`mt-3 space-y-2 transform transition-all duration-300 ${
                  activeSection === 'seo' ? 'translate-y-0 scale-100' : 'translate-y-[-10px] scale-95'
                }`}
              >
                <div className="p-4 rounded-lg border backdrop-blur-sm" style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 100%)', 
                  borderColor: '#dab63e' 
                }}>
                  <p className="leading-relaxed" style={{ color: '#0A0A23' }}>{pkg.seo[0].description}</p>
                </div>
                {pkg.seo.slice(1).map((seoItem, index) => (
                  <Feature key={index + 1} {...seoItem} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main component
const ServicesPageCard: React.FC = () => {
  return (
   <div className="min-h-screen bg-[#ffffff] ">
    <ClientScrollEffect/>
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Website Packages */}
        <section className="12">
          <div className="text-center">
            <h2 id="packages" className="text-[#0A0A23] text-4xl font-bold text-center mb-2 drop-shadow-lg">Paquetes de sitios web diseñados para pequeñas empresas</h2>
            <p className="text-lg text-[#23508e] max-w-3xl mx-auto leading-relaxed mb-8">
              Desde autónomos independientes hasta empresas prósperas, creamos sitios web diseñados para apoyar su crecimiento y éxito.
            </p>            
          </div>

          
          <div className="grid gap-8 md:grid-cols-3">
            {packagesArrSpanish.map((pkg, index) => (
              index > 0 && <PackageCard key={index} package={pkg} />
            ))}
          </div>
          
          {/* All Packages Include Section */}
          {packagesArrSpanish.length > 0 && (
            <div className="mb-12 mt-8">
              <h3 className="text-center text-2xl font-bold my-4 text-[#0A0A23]  drop-shadow-lg">{packagesArrSpanish[0].title}</h3>
              <div className=" bg-white rounded-xl shadow-xl p-8 border border-gray-200 ransition-all duration-300 backdrop-blur-sm bg-opacity-95">
                <div className="grid md:grid-cols-1 gap-8">
                  {/* Features Section */}
                  <div>
                    <h4 className="text-xl  font-semibold mb-6 flex justify-center items-center" style={{ color: '#0A0A23' }}>
                      <Palette className="w-6 h-6 mr-3" style={{ color: '#23508e' }} />
                      Características esenciales
                    </h4>
                    <div className="space-y-3">
                      {packagesArrSpanish[0].features?.map((feature, index) => (
                        <Feature key={index} {...feature} />
                      ))}
                    </div>
                  </div>

                  {/* Basic SEO Section */}
                  {packagesArrSpanish[0].seo && packagesArrSpanish[0].seo.length > 0 && (
                    <div>
                      <h4 className="text-xl font-semibold mb-4 flex items-center" style={{ color: '#0A0A23' }}>
                        <LineChart className="w-6 h-6 mr-3" style={{ color: '#23508e' }} />
                        {packagesArrSpanish[0].seo[0].feature || packagesArrSpanish[0].seo[0].title}
                      </h4>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {packagesArrSpanish[0].seo[0].description}
                      </p>
                      <div className="space-y-3">
                        {packagesArrSpanish[0].seo.slice(1).map((seoItem, index) => (
                          <Feature key={index} {...seoItem} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

        </section>

        {/* Services */}
        <section className="mb-12">
          <h2 id="services" className="text-4xl font-bold text-center mb-6 text-[#0A0A23] drop-shadow-lg">Servicios continuos</h2>
          <div className=" grid gap-8 md:grid-cols-2">
            {servicesArrSpanish.map((service, index) => (
              <ServiceSection
                key={index}
                title={service.title}
                description={service.description}
                items={service.features}
                icon={index === 0 ? Server : Wrench}
                bgColor="bg-white"
              />
            ))}
          </div>
        </section>

        {/* Subscriptions */}
        <section className="mb-12">
          <h2 id="subscriptions" className="text-4xl font-bold text-center mb-6 text-[#0A0A23] drop-shadow-lg">Suscripciones complementarias</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {subscriptionsArrSpanish.map((subscription, index) => (
              <ServiceSection
                key={index}
                title={subscription.title}
                description={subscription.description}
                items={subscription.features}
                icon={index === 0 ? Calendar : BookOpen}
                bgColor="bg-white"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPageCard;