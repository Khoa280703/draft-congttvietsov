import HeroSlider from "@/components/PriviteSystem/HomePage/SliderHome";
import BreakingNewsTicker from "@/components/PriviteSystem/HomePage/BreakingNewsTicker";
import {
  SpotlightNews,
  NewsTicket,
  TrainingNews,
} from "@/components/PriviteSystem/NewsPage";
import {
  NewsHome,
  VideoNewsSection,
} from "@/components/PriviteSystem/HomePage";
import { LinkCenter } from "@/components/PriviteSystem";
import { Sidebar } from "@/components";
import { Routes, Route } from "react-router-dom";
import NewsDetail from "@/pages/internal/NewsPage/InternalNewsDetail";

const InternalNewsDetail: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSlider />
              <BreakingNewsTicker />
              <NewsTicket />
              <div className="max-w-7xl mx-auto px-4 pb-12">
                <SpotlightNews />
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
                    <TrainingNews />
                    <NewsHome />
                    <VideoNewsSection />
                    <LinkCenter />
                  </div>
                  <div className="lg:col-span-1">
                    <Sidebar />
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
