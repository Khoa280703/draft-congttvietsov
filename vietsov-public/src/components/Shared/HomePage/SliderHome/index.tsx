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
        className="h-[66.666vh] w-full"
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
                    <div className="max-w-3xl lg:max-w-2xl laptop:max-w-3xl fhd:max-w-4xl qhd:max-w-5xl">
                      {/* Content Section */}
                      <div className="mb-8 lg:mb-6 laptop:mb-8 fhd:mb-10 qhd:mb-12 lg:ml-8">
                        {/* Category Text */}
                        <motion.p
                          className="text-sm md:text-base lg:text-lg laptop:text-base fhd:text-lg qhd:text-xl font-medium uppercase tracking-wider mb-4 lg:mb-4 laptop:mb-4 fhd:mb-5 qhd:mb-6"
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
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl laptop:text-6xl fhd:text-7xl qhd:text-8xl font-bold leading-[50px] lg:leading-[60px] laptop:leading-[70px] fhd:leading-[80px] qhd:leading-[90px] tracking-normal mb-4 lg:mb-4 laptop:mb-4 fhd:mb-5 qhd:mb-6"
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
                          className="text-base md:text-lg lg:text-lg laptop:text-lg fhd:text-xl qhd:text-2xl leading-relaxed mb-6 lg:mb-8 laptop:mb-6 fhd:mb-8 qhd:mb-10 max-w-2xl lg:max-w-xl laptop:max-w-2xl fhd:max-w-3xl qhd:max-w-4xl"
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
                          className="inline-flex items-center px-6 py-3 lg:px-5 lg:py-2.5 laptop:px-6 laptop:py-3 fhd:px-8 fhd:py-4 qhd:px-10 qhd:py-5 font-semibold lg:text-base laptop:text-base fhd:text-lg qhd:text-xl cursor-pointer"
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
                            className="w-5 h-5 lg:w-4 lg:h-4 laptop:w-5 laptop:h-5 fhd:w-6 fhd:h-6 qhd:w-7 qhd:h-7 ml-2"
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
                    <div className="max-w-3xl lg:max-w-2xl laptop:max-w-3xl fhd:max-w-4xl qhd:max-w-5xl">
                      <div className="flex items-center space-x-6 lg:space-x-4 laptop:space-x-6 fhd:space-x-8 qhd:space-x-10">
                        {finalSlides.map((_, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleSlideClick(index)}
                            className={`relative text-base lg:text-sm laptop:text-base fhd:text-lg qhd:text-xl font-medium cursor-pointer ${
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
                className="absolute top-1/2 left-8 md:left-16 lg:left-12 laptop:left-16 fhd:left-20 qhd:left-24 transform -translate-y-1/2 w-12 h-12 lg:w-10 lg:h-10 laptop:w-12 laptop:h-12 fhd:w-14 fhd:h-14 qhd:w-16 qhd:h-16 backdrop-blur-sm rounded-full flex items-center justify-center z-10 border border-white transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:shadow-lg cursor-pointer"
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
                <HiArrowLeft className="w-6 h-6 lg:w-5 lg:h-5 laptop:w-6 laptop:h-6 fhd:w-7 fhd:h-7 qhd:w-8 qhd:h-8 text-white transition-transform duration-300 group-hover:scale-110" />
              </motion.button>

              {/* Right Navigation Arrow */}
              <motion.button
                onClick={() => handleRigNavigationClick("right")}
                className="absolute top-1/2 right-8 md:right-16 lg:right-12 laptop:right-16 fhd:right-20 qhd:right-24 transform -translate-y-1/2 w-12 h-12 lg:w-10 lg:h-10 laptop:w-12 laptop:h-12 fhd:w-14 fhd:h-14 qhd:w-16 qhd:h-16 backdrop-blur-sm rounded-full flex items-center justify-center z-10 border border-white transition-all duration-300 hover:bg-white/30 hover:scale-110 hover:shadow-lg cursor-pointer"
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
                <HiArrowRight className="w-6 h-6 lg:w-5 lg:h-5 laptop:w-6 laptop:h-6 fhd:w-7 fhd:h-7 qhd:w-8 qhd:h-8 text-white transition-transform duration-300 group-hover:scale-110" />
              </motion.button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default HeroSlider;
