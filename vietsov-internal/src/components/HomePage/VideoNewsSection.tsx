import React from "react";
import { FiLink, FiBookmark, FiTwitter, FiFacebook } from "react-icons/fi";
import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import chuyenTham1996 from "@/assets/1996.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

const mainVideo = {
  thumbnail: danKhoanVietsov,
  duration: "02:00",
  timestamp: "9/6/2024 9:54:47 AM",
  title:
    "Một hành trình – Hồi ức về Vietsovpetro 44 năm – một chặng đường dài với biết bao đổi thay, không chỉ của một đơn vị dầu khí tiên phong, mà còn là hành trình trưởng thành của biết bao thế hệ...",
  description:
    "Có những khoảnh khắc sẽ còn in sâu trong ký ức – ngày những công trình đầu tiên vận hành, khai thác, những ca trực xuyên đêm giữa biển khơi, những lần thử thách tưởng chừng không vượt qua nổi của những...",
};

const videoThumbnails = [
  {
    id: 1,
    image: hoiNghiPetro,
    timestamp: "9/6/2024 9:54:47 AM",
    title:
      "Vietsovpetro đã tổ chức thành công chương trình tham quan dành cho các...",
  },
  {
    id: 2,
    image: daiHoiDaiBieu,
    timestamp: "9/6/2024 9:54:47 AM",
    title:
      "Tổng giám đốc Vũ Mai Khanh phát biểu trong sự kiện Lễ mừng công 250 triệu tấn dầu",
  },
  {
    id: 3,
    image: hoiNghiSuKien,
    timestamp: "9/6/2024 9:54:47 AM",
    title:
      "Trải qua 35 năm xây dựng và phát triển, ngành Tuyên giáo luôn giữ vai trò “đi trước mở đường, đi cùng phát triển”...",
  },
  {
    id: 4,
    image: chuyenTham1996,
    timestamp: "9/6/2024 9:54:47 AM",
    title: "Chủ tịch nước Lê Đức Anh thăm quan Cảng Vietsovpetro năm 1996.",
  },
];

// --- Sub-components ---

// Nút Play lớn ở giữa ảnh
const PlayButton = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
    <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 text-white ml-1"
      >
        <path
          fillRule="evenodd"
          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
);

// --- Component chính ---

const VideoNewsSection: React.FC = () => {
  return (
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 md:mb-5 lg:mb-5 laptop:mb-6 fhd:mb-7 qhd:mb-8">
        <div className="flex items-center">
          <span className="w-1 h-4 md:h-5 lg:h-5 laptop:h-6 fhd:h-6 qhd:h-7 bg-green-500 mr-2 md:mr-3 rounded"></span>
          <h2 className="font-medium text-gray-800 uppercase tracking-wide text-lg md:text-xl lg:text-xl laptop:text-2xl fhd:text-3xl qhd:text-4xl">
            VIDEO
          </h2>
        </div>
        <div className="hidden md:flex items-center space-x-3 md:space-x-4 text-xs md:text-xs lg:text-xs laptop:text-sm fhd:text-sm qhd:text-base font-medium text-gray-500">
          <a href="#" className="hover:text-green-600">
            Văn hóa doanh nghiệp
          </a>
          <a href="#" className="hover:text-green-600">
            Sự kiện
          </a>
          <a href="#" className="hover:text-green-600">
            Phóng sự
          </a>
          <a href="#" className="hover:text-green-600">
            Vinh danh
          </a>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-5 laptop:gap-6 fhd:gap-7 qhd:gap-8 lg:h-64 md:h-72 lg:h-80 laptop:h-88 fhd:h-96 qhd:h-[28rem]">
        {/* Video Player */}
        <div className="relative rounded-md overflow-hidden group cursor-pointer">
          <img
            src={mainVideo.thumbnail}
            alt={mainVideo.title}
            className="w-full h-full object-cover"
          />
          <PlayButton />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] md:text-[10px] lg:text-xs laptop:text-xs fhd:text-sm qhd:text-sm px-2 py-1 rounded">
            {mainVideo.duration}
          </span>
        </div>
        {/* Video Info */}
        <div className="flex flex-col p-3 md:p-4 lg:p-4 laptop:p-5 fhd:p-6 qhd:p-7">
          <p className="text-xs md:text-xs lg:text-xs laptop:text-xs fhd:text-sm qhd:text-base text-gray-400 mb-1.5 md:mb-2 lg:mb-2 laptop:mb-2.5 fhd:mb-3 qhd:mb-3">{mainVideo.timestamp}</p>
          <h3 className="font-semibold text-base md:text-base lg:text-base laptop:text-lg fhd:text-xl qhd:text-xl text-gray-800 mb-2 md:mb-2.5 lg:mb-2.5 laptop:mb-3 fhd:mb-3.5 qhd:mb-4 hover:text-green-600 cursor-pointer leading-tight">
            {mainVideo.title}
          </h3>
          <p className="text-xs md:text-xs lg:text-xs laptop:text-sm fhd:text-sm qhd:text-base text-gray-600 flex-grow leading-relaxed">
            {mainVideo.description}
          </p>
          <div className="flex items-center space-x-2 md:space-x-3 text-gray-400 mt-2 md:mt-2.5 lg:mt-2.5 laptop:mt-3 fhd:mt-3.5 qhd:mt-4">
            <a href="#" className="hover:text-green-600">
              <FiLink className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 laptop:w-4 laptop:h-4 fhd:w-5 fhd:h-5 qhd:w-5 qhd:h-5" />
            </a>
            <a href="#" className="hover:text-green-600">
              <FiTwitter className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 laptop:w-4 laptop:h-4 fhd:w-5 fhd:h-5 qhd:w-5 qhd:h-5" />
            </a>
            <a href="#" className="hover:text-green-600">
              <FiFacebook className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 laptop:w-4 laptop:h-4 fhd:w-5 fhd:h-5 qhd:w-5 qhd:h-5" />
            </a>
            <a href="#" className="hover:text-green-600">
              <FiBookmark className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 laptop:w-4 laptop:h-4 fhd:w-5 fhd:h-5 qhd:w-5 qhd:h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Thumbnails Grid */}
      <div className="mt-4 md:mt-5 lg:mt-5 laptop:mt-6 fhd:mt-7 qhd:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-4 laptop:gap-5 fhd:gap-6 qhd:gap-7">
        {videoThumbnails.map((video) => (
          <div key={video.id} className="group cursor-pointer">
            <div className="relative rounded-md overflow-hidden mb-1.5 md:mb-2 lg:mb-2 laptop:mb-2.5 fhd:mb-3 qhd:mb-3">
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-24 md:h-28 lg:h-32 laptop:h-36 fhd:h-40 qhd:h-44 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-6 h-6 md:w-7 md:h-7 lg:w-7 lg:h-7 laptop:w-8 laptop:h-8 fhd:w-9 fhd:h-9 qhd:w-10 qhd:h-10 rounded-full bg-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-3.5 lg:h-3.5 laptop:w-4 laptop:h-4 fhd:w-4.5 fhd:h-4.5 qhd:w-5 qhd:h-5 text-white ml-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-[10px] md:text-[10px] lg:text-xs laptop:text-xs fhd:text-sm qhd:text-sm text-gray-400 mb-1">{video.timestamp}</p>
            <h4 className="font-semibold text-xs md:text-xs lg:text-sm laptop:text-sm fhd:text-base qhd:text-base text-gray-700 group-hover:text-green-600 leading-tight">
              {video.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoNewsSection;
