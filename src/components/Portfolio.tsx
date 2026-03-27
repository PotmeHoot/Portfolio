import { useState, useEffect, useRef, memo, useCallback } from "react";
import { motion, useReducedMotion } from "motion/react";
import { PROJECTS } from "../data/projects";
import { CLIENTS } from "../data/clients";
import { FADE_UP_VARIANTS, DEFAULT_TRANSITION } from "../constants/motion";
import { Project } from "../types";

interface ProjectPreviewProps {
  item: Project;
  isActive: boolean;
  shouldReduceMotion: boolean;
}

const ProjectPreview = memo(({ item, isActive, shouldReduceMotion }: ProjectPreviewProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<any>(null);

  const previewImages = [item.poster, ...(item.previewImages || [])];

  useEffect(() => {
    if (isActive && !item.hasVideoPreview && previewImages.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % previewImages.length);
      }, 3000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setCurrentImageIndex(0);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive, item.hasVideoPreview, previewImages.length]);

  useEffect(() => {
    let timeout: any;
    if (videoRef.current) {
      if (isActive) {
        timeout = setTimeout(() => {
          videoRef.current?.play().catch(() => {});
          setIsVideoPlaying(true);
        }, 3000);
      } else {
        if (timeout) clearTimeout(timeout);
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsVideoPlaying(false);
      }
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isActive]);

  return (
    <div className="absolute inset-0 z-10 overflow-hidden">
      {item.hasVideoPreview && item.previewVideo && (
        <motion.video
          ref={videoRef}
          src={item.previewVideo}
          loop
          muted
          playsInline
          preload="none"
          initial={{ opacity: 0, filter: "blur(0px)" }}
          animate={{ 
            opacity: isVideoPlaying ? 1 : 0,
            filter: isVideoPlaying ? ["blur(4px)", "blur(0px)"] : "blur(0px)"
          }}
          transition={{ 
            opacity: { duration: 0.5 },
            filter: { duration: 0.4 }
          }}
          style={{ willChange: "opacity, filter" }}
          className="w-full h-full object-cover"
        />
      )}
      
      {/* Poster / Image Sequence Slider */}
      <motion.div 
        className="absolute inset-0 flex h-full"
        initial={false}
        animate={{ 
          x: `-${currentImageIndex * 100}%`,
          opacity: isVideoPlaying ? 0 : 1,
          filter: [
            "blur(0px) brightness(1)",
            "blur(4px) brightness(1.02)",
            "blur(0px) brightness(1)"
          ],
          scale: [1, 1.005, 1]
        }}
        style={{ willChange: "transform, opacity, filter" }}
        transition={{ 
          x: { 
            duration: shouldReduceMotion ? 0 : 0.4, 
            ease: "easeInOut" 
          },
          opacity: { duration: 0.5 },
          filter: { 
            duration: shouldReduceMotion ? 0 : 0.4, 
            times: [0, 0.5, 1] 
          },
          scale: { 
            duration: shouldReduceMotion ? 0 : 0.4, 
            times: [0, 0.5, 1] 
          }
        }}
      >
        {previewImages.map((src, idx) => (
          <img 
            key={idx}
            src={src} 
            alt={`${item.title} - Preview ${idx + 1}`} 
            className="min-w-full flex-shrink-0 h-full object-cover grayscale-[0.6] group-hover:grayscale-0 transition-all duration-700 scale-[1.02] group-hover:scale-100 linear"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        ))}
      </motion.div>
    </div>
  );
});

ProjectPreview.displayName = "ProjectPreview";

interface ProjectCardProps {
  item: Project;
  index: number;
}

const ProjectCard = memo(({ item, index }: ProjectCardProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (window.matchMedia("(hover: hover)").matches) {
      setIsActive(true);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (window.matchMedia("(hover: hover)").matches) {
      setIsActive(false);
    }
  }, []);

  const handleClick = useCallback(() => {
    if (!window.matchMedia("(hover: hover)").matches) {
      setIsActive(prev => !prev);
    }
  }, []);

  return (
    <motion.article 
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ...DEFAULT_TRANSITION, delay: shouldReduceMotion ? 0 : index * 0.05 }}
      className="group relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden border border-white/5 bg-white/5 transition-all duration-700 group-hover:border-white/10 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] cursor-pointer">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 z-20" />
        
        {/* Media Container */}
        <ProjectPreview 
          item={item} 
          isActive={isActive} 
          shouldReduceMotion={shouldReduceMotion ?? false} 
        />

        {/* Light Sweep Effect */}
        <motion.div
          key={isActive ? "active" : "inactive"}
          initial={{ x: "-150%", skewX: -20 }}
          animate={isActive ? { x: "150%" } : { x: "-150%" }}
          transition={isActive ? { 
            duration: 0.8, 
            ease: [0.43, 0.13, 0.23, 0.96] 
          } : { duration: 0 }}
          className="absolute inset-0 z-25 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
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
      </div>
    </motion.article>
  );
});

ProjectCard.displayName = "ProjectCard";

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
            <ProjectCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
