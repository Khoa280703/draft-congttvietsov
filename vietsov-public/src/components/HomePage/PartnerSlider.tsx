// components/PartnerSlider.tsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
];

const PartnerSlider: React.FC = () => {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl lg:text-4xl inch32:text-5xl font-bold text-center mb-10 lg:mb-16 inch32:mb-10 drop-shadow-lg">
        Đối tác
      </h2>
      <div className="">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="partner-swiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
            1536: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {partnerLogosData.map((logo) => (
            <SwiperSlide key={logo.id}>
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full  h-36 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerSlider;
