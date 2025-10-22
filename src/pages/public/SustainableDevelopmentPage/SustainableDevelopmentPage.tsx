import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";
import SustainableDevelopmentSection from "@/components/PublicSystem/SustainableDevelopmentPage/SustainableDevelopmentSection";
import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";

const SustainableDevelopmentPage: React.FC = () => {
  const getBreadcrumbs = () => {
    return [
      { label: "Trang chủ", href: "/" },
      { label: "Phát Triển Bền Vững" },
    ];
  };

  return (
    <>
      <PageHeader
        title="Phát Triển Bền Vững"
        backgroundImage={bannerDanKhoan}
        breadcrumbs={getBreadcrumbs()}
      />
      <SustainableDevelopmentSection />
    </>
  );
};

export default SustainableDevelopmentPage;
