import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { HERO_ASSETS } from "../data/hero";
import { FADE_UP_VARIANTS, SCALE_VARIANTS, DEFAULT_TRANSITION } from "../constants/motion";

import { Button } from "./ui/Button";
import { PillLabel } from "./ui/PillLabel";
import { SafeImage } from "./ui/SafeImage";

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 md:pt-32 md:pb-20 px-6 overflow-hidden">
      {/* Background: Clean Dark Aesthetic */}
      <div className="absolute inset-0 -z-10 bg-black">
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
      
      <div className="section-container grid lg:grid-cols-2 gap-12 md:gap-16 items-center z-10">
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 0 } : FADE_UP_VARIANTS.initial}
          animate={FADE_UP_VARIANTS.animate}
          transition={DEFAULT_TRANSITION}
          className="text-left"
        >
          <PillLabel className="mb-8 md:mb-12">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for selected projects
          </PillLabel>
          
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter text-gradient mb-6 md:mb-8 leading-[1.1] md:leading-[1]">
            I create social media <br />
            <span className="text-white">content that sells.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-text-secondary max-w-xl mb-10 md:mb-12 leading-relaxed font-medium">
            Graphics, video and AI content for brands that want to grow. <br className="hidden md:block" />
            <span className="text-white/80">10+ years of experience in design and digital content.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
            <Button href="#contact" variant="primary">
              Let's talk <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="#work" variant="secondary">
              View Work
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : SCALE_VARIANTS.initial}
          animate={SCALE_VARIANTS.animate}
          transition={{ ...DEFAULT_TRANSITION, delay: 0.1 }}
          className="relative hidden lg:block"
        >
          {/* Premium Editorial Visual Layout */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Main Dominant Visual */}
            <motion.div 
              animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 z-10 rounded-[48px] overflow-hidden border border-white/10 shadow-2xl"
            >
              <SafeImage 
                src={HERO_ASSETS.main} 
                alt="Juraj Žáček - Main Portfolio Visual showcasing creative design work" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                loading="eager"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            {/* Supporting Card 1 */}
            <motion.div 
              animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-12 -right-12 w-48 aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-xl z-20 hidden xl:block"
            >
              <SafeImage 
                src={HERO_ASSETS.supporting1} 
                alt="Creative social media content example - Supporting visual" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                loading="eager"
                containerClassName="w-full h-full"
              />
            </motion.div>

            {/* Supporting Card 2 */}
            <motion.div 
              animate={shouldReduceMotion ? {} : { x: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-12 w-56 aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-xl z-20 hidden xl:block"
            >
              <SafeImage 
                src={HERO_ASSETS.supporting2} 
                alt="Digital advertising content example - Supporting visual" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                loading="eager"
                containerClassName="w-full h-full"
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
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
};
