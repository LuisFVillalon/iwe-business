"use client";
import { Linkedin, Mail, User, MessageSquare, Copy, Check, Instagram, Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import Image from 'next/image';

// TypeScript interfaces
interface FormData {
  fullName: string;
  email: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

// Contact Form Component
const ContactForm: React.FC = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev: FormErrors) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre es obligatorio';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Se requiere correo electrónico';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor, introduce una dirección de correo electrónico válida';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Se requiere mensaje';
    }
    
    return newErrors;
  };

// Updated handleSubmit function with loading state
const handleSubmit = async (): Promise<void> => {
  const newErrors: FormErrors = validateForm();
  
  if (Object.keys(newErrors).length === 0) {
    try {
      // Start loading state
      setIsLoading(true);
      setErrors({});
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (response.ok) {
        console.log('Correo electrónico enviado correctamente');
        setIsSubmitted(true);
        
        // Reset form after successful submission
        setTimeout((): void => {
          setFormData({ fullName: '', email: '', message: '' });
          setIsSubmitted(false);
        }, 8000);
      } else {
        const errorData = await response.json();
        console.error('No se pudo enviar el correo electrónico:', errorData.message);
        // You might want to show an error message to the user
        setErrors({ message: 'No se pudo enviar el mensaje. Inténtalo de nuevo.' });
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setErrors({ message: 'Error de red. Por favor, revisa tu conexión y vuelve a intentarlo.' });
    } finally {
      // Stop loading state
      setIsLoading(false);
    }
  } else {
    setErrors(newErrors);
  }
};

  if (isSubmitted) {
    return (
      <div className="p-8 bg-white rounded-2xl shadow-2xl border-2 border-green-500 m-8">
        <div className="flex flex-col justify-center items-center">
            <Image
                className="fade-in-top"
                src="/iwe-logo.png"
                alt="Imperial Web Experts Logo"
                width={250}
                height={250}
                priority
            />
          <h2 className="text-2xl md:text-4xl font-bold text-green-600 mb-2 dm-serif-text-regular">Mensaje enviado!</h2>
          <p className="text-gray-600 md:text-2xl">Gracias por contactarnos. ¡Nos pondremos en contacto contigo pronto!</p>
        </div>
      </div>
    );
  }
const handleCopyEmail = async (): Promise<void> => {
  const email = 'imperialwebexperts@gmail.com';
  try {
    // Use modern clipboard API
    await navigator.clipboard.writeText(email);
    setIsCopied(true);
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  } catch (err) {
    console.error('Failed to copy email:', err);
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }
};
  return (
    <div className="border-15 border-double border-[#dab63e] 
        p-8  rounded-2xl shadow-lg my-8 md:my-12"
        style={{ background: 'linear-gradient(180deg, #0A0A23  0%, #23508e 100%)' }}
    >
      {/* Header Section with Contact Info */}
      <div className="text-center mb-8">
        <h1 className="dm-serif-text-regular text-4xl  font-bold text-[#dab63e] mb-2">Ponte en contacto</h1>
        <p className="text-white mb-2 text-lg">¡Estamos aquí para responder sus preguntas y ayudar a que su negocio crezca!</p>
        
        {/* Contact Info Display */}
        <div className="bg-white  rounded-lg p-4 mb-6">
          <div className="text-xs md:text-lg flex items-center justify-center gap-2 mb-3">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 hover:bg-gray-200 py-2 rounded-lg transition-colors duration-200 group"
              title={isCopied ? "Copied!" : "Click to copy email"}
            >
              {isCopied ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <Copy className="w-5 h-5 text-blue-600 group-hover:text-blue-800" />
              )}
              <span className={`font-medium transition-colors duration-200 ${
                isCopied ? 'text-green-600' : 'text-gray-800 group-hover:text-blue-800'
              }`}>
                imperialwebexperts@gmail.com
              </span>
            </button>
          </div>
          <div className="text-xs md:text-lg flex items-center justify-center gap-2 md:gap-8">
            <a 
              href="https://www.instagram.com/imperialwebexperts/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#E1306C] hover:text-[#C13584] transition-colors duration-200"
            >
              <div className="w-4 h-4 md:w-6 md:h-6">
                <Instagram className="w-full h-full" />
              </div>
              <span>@imperialwebexperts</span>
            </a>
            <a 
              href="https://www.linkedin.com/company/imperial-web-experts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <div className="w-4 h-4 md:w-6 md:h-6">
                <Linkedin className="w-full h-full" />
              </div>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="fullName" className="md:text-xl flex justify-start items-center dm-serif-text-regular block text-sm font-semibold text-white mb-2">
            <User className="text-[#dab63e] w-4 h-4 md:h-5 md:w-5 inline mr-1" />
            Nombre <span className="text-[#dab63e] ">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            disabled={isLoading}
            className={`text-white md:text-xl  w-full text-WHITE px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dab63e] transition-colors duration-200 ${
              errors.fullName ? 'border-red-500 bg-red-50' : 'border-white focus:border-[#dab63e]'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            placeholder="Introduce tu nombre"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="md:text-lg flex justify-start items-center dm-serif-text-regular block text-sm font-semibold text-white mb-2">
            <Mail className="text-[#dab63e] w-4 h-4 md:h-5 md:w-5 inline mr-1" />
            Dirección de correo electrónico <span className="text-[#dab63e] ">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isLoading}
            className={`text-white md:text-xl  w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dab63e] transition-colors duration-200 ${
              errors.email ? 'border-red-500 bg-red-50' : 'border-white focus:border-[#dab63e]'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            placeholder="Introduce tu dirección de correo electrónico"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="md:text-lg flex justify-start items-center dm-serif-text-regular block text-sm font-semibold text-white mb-2">
            <MessageSquare className="text-[#dab63e] w-4 h-4 md:h-5 md:w-5 inline mr-1" />
            Mensaje <span className="text-[#dab63e] ">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            disabled={isLoading}
            className={`md:text-xl text-white  w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dab63e] transition-colors duration-200 resize-none ${
              errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#dab63e]'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            placeholder="Ingrese su mensaje aquí..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button with Loading State */}
        <button 
            onClick={handleSubmit}
            disabled={isLoading}
            className={`cursor-pointer w-full text-2xl p-2 m-2 rounded-md bg-gradient-to-r from-green-500 to-blue-500 text-[#ffffff] shadow-lg transform transition-all duration-150 border-b-4 border-r-2 border-[#004d00] dm-serif-text-regular flex items-center justify-center gap-2 ${
              isLoading 
                ? 'opacity-75 cursor-not-allowed' 
                : 'active:scale-95 active:shadow-md hover:shadow-xl hover:-translate-y-1 active:border-b-2 active:translate-y-1'
            }`}
        >
            {isLoading ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Enviando mensaje...
              </>
            ) : (
              'Enviar mensaje'
            )}
        </button>        
      </div>
    </div>
  );
};

export {ContactForm};