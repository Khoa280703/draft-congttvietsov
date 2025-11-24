import {
  SliderHome,
  BreakingNewsSlider,
  FeaturedNewsLayout,
} from "@/components/Shared";
import type { FeaturedNewsItem } from "@/components/Shared/FeaturedNewsLayout";
import { NewsHome, VideoNewsSection } from "@/components/HomePage";
import { Sidebar } from "@/components";
import { Routes, Route } from "react-router-dom";
import { useSidebarState } from "@/components";
import NewsDetail from "./InternalNewsDetail";
import CommunityActivityPage from "./CommunityActivityPage";
import ProductionActivityPage from "./ProductionActivityPage";
import OilNewsPage from "./OilNewsPage";
import MediaLibraryPage from "./MediaLibraryPage/index";
import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

const InternalNewsDetail: React.FC = () => {
  const isSidebarOpen = useSidebarState();

  // Prepare featured news data
  const featuredNewsData: FeaturedNewsItem[] = [
    {
      image: danKhoanVietsov,
      imageAlt: "Gian triển lãm được thiết kế hiện đại",
      category: "TIN DẦU KHÍ",
      title:
        "Gian triển lãm được thiết kế hiện đại với điểm nhấn là 3 trụ cột phát triển: Năng lượng, Công nghiệp và Dịch vụ kỹ thuật chất lượng cao",
      timestamp: "9/6/2024 9:54:47 AM",
      description:
        "Gian trưng bày của Tập đoàn Công nghiệp - Năng lượng Quốc gia Việt Nam (Petrovietnam) tại Triển lãm thành tựu đất nước đã sẵn sàng chào đón khách tham quan từ ngày 28/8 – 5/9/2025, tại Trung tâm Triển lãm Quốc gia (Đông Anh, Hà Nội).",
      onClick: () => {
        window.location.href = "/tintuc/chi-tiet";
      },
    },
    {
      image: hoiNghiSuKien,
      imageAlt: "Vietsovpetro 44 năm tỏa sáng",
      category: "MỪNG VĂN HÓA",
      title: "Vietsovpetro 44 năm tỏa sáng – Tự hào Người Dầu khí Việt Nam",
      timestamp: "27.12.2025 11:20",
      description: "",
      onClick: () => {
        window.location.href = "/tintuc/chi-tiet";
      },
    },
    {
      image: daiHoiDaiBieu,
      imageAlt: "Lãnh đạo Vietsovpetro thắp lửa",
      category: "TIN DẦU KHÍ",
      title:
        "Lãnh đạo Vietsovpetro thắp lửa và truyền lửa trong Lễ công bố cẩm nang Văn hóa Vietsovpetro vào ngày 23.7.2023",
      timestamp: "27.06.2025 05:05",
      description: "",
      onClick: () => {
        window.location.href = "/tintuc/chi-tiet";
      },
    },
    {
      image: hoiNghiPetro,
      imageAlt: "Vietsovpetro 44 năm tỏa sáng",
      category: "TIN DẦU KHÍ",
      title: "Vietsovpetro 44 năm tỏa sáng – Tự hào Người Dầu khí Việt Nam",
      timestamp: "27.12.2025 11:20",
      description: "",
      onClick: () => {
        window.location.href = "/tintuc/chi-tiet";
      },
    },
  ];

  const mainCard = featuredNewsData[0];
  const sideCards = featuredNewsData.slice(1, 4);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SliderHome basePath="internal" />
              <BreakingNewsSlider />
              <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem] pb-8 md:pb-12 lg:pb-10 laptop:pb-16 fhd:pb-20 qhd:pb-24 pt-8 md:pt-12 lg:pt-10 laptop:pt-16 fhd:pt-20 qhd:pt-24">
                <FeaturedNewsLayout
                  mainCard={mainCard}
                  sideCards={sideCards}
                  isSidebarOpen={isSidebarOpen}
                  label="Tin nổi bật"
                />
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 laptop:gap-12 fhd:gap-16 qhd:gap-20">
                  <div className="lg:col-span-3 space-y-6 lg:space-y-8 laptop:space-y-12 fhd:space-y-16 qhd:space-y-20">
                    <div className="mt-6 lg:mt-8 laptop:mt-12 fhd:mt-16 qhd:mt-20">
                      <NewsHome />
                    </div>
                    <div className="mt-6 lg:mt-8 laptop:mt-12 fhd:mt-16 qhd:mt-20">
                      <VideoNewsSection />
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="mt-6 lg:mt-8 laptop:mt-12 fhd:mt-16 qhd:mt-20">
                      <Sidebar />
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route path="/chi-tiet" element={<NewsDetail />} />
        <Route path="/hoat-dong-sx-kd" element={<ProductionActivityPage />} />
        <Route path="/hoat-dong-doan-the" element={<CommunityActivityPage />} />
        <Route path="/tin-dau-khi" element={<OilNewsPage />} />
        <Route path="/thu-vien-anh-video" element={<MediaLibraryPage />} />
      </Routes>
    </>
  );
};

export default InternalNewsDetail;
