import React from "react";
import { PageHeader } from "@/components/PublicSystem";
import {
  ProductionActivitySection,
  CommunityActivitySection,
  OilNewsSection,
  MediaLibrary,
} from "@/components/PublicSystem/NewsPage";
import CommunityActivityPage from "@/pages/public/NewsPage/CommunityActivityPage";
import MediaLibraryPage from "@/pages/public/NewsPage/MediaLibraryPage";
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
      case "/tintuc/thu-vien-anh-video":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức - Sự kiện", href: "/tintuc" },
          { label: "Thư viện hình ảnh và video" },
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
              <MediaLibrary />
            </>
          }
        />
        <Route path="/hoat-dong-doan-the" element={<CommunityActivityPage />} />
        <Route path="/thu-vien-anh-video" element={<MediaLibraryPage />} />
      </Routes>
    </>
  );
};

export default NewsPage;
