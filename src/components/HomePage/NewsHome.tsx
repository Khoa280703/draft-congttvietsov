import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

import vietSovMSA1 from "../../assets/vietsovmsa.png";
import vietSovMSA2 from "../../assets/vietsovge.png";

// --- Dữ liệu giả lập ---
const featuredArticles = [
  {
    id: 1,
    image: vietSovMSA1,
    title:
      "Vietsovpetro đã ký kết với MSA và GE Vermosa Việt Nam về dịch vụ t...",
    description:
      "Vietsovpetro đã ký kết với MSA và GE Vermosa Việt Nam về dịch vụ thay thế cấu kiệ...",
  },
  {
    id: 2,
    image: vietSovMSA2,
    title:
      "Vietsovpetro đã ký kết với MSA và GE Vermosa Việt Nam về dịch vụ t...",
    description:
      "Vietsovpetro đã ký kết với MSA và GE Vermosa Việt Nam về dịch vụ thay thế cấu kiệ...",
  },
];

const secondaryLinks = [
  {
    id: 1,
    text: "Vietsovpetro tham dự triển lãm và hội thảo năng lượng châu Á 2025 tại Malaysia",
  },
  {
    id: 2,
    text: 'Vietsovprtro tổ chức thành công hội thảo chuyên đề "Chia sẻ kinh nghiệm trong thi...',
  },
];

// --- Component chính ---
const NewsHome: React.FC = () => {
  // ✅ VẤN ĐỀ 2: Thêm khai báo useState
  const [activeTab, setActiveTab] = useState("internal");

  return (
    <div className="bg-white p-6 font-sans">
      {/* Header với Tabs */}
      <div className="flex justify-between items-center pb-3 mb-4">
        <div className="flex items-end space-x-6">
          <button
            onClick={() => setActiveTab("internal")}
            className={`text-sm font-bold uppercase transition-colors pb-1 ${
              activeTab === "internal"
                ? "border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-800 text-xs"
            }`}
          >
            Tin nội bộ
          </button>
          <button
            onClick={() => setActiveTab("technical")}
            className={`text-sm font-bold uppercase transition-colors pb-1 ${
              activeTab === "technical"
                ? "border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-800 text-xs"
            }`}
          >
            Báo cáo kỹ thuật
          </button>
          <button
            onClick={() => setActiveTab("safety")}
            className={`text-sm font-bold uppercase transition-colors pb-1 ${
              activeTab === "safety"
                ? "border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-800 text-xs"
            }`}
          >
            An toàn lao động
          </button>
        </div>
        <a
          href="#"
          className="flex items-center text-sm text-green-600 hover:text-green-700 font-medium shrink-0"
        >
          Xem thêm <FiChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Lưới các bài viết nổi bật */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featuredArticles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h4 className="font-bold text-gray-800 group-hover:text-green-600 transition-colors leading-snug">
                {article.title}
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                {article.description}
              </p>
            </div>
          ))}
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 pt-4 border-t border-gray-100">
          {secondaryLinks.map((link) => (
            <li key={link.id}>
              <a
                href="#"
                className="flex items-start text-sm font-medium hover:text-green-600"
              >
                <span className="mr-2 mt-1">•</span>
                <span>{link.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsHome;
