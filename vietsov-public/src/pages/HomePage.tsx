import React, { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import {
  SliderHome,
  PartnerSection,
  TypicalProjects,
  PetroNews,
  VisionMission,
} from "@/components/HomePage";
import { CapabilitiesSection } from "@/components/AboutPage";
import { SectionWithTitle } from "@/components";
// import { BreakingNewsSlider } from "@/components/PriviteSystem/HomePage";
import AnimatedSection from "@/components/AnimatedSection";
import { useStickyScroll } from "@/hooks/useStickyScroll";

const HomePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, y, opacity, nextSectionMargin, wrapperMinHeight } =
    useStickyScroll();

  return (
    <div ref={containerRef}>
      <SliderHome basePath="public" />

      <div className="relative" style={{ minHeight: `${wrapperMinHeight}px` }}>
        <motion.div
          ref={ref}
          className="sticky top-0 z-[5]"
          style={{
            y,
            opacity,
            willChange: "transform, opacity",
          }}
        >
          <AnimatedSection
            animation="fadeInUp"
            delay={100}
            className="bg-vietsov-background2"
          >
            <VisionMission />
          </AnimatedSection>
        </motion.div>
      </div>

      {/* Section tiếp theo với negative margin để bù cho transform của VisionMission */}
      <motion.div
        style={{
          marginTop: useTransform(nextSectionMargin, (value) => `${value}px`),
        }}
      >
        <AnimatedSection
          animation="fadeInUp"
          delay={100}
          className="bg-vietsov-background"
        >
          <SectionWithTitle
            title="Lĩnh Vực Hoạt Động"
            sectionClassName="py-8 md:py-12 lg:py-16 inch32:py-15"
            titleColor="text-vietsov-green"
          >
            <CapabilitiesSection />
          </SectionWithTitle>
        </AnimatedSection>
      </motion.div>

      <AnimatedSection
        animation="fadeInUp"
        delay={100}
        className="bg-vietsov-background2"
      >
        <div className="bg-white">
          <SectionWithTitle
            title="Dự án tiêu biểu"
            sectionClassName="py-8 md:py-12 lg:py-16 inch32:py-15"
          >
            <TypicalProjects />
          </SectionWithTitle>
        </div>
      </AnimatedSection>

      {/* Petro News Section */}
      <AnimatedSection
        animation="fadeInUp"
        delay={100}
        className="bg-vietsov-background"
      >
        <SectionWithTitle
          title="Tin tức Dầu khí"
          sectionClassName="py-8 md:py-12 lg:pt-16 lg:pb-16 inch32:py-15"
          titleColor="text-vietsov-green"
        >
          <PetroNews />
        </SectionWithTitle>
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp" delay={100}>
        <div className="pb-12 md:pb-16 lg:pb-20 inch32:pb-24">
          <PartnerSection />
        </div>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
