import React from "react";
import PageHeader from "@/components/PublicSystem/PageHeader";
import {
  ProductionActivitySection,
  CommunityActivitySection,
  OilNewsSection,
} from "@/components/PublicSystem/NewsPage";

const NewsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Tin tức - Sự kiện"
        backgroundImage="/api/placeholder/1920/400"
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
