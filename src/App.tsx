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
  Cpu
} from "lucide-react";
import { useRef } from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
    <div className="glass px-5 py-2.5 md:px-6 md:py-3 rounded-full flex items-center gap-6 md:gap-8 glow-soft pointer-events-auto">
      <div className="text-lg md:text-xl font-bold tracking-tighter">LUMINA</div>
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
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-500/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px]" 
        />
        
        {/* Subtle Video/Showreel Overlay Placeholder */}
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/showreel/1920/1080?blur=10')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-5xl z-10"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          {["Graphics", "Video", "AI Content"].map((tag, i) => (
            <div key={i} className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
              <div className="w-1 h-1 rounded-full bg-white/20" />
              {tag}
            </div>
          ))}
        </div>
        
        <h1 className="text-5xl md:text-9xl font-bold tracking-tight text-gradient mb-6 md:mb-8 leading-[1] md:leading-[0.95] max-w-4xl mx-auto">
          I create social media content <br className="hidden md:block" />
          <span className="text-white">that sells.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-text-secondary max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-medium px-4 md:px-0">
          Graphics, videos and AI content for brands that want to grow.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 md:px-0">
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white text-black rounded-2xl font-bold text-lg md:text-xl flex items-center justify-center gap-3 hover:scale-[1.05] active:scale-[0.95] transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            Send a message <ArrowRight className="w-5 md:w-6 h-5 md:h-6" />
          </a>
          <a 
            href="#work" 
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 glass rounded-2xl font-bold text-lg md:text-xl hover:bg-white/10 transition-all"
          >
            View portfolio
          </a>
        </div>
      </motion.div>

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

const Stats = () => (
  <section className="py-16 md:py-24 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-12">
      {[
        { label: "Projects Delivered", value: "250+" },
        { label: "Client Retention", value: "94%" },
        { label: "Ad Spend Managed", value: "$2M+" },
        { label: "Design Experience", value: "6yrs" },
      ].map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
          <div className="text-[10px] md:text-xs uppercase tracking-widest text-text-muted font-semibold">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-24 md:py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 md:mb-24 text-center">
        <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight">Services</h2>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
          Specialized content creation designed to stop the scroll and drive conversion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {[
          {
            icon: <Layout className="w-6 h-6" />,
            title: "Social Media Graphics",
            items: ["Posts", "Campaign Visuals", "Branded Content"]
          },
          {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Short-form Video",
            items: ["Reels", "Ads", "Promo Videos"]
          },
          {
            icon: <Sparkles className="w-6 h-6" />,
            title: "AI Content",
            items: ["AI Visuals", "AI Video Assets", "Creative AI Concepts"]
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

const WhyMe = () => (
  <section id="why-me" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-24">
        <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">Why Lumina?</h2>
        <p className="text-xl text-text-secondary max-w-2xl">
          I combine a decade of design experience with high-level agency standards and the latest AI technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Clock className="w-5 h-5" />,
            title: "10+ Years Experience",
            desc: "A decade of refining visual languages for brands that demand excellence."
          },
          {
            icon: <Building2 className="w-5 h-5" />,
            title: "Agency Pedigree",
            desc: "Bringing high-level agency standards and strategic thinking to every project."
          },
          {
            icon: <Cpu className="w-5 h-5" />,
            title: "Hybrid Skillset",
            desc: "A unique fusion of traditional design, motion video, and cutting-edge AI."
          },
          {
            icon: <Zap className="w-5 h-5" />,
            title: "Fast Delivery",
            desc: "Premium content delivered in days, not weeks, without compromising quality."
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 card-premium hover:bg-white/[0.05] group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-text-muted group-hover:text-white transition-colors">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-text-muted leading-relaxed text-sm">{item.desc}</p>
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
          Transparent packages built for brands at every stage of growth.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Video",
            price: "€200",
            features: ["Short-form videos", "High-conversion ads", "Professional editing"],
            popular: false
          },
          {
            name: "Social Media",
            price: "€300",
            features: ["10 Posts + 3 Videos", "Content Strategy", "Revision rounds"],
            popular: true
          },
          {
            name: "Custom",
            price: "Tailored",
            features: ["Full-scale solutions", "Ongoing partnership", "Priority support"],
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
    { title: "Luxury Real Estate", category: "Graphics", img: "https://picsum.photos/seed/graphics1/800/1000" },
    { title: "SaaS Product Launch", category: "Video", img: "https://picsum.photos/seed/video1/800/1000" },
    { title: "Dynamic Brand Identity", category: "Motion", img: "https://picsum.photos/seed/motion1/800/1000" },
    { title: "Interactive AR Filter", category: "AR", img: "https://picsum.photos/seed/ar1/800/1000" },
    { title: "E-commerce Ad Suite", category: "Graphics", img: "https://picsum.photos/seed/graphics2/800/1000" },
    { title: "Tech Event Promo", category: "Video", img: "https://picsum.photos/seed/video2/800/1000" },
    { title: "App Interface Motion", category: "Motion", img: "https://picsum.photos/seed/motion2/800/1000" },
    { title: "Retail AR Experience", category: "AR", img: "https://picsum.photos/seed/ar2/800/1000" },
    { title: "Minimalist Brand Kit", category: "Graphics", img: "https://picsum.photos/seed/graphics3/800/1000" },
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
            {["Graphics", "Video", "Motion", "AR"].map((cat) => (
              <span key={cat} className="hover:text-white transition-colors cursor-default">{cat}</span>
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
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-white/90 transition-colors">
                    {item.title}
                  </h3>
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
          Have a project or idea? <br className="hidden md:block" />
          Let’s talk.
        </h2>
        <p className="text-lg md:text-2xl text-text-secondary mb-10 md:mb-16 max-w-2xl mx-auto font-medium px-4">
          Send me a message and I’ll prepare a proposal.
        </p>
        
        <div className="flex flex-col items-center gap-8 md:gap-12 px-4">
          {/* Primary CTA */}
          <a 
            href="mailto:hello@lumina.design" 
            className="w-full md:w-auto group relative px-8 md:px-12 py-5 md:py-6 bg-white text-black rounded-2xl md:rounded-[32px] font-bold text-xl md:text-2xl flex items-center justify-center gap-4 hover:scale-105 active:scale-95 transition-all glow-accent"
          >
            Send a message <ArrowRight className="w-6 md:w-7 h-6 md:h-7 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-4 md:mt-8">
            {/* Email Option */}
            <div className="flex flex-col items-center gap-2 md:gap-3">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted">Direct Email</span>
              <a href="mailto:hello@lumina.design" className="text-lg md:text-xl font-bold hover:text-white/80 transition-colors">
                hello@lumina.design
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
      <div>© 2026 LUMINA DESIGN. ALL RIGHTS RESERVED.</div>
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
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <WhyMe />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
