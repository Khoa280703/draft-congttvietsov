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
import DotLineLReverse from "./DotLineLReverse";
import { defaultFeaturedNews, defaultRelatedNews } from "./data";
import { useLinePosition } from "../VisionMission/useLinePosition";

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
  const lineTop = useLinePosition(titleRef, containerRef, 200);

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
        className="hidden md:block absolute left-0 w-90 pointer-events-none z-10 overflow-visible"
        style={{
          height: "120px",
          top: `${lineTop}px`,
        }}
      >
        <DotLineLReverse
          dotColor="#F07B22"
          lineColor={isLightMode ? "#222E50" : "#ffffff"}
          dotSize={24}
          lineWidth={3}
          horizontalLineWidth={horizontalLineWidth}
          verticalLineHeight={verticalLineHeight}
          className="w-full"
        />
      </div>

      <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 h-[120vh] flex items-center w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
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
