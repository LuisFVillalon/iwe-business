'use client';

import Link from "next/link";
import ClientScrollEffect from "../client-side/ClientScrollEffect";
import { ArrowRight, Check, ChevronDown, type LucideIcon } from "lucide-react";

interface PriceParts {
    prefix: string;
    amount: string;
    suffix: string;
}

interface ServiceCardProps {
    href: string;
    icon: LucideIcon;
    accent: string;
    title: string;
    tagline?: string;
    price: PriceParts;
    description: string;
    features: string[];
    recommended?: boolean;
    recommendedLabel?: string;
    ctaLabel: string;
    expandLabel: string;
    hideLabel: string;
    expanded: boolean;
    onToggleExpand: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    href,
    icon: Icon,
    accent,
    title,
    tagline,
    price,
    description,
    features,
    recommended,
    recommendedLabel,
    ctaLabel,
    expandLabel,
    hideLabel,
    expanded,
    onToggleExpand,
}) => {
    return (
        <div
            className={`fade-in-scroll relative inter-text bg-white rounded-2xl border text-[#333333]
             flex flex-col h-full w-full p-6 md:p-7 transition-all duration-300
             ${recommended ? "border-2 border-[#dab63e] shadow-xl md:-translate-y-1.5" : "border-[#d8d8d8]"}`}
        >
            <ClientScrollEffect />

            {recommended && recommendedLabel && (
                <span className="absolute -top-[13px] left-6 inter-text text-[11px] font-bold uppercase tracking-[0.08em] text-[#0A0A23] bg-[#dab63e] px-3 py-1 rounded-full shadow whitespace-nowrap">
                    {recommendedLabel}
                </span>
            )}

            <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mb-4"
                style={{ backgroundColor: `${accent}0f` }}
            >
                <Icon className="w-[22px] h-[22px]" style={{ color: accent }} strokeWidth={2} />
            </div>

            <p className="text-[#0A0A23] font-bold inter-text text-[20px] leading-[26px]">
                {title}
            </p>
            {tagline && (
                <p className="merriweather-text text-[13.5px] leading-[19px] text-[#23508e] font-semibold mt-1">{tagline}</p>
            )}

            <div className="flex items-baseline gap-1.5 flex-wrap mt-3">
                {price.prefix && <span className="text-[12px] text-[#999999] font-medium">{price.prefix}</span>}
                <span className="inter-text font-extrabold text-[#0A0A23] text-[24px]">{price.amount}</span>
                {price.suffix && <span className="text-[13px] text-[#666666] font-medium">{price.suffix}</span>}
            </div>

            <p className="merriweather-text text-[#555555] text-[14px] leading-[21px] tracking-[-0.16px] mt-2.5">{description}</p>

            {features.length > 0 && (
                <button
                    type="button"
                    onClick={onToggleExpand}
                    className="flex items-center gap-1.5 mt-4 bg-transparent border-none p-0 cursor-pointer text-[13px] font-semibold text-[#23508e]"
                    aria-expanded={expanded}
                >
                    <span>{expanded ? hideLabel : expandLabel}</span>
                    <ChevronDown
                        className="w-[15px] h-[15px] transition-transform duration-200"
                        style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                </button>
            )}

            {expanded && features.length > 0 && (
                <ul className="mt-3 space-y-2 card-expand-fade-in">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: accent }} strokeWidth={2.5} />
                            <span className="inter-text text-[13px] leading-[19px] text-[#333333]">{feature}</span>
                        </li>
                    ))}
                </ul>
            )}

            <Link
                href={href}
                className="group/cta flex items-center gap-1.5 mt-auto pt-5 text-[#dab63e] text-[14px] font-semibold"
            >
                <span>{ctaLabel}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
            </Link>
        </div>
    );
};

export default ServiceCard;
