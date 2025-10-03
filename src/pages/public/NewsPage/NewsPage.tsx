import React from "react";
import { PageHeader } from "@/components/PublicSystem";
import {
  ProductionActivitySection,
  CommunityActivitySection,
  OilNewsSection,
} from "@/components/PublicSystem/NewsPage";
import CommunityActivityPage from "@/pages/public/NewsPage/CommunityActivityPage";
import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";
import { Routes, Route, useLocation } from "react-router-dom";

const NewsPage: React.FC = () => {
  const location = useLocation();

  const getBreadcrumbs = () => {
    switch (location.pathname) {
      case "/tintuc":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức - Sự kiện" },
        ];
      case "/tintuc/hoat-dong-doan-the":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức - Sự kiện", href: "/tintuc" },
          { label: "Hoạt động đoàn thể" },
        ];
      default:
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức - Sự kiện" },
        ];
    }
  };

  return (
    <>
      <PageHeader
        title="Tin tức - Sự kiện"
        backgroundImage={bannerDanKhoan}
        breadcrumbs={getBreadcrumbs()}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductionActivitySection />
              <CommunityActivitySection />
              <OilNewsSection />
            </>
          }
        />
        <Route path="/hoat-dong-doan-the" element={<CommunityActivityPage />} />
      </Routes>
    </>
  );
};

export default NewsPage;
