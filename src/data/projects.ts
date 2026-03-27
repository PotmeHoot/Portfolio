import { Project } from "../types";

export const PROJECTS: Project[] = [
  { 
    title: "Biedronka Campaign Visuals", 
    category: "Campaign Visuals", 
    poster: "/assets/work/biedronka-campaign-visuals.jpg",
    description: "Client: Biedronka | Agency: MAYER/McCANN | Goal: Retail performance | Result: High-impact social content.",
    previewImages: [
      "https://picsum.photos/seed/biedronka1/800/1000",
      "https://picsum.photos/seed/biedronka2/800/1000"
    ],
    hasVideoPreview: false
  },
  { 
    title: "Google Educational Content", 
    category: "Social Media Graphics", 
    poster: "/assets/work/google-educational-content.jpg",
    description: "Client: Google | Goal: Educational visuals | Result: Clear communication.",
    previewImages: [
      "https://picsum.photos/seed/google1/800/1000",
      "https://picsum.photos/seed/google2/800/1000"
    ],
    hasVideoPreview: false
  },
  { 
    title: "TV Markiza Social Suite", 
    category: "Motion / Video", 
    poster: "/assets/work/tv-markiza-social-suite.jpg",
    description: "Client: TV Markiza | Goal: Brand refresh | Result: Modernized social presence.",
    previewVideo: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    hasVideoPreview: true
  },
  { 
    title: "Custom Instagram Filter", 
    category: "AR Filters", 
    poster: "/assets/work/custom-instagram-filter.jpg",
    description: "Client: AR Project | Goal: Viral engagement | Result: 100k+ impressions.",
    previewVideo: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    hasVideoPreview: true
  },
  { 
    title: "MoliCare Social Campaign", 
    category: "Social Media Graphics", 
    poster: "/assets/work/mollicare-social-campaign.jpg",
    description: "Client: Hartmann Slovakia | Goal: Educational content | Result: Improved accessibility.",
    previewImages: [
      "https://picsum.photos/seed/molicare1/800/1000",
      "https://picsum.photos/seed/molicare2/800/1000"
    ],
    hasVideoPreview: false
  },
];
