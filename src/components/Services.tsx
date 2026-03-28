import { motion, useReducedMotion } from "motion/react";
import { SERVICES } from "../data/services";
import { FADE_UP_VARIANTS, DEFAULT_TRANSITION } from "../constants/motion";
import { Icon } from "./ui/Icon";
import { SectionHeader } from "./ui/SectionHeader";
import { CardShell } from "./ui/CardShell";
import { SectionWrapper } from "./ui/SectionWrapper";

export const Services = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper id="services">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/[0.03] rounded-full blur-[120px] -z-10" />
      
      <motion.div
        variants={FADE_UP_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={DEFAULT_TRANSITION}
      >
        <SectionHeader 
          eyebrow="Expertise"
          title="Services"
          description="Specialized content creation designed to stop the scroll and drive growth."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, i) => {
            return (
              <motion.div 
                key={i}
                variants={FADE_UP_VARIANTS}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ 
                  ...DEFAULT_TRANSITION, 
                  delay: shouldReduceMotion ? 0 : i * 0.05 
                }}
              >
                <CardShell className="group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <Icon name={service.icon} className="w-6 h-6" />
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
                </CardShell>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
