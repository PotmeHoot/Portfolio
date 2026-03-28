import * as LucideIcons from "lucide-react";

export type IconName = keyof typeof LucideIcons;

export interface NavLink {
  id: string;
  label: string;
}

export interface Service {
  icon: IconName;
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
  icon: IconName;
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

export type ProjectType = 'graphic' | 'video' | 'motion' | 'AR';

export interface Project {
  title: string;
  category: string;
  poster?: string;
  description: string;
  link?: string;
  previewVideo?: string;
  previewImages?: string[];
  icon?: IconName;
  type?: ProjectType;
  fallbackImage?: boolean;
  fallbackVideo?: boolean;
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
