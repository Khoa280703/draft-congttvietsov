import React from "react";
// Import icon mũi tên từ react-icons
import { FiArrowRight } from "react-icons/fi";
// Import ảnh (hãy thay đổi đường dẫn này)
import videoIntro from "@/assets/video/vietsovintro.mov";

const JointVentureSection: React.FC = () => {
  return (
    <section id="joint-venture" className="bg-gray-50 font-sans py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-medium text-gray-800 mb-6 leading-tight">
          Liên doanh Vietsovpetro
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Cột hình ảnh bên trái */}
          <div className="relative p-2 border-2 border-green-400 rounded-3xl">
            <video
              src={videoIntro}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Cột nội dung text bên phải */}
          <div className="text-gray-700">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Liên doanh Vietsovpetro (gọi tắt là Vietsovpetro) là pháp nhân
                hợp pháp của nước CHXHCN Việt Nam, được thành lập năm 1981, là
                đơn vị thành viên của Tập đoàn Dầu khí Quốc gia Việt Nam.
              </p>
              <p>
                Doanh nghiệp hàng đầu trong lĩnh vực tìm kiếm, thăm dò địa chất
                và khai thác dầu khí tại Việt Nam; là đối tác tin cậy, giúp đáp
                ứng nhu cầu gia tăng năng lượng trong sản xuất và tiêu dùng của
                Việt Nam theo hướng hiệu quả và bền vững.
              </p>
              <p>
                Lĩnh vực hoạt động chính của Vietsovpetro là nghiên cứu khoa
                học, khảo sát, khoan thăm dò địa chất, thiết kế phát triển xây
                dựng mỏ, khai thác dầu và khí, thu gom xử lý dầu, khí và
                condensate tại Lô 09-1 và các Lô dầu khí khác ở thềm lục địa
                Việt Nam; cung cấp các dịch vụ dầu khí chất lượng cho các đối
                tác ở Việt Nam và trong khu vực.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center font-semibold mt-6 hover:text-green-700 transition-colors"
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

export default JointVentureSection;
