import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { type TimelineEventItem } from "../data";

interface ImageGridProps {
  images: TimelineEventItem[];
  currentEvents: TimelineEventItem[];
  activeEventIndex: number;
  activeYearIndex: number;
  onImageClick: (yearIndex: number) => void;
  onNavigate: (direction: "left" | "right") => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  currentEvents,
  activeEventIndex,
  activeYearIndex,
  onImageClick,
  onNavigate,
}) => {
  const hasMultipleEvents = currentEvents.length > 1;

  return (
    <div className="absolute -right-22 top-0 bottom-0 flex items-center justify-end overflow-hidden">
      <div className="relative flex flex-col items-end pr-4 md:pr-6 lg:pr-8">
        {/* Image Cards - Luôn hiển thị grid 3 ảnh */}
        <div className="flex gap-4 md:gap-6 items-center relative mb-4">
          <AnimatePresence mode="popLayout">
            {images.map((item, index) => {
              const isActive = index === 0;
              const isThird = index === 2;

              // Chỉ card đầu tiên (active) có key phụ thuộc vào activeEventIndex khi năm có nhiều events
              // Các card khác có key cố định (chỉ phụ thuộc activeYearIndex) để không bị re-render khi chuyển event
              const imageKey =
                hasMultipleEvents && isActive
                  ? `${item.id}-${activeEventIndex}`
                  : `${item.id}-${activeYearIndex}`;

              return (
                <motion.div
                  key={imageKey}
                  className="flex-shrink-0 relative cursor-pointer"
                  initial={
                    hasMultipleEvents && isActive
                      ? { opacity: 0 }
                      : { opacity: 0, x: 100, scale: 0.8 }
                  }
                  animate={{
                    opacity: isThird ? 0.6 : 1,
                    x: 0,
                    scale: isActive ? 1 : isThird ? 0.75 : 0.85,
                  }}
                  exit={
                    hasMultipleEvents && isActive
                      ? { opacity: 0 }
                      : { opacity: 0, x: -100, scale: 0.8 }
                  }
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  style={{
                    width: isActive ? "360px" : isThird ? "260px" : "320px",
                    height: isActive ? "480px" : isThird ? "360px" : "400px",
                  }}
                  whileHover={{
                    scale: isActive ? 1.02 : isThird ? 0.77 : 0.87,
                  }}
                  onClick={() => onImageClick(activeYearIndex)}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    {!isThird && (
                      <div className="absolute bottom-0 left-0 right-0 p-4 pb-8 text-white">
                        <h3 className="text-base md:text-lg font-bold mb-1">
                          {item.imageTitle}
                        </h3>
                        {item.imageSubtitle && (
                          <p className="text-xs text-white/80">
                            {item.imageSubtitle}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows - Dưới grid, căn trái */}
        <div className="flex items-center gap-4 self-start mt-8 lg:mt-12">
          <button
            onClick={() => onNavigate("left")}
            className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer text-white backdrop-blur-sm"
            aria-label="Previous image"
          >
            <HiArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate("right")}
            className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer text-white backdrop-blur-sm"
            aria-label="Next image"
          >
            <HiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
