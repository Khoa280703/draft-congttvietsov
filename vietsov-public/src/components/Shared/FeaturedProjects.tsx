import React from "react";
import { FiArrowRight, FiCalendar, FiMapPin, FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

const projectsData = [
  {
    id: 1,
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title: "Dự án điều hành khai thác mỏ",
    description:
      "Dự án khai thác dầu khí quy mô lớn với công nghệ hiện đại, đảm bảo hiệu quả sản xuất và an toàn môi trường.",
    image: danKhoanVietsov,
    date: "2024",
    location: "Biển Đông",
    partners: ["PetroVietnam", "Rosneft"],
    status: "Đang triển khai",
    featured: true,
  },
  {
    id: 2,
    category: "DỰ ÁN MỚI",
    title: "Lắp đặt khối thượng tầng",
    description:
      "Dự án lắp đặt các khối thượng tầng cho giàn khoan ngoài khơi với công nghệ tiên tiến nhất.",
    image: hoiNghiPetro,
    date: "2024",
    location: "Vũng Tàu",
    partners: ["PTSC", "Schlumberger"],
    status: "Hoàn thành",
    featured: true,
  },
  {
    id: 3,
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title: "Dịch vụ nghiên cứu thăm dò - khai thác dầu khí",
    description:
      "Cung cấp dịch vụ nghiên cứu và thăm dò dầu khí với đội ngũ chuyên gia hàng đầu.",
    image: daiHoiDaiBieu,
    date: "2023-2024",
    location: "Nhiều địa điểm",
    partners: ["Petrosetco", "PVD"],
    status: "Đang triển khai",
    featured: false,
  },
  {
    id: 4,
    category: "HOẠT ĐỘNG SẢN XUẤT",
    title: "Dự án lắp đặt chân đế",
    description:
      "Dự án lắp đặt chân đế cho các giàn khoan ngoài khơi với kỹ thuật cao và an toàn tuyệt đối.",
    image: hoiNghiSuKien,
    date: "2023",
    location: "Biển Đông",
    partners: ["LM1", "PTSC"],
    status: "Hoàn thành",
    featured: false,
  },
];

interface ProjectCardProps {
  project: (typeof projectsData)[0];
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Hoàn thành":
        return "bg-green-100 text-vietsov-green";
      case "Đang triển khai":
        return "bg-blue-100 text-blue-800";
      case "Sắp triển khai":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            NỔI BẬT
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-vietsov-green text-xs font-semibold px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Project Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <FiCalendar className="w-4 h-4 mr-2 text-vietsov-green" />
            <span>{project.date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <FiMapPin className="w-4 h-4 mr-2 text-vietsov-green" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <FiUsers className="w-4 h-4 mr-2 text-vietsov-green" />
            <span>{project.partners.join(", ")}</span>
          </div>
        </div>

        {/* Status and Action */}
        <div className="flex items-center justify-between">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(
              project.status
            )}`}
          >
            {project.status}
          </span>
          <button className="flex items-center text-green-600 font-semibold text-sm cursor-pointer">
            Xem chi tiết
            <FiArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="">
      <div className="">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => navigate(`/doitac-duan/du-an/chi-tiet`)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="/doitac-duan/du-an"
            className="inline-flex items-center bg-vietsov-green text-white font-semibold px-8 py-4 rounded-full shadow-lg cursor-pointer"
          >
            Xem tất cả dự án
            <FiArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
