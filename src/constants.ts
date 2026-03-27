import { Project, ARFilter, HeroAssets } from "./types";

/**
 * HERO ASSETS
 * Replace these placeholder URLs with your local assets (e.g., "/assets/hero-main.jpg")
 */
export const HERO_ASSETS: HeroAssets = {
  main: "https://picsum.photos/seed/healthcare-social/800/1000",
  supporting1: "https://picsum.photos/seed/hartmann-design/400/500",
  supporting2: "https://picsum.photos/seed/banking-banners/600/400",
};

/**
 * PORTFOLIO PROJECTS
 * Replace these with your real project thumbnails and descriptions.
 */
export const PROJECTS: Project[] = [
  { 
    title: "MoliCare Social Campaign", 
    category: "Social Media Graphics", 
    img: "https://picsum.photos/seed/healthcare-social/800/1000",
    description: "Client: Hartmann Slovakia | Goal: Educational content | Result: Improved accessibility."
  },
  { 
    title: "Biedronka Campaign Visuals", 
    category: "Campaign Visuals", 
    img: "https://picsum.photos/seed/biedronka/800/1000",
    description: "Client: Biedronka | Agency: MAYER/McCANN | Goal: Retail performance | Result: High-impact social content."
  },
  { 
    title: "Raiffeisen Banner Ads", 
    category: "Campaign Visuals", 
    img: "https://picsum.photos/seed/banking-banners/800/1000",
    description: "Client: Raiffeisen Bank | Goal: Performance marketing | Result: Increased CTR."
  },
  { 
    title: "Hartmann Sensitive Design", 
    category: "Campaign Visuals", 
    img: "https://picsum.photos/seed/hartmann-design/800/1000",
    description: "Client: Hartmann | Goal: Sensitive communication | Result: High engagement."
  },
  { 
    title: "Performance Marketing Visuals", 
    category: "Social Media Graphics", 
    img: "https://picsum.photos/seed/performance-marketing/800/1000",
    description: "Client: Raiffeisen | Goal: Conversion focus | Result: Scaled ad performance."
  },
  { 
    title: "Google Educational Content", 
    category: "Social Media Graphics", 
    img: "https://picsum.photos/seed/google-content/800/1000",
    description: "Client: Google | Goal: Educational visuals | Result: Clear communication."
  },
  { 
    title: "TV Markiza Social Suite", 
    category: "Motion / Video", 
    img: "https://picsum.photos/seed/tv-markiza/800/1000",
    description: "Client: TV Markiza | Goal: Brand refresh | Result: Modernized social presence."
  },
  { 
    title: "Custom Instagram Filter", 
    category: "AR Filters", 
    img: "https://picsum.photos/seed/insta-filter/800/1000",
    description: "Client: AR Project | Goal: Viral engagement | Result: 100k+ impressions."
  },
  { 
    title: "Raiffeisen Video Ads", 
    category: "Motion / Video", 
    img: "https://picsum.photos/seed/banking-video/800/1000",
    description: "Client: Raiffeisen | Goal: Video ads | Result: Lower CPA."
  },
];

/**
 * AR FILTERS
 * Replace these with your real AR filter previews and QR codes.
 */
export const AR_FILTERS: ARFilter[] = [
  { platform: "Instagram", title: "Brand Mask", img: "https://picsum.photos/seed/ar1/400/600" },
  { platform: "TikTok", title: "Game Filter", img: "https://picsum.photos/seed/ar2/400/600" },
];

/**
 * CLIENT LIST
 */
export const CLIENTS = ["Hartmann", "Raiffeisen", "Google", "TV Markiza", "Biedronka"];
