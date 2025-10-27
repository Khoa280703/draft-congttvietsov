import React from "react";
import { PageHeader } from "@/components/PublicSystem";
import danKhoanBackground from "@/assets/background-slider/gian-khoan.jpg";
import {
  JointVentureSection,
  HistorySection,
  OrgStructureSection,
  LeadershipSection,
  AchievementsSection,
  CapabilitiesSection,
  CoreValuesSection,
  ArchivePhotosSection,
} from "@/components/PublicSystem/AboutPage";
import LeaderPage from "./LeaderPage";
import { Routes, Route, useLocation } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const InternalAboutPage: React.FC = () => {
  const location = useLocation();

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
            <div className="bg-vietsov-background">
              <AnimatedSection animation="fadeInUp" delay={100}>
                <section className="py-8 md:py-16 container mx-auto px-4 md:px-12">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
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
                <section className="py-8 md:py-16 container mx-auto px-4 md:px-12">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                      Giá trị cốt lõi
                    </h2>
                  </div>
                  <CoreValuesSection />
                </section>
              </AnimatedSection>

              {/* Organization Structure */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <section className="py-8 md:py-16 container mx-auto px-4 md:px-12">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                      Cơ cấu tổ chức
                    </h2>
                  </div>
                  <OrgStructureSection />
                </section>
              </AnimatedSection>

              {/* Leadership */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <section className="py-8 md:py-16 container mx-auto px-4 md:px-12">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                      Ban lãnh đạo
                    </h2>
                  </div>
                  <LeadershipSection />
                </section>
              </AnimatedSection>

              {/* Achievements */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <AchievementsSection />
              </AnimatedSection>

              {/* Capabilities */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <section className="py-8 md:py-16 container mx-auto px-4 md:px-12">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                      Lĩnh Vực Hoạt Động
                    </h2>
                  </div>
                  <CapabilitiesSection />
                </section>
              </AnimatedSection>

              {/* Archive Photos */}
              <AnimatedSection animation="fadeInUp" delay={100}>
                <section className="py-8 md:py-16 container mx-auto px-4 md:px-12">
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

export default InternalAboutPage;
