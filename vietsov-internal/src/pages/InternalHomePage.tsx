import React from "react";
import StatisticCard from "@/components/StatisticCard";
import StatisticCardWithBg from "@/components/StatisticCardWithBg";
import {
  SliderHome,
  ProductionNews,
  BreakingNewsSlider,
} from "@/components/HomePage";

import { LinkCenter } from "@/components";

const statisticCardData: StatisticCardData[] = [
  { period: "Ngày", plan: 8422.4, actual: 8275.0 },
  { period: "Tháng", plan: 16844.8, actual: 16446.0 },
  { period: "Năm", plan: 1471709.8, actual: 1467777.0 },
];

const HomePage: React.FC = () => {
  return (
    <div>
      <SliderHome />
      <BreakingNewsSlider />
      <div className="bg-vietsov-background py-8">
        <div className="py-8 md:py-12 lg:py-10 2xl:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-3xl 2xl:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12 lg:mb-10 2xl:mb-12">
              Thông tin sản xuất
            </h2>
            <div className="px-4 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 2xl:gap-6">
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
          </div>
        </div>
        <div className="pb-8 md:pb-12 lg:pb-10 2xl:pb-12">
          <div className="container mx-auto px-4">
            <ProductionNews />
          </div>
        </div>
      </div>
      {/* <CoreValuesSection />
      <FeaturedProjects />
      <div className="bg-gray-100">
        <ActivitySlider />
      </div>
      <div className="bg-white">
        <div className="px-4 md:px-12 lg:px-60 2xl:px-80 py-8 md:py-12 lg:py-10 2xl:py-12">
          <SpotlightNews />
        </div>
      </div> */}
      <div className="py-8 md:py-12 lg:py-10 2xl:py-12">
        <div className="container mx-auto px-4">
          <LinkCenter />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
