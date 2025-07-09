import React from 'react';
import Header from '@/app/components/header/Header-Spanish';
import Wrapper from '@/app/components/Wrapper';
import Footer from '@/app/components/footer/Footer-Spanish';
import ClientVerseSwitcher from '../components/client-side/ClientVerseSwitcher';
import { Metadata } from 'next';
import { ContactForm } from '../components/contact-form-spanish';

export const metadata: Metadata = {
  title: 'Contáctanos | Valle Imperial y Mexicali',
  icons: {
    icon: '/iwe-logo.png',
  },
  description: 'Contáctanos hoy mismo. Si tienes preguntas, necesitas ayuda o quieres un presupuesto personalizado, estamos aquí para ayudarte. Respuestas rápidas y claras.',
  openGraph: {
    title: 'Contáctanos | Valle Imperial y Mexicali',
    description: 'Contáctanos hoy mismo. Si tienes preguntas, necesitas ayuda o quieres un presupuesto personalizado, estamos aquí para ayudarte. Respuestas rápidas y claras.',
    url: '',
    siteName: 'Imperial Web Experts',    
  },
}



// Main Contact Page Component
export default function Contact(): React.ReactElement {
  return (
    <div className=" justify-start min-h-screen bg-[#FFFFFF]">
      <Header />
      <div className="h-6 "></div>
       
      <Wrapper>
       <ContactForm />
        <ClientVerseSwitcher
               language="spanish"
        />
        <Footer />
      </Wrapper>
    </div>
  );
}