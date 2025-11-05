import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";

const movementArticles = [
  {
    id: 1,
    timestamp: "9/6/2024 9:54:47 AM",
    title:
      "Xí nghiệp Dịch vụ cảng và Cung ứng vật tư thiết bị Tổ chức các hoạt động tri ân nhân kỷ niệm 78 năm ngày Thương binh, Liệt sĩ",
    description:
      "Thực hiện Kế hoạch số 02/KH/CCB-VSP ngày 04/7/2025 của Hội Cựu chiến binh Liên doanh Việt - Nga Vietsovpetro và Kế hoạch phối hợp số 129/KH-XNDV,",
  },
  {
    id: 2,
    timestamp: "05/09/2025 12:30:47 AM",
    title:
      "Đổi mới và nâng cao chất lượng sinh hoạt chi bộ tại Petrovietnam trong giai đoạn mới",
    description:
      "(PetroTimes) - Thực hiện Chỉ thị số 50-CT/TW ngày 23/7/2025 của Ban Bí thư Trung ương Đảng về tiếp tục đổi mới, nâng cao chất lượng sinh hoạt chi bộ, vừa qua,",
  },
];

const InternalMovement: React.FC = () => {
  return (
    <div className="bg-white p-6 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-800 uppercase flex items-center text-base">
          <GoMegaphone className="mr-2 text-green-600 h-5 w-5" />
          Phong trào nội bộ
        </h3>
        <a
          href="#"
          className="flex items-center text-sm text-green-600 hover:text-green-700 font-medium"
        >
          Xem thêm <FiChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>

      {/* Danh sách các bài viết */}
      <div className="space-y-5">
        {movementArticles.map((article, index) => (
          // Thêm đường kẻ phân cách, trừ bài viết cuối cùng
          <div
            key={article.id}
            className={
              index < movementArticles.length - 1
                ? "border-b border-gray-100 pb-5"
                : ""
            }
          >
            <p className="text-xs text-gray-400 mb-1">{article.timestamp}</p>
            <h4 className="font-semibold text-gray-800 mb-2 hover:text-green-600 cursor-pointer leading-snug">
              {article.title}
            </h4>
            <p className="text-sm text-gray-600">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternalMovement;
