import React from "react";
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
} from "@/components/AboutPage";
import LeaderPage from "./LeaderPage";
import { Routes, Route, useLocation } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { useStickyScroll } from "@/hooks/useStickyScroll";

const InternalAboutPage: React.FC = () => {
  const location = useLocation();
  const { ref, y, opacity, nextSectionMargin, wrapperMinHeight } =
    useStickyScroll();

  const getBreadcrumbs = () => {
    switch (location.pathname) {
      case "/internal/gioithieu":
        return [
          { label: "Trang chủ", href: "/internal" },
          { label: "Giới thiệu" },
        ];
      case "/internal/gioithieu/ban-lanh-dao":
        return [
          { label: "Trang chủ", href: "/internal" },
          { label: "Giới thiệu", href: "/internal/gioithieu" },
          { label: "Ban lãnh đạo" },
        ];
    }
  };

  return (
    <>
      <PageHeader
        title="Về chúng tôi"
        backgroundImage={danKhoanBackground}
        breadcrumbs={getBreadcrumbs()}
      />
      <Routes>
        <Route
          path="/"
          element={
            <div className="">
              {/* Wrapper để tạo không gian scroll - quan trọng để tránh giật */}
              <div
                className="relative"
                style={{ minHeight: `${wrapperMinHeight}px` }}
              >
                <motion.div
                  ref={ref}
                  className="sticky top-0 z-10"
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
                    <SectionWithTitle
                      title="Liên doanh Việt - Nga"
                      titleColor="text-vietsov-green"
                    >
                      <JointVentureSection />
                    </SectionWithTitle>
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
              </motion.div>
              {/* Core Values Section */}
              <AnimatedSection
                animation="fadeInUp"
                delay={100}
                className="bg-vietsov-background2"
              >
                <CoreValuesSectionV2 />
              </AnimatedSection>
              {/* Organization Structure */}
              <AnimatedSection
                animation="fadeInUp"
                delay={100}
                className="bg-vietsov-background"
              >
                <SectionWithTitle
                  title="Cơ cấu tổ chức"
                  titleColor="text-vietsov-green"
                >
                  <OrgStructureSection />
                </SectionWithTitle>
              </AnimatedSection>
              {/* Achievements */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <AchievementsSection />
              </AnimatedSection>
              {/* Capabilities */}
              <AnimatedSection
                animation="fadeInUp"
                delay={100}
                className="bg-vietsov-background2"
              >
                <SectionWithTitle title="Lĩnh Vực Hoạt Động">
                  <CapabilitiesSection />
                </SectionWithTitle>
              </AnimatedSection>
              {/* Archive Photos */}
              <AnimatedSection
                animation="fadeInUp"
                delay={100}
                className="pb-16"
              >
                <SectionWithTitle title="Hình ảnh tư liệu">
                  <ArchivePhotosSection hideTitle={true} />
                </SectionWithTitle>
              </AnimatedSection>
            </div>
          }
        />
        <Route path="/ban-lanh-dao" element={<LeaderPage />} />
      </Routes>
    </>
  );
};

export default InternalAboutPage;
