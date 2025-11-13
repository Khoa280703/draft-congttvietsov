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
              <div className="py-8 md:py-12 md:pt-18 md:pb-12 lg:pt-20 lg:pb-16 inch32:pt-22 inch32:pb-15">
                <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
                  <CooperationSection />
                </div>
              </div>
              <div className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-16 inch32:py-20">
                <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
                  <PartnerMarquee />
                </div>
              </div>
              <SectionWithTitle
                title="Dự án tiêu biểu"
                description="Khám phá những dự án nổi bật và thành tựu đáng tự hào của Vietsovpetro trong lĩnh vực dầu khí"
                sectionClassName="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-16 lg:pb-32 inch32:pt-22 inch32:pb-15"
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
