import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import DotLine from "./DotLine";
import type { VisionMissionSection } from "./data";
import { visionData } from "./data";

interface VisionSectionProps {
  data?: VisionMissionSection;
  image?: string;
  imageAlt?: string;
}

const VisionSection: React.FC<VisionSectionProps> = ({
  data = visionData,
  image,
  imageAlt,
}) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [lineTop, setLineTop] = useState(0);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // Check if elements are in view
  const imageInView = useInView(imageRef, {
    once: true,
    margin: "-100px",
  });
  const contentInView = useInView(contentRef, {
    once: true,
    margin: "-100px",
  });

  // Scroll animations
  const scrollYProgress = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  }).scrollYProgress;

  const lineWidth = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["300px", "220px", "150px"]
  );

  // Update line position - đặt giữa title và description
  useEffect(() => {
    const updateLinePosition = () => {
      if (!titleRef.current || !descriptionRef.current || !containerRef.current)
        return;
      const titleRect = titleRef.current.getBoundingClientRect();
      const descriptionRect = descriptionRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const middleY =
        (titleRect.bottom + descriptionRect.top) / 2 - containerRect.top;
      setLineTop(middleY - 55);
    };

    updateLinePosition();
    window.addEventListener("resize", updateLinePosition);
    return () => {
      window.removeEventListener("resize", updateLinePosition);
    };
  }, []);

  return (
    <div
      className="py-8 md:py-12 relative min-h-screen flex items-center z-10"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            ref={imageRef}
            className="relative flex justify-center lg:justify-start"
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={fadeInLeft}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-md">
              {image ? (
                <img
                  src={image}
                  alt={imageAlt || data.title}
                  className="w-full h-auto rounded-lg shadow-2xl object-cover"
                />
              ) : (
                <div className="w-full aspect-[4/5] bg-gray-200 rounded-lg shadow-2xl flex items-center justify-center">
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
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Title */}
            <motion.div
              className="mb-6"
              ref={titleRef}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight text-vietsov-green">
                {data.title}
              </h2>
            </motion.div>

            {/* Description */}
            <div ref={descriptionRef} className="mb-8 space-y-4">
              {data.description.map((text, index) => (
                <motion.p
                  key={index}
                  className="text-base md:text-lg leading-relaxed text-vietsov-black"
                  variants={fadeInUp}
                  initial="hidden"
                  animate={contentInView ? "visible" : "hidden"}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
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
                  className="flex items-center group hover:opacity-80 transition-opacity text-vietsov-green"
                  variants={fadeInUp}
                  initial="hidden"
                  animate={contentInView ? "visible" : "hidden"}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <svg
                    className="w-5 h-5 mr-3 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="font-semibold uppercase text-sm md:text-base underline">
                    {link.text}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* DotLine on the right */}
      <div
        className="absolute flex justify-end"
        style={{
          left: "max(1rem, calc((100vw - 1280px) / 2 + 1rem))",
          right: 0,
          top: `${lineTop}px`,
        }}
      >
        <DotLine
          dotColor="#10954f"
          lineColor="#242424"
          dotSize={24}
          lineHeight={2}
          lineWidth={lineWidth}
        />
      </div>
    </div>
  );
};

export default VisionSection;
