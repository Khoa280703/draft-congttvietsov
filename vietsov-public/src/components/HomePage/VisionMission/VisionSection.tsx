import React, { useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import type { VisionMissionSection } from "./data";
import { visionData } from "./data";
import { getThemeColors } from "./theme";
import { fadeInUp, fadeInLeft, ANIMATION_CONFIG } from "./animations";

interface VisionSectionProps {
  data?: VisionMissionSection;
  image?: string;
  imageAlt?: string;
  isDarkTheme?: boolean;
}

const VisionSection: React.FC<VisionSectionProps> = ({
  data = visionData,
  image,
  imageAlt,
  isDarkTheme = false,
}) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const theme = getThemeColors(isDarkTheme);

  const imageInView = useInView(imageRef, {
    once: true,
    margin: "-100px",
  });
  const contentInView = useInView(contentRef, {
    once: true,
    margin: "-100px",
  });

  const scrollYProgress = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  }).scrollYProgress;

  // Responsive line width based on viewport
  const lineWidth = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "clamp(200px, 25vw, 600px)",
      "clamp(150px, 20vw, 450px)",
      "clamp(100px, 15vw, 300px)",
    ]
  );


  return (
    <div
      className={`py-8 md:py-12 lg:py-14 laptop:py-16 fhd:py-20 qhd:py-24 relative min-h-[120vh] flex items-center z-10 transition-colors duration-700 ${theme.background}`}
      ref={containerRef}
    >
      <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 laptop:gap-16 fhd:gap-20 qhd:gap-24 items-center">
          {/* Left Column - Image */}
          <motion.div
            ref={imageRef}
            className="relative flex justify-center lg:justify-start"
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={fadeInLeft}
            transition={ANIMATION_CONFIG}
          >
            <div className="relative w-full max-w-md laptop:max-w-lg fhd:max-w-xl qhd:max-w-2xl aspect-[4/5]">
              {image || data.image ? (
                <img
                  src={image || data.image}
                  alt={imageAlt || data.imageAlt || data.title}
                  className="w-full h-full rounded-lg shadow-2xl object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 rounded-lg shadow-2xl flex items-center justify-center">
                  <span className="text-gray-400 text-sm">No image</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            ref={contentRef}
            className="flex flex-col justify-center"
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={ANIMATION_CONFIG}
          >
            {/* Title */}
            <motion.div
              className="mb-4 md:mb-5 laptop:mb-6 fhd:mb-7 qhd:mb-8"
              ref={titleRef}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: ANIMATION_CONFIG.titleDelay }}
            >
              <h2
                className={`text-2xl md:text-3xl lg:text-4xl laptop:text-5xl fhd:text-6xl qhd:text-7xl font-bold uppercase leading-tight transition-colors duration-700 ${theme.title}`}
              >
                {data.title}
              </h2>
            </motion.div>

            {/* Description */}
            <div
              ref={descriptionRef}
              className="mb-6 md:mb-7 laptop:mb-8 fhd:mb-9 qhd:mb-10 space-y-3 md:space-y-4 laptop:space-y-5 fhd:space-y-6 qhd:space-y-7"
            >
              {data.description.map((text, index) => (
                <motion.p
                  key={index}
                  className={`text-sm md:text-base laptop:text-lg fhd:text-xl qhd:text-2xl leading-relaxed transition-colors duration-700 ${theme.description}`}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={contentInView ? "visible" : "hidden"}
                  transition={{
                    duration: 0.6,
                    delay:
                      ANIMATION_CONFIG.descriptionDelay +
                      index * ANIMATION_CONFIG.staggerDelay,
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Links */}
            <div className="space-y-4">
              {data.links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className={`flex items-center group hover:opacity-80 transition-all duration-700 ${theme.link}`}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={contentInView ? "visible" : "hidden"}
                  transition={{
                    duration: 0.6,
                    delay:
                      ANIMATION_CONFIG.linkDelay +
                      index * ANIMATION_CONFIG.staggerDelay,
                  }}
                >
                  <span className="font-semibold uppercase text-xs md:text-sm laptop:text-base fhd:text-lg qhd:text-xl underline">
                    {link.text}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default VisionSection;
