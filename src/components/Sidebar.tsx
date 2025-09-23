import React from "react";

import ButtonSideBar from "./ButtonSideBar";
import StatisticCard from "./StatisticCard";
import StatisticCardWithBg from "./StatisticCardWithBg";
import SafetyInfoCard from "./SafetyInfoCard";
import TrainingScheduleWidget from "./TrainingScheduleWidget";

const statisticCardData1: StatisticCardData[] = [
  { period: "Ngày", plan: 8422.4, actual: 8275.0 },
  { period: "Tháng", plan: 16844.8, actual: 16446.0 },
  { period: "Năm", plan: 1471709.8, actual: 1467777.0 },
];

const statisticCardData2: StatisticCardData[] = [
  { period: "Ngày", plan: 8422.4, actual: 8275.0 },
  { period: "Tháng", plan: 16844.8, actual: 16446.0 },
  { period: "Năm", plan: 1471709.8, actual: 1467777.0 },
];

const trainingData: TrainingItemData[] = [
  {
    id: 1,
    title: "Chương trình đào tạo nhận thức về an toàn thông tin năm 2025",
    duration: "3 ngày",
    startDate: "25/09/2026",
  },
  {
    id: 2,
    title:
      "Chương trình đào tạo an toàn kiểm tra kiến thức an toàn kai động 2025",
    duration: "3 ngày",
    startDate: "25/09/2026",
  },
  {
    id: 3,
    title: "Chương trình đào tạo nhận thức về an toàn thông tin năm 2025",
    duration: "3 ngày",
    startDate: "25/09/2026",
  },
  {
    id: 4,
    title: "Chương trình đào tạo nhận thức về an toàn thông tin năm 2025",
    duration: "3 ngày",
    startDate: "25/09/2026",
  },
];

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      <ButtonSideBar />
      <StatisticCard
        data={statisticCardData1}
        title="SẢN LƯỢNG DẦU KHAI THÁC VSP"
      />
      <StatisticCard
        data={statisticCardData2}
        title="SẢN LƯỢNG ĐẦU MỎ CÁ TẦM"
      />

      <StatisticCardWithBg
        data={statisticCardData2}
        note="Giá điều chỉnh Ngày 31/07/2025"
      />

      <SafetyInfoCard />

      <TrainingScheduleWidget
        title="LỊCH ĐÀO TẠO NỘI BỘ"
        items={trainingData}
      />
    </div>
  );
};

export default Sidebar;
