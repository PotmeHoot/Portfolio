import { motion, useReducedMotion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { PRICING_PACKAGES } from "../data/pricing";
import { FADE_UP_VARIANTS, DEFAULT_TRANSITION } from "../constants/motion";

export const Pricing = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="pricing" className="section-padding px-6 bg-bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="section-container">
        <motion.div
          variants={FADE_UP_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={DEFAULT_TRANSITION}
        >
          <div className="mb-16 md:mb-24 text-center">
            <div className="section-eyebrow justify-center">Investment</div>
            <h2 className="section-title">Pricing</h2>
            <p className="section-description mx-auto">
              Simple and flexible packages built for brands that want to grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRICING_PACKAGES.map((pkg, i) => (
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
};
