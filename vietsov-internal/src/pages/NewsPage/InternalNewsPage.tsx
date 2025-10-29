import { SliderHome, BreakingNewsSlider } from "@/components/Shared";
import { SpotlightNews, TrainingNews } from "@/components/NewsPage";
import { NewsHome, VideoNewsSection, ChartHome } from "@/components/HomePage";
import { LinkCenter } from "@/components";
import { Sidebar } from "@/components";
import { Routes, Route } from "react-router-dom";
import NewsDetail from "./InternalNewsDetail";

const InternalNewsDetail: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SliderHome basePath="internal" />
              <BreakingNewsSlider />
              <div className="max-w-7xl mx-auto px-4 pb-12 pt-8">
                <SpotlightNews />
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
                    <TrainingNews />
                    <NewsHome />
                    <VideoNewsSection />
                  </div>
                  <div className="lg:col-span-1">
                    <Sidebar />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 border-t border-gray-300 pt-6">
                  <div className="lg:col-span-1">
                    <ChartHome />
                  </div>
                  <div className="lg:col-span-1">
                    <LinkCenter />
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route path="/chi-tiet" element={<NewsDetail />} />
      </Routes>
    </>
  );
};

export default InternalNewsDetail;
