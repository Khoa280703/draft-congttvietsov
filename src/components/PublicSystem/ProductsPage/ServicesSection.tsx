import React from "react";
import { FiArrowRight } from "react-icons/fi";

import danKhoanvietsov from "@/assets/dankhoanvietsov.jpg";

const servicesData = [
  {
    image: danKhoanvietsov,
    title: "Thiết kế các công trình dầu khí biển",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ...",
  },
  {
    image: danKhoanvietsov,
    title: "Nghiên cứu thăm dò khai thác mỏ",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ...",
  },
  {
    image: danKhoanvietsov,
    title: "Dịch vụ vận tải biển và công tác lặn",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ...",
  },
  {
    image: danKhoanvietsov,
    title: "Điều hành và khai thác mỏ",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ...",
  },
  {
    image: danKhoanvietsov,
    title: "Vận hành, sửa chữa và bảo dưỡng (O&M)",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ...",
  },
  {
    image: danKhoanvietsov,
    title: "Xây lắp (EPCI) khảo sát & sửa chữa các công trình",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ...",
  },
  {
    image: danKhoanvietsov,
    title: "Khoan, sửa chữa, đo địa vật lý các giếng khoan",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ...",
  },
  {
    image: danKhoanvietsov,
    title: "Thu gom và vận chuyển khí, vận hành và bảo dưỡng các giàn nén khí",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ...",
  },
  {
    image: danKhoanvietsov,
    title: "Thu gom và vận chuyển khí, vận hành và bảo dưỡng các giàn nén khí",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ...",
  },
];

// Component con cho mỗi thẻ dịch vụ
const ServiceCard: React.FC<{
  image: string;
  title: string;
  description: string;
}> = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-gray-800 mb-2 h-12">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 h-20 line-clamp-3">
          {description}
        </p>
        <a
          href="#"
          className="flex items-center text-sm text-green-600 font-semibold hover:text-green-700"
        >
          Xem thêm <FiArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

// Component chính
const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16 font-sans">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-8">
          <h1 className="text-3xl md:text-4xl font-medium text-gray-800">
            Sản phẩm & Dịch vụ
          </h1>
          <p className="mt-4 text-gray-600">
            Với kinh nghiệm và nguồn lực sẵn có, Vietsovpetro luôn sẵn sàng hợp
            tác với các công ty dầu khí trong nước và quốc tế để cung cấp các
            loại hình dịch vụ chất lượng cao trong các lĩnh vực sau đây.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
