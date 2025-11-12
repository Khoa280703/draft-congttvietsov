import { useEffect, useState } from "react";
import type { RefObject } from "react";

/**
 * Hook to calculate DotLine position - always positioned above title with a fixed offset
 */
export const useLinePosition = (
  titleRef: RefObject<HTMLElement | null> | null,
  containerRef: RefObject<HTMLElement | null>,
  offset: number = 120
) => {
  const [lineTop, setLineTop] = useState(0);

  useEffect(() => {
    const updateLinePosition = () => {
      if (!titleRef || !titleRef.current || !containerRef.current) return;

      const titleRect = titleRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      // Position DotLine above title with fixed offset
      const titleTop = titleRect.top - containerRect.top;
      setLineTop(titleTop - offset);
    };

    updateLinePosition();
    window.addEventListener("resize", updateLinePosition);
    return () => {
      window.removeEventListener("resize", updateLinePosition);
    };
  }, [titleRef, containerRef, offset]);

  return lineTop;
};
