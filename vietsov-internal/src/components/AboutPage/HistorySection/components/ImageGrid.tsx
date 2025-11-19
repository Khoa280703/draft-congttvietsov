import React, { useState, useEffect } from "react";
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
  const [isQHD, setIsQHD] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsQHD(window.innerWidth >= 2560);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {/* Desktop Layout - Ẩn trên mobile */}
      <div
        className="hidden md:absolute md:top-0 md:bottom-0 md:flex md:items-center md:justify-end md:overflow-hidden"
        style={{
          right: isQHD ? "-8rem" : "-4rem", // QHD: xích qua phải để hình thứ 3 chỉ hiển thị 3/4
        }}
      >
        <div className="relative flex flex-col items-end pr-4 md:pr-5 lg:pr-6 laptop:pr-[1.25rem] fhd:pr-8 qhd:pr-12">
          {/* Image Cards - Luôn hiển thị grid 3 ảnh */}
          <div className="flex gap-3 md:gap-4 lg:gap-5 laptop:gap-[0.875rem] fhd:gap-7 qhd:gap-12 items-center relative mb-3 md:mb-4 laptop:mb-[0.875rem] fhd:mb-6 qhd:mb-7">
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
                    className={`flex-shrink-0 relative cursor-pointer ${
                      isActive
                        ? "w-[clamp(200px,18vw,360px)] laptop:w-[clamp(180px,16vw,320px)] qhd:w-[clamp(250px,22vw,420px)] h-[clamp(260px,24vw,480px)] laptop:h-[clamp(240px,22vw,420px)] qhd:h-[clamp(320px,30vw,560px)]"
                        : isThird
                        ? "w-[clamp(140px,12vw,240px)] laptop:w-[clamp(120px,10vw,200px)] qhd:w-[clamp(180px,16vw,320px)] h-[clamp(180px,16vw,320px)] laptop:h-[clamp(160px,14vw,280px)] qhd:h-[clamp(230px,21vw,420px)]"
                        : "w-[clamp(170px,15vw,300px)] laptop:w-[clamp(150px,13vw,260px)] qhd:w-[clamp(215px,19vw,380px)] h-[clamp(220px,20vw,400px)] laptop:h-[clamp(200px,18vw,360px)] qhd:h-[clamp(270px,25vw,500px)]"
                    }`}
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
                        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-3.5 laptop:p-[0.75rem] fhd:p-4.5 qhd:p-7 pb-4 md:pb-5 laptop:pb-[0.875rem] fhd:pb-7 qhd:pb-10 text-white">
                          <h3 className="text-sm md:text-base laptop:text-[0.875rem] fhd:text-xl qhd:text-2xl font-bold mb-0.5 md:mb-1 laptop:mb-[0.25rem] fhd:mb-2 qhd:mb-2.5">
                            {item.imageTitle}
                          </h3>
                          {item.imageSubtitle && (
                            <p className="text-[10px] md:text-xs laptop:text-[0.625rem] fhd:text-base qhd:text-lg text-white/80">
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
          <div className="flex items-center gap-3 md:gap-4 laptop:gap-[0.75rem] fhd:gap-6 qhd:gap-7 self-start mt-4 md:mt-5 lg:mt-6 laptop:mt-4 fhd:mt-8 qhd:mt-14">
            <button
              onClick={() => onNavigate("left")}
              className="w-8 h-8 md:w-9 md:h-9 laptop:w-8 laptop:h-8 fhd:w-12 fhd:h-12 qhd:w-[4.5rem] qhd:h-[4.5rem] rounded-full border border-white/80 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer text-white backdrop-blur-sm"
              aria-label="Previous image"
            >
              <HiArrowLeft className="w-3 h-3 md:w-4 md:h-4 laptop:w-[0.875rem] laptop:h-[0.875rem] fhd:w-5 fhd:h-5 qhd:w-7 qhd:h-7" />
            </button>
            <button
              onClick={() => onNavigate("right")}
              className="w-8 h-8 md:w-9 md:h-9 laptop:w-8 laptop:h-8 fhd:w-12 fhd:h-12 qhd:w-[4.5rem] qhd:h-[4.5rem] rounded-full border border-white/80 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer text-white backdrop-blur-sm"
              aria-label="Next image"
            >
              <HiArrowRight className="w-3 h-3 md:w-4 md:h-4 laptop:w-[0.875rem] laptop:h-[0.875rem] fhd:w-5 fhd:h-5 qhd:w-7 qhd:h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Chỉ hiển thị trên mobile */}
      <div className="block md:hidden w-full h-full flex items-center justify-center">
        {/* Mobile Image - Full size, aspect square */}
        <div className="relative w-full h-full max-w-[90vw] max-h-[90vw]">
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              {images.length > 0 && (
                <motion.div
                  key={`${images[0]?.id}-${activeEventIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <img
                    src={images[0]?.image}
                    alt={images[0]?.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold mb-1">
                      {images[0]?.imageTitle}
                    </h3>
                    {images[0]?.imageSubtitle && (
                      <p className="text-sm text-white/90">
                        {images[0]?.imageSubtitle}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Navigation Arrows - Overlay trên ảnh */}
          {images.length > 1 && (
            <div className="flex items-center justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-2 pointer-events-none">
              <button
                onClick={() => onNavigate("left")}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/30 transition-all pointer-events-auto"
                aria-label="Previous image"
              >
                <HiArrowLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => onNavigate("right")}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/30 transition-all pointer-events-auto"
                aria-label="Next image"
              >
                <HiArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>
          )}

          {/* Mobile Navigation - Dots indicator */}
          {images.length > 1 && (
            <div className="flex items-center justify-center gap-2 mt-0">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const targetYearIndex =
                      (activeYearIndex + index) % (images.length || 1);
                    onImageClick(targetYearIndex);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === 0
                      ? "bg-white w-8"
                      : "bg-white/40 w-2 hover:bg-white/60"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
