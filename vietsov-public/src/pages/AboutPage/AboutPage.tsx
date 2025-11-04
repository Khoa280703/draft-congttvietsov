import React from "react";
import { PageHeader, SectionWithTitle } from "@/components";
import danKhoanBackground from "@/assets/background-slider/gian-khoan.jpg";
import {
  JointVentureSection,
  HistorySection,
  OrgStructureSection,
  AchievementsSection,
  CapabilitiesSection,
  CoreValuesSection,
  ArchivePhotosSection,
} from "@/components/AboutPage";
import LeaderPage from "./LeaderPage";
import { Routes, Route, useLocation } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const AboutPage: React.FC = () => {
  const location = useLocation();

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
            <div className="bg-vietsov-background">
              <AnimatedSection animation="fadeInUp" delay={100}>
                <SectionWithTitle title="Liên doanh Việt - Nga">
                  <JointVentureSection />
                </SectionWithTitle>
              </AnimatedSection>
              <AnimatedSection animation="fadeInUp" delay={100}>
                <HistorySection />
              </AnimatedSection>
              {/* Core Values Section */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <SectionWithTitle title="Giá trị cốt lõi" showGradientLine>
                  <CoreValuesSection />
                </SectionWithTitle>
              </AnimatedSection>
              {/* Organization Structure */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <SectionWithTitle title="Cơ cấu tổ chức">
                  <OrgStructureSection />
                </SectionWithTitle>
              </AnimatedSection>
              {/* Achievements */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <AchievementsSection />
              </AnimatedSection>
              {/* Capabilities */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <SectionWithTitle title="Lĩnh Vực Hoạt Động">
                  <CapabilitiesSection />
                </SectionWithTitle>
              </AnimatedSection>
              {/* Archive Photos */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-16 inch32:pt-22 inch32:pb-15">
                  <div className="container mx-auto px-4">
                    <ArchivePhotosSection />
                  </div>
                </section>
              </AnimatedSection>
            </div>
          }
        />
        <Route path="/ban-lanh-dao" element={<LeaderPage />} />
      </Routes>
    </>
  );
};

export default AboutPage;
