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

const OilNewsSection: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-16 ">
      <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 border-b-1 border-gray-300 pb-4">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-800">
            Tin tức Dầu khí
          </h2>
          <a
            href="#"
            className="flex items-center text-sm hover:text-green-700 font-medium cursor-pointer"
          >
            Xem thêm <FiArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-4 shadow-md">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>

              <div>
                <p
                  className={`text-xs font-bold uppercase ${article.categoryColor} mb-2`}
                >
                  {article.category}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight group-hover:text-green-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
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
  );
};

export default OilNewsSection;
