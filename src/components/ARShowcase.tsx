import { motion, useReducedMotion } from "motion/react";
import { Sparkles, Instagram, Video, QrCode } from "lucide-react";
import { AR_FILTERS } from "../data/arFilters";
import { FADE_UP_VARIANTS, SCALE_VARIANTS, DEFAULT_TRANSITION } from "../constants/motion";
import { PillLabel } from "./ui/PillLabel";
import { SafeImage } from "./ui/SafeImage";

export const ARShowcase = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="ar-filters" className="section-padding px-6 relative overflow-hidden bg-gradient-to-b from-[#080808] to-black">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-purple-500/5 rounded-full blur-[120px] -z-10" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={DEFAULT_TRANSITION}
          >
            <PillLabel className="bg-purple-500/10 border-purple-500/20 text-purple-400 mb-6">
              <Sparkles className="w-3 h-3" />
              Interactive Tech
            </PillLabel>
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 tracking-tight">AR Filters.</h2>
            <p className="section-description mb-8">
              Interactive AR filters for Instagram and TikTok. Combining graphic design with interactive technology to create engaging experiences that stop the scroll.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 text-white/60">
                <Instagram className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">Instagram</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Video className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">TikTok</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : SCALE_VARIANTS.initial}
            whileInView={SCALE_VARIANTS.animate}
            viewport={{ once: true }}
            transition={DEFAULT_TRANSITION}
            className="grid grid-cols-2 gap-4"
          >
            {AR_FILTERS.map((filter, i) => (
              <div key={i} className="relative aspect-[2/3] card-base card-hover group">
                <SafeImage 
                  src={filter.img} 
                  alt={`${filter.title} AR filter for ${filter.platform}`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  loading="lazy"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-[8px] uppercase tracking-widest font-bold text-white/40 mb-1">{filter.platform}</div>
                  <div className="text-sm font-bold">{filter.title}</div>
                </div>
                {/* QR Code Overlay Placeholder */}
                <div className="absolute top-4 right-4 w-10 h-10 glass rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <QrCode className="w-5 h-5 text-white/60" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Horizontal Feature List */}
        <div className="grid md:grid-cols-3 gap-8 border-t border-white/5 pt-16">
          {[
            { title: "Spark AR", desc: "Expert development for Meta platforms (Instagram & Facebook)." },
            { title: "Effect House", desc: "Advanced TikTok filter creation with high viral potential." },
            { title: "3D Integration", desc: "Seamlessly blending 3D assets into real-world environments." }
          ].map((feat, i) => (
            <div key={i}>
              <h3 className="text-lg font-bold mb-2 text-purple-400">{feat.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
