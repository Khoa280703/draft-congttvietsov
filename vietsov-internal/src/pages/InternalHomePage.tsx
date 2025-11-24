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
      <div className="bg-vietsov-background pt-8 md:pt-12 lg:pt-10 laptop:pt-16 fhd:pt-20 qhd:pt-24">
        <div className="py-8 md:py-12 lg:py-10 laptop:py-16 fhd:py-20 qhd:py-24">
          <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
            <h2 className="text-3xl md:text-4xl lg:text-4xl laptop:text-5xl fhd:text-6xl qhd:text-7xl font-bold text-gray-900 text-center mb-8 md:mb-12 lg:mb-16 laptop:mb-20 fhd:mb-24 qhd:mb-28">
              Thông tin sản xuất
            </h2>
            <div className="px-4 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 laptop:gap-12 fhd:gap-16 qhd:gap-20">
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
        <div className="py-8 md:py-12 lg:py-10 laptop:py-16 fhd:py-20 qhd:py-24">
          <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
            <ProductionNews />
          </div>
        </div>
        <div className="py-8 md:py-12 lg:py-10 laptop:py-16 fhd:py-20 qhd:py-24">
          <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
            <LinkCenter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
