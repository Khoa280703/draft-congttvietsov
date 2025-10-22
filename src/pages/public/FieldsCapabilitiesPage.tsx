import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";
import { FieldsCapabilitiesSection } from "@/components/PublicSystem/FieldsCapabilitiesPage";
import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";

const FieldsCapabilitiesPage: React.FC = () => {
  const getBreadcrumbs = () => {
    return [
      { label: "Trang chủ", href: "/" },
      { label: "Lĩnh Vực & Năng Lực Hoạt Động" },
    ];
  };

  return (
    <>
      <PageHeader
        title="Lĩnh Vực & Năng Lực Hoạt Động"
        backgroundImage={bannerDanKhoan}
        breadcrumbs={getBreadcrumbs()}
      />
      <FieldsCapabilitiesSection />
    </>
  );
};

export default FieldsCapabilitiesPage;
