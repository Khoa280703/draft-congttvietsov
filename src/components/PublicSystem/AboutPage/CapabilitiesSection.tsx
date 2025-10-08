import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import capabilitiesImage from "@/assets/dankhoanvietsov.jpg";

const researchItems = [
  "Thiết kế - lắp đặt toàn bộ các giàn khoan tìm kiếm, thăm dò cho công ty VRJ, PIDC, cho giàn nhẹ do Petronas quản lý.",
  "Lắp đặt dự án đầu tư xây dựng công trình cải hoàn Bỳ - Pass đường ống Rạng Đông - Bạch Hổ.",
  "Sửa chữa và vận hành mỏ.",
  "Cung cấp dịch vụ vận hành mỏ cho các Công ty Hoàn Vũ JOC, VRJ, Hoang Long JOC, Thăng Long JOC, Petronas và công trình thu gom khí của PV Gas.",
  "Xây dựng và lắp đặt các công trình dầu khí biển.",
];

const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="bg-white font-sans py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-4xl font-medium text-gray-800 mb-6 leading-tight">
          Năng lực hoạt động
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative p-2 border-2 border-green-400 rounded-3xl">
            <img
              src={capabilitiesImage}
              alt="Năng lực hoạt động"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="text-gray-700">
            <p className="mb-6 leading-relaxed">
              Cùng với các hoạt động tìm kiếm - thăm dò - khai thác dầu khí,
              Vietsovpetro với thế mạnh về cơ sở vật chất và kinh nghiệm của
              mình đã phát triển lĩnh vực cung cấp dịch vụ dầu khí cho các công
              ty dầu khí trong và ngoài nước.
            </p>

            <div>
              <h3 className="font-bold text-gray-800 mb-4">
                NGHIÊN CỨU KHOA HỌC:
              </h3>
              <ul className="space-y-3">
                {researchItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-sm"
            >
              Xem thêm
              <FiArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
