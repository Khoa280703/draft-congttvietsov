import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { getTypicalProjectsSectionThemeColors } from "../theme";
import { defaultFeaturedProject } from "../data";

export interface FeaturedProjectData {
  id: string;
  date: string;
  title: string;
  projectType: string;
  location: string;
  description: string;
  image: string;
  imageAlt?: string;
  link?: string;
}

interface FeaturedProjectProps {
  project?: FeaturedProjectData;
  viewProjectText?: string;
  isLightMode?: boolean;
  className?: string;
  category?: string;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  project = defaultFeaturedProject,
  viewProjectText = "XEM CHI TIẾT",
  isLightMode = true,
  className = "",
  category,
}) => {
  const theme = getTypicalProjectsSectionThemeColors(isLightMode);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const cardY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "-20%", "-40%"]
  );

  // Calculate line clamp based on screen size
  const [lineClamp, setLineClamp] = useState(4);

  useEffect(() => {
    const updateLineClamp = () => {
      const width = window.innerWidth;
      if (width >= 2560) {
        setLineClamp(8);
      } else if (width >= 1920) {
        setLineClamp(7);
      } else if (width >= 1366) {
        setLineClamp(6);
      } else if (width >= 1024) {
        setLineClamp(5);
      } else if (width >= 768) {
        setLineClamp(4);
      } else {
        setLineClamp(3);
      }
    };

    updateLineClamp();
    window.addEventListener("resize", updateLineClamp);
    return () => window.removeEventListener("resize", updateLineClamp);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Mobile: Simple stacked layout */}
      <div className="md:hidden flex flex-col gap-4">
        {/* Image - Full width */}
        <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            className="w-full h-full object-cover"
          />
          {/* Category Card - Top Left, Diagonal - Stamp Style */}
          {category && (
            <div
              className="absolute top-3 left-3 bg-white px-3 py-1.5 text-xs font-bold text-gray-800 shadow-lg transform -rotate-6 origin-top-left z-0"
              style={{
                clipPath:
                  "polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)",
              }}
            >
              {category}
            </div>
          )}
          {/* Date Bar */}
          <div
            className={`absolute top-4 right-4 ${theme.featuredProjectDateBar} text-white px-3 py-1.5 text-xs font-medium`}
          >
            {project.date}
          </div>
        </div>

        {/* Content Card */}
        <div
          className={`${theme.featuredProjectContentBox} p-4 rounded-lg shadow-lg flex flex-col`}
        >
          <h2
            className={`text-xl font-bold ${theme.featuredProjectTitle} mb-3 leading-tight transition-colors duration-700`}
          >
            {project.title}
          </h2>

          <div
            className={`${theme.featuredProjectType} font-bold text-[10px] uppercase tracking-wide mb-3 transition-colors duration-700`}
          >
            {project.projectType} - {project.location}
          </div>

          <p
            className={`${theme.featuredProjectDescription} text-xs tracking-wide leading-loose mb-4 line-clamp-4 transition-colors duration-700`}
          >
            {project.description}
          </p>

          <a
            href={project.link}
            className={`inline-flex items-center ${theme.featuredProjectLink} ${theme.featuredProjectLinkHover} font-bold text-xs uppercase tracking-wide underline underline-offset-4`}
          >
            <span>{viewProjectText}</span>
            <HiArrowRight className="ml-2 w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Desktop: Complex overlapping layout */}
      <div className="hidden md:block relative w-300 lg:w-400 laptop:w-200 fhd:w-250 qhd:w-400 min-h-[550px] lg:min-h-[600px] laptop:min-h-[700px] fhd:min-h-[800px] qhd:min-h-[900px] transition-colors duration-700">
        {/* Small Image - Top Left, skewed */}
        <div className="absolute top-0 left-4 lg:left-8 laptop:left-12 fhd:left-20 qhd:left-20 w-[60%] h-[45%] lg:h-[50%] laptop:h-[55%] fhd:h-[58%] qhd:h-[60%] z-10 transform -rotate-1.5 lg:-rotate-1 laptop:-rotate-0.5 origin-top-left relative">
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            className="w-full h-full object-cover shadow-2xl"
          />
          {/* Category Card - Top Left, Diagonal - Behind image */}
          {category && (
            <div className="absolute top-0 left-0 bg-white px-4 py-2 lg:px-5 lg:py-2.5 laptop:px-6 laptop:py-3 fhd:px-7 fhd:py-3.5 qhd:px-8 qhd:py-4 text-sm lg:text-base laptop:text-lg fhd:text-xl qhd:text-2xl font-bold text-gray-800 shadow-2xl transform origin-top-left z-0">
              {category}
            </div>
          )}
        </div>

        {/* White Card - Front, overlapping image */}
        <motion.div
          style={{
            y: cardY,
          }}
          className={`absolute lg:top-20 laptop:top-90 fhd:top-120 qhd:top-140 left-40 laptop:left-48 fhd:left-56 qhd:left-64 w-[50%] lg:w-[55%] laptop:w-[60%] fhd:w-[62%] qhd:w-[65%] ${theme.featuredProjectContentBox} p-5 lg:p-6 laptop:p-8 fhd:p-10 qhd:p-12 z-20 shadow-2xl flex flex-col -translate-y-[60px] lg:-translate-y-[80px] laptop:-translate-y-[100px] fhd:-translate-y-[120px] qhd:-translate-y-[140px]`}
        >
          {/* Date Bar - Overlapping with image, positioned above card */}
          <div
            className={`absolute -top-5 lg:-top-5 laptop:-top-5 fhd:-top-5 qhd:-top-14 left-6 lg:left-8 laptop:left-10 fhd:left-12 qhd:left-14 ${theme.featuredProjectDateBar} text-white px-4 laptop:px-4 fhd:px-5 qhd:px-6 py-2 laptop:py-2 fhd:py-2.5 qhd:py-3 text-sm lg:text-sm laptop:text-base fhd:text-lg qhd:text-xl font-medium z-30`}
          >
            {project.date}
          </div>

          {/* Title */}
          <h2
            className={`text-2xl lg:text-2xl laptop:text-3xl fhd:text-4xl qhd:text-5xl font-bold ${theme.featuredProjectTitle} mb-4 laptop:mb-4 fhd:mb-5 qhd:mb-6 leading-tight transition-colors duration-700`}
          >
            {project.title}
          </h2>

          {/* Project Type & Location */}
          <div
            className={`${theme.featuredProjectType} font-bold text-xs lg:text-xs laptop:text-sm fhd:text-base qhd:text-lg uppercase tracking-wide mb-4 laptop:mb-4 fhd:mb-5 qhd:mb-6 transition-colors duration-700`}
          >
            {project.projectType} - {project.location}
          </div>

          {/* Description */}
          <p
            className={`${theme.featuredProjectDescription} text-sm lg:text-sm laptop:text-base fhd:text-lg qhd:text-xl tracking-wide leading-relaxed mb-4 laptop:mb-5 fhd:mb-6 qhd:mb-6 transition-colors duration-700`}
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: lineClamp,
            }}
          >
            {project.description}
          </p>

          {/* View Project Link */}
          <a
            href={project.link}
            className={`inline-flex items-center ${theme.featuredProjectLink} ${theme.featuredProjectLinkHover} font-bold text-sm lg:text-sm laptop:text-base fhd:text-lg qhd:text-xl uppercase tracking-wide underline underline-offset-4`}
          >
            <span>{viewProjectText}</span>
            <HiArrowRight className="ml-2 w-4 h-4 lg:w-4 lg:h-4 laptop:w-5 laptop:h-5 fhd:w-6 fhd:h-6 qhd:w-7 qhd:h-7" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;
