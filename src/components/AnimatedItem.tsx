import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn";
  delay?: number;
  duration?: number;
  threshold?: number;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  duration = 600,
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const getAnimationClasses = () => {
    const baseClasses = "transition-all ease-out";
    const durationClass = `duration-${duration}`;

    if (!isVisible) {
      switch (animation) {
        case "fadeInUp":
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`;
        case "fadeInLeft":
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`;
        case "fadeInRight":
          return `${baseClasses} ${durationClass} opacity-0 translate-x-8`;
        case "fadeIn":
          return `${baseClasses} ${durationClass} opacity-0`;
        case "scaleIn":
          return `${baseClasses} ${durationClass} opacity-0 scale-95`;
        default:
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`;
      }
    }

    return `${baseClasses} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedItem;
