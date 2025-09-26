import React from "react";
import { FiArrowRight } from "react-icons/fi";
import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import chuyenTham1996 from "@/assets/1996.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

const mainArticle = {
  category: "HOẠT ĐỘNG SẢN XUẤT",
  title: "Chương trình hợp tác giữa Vietsovpetro và PVU: Bướ...",
  timestamp: "9/6/2024 9:54:47 AM",
  description:
    "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ học bổng nghiên cứu khoa học của Vietsovpe...",
  image: danKhoanVietsov,
};

const sideArticles = [
  {
    id: 1,
    title: "Công đoàn XN Cơ điện tổ chức giải bóng chuyền năm 2024",
    timestamp: "11:50 03/10/2024",
    image: chuyenTham1996,
  },
  {
    id: 2,
    title: "Công đoàn Vietsovpetro khai mạc giải Bóng chuyền năm 2024",
    timestamp: "11:50 03/10/2024",
    image: daiHoiDaiBieu,
  },
  {
    id: 3,
    title:
      'Đoàn thanh niên và Ban nữ công Trung tâm CNTT&LL tổ chức chương trình an sinh xã hội "C...',
    timestamp: "11:50 03/10/2024",
    image: hoiNghiSuKien,
  },
  {
    id: 4,
    title:
      "Các sự kiện nổi bật của Petrovietnam trong tuần từ ngày 6/10 đến 13/10/2024 ...",
    timestamp: "11:50 03/10/2024",
    image: hoiNghiPetro,
  },
];

const ProductionActivitySection: React.FC = () => {
  return (
    <section className="bg-white font-sans py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-800">
            Hoạt động sản xuất
          </h2>
          <a
            href="#"
            className="flex items-center text-sm hover:text-blue-700 font-medium"
          >
            Xem thêm <FiArrowRight className="w-4 h-4 ml-1 text-blue-600" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-4 shadow-md">
              <img
                src={mainArticle.image}
                alt={mainArticle.title}
                className="w-full h-92 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-green-600 mb-2">
                {mainArticle.category}
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                {mainArticle.title}
              </h3>
              <p className="text-sm font-light text-gray-500 mb-2">
                {mainArticle.timestamp}
              </p>
              <p className="text-sm text-gray-600 line-clamp-3">
                {mainArticle.description}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {sideArticles.map((article) => (
              <a
                href="#"
                key={article.id}
                className="flex items-center space-x-4 group border-b-1 border-gray-300 pb-4"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-36 h-26 object-cover"
                />
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    {article.timestamp}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionActivitySection;
