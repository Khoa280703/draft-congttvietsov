// src/components/OtherArticlesSection.tsx
import React from "react";
import { FiArrowRight } from "react-icons/fi";

// Import your images - replace with actual paths
import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";

// Define the data structure for the articles
const articles = [
  {
    id: 1,
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title: "Chương trình hợp tác giữa Vietsovpetro và PVU: Bước tiến mới...",
    timestamp: "9/6/2024 9:54:47 AM",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ...",
    image: danKhoanVietsov,
    link: "#",
  },
  {
    id: 2,
    category: "HOẠT ĐỘNG ĐOÀN THỂ",
    title: "Xí nghiệp Địa vật lý giếng khoan sẽ chia khó khăn cùng đồng bào...",
    timestamp: "9/23/2024 2:06:33 PM",
    description:
      "Bão Yagi (bão số 3) với sức tàn phá khủng khiếp, cùng với hoàn lưu của bão đã khiến đồng bằng và vùng núi các tỉ...",
    image: daiHoiDaiBieu,
    link: "#",
  },
  {
    id: 3,
    category: "TIN DẦU KHÍ",
    title: "Đoàn cán bộ, chuyên gia Gazprom thăm và làm việc tại Vietsovpetro",
    timestamp: "10/2/2024 10:19:04 AM",
    description:
      "Nằm trong chương trình hợp tác thường niên trong lĩnh vực đào tạo giữa Tập đoàn Dầu khí Việt Nam (Petrovietnam)...",
    image: hoiNghiSuKien,
    link: "#",
  },
];

const OtherArticles: React.FC = () => {
  return (
    <section className="bg-white font-sans py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Các bài viết khác
          </h2>
          <a
            href="#"
            className="flex items-center text-sm hover:text-green-700 font-medium transition-colors"
          >
            Xem thêm <FiArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group flex flex-col">
              <a href={article.link} className="block">
                <div className="overflow-hidden rounded-md mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              </a>
              <div className="flex flex-col flex-grow">
                <a href={article.link} className="block">
                  <p className="text-xs font-semibold uppercase text-green-600 mb-2">
                    {article.category}
                  </p>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                </a>
                <p className="text-xs font-light text-gray-500 mb-3">
                  {article.timestamp}
                </p>
                <p className="text-sm text-gray-600 line-clamp-3 flex-grow">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherArticles;
