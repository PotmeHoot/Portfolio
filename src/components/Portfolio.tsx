import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "../data/projects";
import { CLIENTS } from "../data/clients";
import { FADE_UP_VARIANTS, DEFAULT_TRANSITION } from "../constants/motion";

export const Portfolio = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="section-padding px-6 bg-[#080808] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-blue-500/[0.02] rounded-full blur-[120px] -z-10" />
      
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : FADE_UP_VARIANTS.initial}
          whileInView={FADE_UP_VARIANTS.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={DEFAULT_TRANSITION}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32 gap-10"
        >
          <div className="max-w-2xl">
            <div className="section-eyebrow">
              <div className="section-eyebrow-line" />
              Portfolio
            </div>
            <h2 className="section-title">Selected Work</h2>
            <p className="section-description">
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
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...DEFAULT_TRANSITION, delay: shouldReduceMotion ? 0 : i * 0.05 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden border border-white/5 bg-white/5 transition-all duration-700 group-hover:border-white/10 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 z-10" />
                
                {/* Image */}
                <img 
                  src={item.img} 
                  alt={`${item.title} - ${item.category}`} 
                  className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 transition-all duration-700 scale-[1.02] group-hover:scale-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-30 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-[9px] font-bold uppercase tracking-[0.3em] text-white/60 mb-4">
                    {item.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/40 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-2 leading-relaxed">
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
