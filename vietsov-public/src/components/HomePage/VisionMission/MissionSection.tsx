import React, { useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import DotLine from "./DotLine";
import type { VisionMissionSection } from "./data";
import { missionData } from "./data";
import { getThemeColors } from "./theme";
import { fadeInUp, fadeInRight, ANIMATION_CONFIG } from "./animations";
import { useLinePosition } from "./useLinePosition";

interface MissionSectionProps {
  data?: VisionMissionSection;
  image?: string;
  imageAlt?: string;
  isDarkTheme?: boolean;
}

const MissionSection: React.FC<MissionSectionProps> = ({
  data = missionData,
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

  const lineWidth = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["350px", "250px", "150px"]
  );

  const lineTop = useLinePosition(titleRef, containerRef);

  return (
    <div
      className={`py-8 md:py-12 relative min-h-[120vh] flex items-center z-10 transition-colors duration-700 ${theme.background}`}
      ref={containerRef}
    >
      <div className="container mx-auto px-4 md:px-12 lg:px-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            ref={contentRef}
            className="flex flex-col justify-center order-2 lg:order-1"
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={ANIMATION_CONFIG}
          >
            {/* Title */}
            <motion.div
              className="mb-6"
              ref={titleRef}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: ANIMATION_CONFIG.titleDelay }}
            >
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight transition-colors duration-700 ${theme.title}`}
              >
                {data.title}
              </h2>
            </motion.div>

            {/* Description */}
            <div ref={descriptionRef} className="mb-8 space-y-4">
              {data.description.map((text, index) => (
                <motion.p
                  key={index}
                  className={`text-base md:text-lg leading-relaxed transition-colors duration-700 ${theme.description}`}
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
                  <span className="font-semibold uppercase text-sm md:text-base underline">
                    {link.text}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            ref={imageRef}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={fadeInRight}
            transition={ANIMATION_CONFIG}
          >
            <div className="relative w-full max-w-md aspect-[4/5]">
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
        </div>
      </div>

      {/* DotLine on the left */}
      <div
        className="absolute flex justify-start"
        style={{
          left: 0,
          right: "max(1rem, calc((100vw - 1280px) / 2 + 1rem))",
          top: `${lineTop}px`,
        }}
      >
        <DotLine
          dotColor={theme.dotLine.dot}
          lineColor={theme.dotLine.line}
          dotSize={24}
          lineHeight={2}
          lineWidth={lineWidth}
          reverse={true}
        />
      </div>
    </div>
  );
};

export default MissionSection;
