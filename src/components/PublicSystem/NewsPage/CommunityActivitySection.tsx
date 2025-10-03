import React from "react";
// Import icon mũi tên từ react-icons
import { FiArrowRight } from "react-icons/fi";

import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

const articles = [
  {
    id: 1,
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title: "Chương trình hợp tác giữa Vietsovpetro và PVU: Bước tiến...",
    timestamp: "9/6/2024 9:54:47 AM",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ...",
    image: daiHoiDaiBieu,
  },
  {
    id: 2,
    category: "HOẠT ĐỘNG ĐOÀN THỂ",
    title: "Xí nghiệp Địa vật lý giếng khoan sẻ chia khó khăn cùng đồng bào...",
    timestamp: "9/23/2024 2:06:33 PM",
    description:
      "Bão Yagi (bão số 3) với sức tàn phá khủng khiếp, cùng với hoàn lưu của bão đã khiến đồng bằng và vùng núi các tỉ...",
    image: hoiNghiSuKien,
  },
  {
    id: 3,
    category: "TIN DẦU KHÍ",
    title: "Đoàn cán bộ, chuyên gia Gazprom thăm, tìm hiểu thực tế...",
    timestamp: "10/2/2024 10:19:04 AM",
    description:
      "Nằm trong chương trình hợp tác thường niên trong lĩnh vực đào tạo của Tập đoàn Dầu khí Việt Nam (Petrovietn...",
    image: hoiNghiPetro,
  },
];

const CommunityActivitySection: React.FC = () => {
  return (
    <div className="bg-[#F0F7F2]">
      <section className="font-sans py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-800">
              Hoạt động đoàn thể
            </h2>
            <a
              href="/tintuc/hoat-dong-doan-the"
              className="flex items-center text-sm hover:text-green-700 font-medium"
            >
              Xem thêm <FiArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Lưới các bài viết */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white overflow-hidden group cursor-pointer"
              >
                {/* Image Container */}
                <div className="overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase text-green-600 mb-2">
                    {article.category}
                  </p>
                  <h3 className="text-lg font-medium text-gray-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors h-14">
                    {article.title}
                  </h3>
                  <p className="text-sm font-light text-gray-400 mb-2">
                    {article.timestamp}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {article.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityActivitySection;
