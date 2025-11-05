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
  // Duplicate để có đủ 12 logos
  { id: "petrosetco2", src: petrosetcoLogo, alt: "Petrosetco", link: "#" },
  { id: "pvd2", src: pvdLogo, alt: "PVD", link: "#" },
  { id: "ptsc2", src: ptscLogo, alt: "PT&SC", link: "#" },
  {
    id: "schlumberger2",
    src: schlumbergerLogo,
    alt: "Schlumberger",
    link: "#",
  },
  {
    id: "petrovietnam2",
    src: petrovietnamLogo,
    alt: "PetroVietnam",
    link: "#",
  },
  { id: "lm182", src: lm18Logo, alt: "LM18", link: "#" },
  // Thêm thêm để có nhiều pages test
  { id: "petrosetco3", src: petrosetcoLogo, alt: "Petrosetco", link: "#" },
  { id: "pvd3", src: pvdLogo, alt: "PVD", link: "#" },
  { id: "ptsc3", src: ptscLogo, alt: "PT&SC", link: "#" },
  {
    id: "schlumberger3",
    src: schlumbergerLogo,
    alt: "Schlumberger",
    link: "#",
  },
  {
    id: "petrovietnam3",
    src: petrovietnamLogo,
    alt: "PetroVietnam",
    link: "#",
  },
  { id: "lm183", src: lm18Logo, alt: "LM18", link: "#" },
  { id: "petrosetco4", src: petrosetcoLogo, alt: "Petrosetco", link: "#" },
  { id: "pvd4", src: pvdLogo, alt: "PVD", link: "#" },
  { id: "ptsc4", src: ptscLogo, alt: "PT&SC", link: "#" },
  {
    id: "schlumberger4",
    src: schlumbergerLogo,
    alt: "Schlumberger",
    link: "#",
  },
  {
    id: "petrovietnam4",
    src: petrovietnamLogo,
    alt: "PetroVietnam",
    link: "#",
  },
  { id: "lm184", src: lm18Logo, alt: "LM18", link: "#" },
];

const PartnerLogosGrid: React.FC = () => {
  // Chia logos thành các trang, mỗi trang 12 logos (2 rows x 6 cols)
  const logosPerPage = 12;
  const pages: PartnerLogo[][] = [];
  for (let i = 0; i < partnerLogosData.length; i += logosPerPage) {
    pages.push(partnerLogosData.slice(i, i + logosPerPage));
  }

  return (
    <div className="relative -mt-20 md:-mt-24 lg:-mt-32 inch32:-mt-36 z-10">
      <div className="pt-8 pb-12 md:pb-16">
        <div className="container mx-auto px-4 shadow-2xl rounded-lg py-16 px-24 bg-white">
          {/* Logos Slider */}
          <div className="relative mb-8">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              loop={pages.length > 1}
              pagination={{
                clickable: true,
                enabled: pages.length > 1,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="partner-logos-swiper"
            >
              {pages.map((pageLogos, pageIndex) => (
                <SwiperSlide key={pageIndex}>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-8">
                    {pageLogos.map((logo) => (
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Bottom Text */}
          <p className="text-center text-gray-700 text-sm md:text-base font-semibold">
            VÀ HÀNG TRĂM DOANH NGHIỆP KHÁC ĐÃ TIN TƯỞNG VIETSOVPETRO
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogosGrid;
