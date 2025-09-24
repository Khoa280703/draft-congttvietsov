import React from "react";
import { FiLink, FiBookmark, FiTwitter, FiFacebook } from "react-icons/fi";
import danKhoanVietsov from "../../assets/dankhoanvietsov.jpg";
import chuyenTham1996 from "../../assets/1996.jpg";
import daiHoiDaiBieu from "../../assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "../../assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "../../assets/hoinghipetrovi.jpg";

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
    <div className="font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span className="w-1 h-6 bg-green-500 mr-3 rounded"></span>
          <h2 className="font-bold text-gray-800 uppercase tracking-wide text-lg">
            VIDEO
          </h2>
        </div>
        <div className="hidden md:flex items-center space-x-4 text-sm font-medium text-gray-500">
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

      <div className="bg-white rounded-lg shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-80">
        {/* Video Player */}
        <div className="relative rounded-md overflow-hidden group cursor-pointer">
          <img
            src={mainVideo.thumbnail}
            alt={mainVideo.title}
            className="w-full h-full object-cover"
          />
          <PlayButton />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
            {mainVideo.duration}
          </span>
        </div>
        {/* Video Info */}
        <div className="flex flex-col p-4">
          <p className="text-xs text-gray-400 mb-2">{mainVideo.timestamp}</p>
          <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-green-600 cursor-pointer">
            {mainVideo.title}
          </h3>
          <p className="text-sm text-gray-600 flex-grow">
            {mainVideo.description}
          </p>
          <div className="flex items-center space-x-3 text-gray-400">
            <a href="#" className="hover:text-green-600">
              <FiLink />
            </a>
            <a href="#" className="hover:text-green-600">
              <FiTwitter />
            </a>
            <a href="#" className="hover:text-green-600">
              <FiFacebook />
            </a>
            <a href="#" className="hover:text-green-600">
              <FiBookmark />
            </a>
          </div>
        </div>
      </div>

      {/* Thumbnails Grid */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {videoThumbnails.map((video) => (
          <div key={video.id} className="group cursor-pointer">
            <div className="relative rounded-md overflow-hidden mb-2">
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-white ml-0.5"
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
            <p className="text-xs text-gray-400">{video.timestamp}</p>
            <h4 className="text-sm font-semibold text-gray-700 group-hover:text-green-600">
              {video.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoNewsSection;
