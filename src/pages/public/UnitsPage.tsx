import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";
import { LandingUnits } from "@/components/PublicSystem/UnitsPage";
import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";

const UnitsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Đơn vị trực thuộc"
        backgroundImage={bannerDanKhoan}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Đơn vị trực thuộc" },
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        <LandingUnits />
      </div>
    </>
  );
};

export default UnitsPage;
