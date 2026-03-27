import { useState, memo, useCallback } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Project } from "../../types";
import { DEFAULT_TRANSITION } from "../../constants/motion";
import { useProjectPreviewLoop } from "../../hooks/useProjectPreviewLoop";
import { ProjectMediaFrame } from "./ProjectMediaFrame";
import { ProjectInteractionPreview } from "./ProjectInteractionPreview";
import { ProjectTimelineOverlay } from "./ProjectTimelineOverlay";
import { ProjectMetaOverlay } from "./ProjectMetaOverlay";

interface ProjectCardProps {
  item: Project;
  index: number;
}

export const ProjectCard = memo(({ item, index }: ProjectCardProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [isActive, setIsActive] = useState(false);

  // 1. Centralized Preview State
  const {
    activeSegmentIndex,
    activeSegmentProgress,
    videoDuration,
    videoRef,
    handleLoadedMetadata,
    handleVideoError,
    isVideoActive,
    isImageSequenceActive,
    isIdle,
    previewImages
  } = useProjectPreviewLoop(item, isActive);

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
      <div className="relative aspect-[4/5] card-base group-hover:border-white/20 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] cursor-pointer">
        
        {/* Layer 1: Media Frame (Static Poster) */}
        <ProjectMediaFrame 
          poster={item.poster} 
          title={item.title} 
          isIdle={isIdle} 
          isActive={isActive} 
        />

        {/* Layer 2: Interaction Preview Layer (Images/Videos) */}
        <ProjectInteractionPreview 
          item={item}
          isImageSequenceActive={isImageSequenceActive}
          isVideoActive={isVideoActive}
          activeSegmentIndex={activeSegmentIndex}
          shouldReduceMotion={shouldReduceMotion ?? false}
          videoRef={videoRef}
          handleLoadedMetadata={handleLoadedMetadata}
          handleVideoError={handleVideoError}
        />

        {/* Layer 3: Timeline Overlay Layer (Progress) */}
        <ProjectTimelineOverlay 
          isImageSequenceActive={isImageSequenceActive}
          isVideoActive={isVideoActive}
          previewImages={previewImages}
          activeSegmentIndex={activeSegmentIndex}
          activeSegmentProgress={activeSegmentProgress}
          videoDuration={videoDuration}
        />

        {/* Layer 4: Visual Effects Layer (Gradient & Sweep) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 z-20 pointer-events-none" />
        
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

        {/* Layer 5: Text/Meta Overlay Layer */}
        <ProjectMetaOverlay
          category={item.category}
          title={item.title}
          description={item.description}
        />
      </div>
    </motion.article>
  );
});

ProjectCard.displayName = "ProjectCard";
