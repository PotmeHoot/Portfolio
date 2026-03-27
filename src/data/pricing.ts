import { PricingPackage } from "../types";

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    name: "Video",
    price: "€100",
    features: ["Short-form videos", "High-conversion ads", "Professional editing", "Fast delivery"],
    popular: false
  },
  {
    name: "Social Media",
    price: "€250",
    features: ["10 Posts + 3 Videos", "Content Strategy", "Revision rounds", "Visual identity focus"],
    popular: true
  },
  {
    name: "Custom",
    price: "Tailored",
    features: ["Full-scale solutions", "AR Filter development", "AI-assisted production", "Priority support"],
    popular: false
  }
];
