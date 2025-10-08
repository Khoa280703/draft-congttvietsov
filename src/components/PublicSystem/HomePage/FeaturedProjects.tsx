import React from "react";

import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";
import { FiArrowRight } from "react-icons/fi";

const projectsData = [
  {
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title: "Dự án điều hành khai thác mỏ",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ học bổng nghiên cứu khoa học của Vietsovpe...",
    image: danKhoanVietsov,
  },
  {
    category: "DỰ ÁN MỚI",
    title: "Lắp đặt khối thượng tầng",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ học bổng nghiên cứu khoa học của Vietsovpe...",
    image: hoiNghiPetro,
  },
  {
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title: "Dịch vụ nghiên cứu thăm dò - khai thác dầu khí",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ học bổng nghiên cứu khoa học của Vietsovpe...",
    image: daiHoiDaiBieu,
  },
  {
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title: "Dự án lắp đặt chân đế",
    description:
      "Sáng ngày 20/9/2024 tại trụ sở của Vietsovpetro đã tổ chức buổi làm việc đầu tiên Chương trình làm việc tài trợ học bổng nghiên cứu khoa học của Vietsovpe...",
    image: hoiNghiSuKien,
  },
];

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  category,
  title,
  description,
  image,
}) => {
  return (
    <div className="bg-white overflow-hidden group cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold text-green-500 uppercase mb-2">
          {category}
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// --- Component chính ---
const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-12 md:py-16 font-sans">
      <div className="container mx-auto px-4">
        {/* Header */}

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Dự án tiêu biểu
        </h2>
        {/* Lưới các dự án */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              category={project.category}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
        <div className="flex justify-center items-center space-x-3">
          <a
            href="#"
            className="flex items-center text-sm hover:text-green-700 font-medium border-1 border-green-500 rounded-full px-4 py-2"
          >
            Xem thêm
            <FiArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
