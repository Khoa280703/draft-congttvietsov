import React from "react";
import { FiArrowRight } from "react-icons/fi";

import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";

const introCards = [
  {
    id: 1,
    image: daiHoiDaiBieu,
    title: "Lĩnh vực hoạt động",
    description:
      "Lĩnh vực hoạt động chính của Vietsovpetro là nghiên cứu khoa học, khảo sát, khoan thăm dò địa chất, thiết kế phát triển xây dựng mỏ, khai thác dầu và khí, thu gom xử lý dầu, khí và condensate tại Lô 09-1 và c...",
  },
  {
    id: 2,
    image: hoiNghiSuKien,
    title: "Năng lực hoạt động",
    description:
      "Cùng với các hoạt động tìm kiếm - thăm dò - khai thác dầu khí, Vietsovpetro với thế mạnh về cơ sở vật chất và kinh nghiệm của mình đã phát triển lĩnh vực cung cấp dịch vụ dầu khí cho các công ty dầu kh...",
  },
];

const GeneralIntro: React.FC = () => {
  return (
    <section id="general-intro" className="bg-white pb-12 md:pb-16 font-sans">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-800">
            Giới thiệu chung
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-12 gap-12">
          {introCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-80 w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {card.description}
                </p>
                <a
                  href="#"
                  className="flex items-center text-sm font-semibold hover:text-green-700"
                >
                  Xem thêm <FiArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeneralIntro;
