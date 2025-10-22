import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiMapPin, FiUsers } from "react-icons/fi";
import { useElementAnimation } from "@/hooks/useElementAnimation";

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
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useElementAnimation({ delay: index * 200 });

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
    <motion.div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
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
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-vietsov-green transition-colors duration-300">
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
          <button className="flex items-center text-green-600 hover:text-green-700 font-semibold text-sm transition-colors duration-300 group/btn">
            Xem chi tiết
            <FiArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProjects: React.FC = () => {
  const titleRef = useElementAnimation({ delay: 0 });
  const subtitleRef = useElementAnimation({ delay: 100 });

  return (
    <section className="bg-gradient-to-br from-gray-50">
      <div className="">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            ref={titleRef as React.RefObject<HTMLDivElement>}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dự án tiêu biểu
            </h2>
          </motion.div>

          <motion.div
            ref={subtitleRef as React.RefObject<HTMLDivElement>}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Khám phá những dự án nổi bật và thành tựu đáng tự hào của
              Vietsovpetro trong lĩnh vực dầu khí
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="/doitac-duan/du-an"
            className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Xem tất cả dự án
            <FiArrowRight className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
