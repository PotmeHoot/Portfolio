import { motion } from "motion/react";

interface ImagePreviewProps {
  images: string[];
  activeSegmentIndex: number;
  isVisible: boolean;
  shouldReduceMotion: boolean;
  projectTitle: string;
}

export const ImagePreview = ({
  images,
  activeSegmentIndex,
  isVisible,
  shouldReduceMotion,
  projectTitle,
}: ImagePreviewProps) => {
  if (images.length === 0) return null;

  return (
    <div className="absolute inset-0">
      {images.map((src, idx) => (
        <motion.img
          key={idx}
          src={src}
          alt={`${projectTitle} - Preview ${idx + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading={idx === 0 ? "eager" : "lazy"}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{
            opacity: isVisible && idx === activeSegmentIndex ? 1 : 0,
            scale: isVisible && idx === activeSegmentIndex ? 1 : 1.03,
          }}
          transition={{
            opacity: {
              duration: idx === 0 && activeSegmentIndex === 0 ? 0.4 : 1,
              ease: [0.22, 1, 0.36, 1],
            },
            scale: {
              duration: shouldReduceMotion ? 0 : 1,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          style={{ willChange: "opacity, transform" }}
          referrerPolicy="no-referrer"
        />
      ))}
    </div>
  );
};
