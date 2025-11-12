import { useEffect } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";

/**
 * Hook to enable smooth scroll using Lenis
 * Only applies to HomePage for parallax effect
 */
export const useSmoothScroll = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const lenis = new Lenis({
      duration: 2, // Duration for programmatic scroll (in seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      smoothWheel: true, // Enable smooth scroll for wheel events
      syncTouch: false, // Disable smooth touch (use native for better performance)
      touchMultiplier: 2, // Touch scroll speed multiplier
      wheelMultiplier: 1, // Wheel scroll speed multiplier
      lerp: 0.1, // Lower = smoother but slower, Higher = faster but less smooth
      infinite: false, // Disable infinite scroll
      autoResize: true, // Auto resize when content changes
    });

    // Request animation frame loop for smooth scrolling
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount or route change
    return () => {
      lenis.destroy();
    };
  }, [isHomePage]);
};
