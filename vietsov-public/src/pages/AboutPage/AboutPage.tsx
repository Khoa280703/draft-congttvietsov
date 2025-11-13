import React, { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { PageHeader, SectionWithTitle } from "@/components";
import danKhoanBackground from "@/assets/background-slider/gian-khoan.jpg";
import {
  JointVentureSection,
  OrgStructureSection,
  AchievementsSection,
  CapabilitiesSection,
  CoreValuesSectionV2,
  ArchivePhotosSection,
  HistorySection,
} from "@/components/AboutPage";
import {
  FeaturedProjectSlider,
  defaultFeaturedProjects,
} from "@/components/Shared";
import LeaderPage from "./LeaderPage";
import { Routes, Route, useLocation } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { useStickyScroll } from "@/hooks/useStickyScroll";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useHomePageTheme } from "@/hooks/useHomePageTheme";
import HomePageNavigation from "@/components/HomePage/HomePageNavigation";

const AboutPage: React.FC = () => {
  // Enable smooth scroll for AboutPage
  useSmoothScroll();

  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const jointVentureSectionRef = useRef<HTMLDivElement>(null);
  const historySectionRef = useRef<HTMLDivElement>(null);
  const coreValuesSectionRef = useRef<HTMLDivElement>(null);
  const orgStructureSectionRef = useRef<HTMLDivElement>(null);
  const achievementsSectionRef = useRef<HTMLDivElement>(null);
  const capabilitiesSectionRef = useRef<HTMLDivElement>(null);
  const archivePhotosSectionRef = useRef<HTMLDivElement>(null);
  // Empty refs for sections not in AboutPage (required by useHomePageTheme)
  const emptyRef = useRef<HTMLDivElement>(null);

  const { ref, y, opacity, nextSectionMargin, wrapperMinHeight } =
    useStickyScroll();

  // Theme management - similar to HomePage
  // Note: isLightMode is kept for future use when replacing child components
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isLightMode } = useHomePageTheme(
    emptyRef, // No mission section in AboutPage - using empty ref
    capabilitiesSectionRef,
    emptyRef, // No typical projects section - using empty ref
    archivePhotosSectionRef // Use archive photos as light mode trigger
  );

  const getBreadcrumbs = () => {
    switch (location.pathname) {
      case "/gioithieu":
        return [{ label: "Trang chủ", href: "/" }, { label: "Giới thiệu" }];
      case "/gioithieu/ban-lanh-dao":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Giới thiệu", href: "/gioithieu" },
          { label: "Ban lãnh đạo" },
        ];
    }
  };

  // Navigation sections
  const navigationSections = [
    {
      id: "joint-venture",
      label: "Liên doanh Việt - Nga",
      ref: jointVentureSectionRef,
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
      <PageHeader
        title="Về chúng tôi"
        backgroundImage={danKhoanBackground}
        breadcrumbs={getBreadcrumbs()}
      />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* Wrapper để tạo không gian scroll - quan trọng để tránh giật */}
              <div
                className="relative"
                style={{ minHeight: `${wrapperMinHeight}px` }}
              >
                <motion.div
                  ref={ref}
                  className="sticky top-0 z-[5]"
                  style={{
                    y,
                    opacity,
                    willChange: "transform, opacity", // Tối ưu performance
                  }}
                >
                  <AnimatedSection
                    animation="fadeInUp"
                    delay={100}
                    className="bg-vietsov-background"
                  >
                    <div ref={jointVentureSectionRef}>
                      <SectionWithTitle
                        title="Liên doanh Việt - Nga"
                        titleColor="text-vietsov-green"
                      >
                        <JointVentureSection />
                      </SectionWithTitle>
                    </div>
                  </AnimatedSection>
                </motion.div>
              </div>

              {/* Section tiếp theo với negative margin để bù cho transform */}
              <motion.div
                style={{
                  marginTop: useTransform(
                    nextSectionMargin,
                    (value) => `${value}px`
                  ),
                }}
              >
                <div ref={historySectionRef}>
                  <HistorySection image={danKhoanBackground} />
                </div>
              </motion.div>
              {/* Core Values Section */}
              <AnimatedSection
                animation="fadeInUp"
                delay={100}
                className="bg-[#f0faf4]"
              >
                <div ref={coreValuesSectionRef}>
                  <CoreValuesSectionV2 />
                </div>
              </AnimatedSection>
              {/* Organization Structure */}
              <AnimatedSection
                animation="fadeInUp"
                delay={100}
                className="bg-vietsov-background"
              >
                <div ref={orgStructureSectionRef}>
                  <SectionWithTitle
                    title="Cơ cấu tổ chức"
                    titleColor="text-vietsov-green"
                  >
                    <OrgStructureSection />
                  </SectionWithTitle>
                </div>
              </AnimatedSection>
              {/* Achievements */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <div ref={achievementsSectionRef}>
                  <AchievementsSection />
                </div>
              </AnimatedSection>
              {/* Capabilities */}
              <AnimatedSection
                animation="fadeInUp"
                delay={100}
                className="bg-vietsov-background2"
              >
                <div ref={capabilitiesSectionRef}>
                  <SectionWithTitle title="Lĩnh Vực Hoạt Động">
                    <CapabilitiesSection />
                  </SectionWithTitle>
                </div>
              </AnimatedSection>
              {/* Archive Photos */}
              <AnimatedSection
                animation="fadeInUp"
                delay={100}
                className="pb-16"
              >
                <div ref={archivePhotosSectionRef}>
                  <SectionWithTitle title="Hình ảnh tư liệu">
                    <ArchivePhotosSection hideTitle={true} />
                  </SectionWithTitle>
                </div>
              </AnimatedSection>

              <div ref={capabilitiesSectionRef}>
                <FeaturedProjectSlider projects={defaultFeaturedProjects} />
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
