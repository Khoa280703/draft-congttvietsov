import React from "react";
import { FiArrowRight } from "react-icons/fi";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

const newsData: NewsArticle[] = [
  {
    id: 1,
    category: "HOẠT ĐỘNG SẢN XUẤT",
    categoryColor: "text-green-600",
    title: "Chương trình hợp tác giữa Vietsovpetro...",
    timestamp: "9/6/2024 9:54:47 AM",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ...",
    image: daiHoiDaiBieu,
  },
  {
    id: 2,
    category: "HOẠT ĐỘNG ĐOÀN THỂ",
    categoryColor: "text-blue-600",
    title: "Chương trình hợp tác giữa Vietsovpetro...",
    timestamp: "9/6/2024 9:54:47 AM",
    description:
      "Bão Yagi (bão số 3), với sức tàn phá khủng khiếp, cùng với hoàn lưu của bão đã khiến đồng bằng và vùng núi các tỉ...",
    image: hoiNghiSuKien,
  },
  {
    id: 3,
    category: "TIN DẦU KHÍ",
    categoryColor: "text-red-600",
    title: "Chương trình hợp tác giữa Vietsovpetro...",
    timestamp: "9/6/2024 9:54:47 AM",
    description:
      "Nằm trong chương trình hợp tác thường niên trong lĩnh vực đào tạo của Tập đoàn Dầu khí Việt Nam (Petrovietn...",
    image: hoiNghiPetro,
  },
];

const ProductionNews: React.FC = () => {
  return (
    <section>
      {/* Header */}
      <div className="flex justify-between items-center mb-3 md:mb-4 lg:mb-4 laptop:mb-5 fhd:mb-6 qhd:mb-6 pb-2 md:pb-3 lg:pb-3 laptop:pb-4 fhd:pb-4 qhd:pb-5">
        <div className="flex items-center">
          <span className="w-1 h-4 md:h-5 lg:h-5 laptop:h-6 fhd:h-6 qhd:h-7 bg-green-500 mr-2 rounded"></span>
          <h2 className="font-bold text-gray-800 uppercase tracking-wide text-base md:text-lg lg:text-lg laptop:text-xl fhd:text-xl qhd:text-2xl">
            Tin Tức Sản xuất
          </h2>
        </div>
        <a
          href="#"
          className="flex items-center text-xs md:text-sm lg:text-sm laptop:text-sm fhd:text-base qhd:text-base hover:text-green-700 font-medium"
        >
          Xem thêm <FiArrowRight className="w-3 h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 laptop:w-4 laptop:h-4 fhd:w-5 fhd:h-5 qhd:w-5 qhd:h-5 ml-1" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-5 laptop:gap-6 fhd:gap-8 qhd:gap-10">
        {newsData.map((article) => (
          <div key={article.id} className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-3 shadow-md">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 md:h-44 lg:h-48 laptop:h-52 fhd:h-56 qhd:h-60 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>

            <div>
              <p
                className={`text-[10px] md:text-xs lg:text-xs laptop:text-xs fhd:text-sm qhd:text-sm font-bold uppercase ${article.categoryColor} mb-1.5 md:mb-2 lg:mb-2 laptop:mb-2.5 fhd:mb-3 qhd:mb-3`}
              >
                {article.category}
              </p>
              <h3 className="text-sm md:text-base lg:text-base laptop:text-lg fhd:text-xl qhd:text-xl font-bold text-gray-800 mb-1.5 md:mb-2 lg:mb-2 laptop:mb-2.5 fhd:mb-3 qhd:mb-3 leading-tight group-hover:text-green-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-xs md:text-xs lg:text-sm laptop:text-sm fhd:text-sm qhd:text-base text-gray-500 mb-1.5 md:mb-2 lg:mb-2 laptop:mb-2.5 fhd:mb-3 qhd:mb-3">
                {article.timestamp}
              </p>
              <p className="text-xs md:text-xs lg:text-sm laptop:text-sm fhd:text-sm qhd:text-base text-gray-600 line-clamp-3">
                {article.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductionNews;
