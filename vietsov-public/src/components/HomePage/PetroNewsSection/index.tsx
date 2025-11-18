import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FeaturedProject, {
  type FeaturedProjectData,
} from "../TypicalProjectsSection/FeaturedProject";
import RelatedProjects, {
  type Project,
  type RelatedProjectsRef,
} from "../TypicalProjectsSection/RelatedProjects";
import { getTypicalProjectsSectionThemeColors } from "../TypicalProjectsSection/theme";
import { defaultFeaturedNews, defaultRelatedNews } from "./data";

interface PetroNewsSectionProps {
  featuredNews?: FeaturedProjectData;
  relatedNews?: Project[];
  isLightMode?: boolean;
  className?: string;
}

const PetroNewsSection: React.FC<PetroNewsSectionProps> = ({
  featuredNews = defaultFeaturedNews,
  relatedNews = defaultRelatedNews,
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
    ["100%", "70%", "40%"]
  );

  // Animate vertical line height - shorten from bottom as scroll
  const verticalLineHeight = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["120px", "90px", "60px"]
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
        {/* Two Column Layout - Reversed */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 laptop:gap-16 fhd:gap-20 qhd:gap-24">
          {/* Left Column - Related News */}
          <div className="flex items-stretch col-span-2">
            <RelatedProjects
              ref={relatedProjectsRef}
              projects={relatedNews}
              title={{
                prefix: "TIN TỨC",
                suffix: "DẦU KHÍ",
              }}
              viewAllText="XEM TẤT CẢ"
              isLightMode={isLightMode}
              className="w-full"
              viewAllLink="/tintuc/tin-dau-khi"
            />
          </div>

          {/* Right Column - Featured News */}
          <div className="lg:sticky lg:top-24 lg:self-start col-span-3">
            <FeaturedProject project={featuredNews} isLightMode={isLightMode} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PetroNewsSection;
