/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowRight, 
  Instagram, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  Sparkles, 
  Zap, 
  Layout, 
  Smartphone,
  CheckCircle2,
  ChevronRight,
  Clock,
  Building2,
  Cpu,
  Gamepad2,
  Monitor,
  Palette,
  Layers,
  Wand2,
  QrCode,
  Video
} from "lucide-react";
import { useRef } from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
    <div className="glass px-5 py-2.5 md:px-6 md:py-3 rounded-full flex items-center gap-6 md:gap-8 glow-soft pointer-events-auto">
      <div className="text-lg md:text-xl font-bold tracking-tighter">JURAJ ŽÁČEK</div>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary">
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#process" className="hover:text-white transition-colors">Process</a>
      </div>
      <a 
        href="#contact" 
        className="bg-white text-black px-4 py-1.5 rounded-full text-xs md:text-sm font-bold hover:bg-white/90 transition-colors"
      >
        Inquire
      </a>
    </div>
  </nav>
);

const Hero = () => {
  const heroImages = [
    "https://picsum.photos/seed/healthcare-social/400/500",
    "https://picsum.photos/seed/hartmann-design/400/500",
    "https://picsum.photos/seed/banking-banners/400/500",
    "https://picsum.photos/seed/performance-marketing/400/500",
    "https://picsum.photos/seed/google-content/400/500",
    "https://picsum.photos/seed/tv-markiza/400/500",
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background: Clean Dark Aesthetic */}
      <div className="absolute inset-0 -z-10 bg-black">
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-8">
            <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
            Available for new projects
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-gradient mb-6 leading-[1.1] md:leading-[1]">
            I create social media <br />
            <span className="text-white">content that sells.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-xl mb-8 leading-relaxed font-medium">
            Graphics, video and AI content for brands that want to grow. <br className="hidden md:block" />
            <span className="text-white/80">10+ years of experience in design and digital content.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.05] active:scale-[0.95] transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              Let's talk <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#work" 
              className="w-full sm:w-auto px-8 py-4 glass rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              View Work
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          {/* Animated Portfolio Grid */}
          <div className="grid grid-cols-2 gap-4 rotate-3 scale-110 opacity-40 hover:opacity-100 transition-opacity duration-1000">
            {heroImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{ 
                  duration: 5 + i, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
                className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10"
              >
                <img src={img} alt="Portfolio Preview" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
          
          {/* Floating Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 glass p-6 rounded-3xl border border-white/20 backdrop-blur-2xl shadow-2xl text-center min-w-[240px]">
            <div className="text-xs uppercase tracking-[0.3em] font-bold text-white/40 mb-2">Juraj Žáček</div>
            <div className="text-xl font-bold mb-1">Bratislava, Slovakia</div>
            <div className="text-sm text-text-muted">Graphic Designer • 10+ Years</div>
          </div>

          {/* Decorative Glows */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -z-10" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 md:py-32 px-6 bg-black relative overflow-hidden">
    {/* Subtle Accent Glow */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />
    
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-xs uppercase tracking-[0.3em] font-bold text-white/30 mb-12 flex items-center gap-4">
          <div className="w-12 h-px bg-white/10" />
          Personal Story
        </div>
        
        <div className="space-y-8 md:space-y-12">
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.3] md:leading-[1.2] tracking-tight text-white/90">
            I’m a graphic designer with over <span className="text-white">10 years of experience</span>, working across gaming, advertising and social media.
          </p>
          
          <p className="text-xl md:text-3xl font-medium leading-[1.4] text-text-secondary max-w-4xl">
            I’ve worked in agencies and production environments, creating content for brands in <span className="text-white/80">healthcare, banking, and technology.</span>
          </p>
          
          <p className="text-xl md:text-3xl font-medium leading-[1.4] text-text-secondary max-w-4xl">
            Today, I focus on creating social media content that is both <span className="text-white/80 font-bold">visually strong and effective.</span>
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-24 md:py-32 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 md:mb-24">
        <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">Experience</h2>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
          A decade of professional design, working with top-tier agencies and global brands to create impactful digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Clock className="w-5 h-5" />,
            title: "10+ Years Experience",
            desc: "A solid foundation in graphic design, evolving with the digital landscape since 2014."
          },
          {
            icon: <Building2 className="w-5 h-5" />,
            title: "Agency Background",
            desc: "Honed my craft at MAYER/McCANN, PS:Digital, and Brokeria, delivering high-stakes creative solutions."
          },
          {
            icon: <Gamepad2 className="w-5 h-5" />,
            title: "Industry Versatility",
            desc: "Specialized experience in gaming, advertising, and high-growth social media ecosystems."
          },
          {
            icon: <Layers className="w-5 h-5" />,
            title: "Digital Specialist",
            desc: "Expertise in social media content, AR filters (Spark AR/Effect House), and HTML5 banners."
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 glass rounded-[32px] glass-hover group"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white/40 group-hover:bg-white group-hover:text-black transition-all duration-500">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-text-secondary leading-relaxed text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Tools = () => (
  <section className="py-24 md:py-32 px-6 bg-bg-secondary/50">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Tools of the Trade</h2>
          <p className="text-lg text-text-secondary max-w-xl">
            Leveraging industry-standard software and cutting-edge AI to push creative boundaries.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { name: "Adobe Creative Cloud", level: "Expert", desc: "Photoshop, Illustrator, After Effects, Premiere Pro" },
          { name: "Spark AR & Effect House", level: "Expert", desc: "Advanced AR filters for Instagram, Facebook, and TikTok" },
          { name: "AI Creative Tools", level: "Advanced", desc: "Midjourney, Stable Diffusion, Runway, and custom AI workflows" },
          { name: "Blender & Figma", level: "Proficient", desc: "3D modeling, rendering, and modern UI/UX design" }
        ].map((tool, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-[24px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/40">{tool.level}</div>
              <CheckCircle2 className="w-4 h-4 text-white/20" />
            </div>
            <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
            <p className="text-xs text-text-muted leading-relaxed">{tool.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-24 md:py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 md:mb-24 text-center">
        <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight">Services</h2>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
          Specialized content creation designed to stop the scroll and drive growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {[
          {
            icon: <Layout className="w-6 h-6" />,
            title: "Social Media Content",
            items: ["Posts", "Campaigns", "Visual identity for social"]
          },
          {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Video & Motion",
            items: ["Reels", "Ads", "Animated content"]
          },
          {
            icon: <Sparkles className="w-6 h-6" />,
            title: "AI Content",
            items: ["AI Visuals", "AI-assisted production", "Creative concepts"]
          },
          {
            icon: <Wand2 className="w-6 h-6" />,
            title: "AR Filters",
            items: ["Instagram filters", "TikTok effects"]
          }
        ].map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 md:p-10 rounded-[24px] md:rounded-[32px] glass-hover group"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
              {service.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{service.title}</h3>
            <ul className="space-y-3">
              {service.items.map((item, j) => (
                <li key={j} className="flex items-center gap-3 text-sm md:text-base text-text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-32 px-6 bg-bg-secondary">
    <div className="max-w-7xl mx-auto">
      <div className="mb-24 text-center">
        <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">Pricing</h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Simple and flexible packages built for brands that want to grow.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Video",
            price: "€200",
            features: ["Short-form videos", "High-conversion ads", "Professional editing", "Fast delivery"],
            popular: false
          },
          {
            name: "Social Media",
            price: "€300",
            features: ["10 Posts + 3 Videos", "Content Strategy", "Revision rounds", "Visual identity focus"],
            popular: true
          },
          {
            name: "Custom",
            price: "Tailored",
            features: ["Full-scale solutions", "AR Filter development", "AI-assisted production", "Priority support"],
            popular: false
          }
        ].map((pkg, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative p-10 rounded-[40px] flex flex-col ${
              pkg.popular 
                ? "bg-white text-black scale-105 z-10 shadow-[0_20px_50px_rgba(255,255,255,0.1)]" 
                : "glass text-white"
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className={`text-xl font-bold uppercase tracking-widest mb-2 ${pkg.popular ? "text-black/40" : "text-text-muted"}`}>
                {pkg.name}
              </h3>
              <div className="text-4xl font-bold">
                {pkg.price === "Tailored" ? pkg.price : <><span className="text-lg font-medium">from</span> {pkg.price}</>}
              </div>
            </div>

            <ul className="space-y-4 mb-12 flex-grow">
              {pkg.features.map((feature, j) => (
                <li key={j} className={`flex items-center gap-3 font-medium ${pkg.popular ? "text-black/60" : "text-text-secondary"}`}>
                  <CheckCircle2 className={`w-5 h-5 ${pkg.popular ? "text-black" : "text-white"}`} />
                  {feature}
                </li>
              ))}
            </ul>

            <a 
              href="#contact" 
              className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${
                pkg.popular 
                  ? "bg-black text-white hover:bg-black/90" 
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const projects = [
    { 
      title: "MoliCare Social Campaign", 
      category: "Social Media Graphics", 
      img: "https://picsum.photos/seed/healthcare-social/800/1000",
      description: "Client: Hartmann Slovakia | Goal: Educational content | Result: Improved accessibility."
    },
    { 
      title: "Hartmann Sensitive Design", 
      category: "Campaign Visuals", 
      img: "https://picsum.photos/seed/hartmann-design/800/1000",
      description: "Client: Hartmann | Goal: Sensitive communication | Result: High engagement."
    },
    { 
      title: "Raiffeisen Banner Ads", 
      category: "Campaign Visuals", 
      img: "https://picsum.photos/seed/banking-banners/800/1000",
      description: "Client: Raiffeisen Bank | Goal: Performance marketing | Result: Increased CTR."
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
      title: "TikTok AR Experience", 
      category: "AR Filters", 
      img: "https://picsum.photos/seed/tiktok-filter/800/1000",
      description: "Client: AR Project | Goal: User interaction | Result: High share rate."
    },
    { 
      title: "Raiffeisen Video Ads", 
      category: "Motion / Video", 
      img: "https://picsum.photos/seed/banking-video/800/1000",
      description: "Client: Raiffeisen | Goal: Video ads | Result: Lower CPA."
    },
  ];

  return (
    <section id="work" className="py-24 md:py-32 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight">Selected Work</h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-xl">
              A curated collection of high-performance content designed to scale modern brands.
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-text-muted">
            {["Social Media Graphics", "Campaign Visuals", "Motion / Video", "AR Filters"].map((cat) => (
              <span key={cat} className="hover:text-white transition-colors cursor-default whitespace-nowrap">{cat}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden border border-white/5 bg-white/5 transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />
                
                {/* Image with Zoom Effect */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-30 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-2 md:mb-3">
                    {item.category}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-white/90 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Action Icon */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 z-30">
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ARShowcase = () => (
  <section id="ar-filters" className="py-24 md:py-32 px-6 relative overflow-hidden bg-gradient-to-b from-[#080808] to-black">
    {/* Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-purple-500/5 rounded-full blur-[120px] -z-10" />
    
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] uppercase tracking-[0.2em] font-bold text-purple-400 mb-6">
            <Sparkles className="w-3 h-3" />
            Interactive Tech
          </div>
          <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">AR Filters.</h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-xl mb-8 leading-relaxed">
            Interactive AR filters for Instagram and TikTok. Combining graphic design with interactive technology to create engaging experiences that stop the scroll.
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3 text-white/60">
              <Instagram className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-widest">Instagram</span>
            </div>
            <div className="flex items-center gap-3 text-white/60">
              <Video className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-widest">TikTok</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { platform: "Instagram", title: "Brand Mask", img: "https://picsum.photos/seed/ar1/400/600" },
            { platform: "TikTok", title: "Game Filter", img: "https://picsum.photos/seed/ar2/400/600" },
          ].map((filter, i) => (
            <div key={i} className="relative aspect-[2/3] rounded-3xl overflow-hidden border border-white/10 group">
              <img src={filter.img} alt={filter.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-[8px] uppercase tracking-widest font-bold text-white/40 mb-1">{filter.platform}</div>
                <div className="text-sm font-bold">{filter.title}</div>
              </div>
              {/* QR Code Overlay Placeholder */}
              <div className="absolute top-4 right-4 w-10 h-10 glass rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <QrCode className="w-5 h-5 text-white/60" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Horizontal Feature List */}
      <div className="grid md:grid-cols-3 gap-8 border-t border-white/5 pt-16">
        {[
          { title: "Spark AR", desc: "Expert development for Meta platforms (Instagram & Facebook)." },
          { title: "Effect House", desc: "Advanced TikTok filter creation with high viral potential." },
          { title: "3D Integration", desc: "Seamlessly blending 3D assets into real-world environments." }
        ].map((feat, i) => (
          <div key={i}>
            <h3 className="text-lg font-bold mb-2 text-purple-400">{feat.title}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-24 md:py-32 px-6">
    <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight">The 60-second pitch.</h2>
      <p className="text-lg md:text-xl text-text-secondary">How we go from inquiry to high-performing content in 7 days.</p>
    </div>

    <div className="max-w-5xl mx-auto grid gap-8 md:gap-12">
      {[
        { step: "01", title: "Strategy Call", desc: "We discuss your goals, audience, and current pain points." },
        { step: "02", title: "Visual Concept", desc: "I present a moodboard and initial concepts for your approval." },
        { step: "03", title: "Design Phase", desc: "I build out the full content suite with conversion in mind." },
        { step: "04", title: "Delivery & Launch", desc: "Final assets delivered in all formats, ready to scale." },
      ].map((item, i) => (
        <div key={i} className="flex gap-6 md:gap-8 items-start">
          <div className="text-3xl md:text-4xl font-bold text-white/10">{item.step}</div>
          <div className="pt-1 md:pt-2">
            <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 md:py-40 px-6 relative overflow-hidden">
    {/* Enhanced Glowing Background for Visual Separation */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl aspect-square bg-white/[0.03] rounded-full blur-[160px] -z-10" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-white/5 rounded-full blur-[80px] -z-10" />
    
    <div className="max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight text-gradient leading-[1.1]">
          Based in Bratislava. <br className="hidden md:block" />
          Working worldwide.
        </h2>
        <p className="text-lg md:text-2xl text-text-secondary mb-10 md:mb-16 max-w-2xl mx-auto font-medium px-4">
          Send me a message and let's discuss your next project.
        </p>
        
        <div className="flex flex-col items-center gap-8 md:gap-12 px-4">
          {/* Primary CTA */}
          <a 
            href="mailto:jurajzacek13@gmail.com" 
            className="w-full md:w-auto group relative px-8 md:px-12 py-5 md:py-6 bg-white text-black rounded-2xl md:rounded-[32px] font-bold text-xl md:text-2xl flex items-center justify-center gap-4 hover:scale-105 active:scale-95 transition-all glow-accent"
          >
            Send a message <ArrowRight className="w-6 md:w-7 h-6 md:h-7 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-4 md:mt-8">
            {/* Email Option */}
            <div className="flex flex-col items-center gap-2 md:gap-3">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted">Direct Email</span>
              <a href="mailto:jurajzacek13@gmail.com" className="text-lg md:text-xl font-bold hover:text-white/80 transition-colors">
                jurajzacek13@gmail.com
              </a>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-white/10" />

            {/* Social Links */}
            <div className="flex flex-col items-center gap-2 md:gap-3">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted">Social Media</span>
              <div className="flex items-center gap-6">
                <a href="#" className="text-text-muted hover:text-white transition-colors flex items-center gap-2 font-bold text-sm md:text-base">
                  <Instagram className="w-4 md:w-5 h-4 md:h-5" /> Instagram
                </a>
                <a href="#" className="text-text-muted hover:text-white transition-colors flex items-center gap-2 font-bold text-sm md:text-base">
                  <Linkedin className="w-4 md:w-5 h-4 md:h-5" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5 text-center text-white/40 text-sm">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>© 2026 JURAJ ŽÁČEK. ALL RIGHTS RESERVED.</div>
      <div className="flex items-center gap-8">
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Tools />
        <Services />
        <Portfolio />
        <ARShowcase />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
