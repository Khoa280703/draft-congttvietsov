import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FeaturedProject, { type FeaturedProjectData } from "./FeaturedProject";
import RelatedProjects, {
  type Project,
  type RelatedProjectsRef,
} from "./RelatedProjects";
import { getTypicalProjectsSectionThemeColors } from "./theme";
import DotLineL from "./DotLineL";
import { useLinePosition } from "../VisionMission/useLinePosition";

interface TypicalProjectsSectionProps {
  featuredProject?: FeaturedProjectData;
  relatedProjects?: Project[];
  isLightMode?: boolean;
  className?: string;
}

const TypicalProjectsSection: React.FC<TypicalProjectsSectionProps> = ({
  featuredProject,
  relatedProjects,
  isLightMode = true,
  className = "",
}) => {
  const theme = getTypicalProjectsSectionThemeColors(isLightMode);
  const containerRef = useRef<HTMLElement>(null);
  const relatedProjectsRef = useRef<RelatedProjectsRef>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animate horizontal line width - shorten from right as scroll
  const horizontalLineWidth = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["200%", "180%", "160%"]
  );

  // Animate vertical line height - shorten from bottom as scroll
  const verticalLineHeight = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["50px", "50px", "50px"]
  );

  // Track titleRef for DotLine position
  const [titleRef, setTitleRef] =
    useState<React.RefObject<HTMLElement | null> | null>(null);

  useEffect(() => {
    // Check for titleRef periodically until it's available
    const checkTitleRef = () => {
      if (relatedProjectsRef.current?.titleRef) {
        setTitleRef(relatedProjectsRef.current.titleRef);
      }
    };

    checkTitleRef();
    const interval = setInterval(checkTitleRef, 100);

    return () => clearInterval(interval);
  }, []);

  // Calculate DotLine position based on title
  const lineTop = useLinePosition(titleRef, containerRef, 150);

  return (
    <motion.section
      ref={containerRef}
      className={`${theme.sectionBackground} transition-colors duration-700 py-8 md:py-12 lg:py-14 laptop:py-16 fhd:py-20 qhd:py-24 relative ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className="hidden md:block absolute right-0 w-90 pointer-events-none z-10 overflow-visible"
        style={{
          height: "120px",
          top: `${lineTop}px`,
        }}
      >
        <DotLineL
          dotColor="#F07B22"
          lineColor={isLightMode ? "#222E50" : "#ffffff"}
          dotSize={24}
          lineWidth={2}
          horizontalLineWidth={horizontalLineWidth}
          verticalLineHeight={verticalLineHeight}
          className="w-full"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 laptop:px-16 fhd:px-20 qhd:px-24 h-[120vh] flex items-center">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 laptop:gap-16 fhd:gap-20 qhd:gap-24">
          {/* Left Column - Featured Project */}
          <div className="lg:sticky lg:top-24 lg:self-start col-span-3">
            <FeaturedProject
              project={featuredProject}
              isLightMode={isLightMode}
            />
          </div>

          {/* Right Column - Related Projects */}
          <div className="flex items-stretch col-span-2">
            <RelatedProjects
              ref={relatedProjectsRef}
              projects={relatedProjects}
              title={{
                prefix: "DỰ ÁN",
                suffix: "TIÊU BIỂU",
              }}
              viewAllText="XEM TẤT CẢ"
              isLightMode={isLightMode}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TypicalProjectsSection;
