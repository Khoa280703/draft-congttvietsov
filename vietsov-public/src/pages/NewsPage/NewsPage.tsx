import React from "react";
import { PageHeader } from "@/components";
import DetailPage from "@/pages/NewsPage/DetailPage";
import MediaLibraryPage from "@/pages/NewsPage/MediaLibraryPage/index";
import CommunityActivityPage from "@/pages/NewsPage/CommunityActivityPage";
import ProductionActivityPage from "@/pages/NewsPage/ProductionActivityPage";
import OilNewsPage from "@/pages/NewsPage/OilNewsPage";
import NewsHomePage from "@/pages/NewsPage/NewsHomePage";
import danKhoanBackground from "@/assets/background-slider/gian-khoan.jpg";
import { Routes, Route, useLocation } from "react-router-dom";

const NewsPage: React.FC = () => {
  const location = useLocation();

  const getBreadcrumbs = () => {
    switch (location.pathname) {
      case "/tintuc":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Tin Tức & Sự Kiện" },
        ];
      case "/tintuc/hoat-dong-doan-the":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Tin Tức & Sự Kiện", href: "/tintuc" },
          { label: "Hoạt động đoàn thể" },
        ];
      case "/tintuc/hoat-dong-sx-kd":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Tin Tức & Sự Kiện", href: "/tintuc" },
          { label: "Hoạt động SX - KD" },
        ];
      case "/tintuc/tin-dau-khi":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Tin Tức & Sự Kiện", href: "/tintuc" },
          { label: "Tin dầu khí" },
        ];
      case "/tintuc/thu-vien-anh-video":
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Tin Tức & Sự Kiện", href: "/tintuc" },
          { label: "Thư viện hình ảnh và video" },
        ];
      default:
        return [
          { label: "Trang chủ", href: "/" },
          { label: "Tin Tức & Sự Kiện" },
        ];
    }
  };

  return (
    <>
      <PageHeader
        title="Tin Tức & Sự Kiện"
        backgroundImage={danKhoanBackground}
        breadcrumbs={getBreadcrumbs()}
      />
      <Routes>
        <Route path="/" element={<NewsHomePage />} />
        <Route path="/chi-tiet" element={<DetailPage />} />
        <Route path="/hoat-dong-sx-kd" element={<ProductionActivityPage />} />
        <Route path="/hoat-dong-doan-the" element={<CommunityActivityPage />} />
        <Route path="/tin-dau-khi" element={<OilNewsPage />} />
        <Route path="/thu-vien-anh-video" element={<MediaLibraryPage />} />
      </Routes>
    </>
  );
};

export default NewsPage;
