import React, { useRef, useEffect } from "react";
import danKhoanBackground from "@/assets/background-slider/gian-khoan.jpg";
import {
  AboutSection,
  OrgStructureSection,
  AchievementsSection,
  CapabilitiesSectionParallax,
  CoreValuesSectionV2,
  HistorySection,
} from "@/components/AboutPage";
import {
  FeaturedProjectSlider,
  defaultFeaturedProjects,
} from "@/components/Shared";
import LeaderPage from "./LeaderPage";
import { Routes, Route } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useAboutPageTheme } from "@/hooks/useAboutPageTheme";
import HomePageNavigation from "@/components/HomePage/HomePageNavigation";

const AboutPage: React.FC = () => {
  // Enable smooth scroll for AboutPage
  useSmoothScroll();

  const containerRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const historySectionRef = useRef<HTMLDivElement>(null);
  const coreValuesSectionRef = useRef<HTMLDivElement>(null);
  const humanValuesRef = useRef<HTMLDivElement>(null);
  const orgStructureSectionRef = useRef<HTMLDivElement>(null);
  const achievementsSectionRef = useRef<HTMLDivElement>(null);
  const capabilitiesSectionRef = useRef<HTMLDivElement>(null);
  const archivePhotosSectionRef = useRef<HTMLDivElement>(null);

  // Theme management for AboutPage
  // Detect khi scroll đến CardStack thứ 2 (Giá trị Con người) để chuyển sang dark mode
  const { isLightMode } = useAboutPageTheme(
    coreValuesSectionRef,
    humanValuesRef,
    orgStructureSectionRef,
    capabilitiesSectionRef,
    archivePhotosSectionRef
  );

  useEffect(() => {
    if (aboutSectionRef.current) {
      // Small delay to ensure page is fully rendered
      const timer = setTimeout(() => {
        aboutSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  // Navigation sections
  const navigationSections = [
    {
      id: "about",
      label: "Về chúng tôi",
      ref: aboutSectionRef,
    },
    {
      id: "history",
      label: "Lịch sử",
      ref: historySectionRef,
    },
    {
      id: "core-values",
      label: "Giá trị cốt lõi",
      ref: coreValuesSectionRef,
    },
    {
      id: "org-structure",
      label: "Cơ cấu tổ chức",
      ref: orgStructureSectionRef,
    },
    {
      id: "achievements",
      label: "Thành tựu",
      ref: achievementsSectionRef,
    },
    {
      id: "capabilities",
      label: "Lĩnh vực hoạt động",
      ref: capabilitiesSectionRef,
    },
    {
      id: "archive-photos",
      label: "Hình ảnh tư liệu",
      ref: archivePhotosSectionRef,
    },
  ];

  return (
    <div ref={containerRef}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div ref={aboutSectionRef}>
                <AboutSection />
              </div>
              <div ref={historySectionRef}>
                <HistorySection image={danKhoanBackground} />
              </div>
              {/* Core Values Section */}
              <div ref={coreValuesSectionRef}>
                <CoreValuesSectionV2
                  isLightMode={isLightMode}
                  humanValuesRef={humanValuesRef}
                />
              </div>
              {/* Organization Structure */}
              <div ref={orgStructureSectionRef}>
                <OrgStructureSection isLightMode={isLightMode} />
              </div>
              {/* Achievements */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <div ref={achievementsSectionRef}>
                  <AchievementsSection />
                </div>
              </AnimatedSection>
              {/* Capabilities */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <div ref={capabilitiesSectionRef}>
                  <CapabilitiesSectionParallax isLightMode={isLightMode} />
                </div>
              </AnimatedSection>
              {/* Archive Photos */}
              {/* <AnimatedSection
                animation="fadeInUp"
                delay={100}
                className="pb-16"
              >
                <div ref={archivePhotosSectionRef}>
                  <SectionWithTitle title="Hình ảnh tư liệu">
                    <ArchivePhotosSection hideTitle={true} />
                  </SectionWithTitle>
                </div>
              </AnimatedSection> */}

              <div ref={archivePhotosSectionRef}>
                <FeaturedProjectSlider
                  projects={defaultFeaturedProjects}
                  title="Hình ảnh tư liệu"
                  seeMoreLink="/tintuc/thu-vien-anh-video"
                  isLightMode={isLightMode}
                />
              </div>

              {/* Navigation */}
              <HomePageNavigation sections={navigationSections} />
            </div>
          }
        />
        <Route path="/ban-lanh-dao" element={<LeaderPage />} />
      </Routes>
    </div>
  );
};

export default AboutPage;
