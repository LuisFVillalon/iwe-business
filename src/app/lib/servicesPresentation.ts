import { Rocket, Building2, Workflow, ShieldCheck, TrendingUp, Gem, type LucideIcon } from "lucide-react";
import type { Language } from "@/app/lib/types";
import type { LocalizedText, Price } from "@/app/lib/servicesData";

// Shared between the home page's Services teaser and the full /services page so
// pricing/icon formatting only needs to change in one place.

export const localize = (text: LocalizedText, language: Language): string =>
  language === "english" ? text.en : text.es;

export interface PriceParts {
  prefix: string;
  amount: string;
  suffix: string;
}

export function getPriceParts(price: Price, language: Language): PriceParts {
  const en = language === "english";
  const unitSuffix: Record<"project" | "month" | "year" | "page", string> = {
    project: en ? "/project" : "/proyecto",
    month: en ? "/mo" : "/mes",
    year: en ? "/yr" : "/año",
    page: en ? "/page" : "/página",
  };
  const suffix = price.unit ? unitSuffix[price.unit] : "";

  switch (price.type) {
    case "custom":
      return { prefix: "", amount: en ? "Custom" : "Personalizado", suffix: "" };
    case "fixed":
      return { prefix: "", amount: `$${price.amount}`, suffix };
    case "startingAt":
    default:
      return { prefix: en ? "Starting at" : "Desde", amount: `$${price.amount}`, suffix };
  }
}

export const packageIconMap: Record<string, LucideIcon> = {
  starter: Rocket,
  business: Building2,
  premium: Workflow,
};

export const carePlanIconMap: Record<string, LucideIcon> = {
  "essential-care": ShieldCheck,
  "business-care": TrendingUp,
  "premium-care": Gem,
};
