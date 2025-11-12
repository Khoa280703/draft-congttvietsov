import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { getTypicalProjectsSectionThemeColors } from "../theme";
import { defaultRelatedProjects } from "../data";

export interface Project {
  id: string;
  date: string;
  title: string;
  link?: string;
}

interface RelatedProjectsProps {
  projects?: Project[];
  title?: {
    prefix?: string;
    suffix?: string;
  };
  viewAllLink?: string;
  viewAllText?: string;
  isLightMode?: boolean;
  className?: string;
}

export interface RelatedProjectsRef {
  titleRef: React.RefObject<HTMLDivElement | null>;
}

const RelatedProjects = forwardRef<RelatedProjectsRef, RelatedProjectsProps>(
  (
    {
      projects = defaultRelatedProjects,
      title = {
        prefix: "DỰ ÁN",
        suffix: "TIÊU BIỂU",
      },
      viewAllLink = "#",
      viewAllText = "XEM TẤT CẢ",
      isLightMode = true,
      className = "",
    },
    ref
  ) => {
    const theme = getTypicalProjectsSectionThemeColors(isLightMode);
    const titleRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      titleRef,
    }));

    return (
      <div className={`h-full ${className}`}>
        <div className={`h-full transition-colors duration-700`}>
          {/* Title */}
          <motion.div
            ref={titleRef}
            className="mb-8 md:mb-10 laptop:mb-12 fhd:mb-14 qhd:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="">
              <div
                className={`${theme.relatedProjectsTitlePrefix} text-3xl md:text-4xl lg:text-4xl laptop:text-5xl fhd:text-6xl qhd:text-7xl font-base mb-4 laptop:mb-4 fhd:mb-5 qhd:mb-6`}
              >
                {title.prefix}
              </div>
              <span
                className={`${theme.relatedProjectsTitleSuffix} text-4xl md:text-5xl lg:text-5xl laptop:text-6xl fhd:text-7xl qhd:text-8xl font-extrabold tracking-wide`}
              >
                {title.suffix}
              </span>
            </h2>
          </motion.div>

          {/* Projects List */}
          <div className="space-y-6 md:space-y-7 lg:space-y-10 laptop:space-y-12 fhd:space-y-14 qhd:space-y-16 mb-8 md:mb-8 lg:mb-10 laptop:mb-12 fhd:mb-14 qhd:mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className="transition-transform duration-300"
              >
                <a href={project.link} className="block group cursor-pointer">
                  {/* Date Box */}
                  <div className="mb-3 laptop:mb-3 fhd:mb-4 qhd:mb-5">
                    <span
                      className={`inline-block ${theme.relatedProjectsDateBox} text-white px-4 py-2 laptop:px-4 laptop:py-2 fhd:px-5 fhd:py-2.5 qhd:px-6 qhd:py-3 text-sm md:text-base laptop:text-base fhd:text-lg qhd:text-xl font-medium transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:-translate-y-1`}
                    >
                      {project.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`${theme.relatedProjectsTitle} ${theme.relatedProjectsTitleHover} text-base md:text-lg lg:text-lg laptop:text-xl fhd:text-2xl qhd:text-3xl font-base leading-tight transition-all duration-300 group-hover:translate-x-2 relative`}
                  >
                    <span className="relative inline-block pb-2">
                      {project.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </h3>
                </a>
              </motion.div>
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href={viewAllLink}
              className={`group/link inline-flex items-center ${theme.relatedProjectsLink} ${theme.relatedProjectsLinkHover} font-semibold text-base laptop:text-base fhd:text-lg qhd:text-xl transition-all duration-300 underline underline-offset-4 hover:gap-2`}
            >
              <HiArrowRight className="w-5 h-5 laptop:w-5 laptop:h-5 fhd:w-6 fhd:h-6 qhd:w-7 qhd:h-7 mr-4 laptop:mr-4 fhd:mr-5 qhd:mr-6 transition-transform duration-300 group-hover/link:translate-x-2" />
              <span>{viewAllText}</span>
            </a>
          </motion.div>
        </div>
      </div>
    );
  }
);

RelatedProjects.displayName = "RelatedProjects";

export default RelatedProjects;
