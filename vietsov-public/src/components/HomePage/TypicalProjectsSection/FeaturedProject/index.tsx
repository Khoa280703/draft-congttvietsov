import React, { useRef } from "react";
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
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  project = defaultFeaturedProject,
  viewProjectText = "XEM CHI TIẾT",
  isLightMode = true,
  className = "",
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

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`relative w-300 min-h-[500px] md:min-h-[600px] lg:min-h-[700px] inch32:min-h-[800px] overflow-hidden transition-colors duration-700`}
      >
        {/* Small Image - Top Left, skewed */}
        <div className="absolute top-0 left-0 md:left-4 lg:left-8 inch32:left-12 w-[55%] md:w-[50%] lg:w-[45%] inch32:w-[40%] h-[40%] md:h-[45%] lg:h-[50%] inch32:h-[55%] z-10 transform -rotate-2 md:-rotate-1.5 lg:-rotate-1 origin-top-left">
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            className="w-full h-full object-cover shadow-2xl"
          />
        </div>

        {/* White Card - Front, overlapping image */}
        <motion.div
          style={{ y: cardY }}
          className={`absolute bottom-0 md:bottom-4 lg:-bottom-20 inch32:bottom-12 left-40 w-2/3 md:w-[50%] lg:w-[55%] inch32:w-[60%] h-[50%] md:h-[50%] lg:h-[70%] inch32:h-[50%] ${theme.featuredProjectContentBox} p-4 md:p-6 lg:p-8 inch32:p-10 z-20 shadow-2xl`}
        >
          {/* Date Bar - Overlapping with image, positioned above card */}
          <div
            className={`absolute -top-6 md:-top-8 lg:-top-5 inch32:-top-12 left-4 md:left-6 lg:left-8 inch32:left-10 ${theme.featuredProjectDateBar} text-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm lg:text-base font-medium z-30`}
          >
            {project.date}
          </div>

          {/* Title */}
          <h2
            className={`text-xl md:text-2xl lg:text-3xl inch32:text-4xl font-bold ${theme.featuredProjectTitle} mb-3 md:mb-4 leading-tight transition-colors duration-700 mt-2 md:mt-0`}
          >
            {project.title}
          </h2>

          {/* Project Type & Location */}
          <div
            className={`${theme.featuredProjectType} font-bold text-[10px] md:text-xs lg:text-sm uppercase tracking-wide mb-3 md:mb-4 transition-colors duration-700`}
          >
            {project.projectType} - {project.location}
          </div>

          {/* Description */}
          <p
            className={`${theme.featuredProjectDescription} text-xs md:text-sm lg:text-base tracking-wide leading-loose mb-4 md:mb-6 md:line-clamp-4 lg:line-clamp-none transition-colors duration-700`}
          >
            {project.description}
          </p>

          {/* View Project Link */}
          <a
            href={project.link}
            className={`inline-flex items-center ${theme.featuredProjectLink} ${theme.featuredProjectLinkHover} font-bold text-xs md:text-sm lg:text-base uppercase tracking-wide underline underline-offset-4`}
          >
            <span>{viewProjectText}</span>
            <HiArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;

