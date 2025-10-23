import React from "react";
import { PageHeader } from "@/components/PublicSystem";
import {
  ProductionActivitySection,
  CommunityActivitySection,
  OilNewsSection,
} from "@/components/PublicSystem/NewsPage";
import { ArchivePhotosSection } from "@/components/PublicSystem/AboutPage";
import DetailPage from "@/pages/public/NewsPage/DetailPage";
import MediaLibraryPage from "@/pages/public/NewsPage/MediaLibraryPage";
import CommunityActivityPage from "@/pages/public/NewsPage/CommunityActivityPage";
import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";
import { Routes, Route, useLocation } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

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
        backgroundImage={bannerDanKhoan}
        breadcrumbs={getBreadcrumbs()}
      />
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-vietsov-background">
              <AnimatedSection animation="fadeInUp" delay={100}>
                <div className="bg-white">
                  <section className="py-8 md:py-16 container mx-auto px-4 md:px-12">
                    <ProductionActivitySection />
                  </section>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={200}>
                <section className="py-8 md:py-16 container mx-auto px-4 md:px-12">
                  <CommunityActivitySection />
                </section>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={300}>
                <section className="py-8 md:py-16 container mx-auto px-4 md:px-12">
                  <OilNewsSection />
                </section>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={400}>
                <section className="py-8 md:py-16 container mx-auto px-4 md:px-12">
                  <ArchivePhotosSection />
                </section>
              </AnimatedSection>
            </div>
          }
        />
        <Route path="/chi-tiet" element={<DetailPage />} />
        <Route path="/hoat-dong-doan-the" element={<CommunityActivityPage />} />
        <Route path="/thu-vien-anh-video" element={<MediaLibraryPage />} />
      </Routes>
    </>
  );
};

export default NewsPage;
