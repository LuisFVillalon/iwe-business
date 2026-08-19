import { Language } from "@/app/lib/types";

export interface ContactFormCopy {
  heading: string;
  subheading: string;
  copyEmailTooltip: string;
  copyEmailTooltipCopied: string;
  instagramHandle: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  fullNameRequiredError: string;
  emailLabel: string;
  emailPlaceholder: string;
  emailRequiredError: string;
  emailInvalidError: string;
  messageLabel: string;
  messagePlaceholder: string;
  messageRequiredError: string;
  submitFailedError: string;
  networkError: string;
  sendingLabel: string;
  submitLabel: string;
  successHeading: string;
  successBody: string;
}

export const contactFormCopy: Record<Language, ContactFormCopy> = {
  english: {
    heading: "Get In Touch",
    subheading: "We're here to answer your questions and help your business grow!",
    copyEmailTooltip: "Click to copy email",
    copyEmailTooltipCopied: "Copied!",
    instagramHandle: "@imperialwebexperts",
    fullNameLabel: "Name",
    fullNamePlaceholder: "Enter your name",
    fullNameRequiredError: "Name is required",
    emailLabel: "Email Address",
    emailPlaceholder: "Enter your email address",
    emailRequiredError: "Email is required",
    emailInvalidError: "Please enter a valid email address",
    messageLabel: "Message",
    messagePlaceholder: "Enter your message here...",
    messageRequiredError: "Message is required",
    submitFailedError: "Failed to send message. Please try again.",
    networkError: "Network error. Please check your connection and try again.",
    sendingLabel: "Sending...",
    submitLabel: "Send Message",
    successHeading: "Message Sent!",
    successBody: "Thank you for reaching out. We will get back to you soon!",
  },
  spanish: {
    heading: "Ponte en contacto",
    subheading: "¡Estamos aquí para responder sus preguntas y ayudar a que su negocio crezca!",
    copyEmailTooltip: "Click to copy email",
    copyEmailTooltipCopied: "Copied!",
    instagramHandle: "@imperialwebexperts",
    fullNameLabel: "Nombre",
    fullNamePlaceholder: "Introduce tu nombre",
    fullNameRequiredError: "El nombre es obligatorio",
    emailLabel: "Dirección de correo electrónico",
    emailPlaceholder: "Introduce tu dirección de correo electrónico",
    emailRequiredError: "Se requiere correo electrónico",
    emailInvalidError: "Por favor, introduce una dirección de correo electrónico válida",
    messageLabel: "Mensaje",
    messagePlaceholder: "Ingrese su mensaje aquí...",
    messageRequiredError: "Se requiere mensaje",
    submitFailedError: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
    networkError: "Error de red. Por favor, revisa tu conexión y vuelve a intentarlo.",
    sendingLabel: "Enviando mensaje...",
    submitLabel: "Enviar mensaje",
    successHeading: "Mensaje enviado!",
    successBody: "Gracias por contactarnos. ¡Nos pondremos en contacto contigo pronto!",
  },
};
