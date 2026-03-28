import { motion } from "motion/react";
import { RefObject } from "react";

interface VideoPreviewProps {
  src: string;
  isVisible: boolean;
  onLoadedMetadata: () => void;
  onError: () => void;
  videoRef: RefObject<HTMLVideoElement | null>;
}

export const VideoPreview = ({
  src,
  isVisible,
  onLoadedMetadata,
  onError,
  videoRef,
}: VideoPreviewProps) => {
  return (
    <motion.video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      preload="auto"
      onLoadedMetadata={onLoadedMetadata}
      onError={onError}
      initial={{ opacity: 0, filter: "blur(0px)" }}
      animate={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? ["blur(4px)", "blur(0px)"] : "blur(0px)",
      }}
      transition={{
        opacity: { duration: 0.5 },
        filter: { duration: 0.4 },
      }}
      style={{ 
        willChange: "opacity, filter",
        // Prevent broken video icon from showing
        backgroundColor: "transparent" 
      }}
      className="w-full h-full object-cover"
    />
  );
};
