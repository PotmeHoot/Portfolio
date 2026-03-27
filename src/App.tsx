/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring } from "motion/react";
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
import { useRef, useState, useEffect } from "react";
import { HERO_ASSETS, PROJECTS, AR_FILTERS, CLIENTS } from "./constants";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = ["work", "about", "services", "experience", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <nav className="bg-black/40 backdrop-blur-md border border-white/5 px-4 py-2 rounded-full flex items-center gap-6 md:gap-10 pointer-events-auto shadow-2xl" aria-label="Main navigation">
        <div className="text-sm font-bold tracking-widest text-white/90">JURAJ ŽÁČEK</div>
        
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-white/40">
          {[
            { id: "work", label: "Work" },
            { id: "about", label: "About" },
            { id: "services", label: "Services" },
            { id: "contact", label: "Contact" }
          ].map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={`transition-colors ${activeSection === link.id ? "text-white" : "hover:text-white"}`}
              aria-current={activeSection === link.id ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="bg-white/90 text-black px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-black hover:bg-white transition-all"
          aria-label="Inquire about a project"
        >
          Inquire
        </a>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 md:pt-32 md:pb-20 px-6 overflow-hidden">
      {/* Background: Clean Dark Aesthetic */}
      <div className="absolute inset-0 -z-10 bg-black">
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 md:mb-12">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Available for selected projects</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter text-gradient mb-6 md:mb-8 leading-[1.1] md:leading-[1]">
            I create social media <br />
            <span className="text-white">content that sells.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-text-secondary max-w-xl mb-10 md:mb-12 leading-relaxed font-medium">
            Graphics, video and AI content for brands that want to grow. <br className="hidden md:block" />
            <span className="text-white/80">10+ years of experience in design and digital content.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-white text-black rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.05] active:scale-[0.95] transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
            >
              Let's talk <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#work" 
              className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 glass rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              View Work
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          {/* Premium Editorial Visual Layout */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Main Dominant Visual */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 z-10 rounded-[48px] overflow-hidden border border-white/10 shadow-2xl"
            >
              <img 
                src={HERO_ASSETS.main} 
                alt="Main Portfolio Visual" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            {/* Supporting Card 1 */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-12 -right-12 w-48 aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-xl z-20 hidden xl:block"
            >
              <img 
                src={HERO_ASSETS.supporting1} 
                alt="Supporting Visual" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                referrerPolicy="no-referrer" 
              />
            </motion.div>

            {/* Supporting Card 2 */}
            <motion.div 
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-12 w-56 aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-xl z-20 hidden xl:block"
            >
              <img 
                src={HERO_ASSETS.supporting2} 
                alt="Supporting Visual" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                referrerPolicy="no-referrer" 
              />
            </motion.div>

            {/* Floating Badge - Integrated more cleanly */}
            <div className="absolute -bottom-4 -right-4 z-30 glass p-5 rounded-[32px] border border-white/20 backdrop-blur-2xl shadow-2xl min-w-[200px]">
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-1">Juraj Žáček</div>
              <div className="text-base font-bold">Bratislava, Slovakia</div>
            </div>
          </div>

          {/* Decorative Glows - More subtle */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] -z-10" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -z-10" />
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
  <section id="about" className="py-24 md:py-40 px-6 bg-black relative overflow-hidden">
    {/* Subtle Accent Glow */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10" />
    
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 mb-12 flex items-center gap-4">
          <div className="w-12 h-px bg-white/10" />
          Personal Story
        </div>
        
        <div className="space-y-10 md:space-y-16">
          <p className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight text-white/90">
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

const Expertise = () => (
  <section id="experience" className="py-24 md:py-40 px-6 border-t border-white/5 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10" />
    
    <div className="max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="grid lg:grid-cols-2 gap-16 md:gap-32"
      >
        {/* Left: Experience */}
        <div>
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 mb-12 flex items-center gap-4">
            <div className="w-8 h-px bg-white/10" />
            Experience
          </div>
          <div className="space-y-8">
            {[
              {
                icon: <Clock className="w-4 h-4" />,
                title: "10+ Years",
                desc: "Graphic design foundation since 2014."
              },
              {
                icon: <Building2 className="w-4 h-4" />,
                title: "Agency Background",
                desc: "MAYER/McCANN, PS:Digital, PS:Digital."
              },
              {
                icon: <Gamepad2 className="w-4 h-4" />,
                title: "Industry Versatility",
                desc: "Gaming, advertising, social media."
              },
              {
                icon: <Layers className="w-4 h-4" />,
                title: "Digital Specialist",
                desc: "AR filters, HTML5, social content."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-6 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/30 group-hover:bg-white group-hover:text-black transition-all duration-500 shrink-0">
                  {item.icon}
                </div>
                <div className="pt-1">
                  <h4 className="text-base font-bold mb-1 group-hover:text-white transition-colors">{item.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Tools */}
        <div>
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 mb-12 flex items-center gap-4">
            <div className="w-8 h-px bg-white/10" />
            Tools & AI
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: "Adobe CC", level: "Expert", desc: "Ps, Ai, Ae, Pr" },
              { name: "AR Filters", level: "Expert", desc: "Spark AR, Effect House" },
              { name: "AI Workflows", level: "Advanced", desc: "Midjourney, Runway" },
              { name: "Blender & Figma", level: "Proficient", desc: "3D & UI Design" }
            ].map((tool, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-[32px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[9px] uppercase tracking-widest font-bold text-white/20">{tool.level}</div>
                  <CheckCircle2 className="w-3 h-3 text-white/20 group-hover:text-white/40 transition-colors" />
                </div>
                <h4 className="text-base font-bold mb-1">{tool.name}</h4>
                <p className="text-xs text-text-muted leading-tight">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-24 md:py-40 px-6 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/[0.03] rounded-full blur-[120px] -z-10" />
    
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-20 md:mb-32 text-center">
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 mb-8">Expertise</div>
          <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">Services</h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto font-medium">
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
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass p-10 rounded-[40px] glass-hover group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 group-hover:text-white transition-colors">{service.title}</h3>
              <ul className="space-y-4">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-text-secondary group-hover:text-white/70 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-20 md:py-40 px-6 bg-bg-secondary relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-16 md:mb-24 text-center">
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 mb-8">Investment</div>
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-8 tracking-tighter">Pricing</h2>
          <p className="text-lg md:text-2xl text-text-secondary max-w-2xl mx-auto font-medium">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative p-8 sm:p-10 rounded-[40px] md:rounded-[48px] flex flex-col transition-all duration-500 hover:bg-white/[0.06] group ${
                pkg.popular 
                  ? "bg-white text-black scale-100 md:scale-105 z-10 shadow-[0_20px_50px_rgba(255,255,255,0.1)]" 
                  : "border border-white/5 bg-white/[0.02] text-white"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8 md:mb-10">
                <h3 className={`text-lg md:text-xl font-bold uppercase tracking-widest mb-2 ${pkg.popular ? "text-black/40" : "text-text-muted"}`}>
                  {pkg.name}
                </h3>
                <div className="text-4xl md:text-5xl font-bold tracking-tighter">
                  {pkg.price === "Tailored" ? pkg.price : <><span className="text-lg font-medium">from</span> {pkg.price}</>}
                </div>
              </div>

              <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12 flex-grow">
                {pkg.features.map((feature, j) => (
                  <li key={j} className={`flex items-center gap-4 text-sm font-medium ${pkg.popular ? "text-black/60" : "text-text-secondary"}`}>
                    <CheckCircle2 className={`w-4 h-4 ${pkg.popular ? "text-black" : "text-white/20"}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`w-full py-4 md:py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 text-center ${
                  pkg.popular 
                    ? "bg-black text-white hover:bg-black/90" 
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const Portfolio = () => {
  return (
    <section id="work" className="py-20 md:py-40 px-6 bg-[#080808] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-blue-500/[0.02] rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32 gap-10"
        >
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 mb-8 flex items-center gap-4">
              <div className="w-8 h-px bg-white/10" />
              Portfolio
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-[1.1]">Selected Work</h2>
            <p className="text-lg md:text-2xl text-text-secondary font-medium leading-relaxed">
              A curated collection of high-performance content designed to scale modern brands and drive real results.
            </p>
          </div>
          
          {/* Client Tags */}
          <div className="flex flex-col gap-4">
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/20">Trusted by</span>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-[11px] md:text-xs font-bold uppercase tracking-widest text-text-muted">
              {CLIENTS.map((client) => (
                <span key={client} className="hover:text-white transition-colors cursor-default border-b border-transparent hover:border-white/20 pb-1">{client}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {PROJECTS.map((item, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden border border-white/5 bg-white/5 transition-all duration-1000 group-hover:border-white/10 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 z-10" />
                
                {/* Image */}
                <img 
                  src={item.img} 
                  alt={`${item.title} - ${item.category}`} 
                  className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 transition-all duration-1000 scale-[1.05] group-hover:scale-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-30 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-700">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-[9px] font-bold uppercase tracking-[0.3em] text-white/60 mb-4">
                    {item.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/40 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-700 delay-100 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-30 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 -translate-x-0 sm:-translate-x-4 sm:group-hover:translate-x-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-black">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const ARShowcase = () => (
  <section id="ar-filters" className="py-20 md:py-32 px-6 relative overflow-hidden bg-gradient-to-b from-[#080808] to-black">
    {/* Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-purple-500/5 rounded-full blur-[120px] -z-10" />
    
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] uppercase tracking-[0.2em] font-bold text-purple-400 mb-6">
            <Sparkles className="w-3 h-3" />
            Interactive Tech
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 tracking-tight">AR Filters.</h2>
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
          {AR_FILTERS.map((filter, i) => (
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
  <section id="process" className="py-16 md:py-20 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
        <div className="shrink-0">
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 mb-4 flex items-center gap-4">
            <div className="w-8 h-px bg-white/10" />
            Process
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight max-w-[200px]">How we work.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 flex-1">
          {[
            { step: "01", title: "Strategy", desc: "Goals & audience call." },
            { step: "02", title: "Concept", desc: "Moodboard & approval." },
            { step: "03", title: "Design", desc: "Full content suite build." },
            { step: "04", title: "Launch", desc: "Final assets delivered." },
          ].map((item, i) => (
            <div key={i} className="relative group">
              <div className="text-[10px] font-bold text-white/10 mb-2 group-hover:text-white/30 transition-colors">{item.step}</div>
              <h3 className="text-sm font-bold mb-1">{item.title}</h3>
              <p className="text-[11px] text-text-muted leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 md:py-48 px-6 relative overflow-hidden">
    {/* Subtle Ambient Background */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square bg-white/[0.02] rounded-full blur-[120px] -z-10" />
    
    <div className="max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-8">
          <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
          Available for selected projects
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-9xl font-bold mb-8 md:mb-12 tracking-tight leading-[1] text-white">
          Let's create <br className="hidden md:block" />
          something <span className="text-white/40">iconic.</span>
        </h2>
        
        <div className="flex flex-col items-center gap-16 md:gap-24">
          {/* Primary Dominant CTA */}
          <a 
            href="mailto:jurajzacek13@gmail.com" 
            className="group relative inline-flex items-center justify-center px-8 py-5 md:px-16 md:py-8 bg-white text-black rounded-[24px] md:rounded-[48px] font-bold text-xl md:text-4xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_60px_rgba(255,255,255,0.15)]"
          >
            Start a project <ArrowRight className="ml-4 w-6 h-6 md:w-10 md:h-10 group-hover:translate-x-2 transition-transform" />
          </a>

          {/* Simplified Supporting Info */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-32 items-start text-left md:text-center w-full max-w-3xl mx-auto">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">Direct</span>
              <a href="mailto:jurajzacek13@gmail.com" className="block text-xl md:text-2xl font-bold hover:text-white/60 transition-colors">
                jurajzacek13@gmail.com
              </a>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">Social</span>
              <div className="flex flex-wrap justify-start md:justify-center gap-8">
                <a href="#" className="text-sm md:text-base font-bold hover:text-white/60 transition-colors uppercase tracking-widest" aria-label="Follow on Instagram">Instagram</a>
                <a href="#" className="text-sm md:text-base font-bold hover:text-white/60 transition-colors uppercase tracking-widest" aria-label="Connect on LinkedIn">LinkedIn</a>
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
      <div className="font-bold uppercase tracking-[0.3em] text-[10px]">© 2026 JURAJ ŽÁČEK. ALL RIGHTS RESERVED.</div>
      <div className="flex items-center gap-8 font-bold uppercase tracking-[0.3em] text-[10px]">
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
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <ARShowcase />
        <Expertise />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
