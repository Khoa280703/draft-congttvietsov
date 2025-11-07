import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import {
  type FullScreenBackgroundImageProps,
  defaultFullScreenBackgroundImageData,
} from "./data";

// Custom Text Morphing Component
interface TextMorphingProps {
  text: string;
  morphKey: string | number;
  className?: string;
}

const TextMorphing: React.FC<TextMorphingProps> = ({
  text,
  morphKey,
  className = "",
}) => {
  const [prevText, setPrevText] = useState(text);
  const [isScattering, setIsScattering] = useState(false);

  useEffect(() => {
    if (prevText !== text) {
      // Bắt đầu scatter text cũ
      setIsScattering(true);
      // Sau khi scatter xong, bắt đầu assemble text mới
      const scatterTimeout = setTimeout(() => {
        setIsScattering(false);
        setPrevText(text);
      }, 500);
      return () => clearTimeout(scatterTimeout);
    }
  }, [text, prevText]);

  // Tạo random values cho mỗi ký tự (cố định dựa trên morphKey và index)
  const getRandomValues = (index: number) => {
    const seed = (morphKey as number) * 1000 + index;
    // Tạo pseudo-random number từ seed
    const random = (offset: number = 0) => {
      const value = Math.sin((seed + offset) * 12.9898) * 43758.5453;
      return value - Math.floor(value);
    };
    // Random delay nhỏ để tạo hiệu ứng tự nhiên hơn (0-0.1s)
    const randomDelay = random(10) * 0.1;
    return {
      x: (random(0) - 0.5) * 400,
      y: (random(1) - 0.5) * 400,
      rotate: (random(2) - 0.5) * 1080,
      delay: randomDelay,
    };
  };

  // Tách text thành các ký tự
  const currentChars = isScattering ? prevText.split("") : text.split("");

  return (
    <span className={`inline-block ${className}`}>
      {currentChars.map((char, index) => {
        const isSpace = char === " ";
        const randomValues = getRandomValues(index);

        return (
          <motion.span
            key={`${morphKey}-${index}-${char}-${
              isScattering ? "scatter" : "assemble"
            }`}
            className="inline-block"
            initial={
              isScattering
                ? {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                  }
                : {
                    opacity: 0,
                    x: randomValues.x,
                    y: randomValues.y,
                    rotate: randomValues.rotate,
                    scale: 0.5,
                  }
            }
            animate={
              isScattering
                ? {
                    opacity: 0,
                    x: randomValues.x,
                    y: randomValues.y,
                    rotate: randomValues.rotate,
                    scale: 0.3,
                  }
                : {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                  }
            }
            transition={{
              duration: isScattering ? 0.6 : 0.8,
              ease: isScattering
                ? [0.4, 0, 0.2, 1] // Ease out cho scatter
                : [0.34, 1.56, 0.64, 1], // Elastic ease cho assemble (tạo hiệu ứng "bounce")
              delay: randomValues.delay, // Random delay nhỏ để tự nhiên hơn
            }}
          >
            {isSpace ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </span>
  );
};

const FullScreenBackgroundImage: React.FC<FullScreenBackgroundImageProps> = ({
  image,
  alt = "Background image",
  className = "",
  containerClassName = "",
  animationDuration = 1.2,
  expandThreshold = 0.3,
  data = defaultFullScreenBackgroundImageData,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Mỗi timeline item tương ứng với 1 image card và 1 content item
  // activeIndex đồng bộ cho cả timeline, content và images

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

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  // Navigation functions for images - đồng bộ với timeline
  const navigateImages = (direction: "left" | "right") => {
    if (!data) return;
    const total = Math.min(
      data.timelineItems.length,
      data.contentItems.length,
      data.imageCards.length
    );

    if (direction === "left") {
      setActiveIndex(activeIndex > 0 ? activeIndex - 1 : total - 1);
    } else {
      setActiveIndex(activeIndex < total - 1 ? activeIndex + 1 : 0);
    }
  };

  const currentContent = data?.contentItems[activeIndex];

  const getVisibleImages = () => {
    if (!data) return [];
    const total = Math.min(
      data.timelineItems.length,
      data.contentItems.length,
      data.imageCards.length
    );
    if (total <= 2) return data.imageCards;

    // Always show active image first (leftmost), then next, then next+1
    // Ảnh active luôn ở vị trí đầu tiên (ngoài rìa bên trái)
    const getNextIndex = (current: number, offset: number) => {
      return (current + offset) % total;
    };

    return [
      data.imageCards[activeIndex], // Active image - luôn ở vị trí đầu
      data.imageCards[getNextIndex(activeIndex, 1)], // Next image
      data.imageCards[getNextIndex(activeIndex, 2)], // Next+1 image (bị cắt)
    ];
  };

  const visibleImages = getVisibleImages();

  return (
    <div
      ref={containerRef}
      className={`relative w-full min-h-[100vh] overflow-hidden ${containerClassName}`}
    >
      {/* Sticky container để ảnh cố định khi scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          className={`absolute inset-0 w-full h-full ${className}`}
          style={{
            opacity,
            scale,
            filter: `blur(${blur}px)`,
            y,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: animationDuration, ease: "easeOut" }}
        >
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
            style={{
              objectPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        {/* Content Overlay */}
        {data && (
          <div className="relative z-10 h-full flex items-center w-full">
            {/* Left: Timeline and Content */}
            <div className="container px-4 md:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-start w-4/6">
                <div className="col-span-1 flex flex-col items-center justify-center h-full min-h-[600px]">
                  <div className="relative flex flex-col items-center justify-center h-full">
                    <div className="absolute top-0 bottom-0 w-0.5 bg-white" />
                    {data.timelineItems.map((item, index) => {
                      const isActive = activeIndex === index;
                      const totalItems = data.timelineItems.length;
                      const spacing = 100 / (totalItems - 1 || 1);
                      const topPosition = index * spacing;

                      return (
                        <motion.button
                          key={item.id}
                          onClick={() => setActiveIndex(index)}
                          className="absolute z-10 transition-all duration-300 cursor-pointer group"
                          style={{
                            top: `${topPosition}%`,
                            transform: "translateY(-50%)",
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: isActive ? 1 : 0.4,
                            scale: isActive ? 1 : 0.7,
                          }}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex flex-col items-center">
                            <div
                              className={`rounded-full bg-white transition-all duration-300 ${
                                isActive
                                  ? "w-6 h-6 md:w-8 md:h-8 shadow-lg shadow-white/50"
                                  : "w-3 h-3 md:w-4 md:h-4"
                              }`}
                            />
                            {/* Year Label */}
                            <motion.span
                              className={`text-white text-xs md:text-sm font-semibold mt-2 whitespace-nowrap ${
                                isActive ? "opacity-100" : "opacity-0"
                              }`}
                              initial={{ opacity: 0 }}
                              animate={{
                                opacity: isActive ? 1 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.year}
                            </motion.span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-11 lg:col-span-11 text-white flex items-center">
                  {currentContent && (
                    <div className="w-full max-w-xl mt-32">
                      {/* Title - chỉ có fade in/out */}
                      <AnimatePresence mode="wait">
                        <motion.h2
                          key={activeIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white"
                        >
                          {currentContent.title}
                        </motion.h2>
                      </AnimatePresence>

                      {/* Description - text morphing */}
                      <div className="text-xs md:text-sm lg:text-base mb-6 md:mb-8 leading-relaxed text-white/90">
                        <TextMorphing
                          morphKey={activeIndex}
                          text={currentContent.description}
                        />
                      </div>

                      {/* Button - không có hiệu ứng */}
                      {currentContent.buttonText && (
                        <button
                          onClick={() => {
                            if (currentContent.buttonLink) {
                              window.location.href = currentContent.buttonLink;
                            }
                          }}
                          className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition-colors cursor-pointer"
                        >
                          {currentContent.buttonText}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Image Grid - Sát lề phải, chỉ hiển thị 2 ảnh */}
            <div className="absolute -right-22 top-0 bottom-0 flex items-center justify-end overflow-hidden">
              <div className="relative flex flex-col items-end pr-4 md:pr-6 lg:pr-8">
                {/* Image Cards */}
                <div className="flex gap-4 md:gap-6 items-center relative mb-4">
                  <AnimatePresence mode="popLayout">
                    {visibleImages.map((card, index) => {
                      const cardIndex = data.imageCards.findIndex(
                        (c) => c.id === card.id
                      );
                      const isActive = cardIndex === activeIndex;
                      const isThird = index === 2;

                      return (
                        <motion.div
                          key={`${card.id}-${activeIndex}`}
                          className="flex-shrink-0 relative cursor-pointer"
                          initial={{ opacity: 0, x: 100, scale: 0.8 }}
                          animate={{
                            opacity: isThird ? 0.6 : 1,
                            x: 0,
                            scale: isActive ? 1 : isThird ? 0.75 : 0.85,
                          }}
                          exit={{ opacity: 0, x: -100, scale: 0.8 }}
                          transition={{
                            duration: 0.5,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          style={{
                            width: isActive
                              ? "360px"
                              : isThird
                              ? "260px"
                              : "320px",
                            height: isActive
                              ? "480px"
                              : isThird
                              ? "360px"
                              : "400px",
                          }}
                          whileHover={{
                            scale: isActive ? 1.02 : isThird ? 0.77 : 0.87,
                          }}
                          onClick={() => setActiveIndex(cardIndex)}
                        >
                          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                            <img
                              src={card.image}
                              alt={card.imageAlt}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            {!isThird && (
                              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <h3 className="text-lg md:text-xl font-bold mb-1">
                                  {card.title}
                                </h3>
                                {card.subtitle && (
                                  <p className="text-sm text-white/80">
                                    {card.subtitle}
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
                    onClick={() => navigateImages("left")}
                    className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer text-white backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <HiArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigateImages("right")}
                    className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer text-white backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <HiArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullScreenBackgroundImage;
