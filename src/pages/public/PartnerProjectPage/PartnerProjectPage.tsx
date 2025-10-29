import React from "react";
import { PageHeader } from "@/components/PublicSystem";
import danKhoanBackground from "@/assets/background-slider/gian-khoan.jpg";
import {
  CooperationSection,
  PartnerMarquee,
  FeaturedProjects,
} from "@/components/PublicSystem/PartnerProjectPage";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./ProjectPage/ProjectPage";
import ProjectDetailPage from "./ProjectDetailPage";

const PartnerProjectPage: React.FC = () => {
  const getBreadcrumbs = () => {
    return [{ label: "Trang chủ", href: "/" }, { label: "Đối Tác & Dự Án" }];
  };
  return (
    <div>
      <PageHeader
        title="Đối Tác & Dự Án"
        backgroundImage={danKhoanBackground}
        breadcrumbs={getBreadcrumbs()}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="py-8 md:py-16 container mx-auto px-4 md:px-12">
                <CooperationSection />
              </div>
              <div className="py-8 md:py-16 container mx-auto px-4 md:px-12">
                <PartnerMarquee />
              </div>
              <div className="py-8 md:py-16 container mx-auto px-4 md:px-12">
                <FeaturedProjects />
              </div>
            </>
          }
        />
        <Route path="/du-an" element={<ProjectPage />} />
        <Route path="/du-an/chi-tiet" element={<ProjectDetailPage />} />
      </Routes>
    </div>
  );
};

export default PartnerProjectPage;
