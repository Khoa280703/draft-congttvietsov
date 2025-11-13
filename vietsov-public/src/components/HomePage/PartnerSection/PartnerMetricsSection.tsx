import React from "react";
import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";

const PartnerMetricsSection: React.FC = () => {
  return (
    <div className="relative w-full bg-gray-900 overflow-hidden py-12 md:py-16 lg:py-32 inch32:py-24">
      {/* Background Image */}
      <img
        src={bannerDanKhoan}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-green-600/70 z-10"></div>

      {/* Background Pattern - Network */}
      <div className="absolute inset-0 opacity-20 z-20">
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
      <div className="absolute bottom-0 left-0 right-0 opacity-10 z-20">
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

      <div className="relative z-30 mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-white/90 text-sm md:text-base uppercase tracking-wider mb-4 font-medium">
            ĐỐI TÁC - KHÁCH HÀNG
          </h3>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl inch32:text-6xl font-bold leading-tight">
            ĐỒNG HÀNH CÙNG CHÚNG TÔI
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PartnerMetricsSection;
