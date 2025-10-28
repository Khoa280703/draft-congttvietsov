import { useEffect, useRef } from "react";

interface UseElementAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationClass?: string;
  delay?: number;
}

export const useElementAnimation = (
  options: UseElementAnimationOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
    // animationClass = "animate-fadeInUp",
    delay = 0,
  } = options;

  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Add initial animation state
    element.classList.add(
      "opacity-0",
      "translate-y-8",
      "transition-all",
      "duration-600",
      "ease-out"
    );
    element.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove("opacity-0", "translate-y-8");
          element.classList.add("opacity-100", "translate-y-0");

          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          element.classList.add("opacity-0", "translate-y-8");
          element.classList.remove("opacity-100", "translate-y-0");
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return ref;
};

export default useElementAnimation;
