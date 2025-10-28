import React from "react";
import PageHeader from "@/components/PageHeader";
import { FieldsCapabilitiesSection } from "@/components/FieldsCapabilitiesPage";
import danKhoanBackground from "@/assets/background-slider/gian-khoan.jpg";

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
        backgroundImage={danKhoanBackground}
        breadcrumbs={getBreadcrumbs()}
      />
      <FieldsCapabilitiesSection />
    </>
  );
};

export default FieldsCapabilitiesPage;
