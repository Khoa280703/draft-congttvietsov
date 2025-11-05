import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import chuyenTham1996 from "@/assets/1996.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

const photoData = [
  {
    id: 1,
    src: danKhoanVietsov,
    caption: "Dự án điều hành khai thác mỏ",
    year: "Năm 1995",
  },
  {
    id: 2,
    src: chuyenTham1996,
    caption: "Kỹ sư trong phòng điều khiển",
    year: "Năm 2002",
  },
  {
    id: 3,
    src: daiHoiDaiBieu,
    caption: "Tàu dịch vụ trên biển",
    year: "Năm 2010",
  },
  {
    id: 4,
    src: hoiNghiSuKien,
    caption: "Lắp đặt cấu kiện thượng tầng",
    year: "Năm 1998",
  },
  {
    id: 5,
    src: hoiNghiPetro,
    caption: "Kiểm tra hệ thống đường ống",
    year: "Năm 2015",
  },
];

const MediaLibrary: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="pic-vid-library" className="bg-[#F0F7F2]  py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-800">
            Thư viện hình ảnh và video
          </h2>
          <a
            href="/tintuc/thu-vien-anh-video"
            className="flex items-center text-sm hover:text-blue-700 font-medium cursor-pointer"
          >
            Xem thêm <FiArrowRight className="w-4 h-4 ml-1 text-blue-600" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative group">
              <Swiper
                modules={[Navigation, Thumbs]}
                spaceBetween={10}
                navigation={{
                  nextEl: ".image-swiper-button-next",
                  prevEl: ".image-swiper-button-prev",
                }}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="h-120"
              >
                {photoData.map((photo) => (
                  <SwiperSlide key={photo.id}>
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
                <button className="image-swiper-button-prev absolute top-1/2 -translate-y-1/2 left-4 z-10 p-2 bg-green-500/70 rounded-full border-1 border-white text-white hover:bg-green-500/40 transition-colors cursor-pointer opacity-0 group-hover:opacity-100 swiper-button-disabled:opacity-20">
                  <FiChevronLeft size={24} />
                </button>
                <button className="image-swiper-button-next absolute top-1/2 -translate-y-1/2 right-4 z-10 p-2 bg-green-500/70 rounded-full border-1 border-white text-white hover:bg-green-500/40 transition-colors cursor-pointer opacity-0 group-hover:opacity-100 swiper-button-disabled:opacity-20">
                  <FiChevronRight size={24} />
                </button>
              </Swiper>
            </div>
            <div className="text-center mt-4">
              <p className="font-semibold text-gray-800">
                {photoData[activeIndex].caption}
              </p>
              <p className="text-sm text-gray-500">
                {photoData[activeIndex].year}
              </p>{" "}
              <div className="relative w-48 h-1 bg-gray-300 rounded-full mx-auto mt-4">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-300"
                  style={{
                    width: `${100 / photoData.length}%`,
                    left: `${(activeIndex * 100) / photoData.length}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[Thumbs]}
              direction="vertical"
              className="h-140 thumbnail-slider"
            >
              {photoData.map((photo) => (
                <SwiperSlide
                  key={photo.id}
                  className="overflow-hidden cursor-pointer opacity-50"
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <style>{`
        .thumbnail-slider .swiper-slide-thumb-active {
            opacity: 1;
            border: 3px solid #3B82F6; 
        }
      `}</style>
    </section>
  );
};

export default MediaLibrary;
