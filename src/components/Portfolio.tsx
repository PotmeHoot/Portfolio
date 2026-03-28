import { motion, useReducedMotion } from "motion/react";
import { PROJECTS } from "../data/projects";
import { CLIENTS } from "../data/clients";
import { FADE_UP_VARIANTS, DEFAULT_TRANSITION } from "../constants/motion";
import { ProjectCard } from "./portfolio/ProjectCard";
import { SectionHeader } from "./ui/SectionHeader";
import { SectionWrapper } from "./ui/SectionWrapper";

export const Portfolio = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="work" className="bg-[#080808]">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-blue-500/[0.02] rounded-full blur-[120px] -z-10" />
      
      {/* Section Header */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : FADE_UP_VARIANTS.initial}
        whileInView={FADE_UP_VARIANTS.animate}
        viewport={{ once: true, margin: "-100px" }}
        transition={DEFAULT_TRANSITION}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32 gap-10"
      >
        <div className="max-w-2xl">
          <SectionHeader 
            eyebrow="Portfolio"
            title="Selected Work"
            description="A curated collection of high-performance content designed to scale modern brands and drive real results."
            className="!mb-0"
          />
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
          <ProjectCard key={i} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
};
