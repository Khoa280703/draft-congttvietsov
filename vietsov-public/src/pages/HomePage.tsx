import React, { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import {
  SliderHome,
  PartnerSection,
  VisionMission,
  TypicalProjectsSection,
  PetroNewsSection,
} from "@/components/HomePage";
import type { VisionMissionRef } from "@/components/HomePage/VisionMission";
import { CapabilitiesSectionParallax } from "@/components/AboutPage";
// import { BreakingNewsSlider } from "@/components/PriviteSystem/HomePage";
import AnimatedSection from "@/components/AnimatedSection";
import { useStickyScroll } from "@/hooks/useStickyScroll";
import { useHomePageTheme } from "@/hooks/useHomePageTheme";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import HomePageNavigation from "@/components/HomePage/HomePageNavigation";

const HomePage: React.FC = () => {
  // Enable smooth scroll for HomePage
  useSmoothScroll();

  const containerRef = useRef<HTMLDivElement>(null);
  const visionMissionRef = useRef<VisionMissionRef>(null);
  const visionMissionWrapperRef = useRef<HTMLDivElement>(null);
  const capabilitiesSectionRef = useRef<HTMLDivElement>(null);
  const typicalProjectsSectionRef = useRef<HTMLDivElement>(null);
  const petroNewsSectionRef = useRef<HTMLDivElement>(null);
  const partnerSectionRef = useRef<HTMLDivElement>(null);
  const sliderHomeRef = useRef<HTMLDivElement>(null);

  const { ref, y, nextSectionMargin, wrapperMinHeight } = useStickyScroll({
    transformRange: { start: 0, mid: -8, end: -15 },
    defaultHeight: 800,
    marginMultiplier: { mid: -0.08, end: -0.15 },
  });

  const { isLightMode } = useHomePageTheme(
    visionMissionRef.current?.missionSectionRef || null,
    capabilitiesSectionRef,
    typicalProjectsSectionRef,
    petroNewsSectionRef
  );

  // Navigation sections
  const navigationSections = [
    { id: "slider", label: "Trang chủ", ref: sliderHomeRef },
    {
      id: "vision-mission",
      label: "Tầm nhìn - Sứ mệnh",
      ref: visionMissionWrapperRef,
    },
    {
      id: "capabilities",
      label: "Lĩnh vực hoạt động",
      ref: capabilitiesSectionRef,
    },
    {
      id: "projects",
      label: "Dự án tiêu biểu",
      ref: typicalProjectsSectionRef,
    },
    {
      id: "news",
      label: "Tin tức dầu khí",
      ref: petroNewsSectionRef,
    },
    { id: "partners", label: "Đối tác", ref: partnerSectionRef },
  ];

  return (
    <div ref={containerRef}>
      <div ref={sliderHomeRef}>
        <SliderHome basePath="public" />
      </div>

      <div
        className="relative"
        style={{ minHeight: `${wrapperMinHeight}px` }}
        ref={visionMissionWrapperRef}
      >
        <motion.div
          ref={ref}
          className="sticky top-0 z-[5]"
          style={{
            y,
            willChange: "transform",
          }}
        >
          <AnimatedSection animation="fadeInUp" delay={100}>
            <div>
              <VisionMission ref={visionMissionRef} isLightMode={isLightMode} />
            </div>
          </AnimatedSection>
        </motion.div>
      </div>

      <motion.div
        style={{
          marginTop: useTransform(nextSectionMargin, (value) => `${value}px`),
        }}
      >
        <div ref={capabilitiesSectionRef}>
          <CapabilitiesSectionParallax isLightMode={isLightMode} />
        </div>
      </motion.div>

      <div ref={typicalProjectsSectionRef}>
        <TypicalProjectsSection isLightMode={isLightMode} />
      </div>

      <div ref={petroNewsSectionRef}>
        <PetroNewsSection isLightMode={isLightMode} />
      </div>

      <AnimatedSection animation="fadeInUp" delay={100}>
        <div
          ref={partnerSectionRef}
          className="pt-16 md:pt-20 lg:pt-24 inch32:pt-32"
        >
          <PartnerSection isLightMode={isLightMode} />
        </div>
      </AnimatedSection>

      {/* Navigation */}
      <HomePageNavigation sections={navigationSections} />
    </div>
  );
};

export default HomePage;
