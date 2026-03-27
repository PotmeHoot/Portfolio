export interface NavLink {
  id: string;
  label: string;
}

export interface Service {
  icon: string; // Icon name from lucide-react
  title: string;
  items: string[];
}

export interface PricingPackage {
  name: string;
  price: string;
  features: string[];
  popular: boolean;
}

export interface ExperienceItem {
  icon: string; // Icon name from lucide-react
  title: string;
  desc: string;
}

export interface ToolItem {
  name: string;
  level: string;
  desc: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface Project {
  title: string;
  category: string;
  img: string;
  description: string;
  link?: string;
}

export interface ARFilter {
  platform: string;
  title: string;
  img: string;
  qrCode?: string;
}

export interface HeroAssets {
  main: string;
  supporting1: string;
  supporting2: string;
}
