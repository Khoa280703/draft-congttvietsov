import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import YouTube from "react-youtube";
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
      className={`relative  ${className}`}
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
        className="h-[80vh] md:h-[800px] lg:h-[700px] inch32:h-[800px] w-full"
      >
        {finalSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: slide.isVideo
                  ? "none"
                  : `url(${slide.backgroundImageSrc})`,
              }}
            >
              {/* YouTube Video Background */}
              {slide.isVideo && slide.videoId && (
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      transform: "scale(1)",
                      transformOrigin: "center center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <YouTube
                      videoId={slide.videoId}
                      opts={{
                        width: "100%",
                        height: "100%",
                        playerVars: {
                          autoplay: 1,
                          mute: 1,
                          loop: 1,
                          playlist: slide.videoId,
                          controls: 0,
                          showinfo: 0,
                          modestbranding: 1,
                          rel: 0,
                          iv_load_policy: 3,
                          fs: 0,
                          disablekb: 1,
                        },
                      }}
                      className="absolute top-0 left-0 w-full h-full pointer-events-none"
                      style={{
                        width: "100%",
                        height: "100%",
                        minWidth: "100%",
                        minHeight: "100%",
                      }}
                    />
                  </div>
                </div>
              )}
              <div
                className="w-full h-full flex flex-col justify-between"
                style={{
                  backgroundColor: slide.overlayColor || "rgba(0, 0, 0, 0.4)",
                }}
              >
                {/* Main Content - Centered */}
                <div className="flex-1 flex items-center">
                  <div className="mx-auto px-6 md:px-12 lg:px-20 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
                    <div className="max-w-3xl lg:max-w-2xl inch32:max-w-3xl">
                      {/* Content Section */}
                      <div className="mb-8 lg:mb-6 inch32:mb-8">
                        {/* Category Text */}
                        <motion.p
                          className="text-sm md:text-base lg:text-lg inch32:text-base font-medium uppercase tracking-wider mb-4 lg:mb-4 inch32:mb-4"
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
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl inch32:text-6xl font-bold leading-[50px] lg:leading-[60px] inch32:leading-[70px] tracking-normal mb-4 lg:mb-4 inch32:mb-4"
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
                          className="text-base md:text-lg lg:text-lg inch32:text-lg leading-relaxed mb-6 lg:mb-8 inch32:mb-6 max-w-2xl lg:max-w-xl inch32:max-w-2xl"
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
                          className="inline-flex items-center px-6 py-3 lg:px-5 lg:py-2.5 inch32:px-6 inch32:py-3 font-semibold lg:text-base inch32:text-base cursor-pointer"
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
                            className="w-5 h-5 lg:w-4 lg:h-4 inch32:w-5 inch32:h-5 ml-2"
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
                    className="mx-auto px-6 md:px-12 lg:px-20 laptop:px-24 fhd:px-32 qhd:px-40 pb-16 md:pb-10 lg:pb-8 laptop:pb-10 fhd:pb-12 qhd:pb-14 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.5, ease: "easeOut" }}
                  >
                    <div className="max-w-3xl lg:max-w-2xl inch32:max-w-3xl">
                      <div className="flex items-center space-x-6 lg:space-x-4 inch32:space-x-6">
                        {finalSlides.map((_, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleSlideClick(index)}
                            className={`relative text-base lg:text-sm inch32:text-base font-medium cursor-pointer ${
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
                                className="absolute left-0 -bottom-2 h-[3px] w-full bg-white origin-left"
                                style={{
                                  willChange: "transform",
                                  transformOrigin: "left center",
                                }}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                  duration: autoplayDelay / 1000,
                                  ease: "linear",
                                  type: "tween",
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
                className="absolute top-1/2 left-8 md:left-16 lg:left-12 inch32:left-16 transform -translate-y-1/2 w-12 h-12 lg:w-10 lg:h-10 inch32:w-12 inch32:h-12 backdrop-blur-sm rounded-full flex items-center justify-center z-10 border border-white transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:shadow-lg cursor-pointer"
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
                <HiArrowLeft className="w-6 h-6 lg:w-5 lg:h-5 inch32:w-6 inch32:h-6 text-white transition-transform duration-300 group-hover:scale-110" />
              </motion.button>

              {/* Right Navigation Arrow */}
              <motion.button
                onClick={() => handleRigNavigationClick("right")}
                className="absolute top-1/2 right-8 md:right-16 lg:right-12 inch32:right-16 transform -translate-y-1/2 w-12 h-12 lg:w-10 lg:h-10 inch32:w-12 inch32:h-12 backdrop-blur-sm rounded-full flex items-center justify-center z-10 border border-white transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:shadow-lg cursor-pointer"
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
                <HiArrowRight className="w-6 h-6 lg:w-5 lg:h-5 inch32:w-6 inch32:h-6 text-white transition-transform duration-300 group-hover:scale-110" />
              </motion.button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default HeroSlider;
