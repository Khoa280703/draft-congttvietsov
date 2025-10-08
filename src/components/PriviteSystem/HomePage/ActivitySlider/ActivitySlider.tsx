import React from "react";

// Import các thành phần cần thiết từ Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "./ActivitySlider.css";
import "swiper/css";
import "swiper/css/navigation";

import dichVuKhoanImg from "@/assets/dankhoanvietsov.jpg";

// --- Dữ liệu cho các slide ---
const activities = [
  {
    id: 1,
    title: "Dịch vụ khoan",
    image: dichVuKhoanImg,
  },
  {
    id: 2,
    title: "Dịch vụ Kỹ thuật Giếng khoan",
    image: dichVuKhoanImg,
  },
  {
    id: 3,
    title:
      "Dịch vụ cơ khí chế tạo, kiểm định bảo dưỡng, thương mại và dịch vụ khác",
    image: dichVuKhoanImg,
  },
  {
    id: 4,
    title: "Dịch vụ Vận tải biển và Căn cứ cảng",
    image: dichVuKhoanImg,
  },
];

// --- Component Chính ---
const ActivitySlider: React.FC = () => {
  return (
    <section className="py-16 font-sans">
      <div className="container mx-auto px-4">
        {/* Tiêu đề Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          Lĩnh vực hoạt động
        </h2>

        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          // Cấu hình responsive
          breakpoints={{
            // Khi màn hình >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // Khi màn hình >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // Khi màn hình >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          // Thêm class để style các nút điều hướng
          className="activity-slider"
        >
          {activities.map((activity) => (
            <SwiperSlide key={activity.id}>
              <div className="relative rounded-lg overflow-hidden h-80 group">
                {/* Ảnh nền */}
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Lớp phủ tối */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/80"></div>
                {/* Nội dung text */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <h3 className="text-white text-2xl font-bold text-center leading-tight">
                    {activity.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ActivitySlider;
