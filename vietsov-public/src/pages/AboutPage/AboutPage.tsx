import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
import { FullScreenBackgroundImage } from "@/components/Shared";
import LeaderPage from "./LeaderPage";
import { Routes, Route, useLocation } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const AboutPage: React.FC = () => {
  const location = useLocation();
  const jointVentureRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (jointVentureRef.current) {
        const height = jointVentureRef.current.offsetHeight;
        setSectionHeight(height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    if (jointVentureRef.current) {
      resizeObserver.observe(jointVentureRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateHeight);
      resizeObserver.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: jointVentureRef,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 1, 1]);

  const nextSectionMargin = useTransform(
    scrollYProgress,
    (progress) => progress * sectionHeight * -0.3
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
              <div className="relative">
                <motion.div
                  ref={jointVentureRef}
                  className="sticky top-0 z-10"
                  style={{
                    y,
                    opacity,
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
                <FullScreenBackgroundImage image={danKhoanBackground} />
                <AnimatedSection animation="fadeInUp" delay={100}>
                  <HistorySection />
                </AnimatedSection>
              </motion.div>
              {/* Core Values Section */}
              <AnimatedSection
                animation="fadeInUp"
                delay={100}
                className="bg-vietsov-background2"
              >
                <SectionWithTitle title="Giá trị cốt lõi" showGradientLine>
                  <CoreValuesSection />
                </SectionWithTitle>
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

export default AboutPage;
