import CTAButton from "./CTAButton";
import ClientScrollEffect from "@/app/components/client-side/ClientScrollEffect";
import ClientVerseSwitcher from '@/app/components/client-side/ClientVerseSwitcher';

interface ContactProps {
  ctaTitle?: string;
  ctaText?: string;
  ctaButton?: string;
  language: string;
}

export default function Contact({ ctaTitle, ctaText, ctaButton, language }: ContactProps): React.ReactElement {

  return (
    <>
    <ClientScrollEffect/>
      <div id="contact" className="md:mx-[25%] flex flex-col justify-center items-center p-4 pb-8 
      rounded-2xl shadow-lg border-15 border-double border-[#dab63e] my-8"
      style={{ background: 'linear-gradient(180deg, #0A0A23  0%, #23508e 100%)' }}
      >
        {/* Header Section with Contact Info */}
        <div className="text-center flex flex-col justify-center items-center ">
          <h2 className="dm-serif-text-regular text-3xl font-bold text-[#dab63e] ">{ctaTitle}</h2>
          <p className="text-white mb-4 text-lg">{ctaText}</p>
          <CTAButton
            ctaText={ctaButton}
          />
        </div>
      </div>
          <ClientVerseSwitcher
            language={language}
          />
    </>
  );
}