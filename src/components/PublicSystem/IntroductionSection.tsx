import React from "react";
// Import các icon cần thiết từ react-icons
import { FaCheckCircle } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
// Import ảnh giàn khoan (hãy thay đổi đường dẫn này)
import rigImage from "@/assets/dankhoanvietsov.jpg";

const IntroductionSection: React.FC = () => {
  // Dữ liệu cho các mục list, dễ dàng quản lý
  const features = [
    "Doanh nghiệp hàng đầu trong lĩnh vực tìm kiếm, thăm dò địa chất và khai thác dầu khí tại Việt Nam.",
    "Là đối tác tin cậy, giúp đáp ứng nhu cầu gia tăng năng lượng trong sản xuất và tiêu dùng của Việt Nam theo hướng hiệu quả và bền vững.",
    "Nghiên cứu khoa học, khảo sát, khoan thăm dò địa chất, thiết kế phát triển xây dựng mỏ, khai thác dầu và khí, thu gom xử lý dầu, khí và condensate tại Lô 09-1 và các Lô dầu khí khác ở thềm lục địa Việt Nam.",
    "Cung cấp các dịch vụ dầu khí chất lượng cho các đối tác ở Việt Nam và trong khu vực.",
  ];

  return (
    <section className="bg-white font-sans py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Cột nội dung text bên trái */}
          <div className="text-gray-700">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-800 mb-6 leading-tight">
              Giới thiệu <br /> Vietsovpetro
            </h1>
            <p className="mb-8 leading-relaxed">
              Liên doanh Vietsovpetro (gọi tắt là Vietsovpetro) là pháp nhân hợp
              pháp của nước CHXHCN Việt Nam, được thành lập năm 1981, là đơn vị
              thành viên của Tập đoàn Dầu khí Quốc gia Việt Nam.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-sm w-full sm:w-auto"
              >
                Xem thêm
                <FiArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors w-full sm:w-auto"
              >
                Liên hệ với chúng tôi
              </a>
            </div>
          </div>

          {/* Cột hình ảnh bên phải */}
          <div className="w-full h-full">
            <img
              src={rigImage}
              alt="Giàn khoan Vietsovpetro"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
