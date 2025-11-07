import React from "react";
import { PageHeader } from "@/components";
import {
  // ProductionActivitySection,
  // CommunityActivitySection,
  // OilNewsSection,
  ActivitySectionWithCategories,
} from "@/components/NewsPage";
// import { ArchivePhotosSection } from "@/components/AboutPage";
import DetailPage from "@/pages/NewsPage/DetailPage";
import MediaLibraryPage from "@/pages/NewsPage/MediaLibraryPage/index";
import CommunityActivityPage from "@/pages/NewsPage/CommunityActivityPage";
import ProductionActivityPage from "@/pages/NewsPage/ProductionActivityPage";
import OilNewsPage from "@/pages/NewsPage/OilNewsPage";
import danKhoanBackground from "@/assets/background-slider/gian-khoan.jpg";
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
        <Route
          path="/"
          element={
            <div className="bg-vietsov-background">
              <AnimatedSection
                animation="fadeInUp"
                delay={100}
                className="bg-vietsov-background pb-16"
              >
                {/* <SectionWithTitle
                  title="Tin tức nổi bật"
                  titleColor="text-vietsov-green"
                > */}
                <div className="container mx-auto px-4 py-12 lg:pt-20 lg:pb-16">
                  <ActivitySectionWithCategories />
                </div>
                {/* </SectionWithTitle> */}
              </AnimatedSection>
              {/* <AnimatedSection
                animation="fadeInUp"
                delay={100}
                className="bg-white"
              >
                <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-16 inch32:pt-22 inch32:pb-15">
                  <div className="container mx-auto px-4">
                    <ProductionActivitySection />
                  </div>
                </section>
              </AnimatedSection>

              <AnimatedSection
                animation="fadeInUp"
                delay={200}
                className="bg-vietsov-skin"
              >
                <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-16 inch32:pt-22 inch32:pb-15">
                  <div className="container mx-auto px-4">
                    <CommunityActivitySection />
                  </div>
                </section>
              </AnimatedSection>

              <AnimatedSection
                animation="fadeInUp"
                delay={300}
                className="bg-white"
              >
                <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-16 inch32:pt-22 inch32:pb-15">
                  <div className="container mx-auto px-4">
                    <OilNewsSection />
                  </div>
                </section>
              </AnimatedSection>

              <AnimatedSection
                animation="fadeInUp"
                delay={400}
                className="bg-vietsov-skin2"
              >
                <section className="py-8 md:py-12 md:pt-18 md:pb-12 lg:py-16 inch32:pt-22 inch32:pb-15">
                  <div className="container mx-auto px-4">
                    <ArchivePhotosSection />
                  </div>
                </section>
              </AnimatedSection> */}
            </div>
          }
        />
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
