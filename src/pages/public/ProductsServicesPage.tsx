import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";
import {
  AchievementsSection,
  ServicesSection,
} from "@/components/PublicSystem/ProductsPage";
import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";

const ProductsServicesPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Sản phẩm - Dịch vụ"
        backgroundImage={bannerDanKhoan}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm - Dịch vụ" },
        ]}
      />
      <AchievementsSection />
      <ServicesSection />
    </>
  );
};

export default ProductsServicesPage;
