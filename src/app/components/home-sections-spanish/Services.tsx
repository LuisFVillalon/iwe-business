import React from "react";
import {homeServiceCardsArrSpanish} from '@/app/lib/homeServiceCardsData';
import ServiceCard from "../home-sections-spanish/ServiceCard";

// Custom grouping: 3, then 2, then 3
const firstGroup = homeServiceCardsArrSpanish.slice(0, 3);
const secondGroup = homeServiceCardsArrSpanish.slice(3, 5);
const thirdGroup = homeServiceCardsArrSpanish.slice(5, 8);


export default function Services(){
  return (
    <div id="services" className="flex flex-col justify-center items-center mt-5 md:mt-[5%] text-[#333333]">
      <h2 className="inter-text text-center font-bold text-3xl">Paquetes de sitios web diseñados para pequeñas empresas:</h2>
      
      {/* Desktop grouped layout */}
      <div className="hidden md:block">
        {/* First group - 3 cards */}
        <div className="flex justify-evenly items-center gap-4 mb-4">
          {firstGroup.map((service, index) => (
            <ServiceCard
              title={service.title}
              price={service.price}
              icon={service.icon}
              purpose={service.purpose}
              category={service.category}
              key={`group-0-item-${index}`}
            />
          ))}
        </div>
        
        {/* Website Maintenance Services heading */}
        <h2 className="text-center font-semibold text-3xl mt-6 ">Servicios en curso:</h2>
        
        {/* Second group - 2 cards */}
        <div className="flex justify-evenly items-center gap-4 mb-4">
          {secondGroup.map((service, index) => (
            <ServiceCard
              title={service.title}
              price={service.price}
              icon={service.icon}
              purpose={service.purpose}
              category={service.category}
              key={`group-1-item-${index}`}
            />
          ))}
        </div>
        
        {/* Add On Subscription Services heading */}
        <h2 className="text-center font-semibold text-3xl mt-6">Suscripciones complementarias:</h2>
        
        {/* Third group - 3 cards */}
        <div className="flex justify-evenly items-center gap-4 mb-4">
          {thirdGroup.map((service, index) => (
            <ServiceCard
              title={service.title}
              price={service.price}
              icon={service.icon}
              purpose={service.purpose}
              category={service.category}
              key={`group-2-item-${index}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile/Tablet single column layout */}
      <div className="md:hidden">
        {/* First group - 3 cards */}
        {firstGroup.map((service, index) => (
          <ServiceCard 
            title={service.title}
            price={service.price}
            icon={service.icon}
            purpose={service.purpose}
            category={service.category}
            key={`mobile-group-0-item-${index}`}
          />
        ))}
        
        {/* Website Maintenance Services heading */}
        <h2 className="inter-text text-center font-bold text-3xl mt-10">Website Maintenance Services:</h2>
        
        {/* Second group - 2 cards */}
        {secondGroup.map((service, index) => (
          <ServiceCard 
            title={service.title}
            price={service.price}
            icon={service.icon}
            purpose={service.purpose}
            category={service.category}
            key={`mobile-group-1-item-${index}`}
          />
        ))}
        
        {/* Add On Subscription Services heading */}
        <h2 className="inter-text text-center font-bold text-3xl mt-10">Add On Subscription Services:</h2>
        
        {/* Third group - 3 cards */}
        {thirdGroup.map((service, index) => (
          <ServiceCard 
            title={service.title}
            price={service.price}
            icon={service.icon}
            purpose={service.purpose}
            category={service.category}
            key={`mobile-group-2-item-${index}`}
          />
        ))}
      </div>
    </div>
  );
}