import { motion, useReducedMotion } from "motion/react";
import { Layout, Smartphone, Sparkles, Wand2 } from "lucide-react";
import { SERVICES } from "../data/services";
import { FADE_UP_VARIANTS, DEFAULT_TRANSITION } from "../constants/motion";

const IconMap: Record<string, any> = {
  Layout,
  Smartphone,
  Sparkles,
  Wand2
};

export const Services = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="section-padding px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/[0.03] rounded-full blur-[120px] -z-10" />
      
      <div className="section-container">
        <motion.div
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={DEFAULT_TRANSITION}
        >
          <div className="mb-20 md:mb-32 text-center">
            <div className="section-eyebrow justify-center">Expertise</div>
            <h2 className="section-title">Services</h2>
            <p className="section-description mx-auto">
              Specialized content creation designed to stop the scroll and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SERVICES.map((service, i) => {
              const Icon = IconMap[service.icon];
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
                  className="card-glass group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    {Icon && <Icon className="w-6 h-6" />}
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
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
