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
