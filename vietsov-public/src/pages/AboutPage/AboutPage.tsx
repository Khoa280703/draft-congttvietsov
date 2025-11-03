import React from "react";
import { PageHeader } from "@/components";
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
                <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-14 lg:pb-10 2xl:pt-22 2xl:pb-15 px-4 md:px-12 lg:px-60 2xl:px-80">
                  <div className="text-center mb-8 md:mb-12 lg:mb-10 2xl:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl font-bold">
                      Liên doanh Việt - Nga
                    </h2>
                  </div>
                  <JointVentureSection />
                </section>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={100}>
                <HistorySection />
              </AnimatedSection>

              {/* Core Values Section */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-14 lg:pb-10 2xl:pt-22 2xl:pb-15 px-4 md:px-12 lg:px-60 2xl:px-80">
                  <div className="text-center mb-8 md:mb-12 lg:mb-10 2xl:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl font-bold">
                      Giá trị cốt lõi
                    </h2>
                  </div>
                  <CoreValuesSection />
                </section>
                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-vietsov-green to-transparent max-w-3xl mx-auto"></div>
              </AnimatedSection>

              {/* Organization Structure */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-14 lg:pb-10 2xl:pt-22 2xl:pb-15 px-4 md:px-12 lg:px-60 2xl:px-80">
                  <div className="text-center mb-8 md:mb-12 lg:mb-10 2xl:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl font-bold">
                      Cơ cấu tổ chức
                    </h2>
                  </div>
                  <OrgStructureSection />
                </section>
              </AnimatedSection>

              {/* Achievements */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <AchievementsSection />
              </AnimatedSection>

              {/* Capabilities */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-14 lg:pb-10 2xl:pt-22 2xl:pb-15 px-4 md:px-12 lg:px-60 2xl:px-80">
                  <div className="text-center mb-8 md:mb-12 lg:mb-10 2xl:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl font-bold">
                      Lĩnh Vực Hoạt Động
                    </h2>
                  </div>
                  <CapabilitiesSection />
                </section>
              </AnimatedSection>

              {/* Archive Photos */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-14 lg:pb-10 2xl:pt-22 2xl:pb-15 px-4 md:px-12 lg:px-60 2xl:px-80">
                  <ArchivePhotosSection />
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
