import React from "react";
// Import các icon cần thiết
import { FiChevronRight, FiList } from "react-icons/fi";

// Dữ liệu giả lập cho các thông báo
const scheduleItems = [
  {
    id: 1,
    title:
      "Vietsovpetro đã tổ chức thành công chương trình tham quan dành cho các em học sinh giỏi cấp II là con em CBCNV, với lộ trình ý nghĩa: Nhà Truyền thống Vietsovpetro – Địa đạo Củ Chi –",
    timestamp: "03/9/2025 13:10:00 AM",
  },
  {
    id: 2,
    title: "Kiến nghị dỡ bỏ vòng xoay Nguyễn Bỉnh Khiêm quận 1, TP HCM",
    timestamp: "16/8/2025 8:20:41 AM",
  },
  {
    id: 3,
    title:
      "Hôm nay Tổng Giám đốc Vietsovpetro có hẹn với các bạn ĐVTN, người lao động trẻ",
    timestamp: "03/8/2025 9:20 AM",
  },
  {
    id: 4,
    title:
      "Sau chương trình đối thoại giữa Tổng Giám đốc Vietsovpetro Vũ Mai Khanh với đoàn viên, thanh niên lần trước",
    timestamp: "22/6/2025 12:30:47 AM",
  },
  {
    id: 5,
    title:
      "Cuộc đời mỗi con người đều có những dấu mốc đáng nhớ, và với tôi, một trong những dấu mốc quan trọng và tự hào nhất chính là hành trình 14 năm làm việc tại Liên doanh Việt – Nga Vietsovpetro.",
    timestamp: "10/5/2025 14:12:00 PM",
  },
];

const HomeTrainingSchedule: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-green-500 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-800 uppercase flex items-center text-base">
          <FiList className="mr-2 text-green-600 h-5 w-5" />
          Thông báo lịch tập huấn
        </h3>
        <a
          href="#"
          className="flex items-center text-sm text-green-600 hover:text-green-700 font-medium"
        >
          Xem thêm <FiChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>

      {/* Danh sách các thông báo */}
      <ul className="space-y-4">
        {scheduleItems.map((item) => (
          <li
            key={item.id}
            className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
          >
            <a href="#" className="block group">
              <p className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors leading-snug">
                {item.title}
              </p>
              <p className="text-xs text-gray-400 mt-1">{item.timestamp}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeTrainingSchedule;
