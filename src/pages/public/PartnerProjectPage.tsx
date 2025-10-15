import React from "react";
import { PageHeader } from "@/components/PublicSystem";
import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";
import {
  CooperationSection,
  PartnerMarquee,
  FeaturedProjects,
} from "@/components/PublicSystem/PartnerProjectPage";

const PartnerProjectPage: React.FC = () => {
  const getBreadcrumbs = () => {
    return [{ label: "Trang chủ", href: "/" }, { label: "Đối tác và dự án" }];
  };
  return (
    <div>
      <PageHeader
        title="Đối tác và dự án"
        backgroundImage={bannerDanKhoan}
        breadcrumbs={getBreadcrumbs()}
      />
      <CooperationSection />
      <PartnerMarquee />
      <FeaturedProjects />
    </div>
  );
};

export default PartnerProjectPage;
