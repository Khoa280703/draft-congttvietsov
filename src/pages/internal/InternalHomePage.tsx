import React from "react";
import HeroSlider from "@/components/PriviteSystem/HomePage/SliderHome";
import BreakingNewsTicker from "@/components/PriviteSystem/HomePage/BreakingNewsTicker";
import StatisticCard from "@/components/PriviteSystem/StatisticCard";
import StatisticCardWithBg from "@/components/PriviteSystem/StatisticCardWithBg";
import VideoNewsSection from "@/components/PriviteSystem/HomePage/VideoNewsSection";
import DailyBriefing from "@/components/PriviteSystem/HomePage/DailyBriefing";
import InternalMovement from "@/components/PriviteSystem/HomePage/InternalMovement";
import LinkCenter from "@/components/PriviteSystem/LinkCenter";
import ChartHome from "@/components/PriviteSystem/HomePage/ChartHome";
import HomeTrainingSchedule from "@/components/PriviteSystem/HomePage/HomeTrainingSchedule";
import NewsHome from "@/components/PriviteSystem/HomePage/NewsHome";

const statisticCardData: StatisticCardData[] = [
  { period: "Ngày", plan: 8422.4, actual: 8275.0 },
  { period: "Tháng", plan: 16844.8, actual: 16446.0 },
  { period: "Năm", plan: 1471709.8, actual: 1467777.0 },
];

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSlider />
      <BreakingNewsTicker />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="container px-4 py-8 bg-gray-200 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatisticCard
              data={statisticCardData}
              title="SẢN LƯỢNG DẦU KHAI THÁC VSP"
            />
            <StatisticCard
              data={statisticCardData}
              title="SẢN LƯỢNG DẦU MỎ CÁ TẦM"
            />
            <StatisticCardWithBg
              data={statisticCardData}
              title="TỶ GIÁ VSP" // Thay đổi title
            />
            <StatisticCardWithBg
              data={statisticCardData}
              title="GIÁ DẦU" // Thay đổi title
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="lg:col-span-1">
            <LinkCenter />
            <ChartHome />
            <NewsHome />
          </div>
          <div className="lg:col-span-1 flex flex-col gap-6">
            <DailyBriefing />
            <InternalMovement />
            <HomeTrainingSchedule />
          </div>
        </div>
        <div className="border-t border-gray-300"></div>{" "}
      </div>
      <div className="bg-red-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <VideoNewsSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
