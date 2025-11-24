import React from "react";

import SafetyInfoCard from "./NewsPage/SafetyInfoCard";
import TrainingScheduleWidget from "./NewsPage/TrainingScheduleWidget";

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
      <SafetyInfoCard />
      <TrainingScheduleWidget
        title="LỊCH ĐÀO TẠO NỘI BỘ"
        items={trainingData}
      />
    </div>
  );
};

export default Sidebar;
