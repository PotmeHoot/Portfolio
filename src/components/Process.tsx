import { motion, useReducedMotion } from "motion/react";
import { PROCESS_STEPS } from "../data/process";
import { FADE_UP_VARIANTS, DEFAULT_TRANSITION } from "../constants/motion";

export const Process = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="process" className="py-16 md:py-20 px-6 border-t border-white/5">
      <div className="section-container">
        <motion.div 
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={DEFAULT_TRANSITION}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12"
        >
          <div className="shrink-0">
            <div className="section-eyebrow">
              <div className="section-eyebrow-line" />
              Process
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight max-w-[200px]">How we work.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 flex-1">
            {PROCESS_STEPS.map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-[10px] font-bold text-white/10 mb-2 group-hover:text-white/30 transition-colors">{item.step}</div>
                <h3 className="text-sm font-bold mb-1">{item.title}</h3>
                <p className="text-[11px] text-text-muted leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
