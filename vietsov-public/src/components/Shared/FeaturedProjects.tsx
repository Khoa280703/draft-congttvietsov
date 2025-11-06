import React from "react";
import { FiArrowRight, FiMapPin, FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { SeeMoreButton } from "@/components/Button";

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
  return (
    <div
      className="relative bg-white overflow-hidden cursor-pointer h-full flex flex-col"
      style={{
        boxShadow: "0 5px 16px 0 rgba(2, 55, 102, 0.09)",
      }}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col space-y-2.5 md:space-y-3 lg:space-y-2.5 inch32:space-y-3">
        {/* Category */}
        {project.category && (
          <div className="font-bold text-[11px] lg:text-[10px] inch32:text-[11px] leading-none tracking-[2px] lg:tracking-[1.5px] inch32:tracking-[2px] text-vietsov-green">
            {project.category}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>

        {/* Date */}
        {project.date && (
          <div className="text-sm lg:text-xs inch32:text-sm font-normal leading-none text-vietsov-light-gray">
            {project.date}
          </div>
        )}

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <FiMapPin className="w-4 h-4 mr-2 text-vietsov-green" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <FiUsers className="w-4 h-4 mr-2 text-vietsov-green" />
            <span>{project.partners.join(", ")}</span>
          </div>
        </div>

        {/* Status and Action - Fixed at bottom */}
        <div className="flex items-center justify-between mt-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 items-stretch">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => navigate(`/doitac-duan/du-an/chi-tiet`)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <SeeMoreButton
            text="Xem tất cả dự án"
            href="/doitac-duan/du-an"
            variant="outline"
            reverse
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
