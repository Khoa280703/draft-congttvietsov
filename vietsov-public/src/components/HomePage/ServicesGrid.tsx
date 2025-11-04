import React from "react";
import oildDrill from "@/assets/oilimage.png";

import { GoArrowRight } from "react-icons/go";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  isActive?: boolean;
}

// Dữ liệu giả lập cho các dịch vụ
const servicesData: Omit<ServiceCardProps, "isActive">[] = [
  {
    icon: oildDrill,
    title: "THIẾT KẾ CÁC CÔNG TRÌNH DẦU KHÍ BIỂN",
    description:
      "Với kinh nghiệm và nguồn lực sẵn có, Vietsovpetro luôn sẵn sàng hợp tác với các công ty dầu khí trong nước và quốc tế...",
  },
  {
    icon: oildDrill,
    title: "ĐIỀU HÀNH KHAI THÁC MỎ",
    description:
      "Với kinh nghiệm và nguồn lực sẵn có, Vietsovpetro luôn sẵn sàng hợp tác với các công ty dầu khí trong nước và quốc tế...",
  },
  {
    icon: oildDrill,
    title: "NGHIÊN CỨU THĂM DÒ KHAI THÁC MỎ",
    description:
      "Với kinh nghiệm và nguồn lực sẵn có, Vietsovpetro luôn sẵn sàng hợp tác với các công ty dầu khí trong nước và quốc tế...",
  },
  {
    icon: oildDrill,
    title: "DỊCH VỤ VẬN TẢI BIỂN VÀ CÔNG TÁC LẶN",
    description:
      "Với kinh nghiệm và nguồn lực sẵn có, Vietsovpetro luôn sẵn sàng hợp tác với các công ty dầu khí trong nước và quốc tế...",
  },
  {
    icon: oildDrill,
    title: "THU GOM VẬN CHUYỂN",
    description:
      "Với kinh nghiệm và nguồn lực sẵn có, Vietsovpetro luôn sẵn sàng hợp tác với các công ty dầu khí trong nước và quốc tế...",
  },
  {
    icon: oildDrill,
    title: "KHOAN, SỬA CHỮA, ĐO ĐỊA VẬT LÝ CÁC GIẾNG KHOAN",
    description:
      "Với kinh nghiệm và nguồn lực sẵn có, Vietsovpetro luôn sẵn sàng hợp tác với các công ty dầu khí trong nước và quốc tế...",
  },
  {
    icon: oildDrill,
    title: "XÂY LẮP (EPCI) KHẢO SÁT & SỬA CHỮA CÁC CÔNG TRÌNH",
    description:
      "Với kinh nghiệm và nguồn lực sẵn có, Vietsovpetro luôn sẵn sàng hợp tác với các công ty dầu khí trong nước và quốc tế...",
  },
  {
    icon: oildDrill,
    title: "VẬN HÀNH, SỬA CHỮA VÀ BẢO DƯỠNG (O&M)",
    description:
      "Với kinh nghiệm và nguồn lực sẵn có, Vietsovpetro luôn sẵn sàng hợp tác với các công ty dầu khí trong nước và quốc tế...",
  },
];

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div
      className="
    bg-stone-200 p-6 rounded-2xl border border-gray-200 flex flex-col justify-between items-center
    transition-all duration-300
    hover:shadow-lg hover:-translate-y-1 hover:border-blue-500 hover:bg-white
"
    >
      <img src={icon} alt={title} className="h-16 w-auto mb-4" />
      <h3 className="font-bold text-gray-800 uppercase mb-4 h-10 text-center">
        {title}
      </h3>
      <p className="text-sm text-gray-500 mb-4 h-24 text-center">
        {description}
      </p>
      <a
        href="#"
        className="flex items-center text-sm font-semibold hover:text-green-700"
      >
        Xem thêm <GoArrowRight className="ml-1" />
      </a>
    </div>
  );
};

const ServicesGrid: React.FC = () => {
  return (
    <div className="bg-[#F0F7F2] p-4 md:p-16 font-sans">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-medium text-gray-800">
            Sản phẩm – Dịch vụ
          </h1>
          <a
            href="#"
            className="flex items-center text-sm hover:text-green-700 font-medium"
          >
            Xem thêm <GoArrowRight className="ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="flex justify-center items-center space-x-3 mt-12">
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-gray-100 cursor-pointer">
            <MdArrowBackIosNew className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-gray-100 cursor-pointer">
            <MdArrowForwardIos className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
