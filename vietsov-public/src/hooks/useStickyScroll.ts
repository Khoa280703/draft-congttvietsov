import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

interface UseStickyScrollOptions {
  /**
   * Default height để tránh giật khi page mới load
   * @default 600
   */
  defaultHeight?: number;
  /**
   * Delay (ms) để đảm bảo DOM đã render trước khi tính toán
   * @default 100
   */
  initDelay?: number;
  /**
   * Offset cho useScroll
   * @default ["start end", "end start"]
   */
  offset?: [string, string];
  /**
   * Transform range cho y transform
   * @default { start: 0, mid: -15, end: -30 }
   */
  transformRange?: {
    start: number;
    mid: number;
    end: number;
  };
  /**
   * Opacity range
   * @default { input: [0, 0.3, 0.8, 1], output: [1, 1, 1, 0.7] }
   */
  opacityRange?: {
    input: number[];
    output: number[];
  };
  /**
   * Margin multiplier cho nextSectionMargin
   * @default { mid: -0.15, end: -0.3 }
   */
  marginMultiplier?: {
    mid: number;
    end: number;
  };
}

interface UseStickyScrollReturn {
  /**
   * Ref cần attach vào motion.div sticky
   */
  ref: React.RefObject<HTMLDivElement | null>;
  /**
   * Transform y cho motion.div
   */
  y: any;
  /**
   * Opacity cho motion.div
   */
  opacity: any;
  /**
   * Negative margin cho section tiếp theo
   */
  nextSectionMargin: any;
  /**
   * Chiều cao của section (để tính minHeight cho wrapper)
   */
  sectionHeight: number;
  /**
   * Đã initialized chưa
   */
  isInitialized: boolean;
  /**
   * MinHeight cho wrapper div
   */
  wrapperMinHeight: number;
}

/**
 * Hook để tạo sticky scroll effect với parallax transform
 * Sử dụng cho các section sticky với hiệu ứng parallax khi scroll
 *
 * @example
 * ```tsx
 * const { ref, y, opacity, nextSectionMargin, wrapperMinHeight } = useStickyScroll();
 *
 * return (
 *   <div style={{ minHeight: `${wrapperMinHeight}px` }}>
 *     <motion.div ref={ref} style={{ y, opacity }}>
 *       Content here
 *     </motion.div>
 *     <motion.div style={{ marginTop: nextSectionMargin }}>
 *       Next section here
 *     </motion.div>
 *   </div>
 * );
 * ```
 */
export const useStickyScroll = (
  options: UseStickyScrollOptions = {}
): UseStickyScrollReturn => {
  const {
    defaultHeight = 600,
    initDelay = 100,
    offset = ["start end", "end start"],
    transformRange = { start: 0, mid: -15, end: -30 },
    opacityRange = {
      input: [0, 0.3, 0.8, 1],
      output: [1, 1, 1, 0.7],
    },
    marginMultiplier = { mid: -0.15, end: -0.3 },
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState(defaultHeight);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const height = ref.current.offsetHeight;
        setSectionHeight(height);
        setIsInitialized(true);
      }
    };

    // Delay để đảm bảo DOM đã render
    const timer = setTimeout(() => {
      updateHeight();
    }, initDelay);

    window.addEventListener("resize", updateHeight);

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateHeight);
      resizeObserver.disconnect();
    };
  }, [initDelay]);

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });

  // Transform với range mượt mà hơn
  // Chỉ apply khi đã initialized để tránh giật
  // Giới hạn transform để không che mất nội dung phía trên
  const y = useTransform(scrollYProgress, (value) => {
    if (!isInitialized) return "0%";
    const progress = value;
    if (progress <= 0) return "0%";
    // Chỉ bắt đầu transform khi scroll đã đủ xa (progress > 0.1)
    // để tránh che mất nội dung phía trên
    if (progress <= 0.1) return "0%";
    const adjustedProgress = (progress - 0.1) / 0.9; // Normalize từ 0.1 -> 1 thành 0 -> 1
    if (adjustedProgress <= 0.5) {
      // Map từ 0 -> 0.5 thành start -> mid
      return `${(adjustedProgress / 0.5) * transformRange.mid}%`;
    }
    // Map từ 0.5 -> 1 thành mid -> end
    return `${
      transformRange.mid +
      ((adjustedProgress - 0.5) / 0.5) *
        (transformRange.end - transformRange.mid)
    }%`;
  });

  const opacity = useTransform(
    scrollYProgress,
    opacityRange.input,
    opacityRange.output
  );

  // Negative margin để các section sau không bị khoảng trống
  // Chỉ apply khi đã initialized
  const nextSectionMargin = useTransform(scrollYProgress, (value) => {
    if (!isInitialized) return 0;
    const progress = value;
    if (progress <= 0) return 0;
    if (progress <= 0.5) {
      return sectionHeight * marginMultiplier.mid * (progress / 0.5);
    }
    return (
      sectionHeight * marginMultiplier.mid +
      sectionHeight *
        (marginMultiplier.end - marginMultiplier.mid) *
        ((progress - 0.5) / 0.5)
    );
  });

  const wrapperMinHeight = Math.min(
    Math.max(defaultHeight, sectionHeight * 1.2),
    sectionHeight
  );

  return {
    ref,
    y,
    opacity,
    nextSectionMargin,
    sectionHeight,
    isInitialized,
    wrapperMinHeight,
  };
};
