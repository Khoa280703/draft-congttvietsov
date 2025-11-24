import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

import vietSovMSA1 from "@/assets/vietsovmsa.png";
import vietSovMSA2 from "@/assets/vietsovge.png";

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
    <div className="bg-white">
      {/* Header với Tabs */}
      <div className="flex justify-between items-center pb-2 mb-4 md:mb-5 lg:mb-5 laptop:mb-6 fhd:mb-7 qhd:mb-8">
        <div className="flex items-end space-x-3 md:space-x-4">
          <button
            onClick={() => setActiveTab("internal")}
            className={`text-[10px] md:text-[10px] lg:text-[10px] laptop:text-xs fhd:text-sm qhd:text-sm font-bold uppercase transition-colors pb-1 ${
              activeTab === "internal"
                ? "border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Tin nội bộ
          </button>
          <button
            onClick={() => setActiveTab("technical")}
            className={`text-[10px] md:text-[10px] lg:text-[10px] laptop:text-xs fhd:text-sm qhd:text-sm font-bold uppercase transition-colors pb-1 ${
              activeTab === "technical"
                ? "border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Báo cáo kỹ thuật
          </button>
          <button
            onClick={() => setActiveTab("safety")}
            className={`text-[10px] md:text-[10px] lg:text-[10px] laptop:text-xs fhd:text-sm qhd:text-sm font-bold uppercase transition-colors pb-1 ${
              activeTab === "safety"
                ? "border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            An toàn lao động
          </button>
        </div>
        <a
          href="#"
          className="flex items-center text-xs md:text-xs lg:text-xs laptop:text-sm fhd:text-sm qhd:text-base text-green-600 hover:text-green-700 font-medium shrink-0"
        >
          Xem thêm <FiChevronRight className="w-3 h-3 md:w-3 md:h-3 lg:w-3 lg:h-3 laptop:w-3.5 laptop:h-3.5 fhd:w-4 fhd:h-4 qhd:w-4 qhd:h-4 ml-1" />
        </a>
      </div>

      {/* Main Content */}
      <div className="space-y-4 md:space-y-5 lg:space-y-5 laptop:space-y-6 fhd:space-y-7 qhd:space-y-8">
        {/* Lưới các bài viết nổi bật */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-5 laptop:gap-6 fhd:gap-7 qhd:gap-8">
          {featuredArticles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-32 md:h-36 lg:h-40 laptop:h-44 fhd:h-48 qhd:h-52 object-cover rounded-lg mb-2 md:mb-2.5 lg:mb-3 laptop:mb-3 fhd:mb-3.5 qhd:mb-4"
              />
              <h4 className="font-semibold text-base md:text-base lg:text-base laptop:text-lg fhd:text-xl qhd:text-xl text-gray-800 group-hover:text-green-600 transition-colors leading-tight">
                {article.title}
              </h4>
              <p className="text-xs md:text-xs lg:text-xs laptop:text-sm fhd:text-sm qhd:text-base text-gray-500 mt-1 md:mt-1.5 lg:mt-1.5 laptop:mt-2 fhd:mt-2 qhd:mt-2.5">
                {article.description}
              </p>
            </div>
          ))}
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-5 lg:gap-x-5 laptop:gap-x-6 fhd:gap-x-7 qhd:gap-x-8 gap-y-2 md:gap-y-2.5 lg:gap-y-2.5 laptop:gap-y-3 fhd:gap-y-3.5 qhd:gap-y-4 pt-3 md:pt-3.5 lg:pt-3.5 laptop:pt-4 fhd:pt-4.5 qhd:pt-5 border-t border-gray-100">
          {secondaryLinks.map((link) => (
            <li key={link.id}>
              <a
                href="#"
                className="flex items-start text-xs md:text-xs lg:text-xs laptop:text-sm fhd:text-sm qhd:text-base font-medium hover:text-green-600"
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
