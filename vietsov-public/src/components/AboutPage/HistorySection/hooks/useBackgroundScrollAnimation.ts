import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

interface UseBackgroundScrollAnimationProps {
  expandThreshold?: number;
}

export const useBackgroundScrollAnimation = ({
  expandThreshold = 0.3,
}: UseBackgroundScrollAnimationProps = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Opacity animation - fade in khi scroll đến
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, expandThreshold, 1],
    [0, 0.3, 1, 1]
  );

  // Scale animation - expand để chiếm full screen
  const scale = useTransform(
    scrollYProgress,
    [0, expandThreshold, 0.7, 1],
    [0.8, 1, 1.1, 1.2]
  );

  // Blur effect - giảm blur khi scroll
  const blur = useTransform(
    scrollYProgress,
    [0, expandThreshold, 1],
    [10, 5, 0]
  );

  // Parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return {
    containerRef,
    opacity,
    scale,
    blur,
    y,
  };
};
