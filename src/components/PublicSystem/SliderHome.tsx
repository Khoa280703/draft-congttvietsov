import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";

// Import CSS của Swiper
import "swiper/css";
import "swiper/css/effect-fade";

// Import các icon mạng xã hội (ví dụ)
import { FaInstagram, FaTwitter } from "react-icons/fa";

// Import ảnh
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoatDongCongDong from "@/assets/hdcongdongvietsov.jpg";

const slidesData = [
  {
    id: 1,
    preTitle: "Lễ Vinh danh tại",
    title:
      "Đại hội đại biểu Đảng bộ Tập đoàn Công nghiệp Năng lượng Quốc gia Việt Nam",
    subTitle: "lần thứ IV, nhiệm kỳ 2025-2030",
    image: daiHoiDaiBieu,
  },
  {
    id: 2,
    preTitle: "Sự kiện nổi bật",
    title: "Hội nghị Sơ kết Công tác Truyền thông và Văn hóa Doanh nghiệp",
    subTitle: "6 tháng đầu năm 2025",
    image: hoiNghiSuKien,
  },
  {
    id: 3,
    preTitle: "Hoạt động cộng đồng",
    title: "Vietsovpetro Chung tay vì một Môi trường Xanh, Sạch, Đẹp",
    subTitle: "Chiến dịch Mùa hè xanh 2025",
    image: hoatDongCongDong,
  },
];

const HeroSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  return (
    <div className="relative font-sans">
      <div className="hidden md:flex flex-col items-center space-y-4 absolute top-1/2 -translate-y-1/2 left-4 z-20">
        <div className="relative h-24 w-full flex items-center justify-center">
          <span className="text-white whitespace-nowrap text-xs uppercase tracking-wider absolute transform -rotate-90">
            Follow us
          </span>
        </div>
        <div className="w-px h-16 bg-white/50"></div>
        <a href="#" className="text-white/80 hover:text-white">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-white/80 hover:text-white">
          <FaTwitter size={20} />
        </a>
      </div>

      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-[80vh] md:h-[700px] w-full"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#3a3a6e]/80 via-[#4e9a5a]/80 to-transparent z-0"></div>

              <div className="relative z-10 w-full h-full flex flex-col justify-end">
                <div className="container mx-auto px-6 md:px-12 text-white pb-16 md:pb-20">
                  <div className="max-w-3xl">
                    <p className="text-base md:text-lg">{slide.preTitle}</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-base md:text-lg mt-2">
                      {slide.subTitle}
                    </p>
                    <button className="mt-6 px-5 py-2.5 md:px-6 md:py-3 bg-white text-black font-semibold rounded-md flex items-center hover:bg-gray-200 transition">
                      Xem thêm
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </button>
                    <div className="mt-8 flex items-center space-x-6">
                      {slidesData.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => swiperInstance?.slideToLoop(index)}
                          className={`relative text-base font-medium transition-colors ${
                            activeIndex === index
                              ? "text-white"
                              : "text-white/60 hover:text-white"
                          }`}
                        >
                          0{index + 1}
                          {activeIndex === index && (
                            <span
                              key={activeIndex}
                              className="absolute left-0 -bottom-2 h-[3px] w-full bg-white animate-progress"
                            ></span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
                @keyframes progress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                .animate-progress {
                    animation: progress 5s linear forwards;
                }
                `}
      </style>
    </div>
  );
};

export default HeroSlider;
