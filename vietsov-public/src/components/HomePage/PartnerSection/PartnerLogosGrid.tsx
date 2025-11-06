import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";

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
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Chia logos thành các trang, mỗi trang 12 logos (2 rows x 6 cols)
  const logosPerPage = 12;
  const pages: PartnerLogo[][] = [];
  for (let i = 0; i < partnerLogosData.length; i += logosPerPage) {
    pages.push(partnerLogosData.slice(i, i + logosPerPage));
  }

  const handlePaginationClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative -mt-20 md:-mt-24 lg:-mt-32 inch32:-mt-36 z-10">
      <div className="pt-8 pb-12 md:pb-16">
        <div className="container mx-auto px-8 shadow-2xl rounded-lg py-16 px-24 bg-white">
          {/* Logos Slider */}
          <div className="relative">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
              }}
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              loop={pages.length > 1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="partner-logos-swiper lg:h-76"
            >
              {pages.map((pageLogos, pageIndex) => (
                <SwiperSlide key={pageIndex}>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {pageLogos.map((logo) => (
                      <div
                        key={logo.id}
                        className="bg-white rounded-lg shadow-xl p-4 h-32 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
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

            {/* Custom Pagination */}
            {pages.length > 1 && (
              <div className="flex justify-center items-center gap-2 mt-4 lg:mt-8">
                {pages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePaginationClick(index)}
                    className={`transition-all duration-300 cursor-pointer rounded-full ${
                      activeIndex === index
                        ? "bg-[#f472b6] w-10 h-1.5"
                        : "bg-[#fce7f3] w-6 h-1.5"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogosGrid;
