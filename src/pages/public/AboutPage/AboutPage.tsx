import React from "react";
import { PageHeader } from "@/components/PublicSystem";
import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";
import {
  JointVentureSection,
  HistorySection,
  GeneralIntro,
  OrgStructureSection,
  LeadershipSection,
  AchievementsSection,
  CapabilitiesSection,
  ArchivePhotos,
} from "@/components/PublicSystem/AboutPage";
import LeaderPage from "./LeaderPage";
import { Routes, Route, useLocation } from "react-router-dom";

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
        backgroundImage={bannerDanKhoan}
        breadcrumbs={getBreadcrumbs()}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <JointVentureSection />
              <HistorySection />
              <GeneralIntro />
              <OrgStructureSection />
              <LeadershipSection />
              <AchievementsSection />
              <CapabilitiesSection />
              <ArchivePhotos />
            </>
          }
        />
        <Route path="/ban-lanh-dao" element={<LeaderPage />} />
      </Routes>
    </>
  );
};

export default AboutPage;
