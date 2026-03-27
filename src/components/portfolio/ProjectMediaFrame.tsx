import { motion } from "motion/react";

interface ProjectMediaFrameProps {
  poster: string;
  title: string;
  isIdle: boolean;
  isActive: boolean;
}

export const ProjectMediaFrame = ({ poster, title, isIdle, isActive }: ProjectMediaFrameProps) => {
  return (
    <motion.img
      src={poster}
      alt={title}
      initial={false}
      animate={{ 
        opacity: isIdle ? 1 : 0,
        scale: isActive ? 1 : 1.02,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute inset-0 w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 transition-all duration-700 z-10"
      referrerPolicy="no-referrer"
    />
  );
};
