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
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="">
              <div
                className={`${theme.relatedProjectsTitlePrefix} text-3xl md:text-4xl lg:text-5xl font-base mb-4`}
              >
                {title.prefix}
              </div>
              <span
                className={`${theme.relatedProjectsTitleSuffix} text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide`}
              >
                {title.suffix}
              </span>
            </h2>
          </motion.div>

          {/* Projects List */}
          <div className="space-y-6 md:space-y-8 lg:space-y-12 inch32:space-y-16 mb-8 md:mb-8 lg:mb-12 inch32:mb-16">
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
                  <div className="mb-3">
                    <span
                      className={`inline-block ${theme.relatedProjectsDateBox} text-white px-4 py-2 text-sm md:text-base font-medium transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:-translate-y-1`}
                    >
                      {project.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`${theme.relatedProjectsTitle} ${theme.relatedProjectsTitleHover} text-base md:text-lg lg:text-xl inch32-2xl font-base leading-tight transition-all duration-300 group-hover:translate-x-2 relative`}
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
              className={`group/link inline-flex items-center ${theme.relatedProjectsLink} ${theme.relatedProjectsLinkHover} font-semibold text-base transition-all duration-300 underline underline-offset-4 hover:gap-2`}
            >
              <HiArrowRight className="w-5 h-5 mr-4 transition-transform duration-300 group-hover/link:translate-x-2" />
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
