import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  type HeroSliderProps,
  defaultPublicSlidesData,
  defaultInternalSlidesData,
} from "./data";

// Import CSS của Swiper
import "swiper/css";
import "swiper/css/effect-fade";

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  autoplayDelay = 5000,
  showPagination = true,
  className = "",
  basePath = "public", // "public" or "internal"
}) => {
  // Use appropriate default slides based on basePath
  const defaultSlides =
    basePath === "internal"
      ? defaultInternalSlidesData
      : defaultPublicSlidesData;
  const finalSlides = slides || defaultSlides;

  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSlideClick = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
    }
  };

  const handleButtonClick = (link: string) => {
    window.location.href = link;
  };

  const handleRigNavigationClick = (direction: "left" | "right") => {
    if (swiperInstance) {
      if (direction === "left") {
        swiperInstance.slidePrev();
      } else {
        swiperInstance.slideNext();
      }
    }
  };

  // Animation effects on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={`relative font-sans ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-[80vh] md:h-[700px] w-full"
      >
        {finalSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.backgroundImageSrc})` }}
            >
              {/* Overlay */}
              <div
                className="w-full h-full flex flex-col justify-between"
                style={{
                  backgroundColor: slide.overlayColor || "rgba(0, 0, 0, 0.4)",
                }}
              >
                {/* Main Content - Centered */}
                <div className="flex-1 flex items-center">
                  <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-3xl">
                      {/* Content Section */}
                      <div className="mb-8">
                        {/* Category Text */}
                        <motion.p
                          className="text-sm md:text-base font-medium uppercase tracking-wider mb-4"
                          style={{ color: slide.textColor || "white" }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.7,
                            delay: 0.3,
                            ease: "easeOut",
                          }}
                        >
                          {slide.categoryText}
                        </motion.p>

                        {/* Main Title */}
                        <motion.h1
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                          style={{ color: slide.textColor || "white" }}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.7,
                            delay: 0.6,
                            ease: "easeOut",
                          }}
                        >
                          <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.7,
                              delay: 0.7,
                              ease: "easeOut",
                            }}
                          >
                            {slide.mainTitleLine1}
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.7,
                              delay: 0.8,
                              ease: "easeOut",
                            }}
                          >
                            {slide.mainTitleLine2}
                          </motion.div>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                          className="text-base md:text-lg leading-relaxed mb-6 max-w-2xl"
                          style={{ color: slide.textColor || "white" }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.7,
                            delay: 0.9,
                            ease: "easeOut",
                          }}
                        >
                          {slide.descriptionText}
                        </motion.p>

                        {/* CTA Button */}
                        <motion.button
                          onClick={() => handleButtonClick(slide.buttonLink)}
                          className="inline-flex items-center px-6 py-3 rounded-lg font-semibold"
                          style={{
                            backgroundColor:
                              slide.buttonBackgroundColor || "white",
                            color: slide.buttonTextColor || "black",
                          }}
                          initial={{ opacity: 0, y: 20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 1.2,
                            ease: "easeOut",
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {slide.buttonText}
                          <HiArrowRight
                            className="w-5 h-5 ml-2"
                            style={{ color: "#10954F" }}
                          />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pagination - Bottom */}
                {showPagination && (
                  <motion.div
                    className="container mx-auto px-6 md:px-12 pb-16 md:pb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.5, ease: "easeOut" }}
                  >
                    <div className="max-w-3xl">
                      <div className="flex items-center space-x-6">
                        {finalSlides.map((_, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleSlideClick(index)}
                            className={`relative text-base font-medium ${
                              activeIndex === index
                                ? "text-white"
                                : "text-white/60 hover:text-white"
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          >
                            {String(index + 1).padStart(2, "0")}
                            {activeIndex === index && (
                              <motion.span
                                key={activeIndex}
                                className="absolute left-0 -bottom-2 h-[3px] w-full bg-white"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{
                                  duration: autoplayDelay / 1000,
                                  ease: "linear",
                                }}
                              />
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Left Navigation Arrow */}
              <motion.button
                onClick={() => handleRigNavigationClick("left")}
                className="absolute top-1/2 left-8 md:left-16 transform -translate-y-1/2 w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center z-10 border border-white transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <HiArrowLeft className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
              </motion.button>

              {/* Right Navigation Arrow */}
              <motion.button
                onClick={() => handleRigNavigationClick("right")}
                className="absolute top-1/2 right-8 md:right-16 transform -translate-y-1/2 w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center z-10 border border-white transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <HiArrowRight className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
              </motion.button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default HeroSlider;
