import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const ANIMATION_CONFIG = {
  duration: 0.8,
  ease: "easeOut" as const,
  titleDelay: 0.2,
  descriptionDelay: 0.3,
  linkDelay: 0.5,
  staggerDelay: 0.1,
} as const;
