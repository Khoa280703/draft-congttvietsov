// components/PartnerSlider.tsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export interface PartnerLogo {
  id: string;
  src: string;
  alt: string;
  link?: string;
}

import petrosetcoLogo from "@/assets/logo_petrosetco.png";

const partnerLogosData: PartnerLogo[] = [
  { id: "petrosetco", src: petrosetcoLogo, alt: "Petrosetco", link: "#" },
  { id: "petrosetco", src: petrosetcoLogo, alt: "Petrosetco", link: "#" },
  { id: "petrosetco", src: petrosetcoLogo, alt: "Petrosetco", link: "#" },
  { id: "petrosetco", src: petrosetcoLogo, alt: "Petrosetco", link: "#" },
  { id: "petrosetco", src: petrosetcoLogo, alt: "Petrosetco", link: "#" },
  { id: "petrosetco", src: petrosetcoLogo, alt: "Petrosetco", link: "#" },
  { id: "petrosetco", src: petrosetcoLogo, alt: "Petrosetco", link: "#" },
  { id: "petrosetco", src: petrosetcoLogo, alt: "Petrosetco", link: "#" },
];

const PartnerSlider: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <h2 className="text-4xl md:text-5xl font-medium text-center text-white mb-10 drop-shadow-lg">
        Đối tác
      </h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={4} // Mặc định hiển thị 4 logo trên màn hình lớn
        loop={true}
        navigation={true} // Bật mũi tên điều hướng
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // Cấu hình responsive
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        // Thêm class để tùy chỉnh style nếu cần
        className="partner-logo-slider"
      >
        {partnerLogosData.map((logo) => (
          <SwiperSlide key={logo.id}>
            <a
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-xl shadow-lg transition-all duration-300 transform hover:bg-white hover:-translate-y-2 group"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-36 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnerSlider;
