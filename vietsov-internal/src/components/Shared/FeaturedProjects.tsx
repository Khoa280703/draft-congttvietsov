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
      <div className="p-6 flex-1 flex flex-col">
        {/* Category and Date */}
        <div className="mb-3">
          <div className="font-bold text-[11px] lg:text-[10px] inch32:text-[11px] leading-none tracking-[2px] lg:tracking-[1.5px] inch32:tracking-[2px] text-vietsov-green mb-2">
            {project.category}
          </div>
          <div className="text-sm lg:text-xs inch32:text-sm font-normal leading-none text-vietsov-light-gray">
            {project.date}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg/[28px] lg:text-base/[24px] inch32:text-lg/[28px] line-clamp-3 mb-4">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-base lg:text-sm inch32:text-base leading-relaxed line-clamp-2 flex-1 text-vietsov-black/80 mb-4">
          {project.description}
        </p>

        {/* Action Button */}
        <div className="mt-auto">
          <SeeMoreButton variant="default" />
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
