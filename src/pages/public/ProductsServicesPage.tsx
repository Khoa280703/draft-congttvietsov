import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";
import {
  AchievementsSection,
  ServicesSection,
} from "@/components/PublicSystem/ProductsPage";

const ProductsServicesPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Sản phẩm - Dịch vụ"
        backgroundImage="/api/placeholder/1920/400"
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
