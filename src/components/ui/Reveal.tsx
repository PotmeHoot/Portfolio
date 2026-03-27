import { ReactNode } from "react";
import { motion, useReducedMotion, Variants, Transition } from "motion/react";
import { FADE_UP_VARIANTS, DEFAULT_TRANSITION } from "../../constants/motion";
import { cn } from "../../lib/utils";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  transition?: Transition;
  delay?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}

export const Reveal = ({
  children,
  variants = FADE_UP_VARIANTS,
  transition = DEFAULT_TRANSITION,
  delay = 0,
  className,
  viewportMargin = "-100px",
  once = true,
}: RevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : variants.initial}
      whileInView={variants.animate}
      viewport={{ once, margin: viewportMargin }}
      transition={{ ...transition, delay: shouldReduceMotion ? 0 : delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
