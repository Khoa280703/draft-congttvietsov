import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  SliderHome,
  PartnerSection,
  VisionMission,
  TypicalProjects,
  PetroNews,
} from "@/components/HomePage";
import { CapabilitiesSection } from "@/components/AboutPage";
import { SectionWithTitle } from "@/components";
// import { BreakingNewsSlider } from "@/components/PriviteSystem/HomePage";
import AnimatedSection from "@/components/AnimatedSection";

const HomePage: React.FC = () => {
  const visionMissionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (visionMissionRef.current) {
        const height = visionMissionRef.current.offsetHeight;
        setSectionHeight(height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    if (visionMissionRef.current) {
      resizeObserver.observe(visionMissionRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateHeight);
      resizeObserver.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: visionMissionRef,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  // Opacity fade in
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 1, 1, 0.9]
  );

  const nextSectionMargin = useTransform(
    scrollYProgress,
    (progress) => progress * sectionHeight * -0.3
  );

  return (
    <div ref={containerRef}>
      <SliderHome basePath="public" />

      <div className="relative">
        <motion.div
          ref={visionMissionRef}
          className="sticky top-0 z-10"
          style={{
            y,
            opacity,
          }}
        >
          <AnimatedSection
            animation="fadeInUp"
            delay={100}
            className="bg-vietsov-background2"
          >
            <SectionWithTitle
              title="Tầm nhìn – Sứ mệnh"
              description="Doanh nghiệp dầu khí và năng lượng hàng đầu khu vực, phát triển bền vững và tiên phong trong chuyển đổi năng lượng, đồng thời khai thác hiệu quả tài nguyên."
              sectionClassName="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-32 lg:pb-32 inch32:pt-22 inch32:pb-15"
            >
              <VisionMission />
            </SectionWithTitle>
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
