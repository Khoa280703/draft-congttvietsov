import React from "react";
import { PageHeader, SectionWithTitle } from "@/components";
import danKhoanBackground from "@/assets/background-slider/gian-khoan.jpg";
import {
  CooperationSection,
  PartnerMarquee,
  FeaturedProjects,
} from "@/components/PartnerProjectPage";
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
              <div className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-14 lg:pb-10 inch32:pt-22 inch32:pb-15">
                <div className="container mx-auto px-4">
                  <CooperationSection />
                </div>
              </div>
              <div className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-10 lg:pt-14 lg:pb-10 inch32:pt-22 inch32:pb-15">
                <div className="container mx-auto px-4">
                  <PartnerMarquee />
                </div>
              </div>
              <SectionWithTitle
                title="Dự án tiêu biểu"
                description="Khám phá những dự án nổi bật và thành tựu đáng tự hào của Vietsovpetro trong lĩnh vực dầu khí"
              >
                <FeaturedProjects />
              </SectionWithTitle>
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
