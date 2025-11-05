import React, { useState } from "react";
import { FiBriefcase, FiUsers } from "react-icons/fi";
import { HiSpeakerphone } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";

export interface PartnerLogo {
  id: string;
  src: string;
  alt: string;
  link?: string;
}

import petrosetcoLogo from "@/assets/logo/petrosetco_logo.png";
import lm18Logo from "@/assets/logo/lm18_logo.jpeg";
import ptscLogo from "@/assets/logo/ptsc_logo.png";
import pvdLogo from "@/assets/logo/pvd_logo.png";
import schlumbergerLogo from "@/assets/logo/schlumberger_logo.png";
import petrovietnamLogo from "@/assets/logo/petrovietnam_logo.png";

const partnerLogosData: PartnerLogo[] = [
  { id: "petrosetco", src: petrosetcoLogo, alt: "Petrosetco", link: "#" },
  { id: "pvd", src: pvdLogo, alt: "PVD", link: "#" },
  { id: "ptsc", src: ptscLogo, alt: "PT&SC", link: "#" },
  { id: "schlumberger", src: schlumbergerLogo, alt: "Schlumberger", link: "#" },
  { id: "petrovietnam", src: petrovietnamLogo, alt: "PetroVietnam", link: "#" },
  { id: "lm18", src: lm18Logo, alt: "LM18", link: "#" },
  // Duplicate để có đủ 12 logos
  { id: "petrosetco2", src: petrosetcoLogo, alt: "Petrosetco", link: "#" },
  { id: "pvd2", src: pvdLogo, alt: "PVD", link: "#" },
  { id: "ptsc2", src: ptscLogo, alt: "PT&SC", link: "#" },
  { id: "schlumberger2", src: schlumbergerLogo, alt: "Schlumberger", link: "#" },
  { id: "petrovietnam2", src: petrovietnamLogo, alt: "PetroVietnam", link: "#" },
  { id: "lm182", src: lm18Logo, alt: "LM18", link: "#" },
];

const metrics = [
  {
    icon: FiBriefcase,
    value: "200+",
    label: "Dự án đã triển khai",
  },
  {
    icon: HiSpeakerphone,
    value: "500+",
    label: "Chiến dịch",
  },
  {
    icon: FiUsers,
    value: "200+",
    label: "Khách hàng",
  },
  {
    icon: FaHeart,
    value: "100+",
    label: "Đối tác tiêu biểu",
  },
];

const PartnerSlider: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const logosPerPage = 12;
  const displayedLogos = partnerLogosData.slice(
    currentPage * logosPerPage,
    (currentPage + 1) * logosPerPage
  );
  const totalPages = Math.ceil(partnerLogosData.length / logosPerPage);

  return (
    <div>
      {/* Top Section - Red Background with Metrics */}
      <div className="relative bg-gradient-to-br from-red-600 to-red-700 overflow-hidden py-12 md:py-16 lg:py-20 inch32:py-24">
        {/* Background Pattern - Network */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 600"
          >
            <defs>
              <pattern
                id="network-pattern"
                x="0"
                y="0"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="40" cy="40" r="3" fill="white" opacity="0.8" />
                <line
                  x1="40"
                  y1="40"
                  x2="80"
                  y2="40"
                  stroke="white"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <line
                  x1="40"
                  y1="40"
                  x2="40"
                  y2="80"
                  stroke="white"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <line
                  x1="40"
                  y1="40"
                  x2="80"
                  y2="80"
                  stroke="white"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                <line
                  x1="40"
                  y1="40"
                  x2="0"
                  y2="0"
                  stroke="white"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network-pattern)" />
          </svg>
        </div>

        {/* Bar Charts Background */}
        <div className="absolute bottom-0 left-0 right-0 opacity-10">
          <div className="flex items-end justify-center space-x-2 h-32">
            {[60, 80, 45, 90, 70, 55, 65, 75].map((height, index) => (
              <div
                key={index}
                className="bg-white rounded-t"
                style={{ width: "30px", height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-white text-lg md:text-xl mb-2 font-medium">
              ĐỐI TÁC - KHÁCH HÀNG
            </h3>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl inch32:text-6xl font-bold">
              ĐỒNG HÀNH CÙNG CHÚNG TÔI
            </h2>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg">
                    {metric.icon === FaHeart ? (
                      <div className="flex items-center space-x-1">
                        <FaHeart className="w-6 h-6 md:w-7 md:h-7 text-red-600" />
                        <FaHeart className="w-6 h-6 md:w-7 md:h-7 text-red-600" />
                        <FaHeart className="w-6 h-6 md:w-7 md:h-7 text-red-600" />
                      </div>
                    ) : (
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-red-600" />
                    )}
                  </div>
                  <div className="text-yellow-400 text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                    {metric.value}
                  </div>
                  <div className="text-white text-sm md:text-base font-medium">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Section - White Background with Logos */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-8">
            {displayedLogos.map((logo) => (
              <div
                key={logo.id}
                className="bg-white rounded-lg shadow-md p-4 h-32 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
              >
                <a
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <p className="text-center text-gray-700 text-sm md:text-base mb-6">
            VÀ HÀNG TRĂM DOANH NGHIỆP KHÁC ĐÃ TIN TƯỞNG VIETSOVPETRO
          </p>

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentPage === index
                      ? "bg-pink-400 w-8"
                      : "bg-pink-200 w-2"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerSlider;
