import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  glowColor?: "blue" | "purple" | "white";
  glowPosition?: "top" | "center" | "bottom" | "left" | "right";
  showGlow?: boolean;
}

export const SectionWrapper = ({
  id,
  children,
  className,
  containerClassName,
  glowColor = "blue",
  glowPosition = "center",
  showGlow = true,
}: SectionWrapperProps) => {
  const glowColors = {
    blue: "bg-blue-500/5",
    purple: "bg-purple-500/5",
    white: "bg-white/5",
  };

  const glowPositions = {
    top: "top-0 left-1/2 -translate-x-1/2",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    bottom: "bottom-0 left-1/2 -translate-x-1/2",
    left: "top-1/2 left-0 -translate-y-1/2",
    right: "top-1/2 right-0 -translate-y-1/2",
  };

  return (
    <section 
      id={id} 
      className={cn("section-padding px-6 relative overflow-hidden", className)}
    >
      {showGlow && (
        <div 
          className={cn(
            "absolute w-[800px] h-[800px] rounded-full blur-[120px] -z-10 pointer-events-none",
            glowColors[glowColor],
            glowPositions[glowPosition]
          )} 
        />
      )}
      
      <div className={cn("section-container", containerClassName)}>
        {children}
      </div>
    </section>
  );
};
