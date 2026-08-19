'use client';

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ExternalLink } from "lucide-react";
import CTAButton from "./CTAButton";

export interface PageHeroImage {
  src: string;
  alt: string;
  /** Tailwind object-position classes for the Image; defaults to a centered cover. */
  imageClassName?: string;
  description: string;
  sourceUrl: string;
  sourceLinkTarget?: string;
  sourceLinkRel?: string;
}

export interface PageHeroProps {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  subheading: string;
  highlights: string[];
  ctaText: string;
  image: PageHeroImage;
}

// Full-bleed section image with a hover/tap-revealed description and source
// attribution — used for the /services and /about page heroes below.
function HeroOverlayImage({
  src,
  alt,
  imageClassName = "object-cover object-center",
  description,
  sourceUrl,
  sourceLinkTarget,
  sourceLinkRel,
}: PageHeroImage) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div
      className="group fade-in-scroll-hero relative rounded-md overflow-hidden border border-white/10 shadow-xl h-64 md:h-96 cursor-pointer"
      onClick={() => setShowOverlay((v) => !v)}
    >
      <Image src={src} alt={alt} fill className={imageClassName} priority quality={90} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A23]/85 via-[#0A0A23]/10 to-transparent" />

      {/* Hover/tap darken overlay */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:opacity-100 ${
          showOverlay ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Description, centered */}
      <div
        className={`absolute inset-0 flex items-center justify-center px-6 text-center transition-opacity duration-300 group-hover:opacity-100 ${
          showOverlay ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="inter-text text-white text-sm md:text-base font-medium max-w-xs">
          {description}
        </p>
      </div>

      {/* Source link */}
      <div
        className={`absolute top-3 right-3 transition-opacity duration-300 group-hover:opacity-100 ${
          showOverlay ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a
          href={sourceUrl}
          target={sourceLinkTarget}
          rel={sourceLinkRel}
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1 text-[11px] text-white/80 underline underline-offset-2 hover:text-white"
        >
          Source
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      <div
        className={`absolute bottom-4 left-4 transition-opacity duration-300 group-hover:opacity-100 ${
          showOverlay ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src="/iwe-logo.png"
          alt="Imperial Web Experts Logo"
          width={36}
          height={36}
          className="rounded-sm bg-white/90 p-1"
        />
      </div>
    </div>
  );
}

// Shared hero shell for the /services and /about pages: eyebrow badge, heading
// with an accented word, subheading, highlight checklist, CTA, and a hover-reveal
// image. The home page's Hero.tsx has a meaningfully different layout/copy shape
// and is intentionally not built on top of this component.
export default function PageHero({ eyebrow, heading, headingAccent, subheading, highlights, ctaText, image }: PageHeroProps) {
  return (
    <div className="py-10 md:py-4 w-screen relative left-1/2 right-1/2 -mx-[50vw] min-h-100vh bg-[#0A0A23]">
      <div className="max-w-4xl md:max-w-7xl mx-auto px-4 md:px-2 py-+20 md:py-3 flex flex-col gap-10 md:gap-14 justify-center items-center">
        <div className="w-full grid md:grid-cols-2 gap-10 md:gap-8 items-center">
          {/* Copy column */}
          <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
            {/* Eyebrow badge */}
            <span className="fade-in-responsive-left-top inline-flex items-center gap-2 rounded-sm bg-white/10 border border-white/20 px-3 py-1 text-[13px] md:text-[15px] tracking-[1.5px] uppercase font-semibold text-[#dab63e]">
              {eyebrow}
            </span>

            <h1 className="fade-in-responsive-left-top inter-text text-white text-4xl md:text-5xl leading-tight font-semibold tracking-tight">
              {heading}{' '}
              <strong className="italic text-[#dab63e]">{headingAccent}</strong>
            </h1>

            <p className="fade-in-responsive-left-top text-[#999999] text-lg md:text-xl font-medium max-w-md">
              {subheading}
            </p>

            <div className="fade-in-responsive-left-top flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2">
              {highlights.map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#23508e]" />
                  {item}
                </span>
              ))}
            </div>

            <div className="fade-in-responsive-left-top mt-2">
              <CTAButton ctaText={ctaText} />
            </div>
          </div>

          {/* Visual column */}
          <HeroOverlayImage {...image} />
        </div>
      </div>
    </div>
  );
}
