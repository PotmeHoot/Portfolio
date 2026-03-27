import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { FADE_UP_VARIANTS, DEFAULT_TRANSITION } from "../constants/motion";
import { Button } from "./ui/Button";
import { PillLabel } from "./ui/PillLabel";

export const Contact = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="section-padding px-6 relative overflow-hidden">
      {/* Subtle Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square bg-white/[0.02] rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : FADE_UP_VARIANTS.initial}
          whileInView={FADE_UP_VARIANTS.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={DEFAULT_TRANSITION}
        >
          <PillLabel className="mb-8">
            <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
            Available for selected projects
          </PillLabel>

          <h2 className="section-title">
            Let's create <br className="hidden md:block" />
            something <span className="text-white/40">iconic.</span>
          </h2>
          
          <div className="flex flex-col items-center gap-16 md:gap-24">
            {/* Primary Dominant CTA */}
            <Button 
              href="mailto:jurajzacek13@gmail.com" 
              variant="primary"
              className="!text-xl md:!text-4xl !px-8 md:!px-16 !py-5 md:!py-8 !rounded-[24px] md:!rounded-[48px]"
            >
              Start a project <ArrowRight className="ml-4 w-6 h-6 md:w-10 md:h-10 group-hover:translate-x-2 transition-transform" />
            </Button>

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
                  <span className="text-sm md:text-base font-bold text-white/20 cursor-default uppercase tracking-widest" aria-label="Instagram profile coming soon">Instagram</span>
                  <span className="text-sm md:text-base font-bold text-white/20 cursor-default uppercase tracking-widest" aria-label="LinkedIn profile coming soon">LinkedIn</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
