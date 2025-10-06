import React from "react";
import { FiArrowRight } from "react-icons/fi";

import { PageWithSidebar } from "@/components/PublicSystem";
import leader from "@/assets/MrVuMaiKhanh.jpg";

// --- Dữ liệu lãnh đạo được cập nhật theo ảnh ---
const leadersData = [
  {
    image: leader,
    title: "TỔNG GIÁM ĐỐC",
    name: "Ông Vũ Mai Khanh",
    description:
      "Trực tiếp lãnh đạo điều hành linh hoạt các hoạt động sản xuất kinh doanh, tài chính của Vietsovpetro và chịu trách nhiệm trư...",
  },
  {
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC THỨ NHẤT",
    name: "Сараев Олег Петрович",
    description: "Phó Tổng giám đốc Liên doanh Việt - Nga Vietsovpetro",
  },
  {
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Ông Yakovenko E.V",
    description:
      "Phó Tổng giám đốc Cung ứng vật tư và Vận tải công nghệ Liên doanh Việt - Nga Vietsovpetro. Đảm bảo vật tư kỹ thuật cho...",
  },
  {
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Ông Mai Đăng Tuấn",
    description: "Phó Tổng giám đốc Liên doanh Việt - Nga Vietsovpetro",
  },
  {
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Ông Lê Việt Dũng",
    description:
      "Chánh Kỹ sư Liên doanh Việt - Nga Vietsovpetro. Triển khai áp dụng các giải pháp công nghệ, kỹ thuật, tổ chức thực hiện kế...",
  },
  {
    image: leader,
    title: "PHÓ TỔNG GIÁM ĐỐC",
    name: "Ông Phạm Xuân Sơn",
    description:
      "Phó Tổng giám đốc Khoan và sửa giếng Liên doanh Việt - Nga Vietsovpetro",
  },
];

interface LeaderCardProps {
  image: string;
  title: string;
  name: string;
  description: string;
}

const LeaderCard: React.FC<LeaderCardProps> = ({
  image,
  title,
  name,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Ảnh lãnh đạo */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      {/* Nội dung text */}
      <div className="p-6">
        <p className="text-xs font-bold text-pink-600 uppercase tracking-wider mb-2">
          {title}
        </p>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
        <p className="text-sm text-gray-600 mb-5 line-clamp-2">{description}</p>
        <a
          href="#"
          className="inline-flex items-center text-sm font-semibold text-gray-800 group-hover:text-green-600 transition-colors"
        >
          Xem thêm
          <FiArrowRight className="w-4 h-4 ml-1 text-green-500 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

// --- Component chính hiển thị lưới các lãnh đạo ---
const LeaderPage: React.FC = () => {
  return (
    <PageWithSidebar activePath="/gioithieu/ban-lanh-dao">
      <section className="bg-gray-50 py-16 font-sans">
        <div className="container mx-auto px-4">
          {/* Lưới các thẻ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadersData.map((leader, index) => (
              <LeaderCard
                key={index}
                image={leader.image}
                title={leader.title}
                name={leader.name}
                description={leader.description}
              />
            ))}
          </div>
        </div>
      </section>
    </PageWithSidebar>
  );
};

export default LeaderPage;
