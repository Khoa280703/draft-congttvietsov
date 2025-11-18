import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import FeaturedProject, { type FeaturedProjectData } from "./FeaturedProject";
import RelatedProjects, {
  type Project,
  type RelatedProjectsRef,
} from "./RelatedProjects";
import { getTypicalProjectsSectionThemeColors } from "./theme";
import { categories } from "./data";

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
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const currentCategory = categories[currentCategoryIndex];

  // Use provided data or fallback to category data
  const displayFeaturedProject =
    featuredProject || currentCategory.featuredProject;
  const displayRelatedProjects =
    relatedProjects || currentCategory.relatedProjects;

  const handleNextCategory = () => {
    setCurrentCategoryIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrevCategory = () => {
    setCurrentCategoryIndex(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
  };

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


  return (
    <motion.section
      ref={containerRef}
      className={`${theme.sectionBackground} transition-colors duration-700 py-8 md:py-12 lg:py-14 laptop:py-16 fhd:py-20 qhd:py-24 relative ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

      <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 h-[120vh] flex items-center w-full">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 laptop:gap-16 fhd:gap-20 qhd:gap-24">
          {/* Left Column - Featured Project */}
          <div className="lg:sticky lg:top-24 lg:self-start col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <FeaturedProject
                  project={displayFeaturedProject}
                  isLightMode={isLightMode}
                  category={currentCategory.name}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column - Related Projects */}
          <div className="flex items-stretch col-span-2">
            <RelatedProjects
              ref={relatedProjectsRef}
              projects={displayRelatedProjects}
              title={{
                prefix: "DỰ ÁN",
                suffix: "TIÊU BIỂU",
                category: currentCategory.name,
              }}
              onPrevCategory={handlePrevCategory}
              onNextCategory={handleNextCategory}
              viewAllText="XEM TẤT CẢ"
              isLightMode={isLightMode}
              className="w-full"
              viewAllLink="/doitac-duan/du-an"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TypicalProjectsSection;
