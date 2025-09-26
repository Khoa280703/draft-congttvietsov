import React from "react";
// Import icon mũi tên từ react-icons
import { FiArrowRight } from "react-icons/fi";
import leader from "@/assets/MrVuMaiKhanh.jpg";

const leaders = [
  {
    image: leader,
    title: "TỔNG GIÁM ĐỐC",
    name: "Ông Vũ Mai Khanh",
    description:
      "Ông Vũ Mai Khanh đã có 32 năm làm việc tại Liên doanh Việt - Nga Vietsovpetro kể từ khi chính thức trở thành ngườ...",
  },
  {
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC THỨ NHẤT",
    name: "Сараев Олег Петрович",
    description:
      "Tổ chức thực hiện các kế hoạch tìm kiếm thăm dò địa chất, mở rộng vùng hoạt động của Vietsovpetro, nghiên...",
  },
  {
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Phạm Xuân Sơn",
    description:
      "Tổ chức thực hiện các kế hoạch tìm kiếm thăm dò địa chất, mở rộng vùng hoạt động của Vietsovpetro, nghiên...",
  },
  {
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Ông Yakovenko E.V",
    description:
      "Tổ chức thực hiện và thực hiện các kế hoạch, biện pháp tổ chức kỹ thuật về xây dựng cơ bản, khảo sát, sửa chữa vàn...",
  },
  {
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Ông Mai Đăng Tuấn",
    description:
      "Ông Vũ Mai Khanh đã có 32 năm làm việc tại Liên doanh Việt - Nga Vietsovpetro kể từ khi chính thức trở thành ngườ...",
  },
  {
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Ông Trần Quốc Thắng",
    description:
      "Tổ chức thực hiện các kế hoạch về tìm kiếm thăm dò địa chất, mở rộng vùng hoạt động của Vietsovpetro.",
  },
];

// --- Component con cho mỗi thẻ ---
interface LeaderCardProps {
  image: string;
  title: string;
  name: string;
  description: string;
}

const LeadershipCard: React.FC<LeaderCardProps> = ({
  image,
  title,
  name,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg text-center shadow-md overflow-hidden group">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-6">
        <p className="text-xs font-bold text-green-600 uppercase mb-1">
          {title}
        </p>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{name}</h3>
        <p className="text-sm text-gray-600 mb-4 h-20 line-clamp-3">
          {description}
        </p>
        <a
          href="#"
          className="flex items-center justify-center text-sm font-semibold hover:text-blue-700"
        >
          Xem thêm <FiArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

// --- Component chính ---
const LeadershipSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16 font-sans">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-4xl font-medium text-gray-800">
            Ban lãnh đạo
          </h2>
        </div>

        {/* Lưới các thẻ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <LeadershipCard
              key={index}
              image={leader.image}
              title={leader.title}
              name={leader.name}
              description={leader.description}
            />
          ))}
        </div>

        {/* Nút Xem thêm ở dưới cùng */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            Xem thêm <FiArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
