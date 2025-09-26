import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";
import {
  ProductionActivitySection,
  CommunityActivitySection,
  OilNewsSection,
} from "@/components/PublicSystem/NewsPage";
import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";

const NewsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Tin tức - Sự kiện"
        backgroundImage={bannerDanKhoan}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức - Sự kiện" },
        ]}
      />
      <ProductionActivitySection />
      <CommunityActivitySection />
      <OilNewsSection />
    </>
  );
};

export default NewsPage;
