import { motion, useReducedMotion } from "motion/react";
import { FADE_UP_VARIANTS, DEFAULT_TRANSITION } from "../constants/motion";
import { SectionHeader } from "./ui/SectionHeader";
import { SectionWrapper } from "./ui/SectionWrapper";

export const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="about" className="bg-black" containerClassName="max-w-5xl">
      {/* Subtle Accent Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10" />
      
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : FADE_UP_VARIANTS.initial}
        whileInView={FADE_UP_VARIANTS.animate}
        viewport={{ once: true, margin: "-100px" }}
        transition={DEFAULT_TRANSITION}
      >
        <SectionHeader 
          eyebrow="Personal Story"
          className="!mb-12"
        />
        
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
    </SectionWrapper>
  );
};
