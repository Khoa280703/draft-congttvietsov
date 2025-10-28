import React from "react";
import PageHeader from "@/components/PageHeader";
import {
  AchievementsSection,
  ServicesSection,
} from "@/components/ProductsPage";
import danKhoanBackground from "@/assets/background-slider/gian-khoan.jpg";

const ProductsServicesPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Sản phẩm - Dịch vụ"
        backgroundImage={danKhoanBackground}
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
