

import React from 'react';
import Header from '@/app/components/header/Header';
import Wrapper from '@/app/components/Wrapper';
import Footer from '@/app/components/footer/Footer';
import {ContactForm} from '../components/contact-form';
import ClientVerseSwitcher from '../components/client-side/ClientVerseSwitcher';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Imperial Valley & Mexicali',
  icons: {
    icon: '/iwe-logo.png',
  },
  description: 'Get in touch with us today. Whether you have questions, need support, or want a custom quote—we are here to help. Fast replies, clear answers.',
  openGraph: {
    title: 'Contact Us | Imperial Valley & Mexicali',
    description: 'Get in touch with us today. Whether you have questions, need support, or want a custom quote—we are here to help. Fast replies, clear answers.',
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
        language="english"
       />
        <Footer />
      </Wrapper>
    </div>
  );
}