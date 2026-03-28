import { Project } from "../types";

export const PROJECTS: Project[] = [
  { 
    title: "Biedronka Campaign Visuals", 
    category: "Campaign Visuals", 
    type: "graphic",
    poster: "/assets/work/biedronka-campaign-visuals.jpg",
    description: "Client: Biedronka | Agency: MAYER/McCANN | Goal: Retail performance | Result: High-impact social content.",
    previewImages: [
      "/assets/work/biedronka-preview-1.jpg",
      "/assets/work/biedronka-preview-2.jpg"
    ]
  },
  { 
    title: "Google Educational Content", 
    category: "Social Media Graphics", 
    type: "graphic",
    poster: "/assets/work/google-educational-content.jpg",
    description: "Client: Google | Goal: Educational visuals | Result: Clear communication.",
    previewImages: [
      "/assets/work/google-preview-1.jpg",
      "/assets/work/google-preview-2.jpg"
    ]
  },
  { 
    title: "TV Markiza Social Suite", 
    category: "Motion / Video", 
    type: "video",
    poster: "/assets/work/tv-markiza-social-suite.jpg",
    description: "Client: TV Markiza | Goal: Brand refresh | Result: Modernized social presence.",
    previewVideo: "/assets/video/tv-markiza-preview.mp4"
  },
  { 
    title: "Custom Instagram Filter", 
    category: "AR Filters", 
    type: "AR",
    poster: "/assets/work/custom-instagram-filter.jpg",
    description: "Client: AR Project | Goal: Viral engagement | Result: 100k+ impressions.",
    previewVideo: "/assets/ar/instagram-filter-preview.mp4"
  },
  { 
    title: "MoliCare Social Campaign", 
    category: "Social Media Graphics", 
    type: "graphic",
    poster: "/assets/work/mollicare-social-campaign.jpg",
    description: "Client: Hartmann | Goal: Educational content | Result: Improved accessibility.",
    previewImages: [
      "/assets/work/molicare-preview-1.jpg",
      "/assets/work/molicare-preview-2.jpg"
    ]
  },
  {
    title: "Upcoming Creative Project",
    category: "Experimental",
    type: "graphic",
    description: "This project is currently in development. Assets will be added soon.",
    fallbackImage: true
  },
  {
    title: "Video Concept Study",
    category: "Motion / Video",
    type: "video",
    poster: "/assets/work/google-educational-content.jpg", // Valid poster
    description: "A study in motion design. Video content is currently being rendered.",
    previewVideo: "", // Empty string to trigger VideoPlaceholder
    fallbackVideo: true
  },
  {
    title: "Dynamic Brand Animation",
    category: "Motion Design",
    type: "motion",
    description: "A series of high-energy animations for a tech brand launch.",
    previewImages: [
      "https://picsum.photos/seed/motion1/800/1000",
      "https://picsum.photos/seed/motion2/800/1000"
    ]
  }
];
