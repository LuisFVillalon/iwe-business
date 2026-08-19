import { Linkedin, Instagram, type LucideIcon } from "lucide-react";

// Contact details and social links repeated across Footer, Contact, ContactForm,
// and SocialLinks — kept here so updating a phone number or handle is a one-line change.
export const siteConfig = {
  phone: {
    display: "(760) 234-2481",
    href: "tel:+17602342481",
  },
  email: "imperialwebexperts@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/company/imperial-web-experts",
    instagram: "https://www.instagram.com/imperialwebexperts/",
  },
} as const;

export interface SocialLink {
  label: string;
  href: string;
  Icon: LucideIcon;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: Linkedin },
  { label: "Instagram", href: siteConfig.social.instagram, Icon: Instagram },
];
