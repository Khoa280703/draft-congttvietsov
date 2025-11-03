import React from "react";
// Import các icon cần thiết
import { FaThumbsUp, FaRegComment, FaRegBookmark } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FiLink, FiPrinter } from "react-icons/fi";

import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import daiHoiDaiBieu from "@/assets/daihoidaibieuivpvn.jpg";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

// --- Dữ liệu cho bài viết chính ---
const mainArticleData = {
  image: danKhoanVietsov,
  category: "TIN DẦU KHÍ",
  timestamp: "9/6/2024 9:54:47 AM",
  title:
    "Gian triển lãm được thiết kế hiện đại với điểm nhấn là 3 trụ cột phát triển: Năng lượng, Công nghiệp và Dịch vụ kỹ thuật chất lượng cao",
  summary:
    "Gian trưng bày của Tập đoàn Công nghiệp - Năng lượng Quốc gia Việt Nam (Petrovietnam) tại Triển lãm thành tựu đất nước đã sẵn sàng chào đón khách tham quan từ ngày 28/8 – 5/9/2025, tại Trung tâm Triển lãm Quốc gia (Đông Anh, Hà Nội).",
};

// --- Dữ liệu cho các bài viết trong sidebar ---
const sidebarArticlesData = [
  {
    id: 1,
    image: hoiNghiSuKien,
    category: "MỪNG VĂN HÓA",
    title: "Vietsovpetro 44 năm tỏa sáng – Tự hào Người Dầu khí Việt Nam",
    comments: 20,
    likes: 16,
    timestamp: "27.12.2025 11:20",
  },
  {
    id: 2,
    image: daiHoiDaiBieu,
    category: "TIN DẦU KHÍ",
    title:
      "Lãnh đạo Vietsovpetro thắp lửa và truyền lửa trong Lễ công bố cẩm nang Văn hóa Vietsovpetro vào ngày 23.7.2023",
    comments: 20,
    likes: 16,
    timestamp: "27.06.2025 05:05",
  },
  {
    id: 3,
    image: hoiNghiPetro,
    category: "TIN DẦU KHÍ",
    title: "Vietsovpetro 44 năm tỏa sáng – Tự hào Người Dầu khí Việt Nam",
    comments: 20,
    likes: 16,
    timestamp: "27.12.2025 11:20",
  },
];

// --- Component con cho mỗi thẻ tin trong sidebar ---
interface SidebarArticleCardProps {
  data: (typeof sidebarArticlesData)[0];
}

const SidebarArticleCard: React.FC<SidebarArticleCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
      <a href="#" className="block">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-3">
          <p className="text-xs font-semibold text-blue-600 uppercase mb-1">
            {data.category}
          </p>
          <h3 className="text-sm font-bold text-gray-800 leading-tight group-hover:text-blue-700 transition-colors">
            {data.title}
          </h3>
          <div className="flex items-center text-xs text-gray-500 mt-2 space-x-4">
            <span className="flex items-center">
              <FaRegComment className="mr-1" /> {data.comments}
            </span>
            <span className="flex items-center">
              <AiOutlineLike className="mr-1" /> {data.likes}
            </span>
            <span>{data.timestamp}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

// --- Component chính ---
const SpotlightNews: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-5 2xl:gap-6 pb-8 md:pb-12 lg:pb-10 2xl:pb-12">
      <article className="lg:col-span-3">
        <div
          className="cursor-pointer"
          onClick={() => (window.location.href = "tintuc/chi-tiet")}
        >
          <img
            src={mainArticleData.image}
            alt={mainArticleData.title}
            className="w-full rounded-lg mb-4"
          />

          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
            <span className="font-bold text-red-600 uppercase">
              {mainArticleData.category}
            </span>
            <span>•</span>
            <span>{mainArticleData.timestamp}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-4 lg:mb-3 2xl:mb-4 leading-tight">
            {mainArticleData.title}
          </h1>

          <p className="text-base lg:text-sm 2xl:text-base text-gray-600 leading-relaxed">
            {mainArticleData.summary}
          </p>

          <div className="mt-6 pt-4 border-t flex justify-between items-center">
            {/* Facebook Buttons */}
            <div className="flex items-center space-x-2">
              <button className="flex items-center bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded">
                <FaThumbsUp className="w-4 h-4 mr-2" /> Thích 1,7K
              </button>
              <button className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">
                Chia sẻ
              </button>
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-4 text-gray-500">
              <a href="#" className="hover:text-blue-600">
                <FiLink size={20} />
              </a>
              <a href="#" className="hover:text-blue-600">
                <FaRegBookmark size={18} />
              </a>
              <a href="#" className="hover:text-blue-600">
                <FiPrinter size={20} />
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Sidebar bên phải */}
      <aside className="lg:col-span-1">
        <div className="rounded-lg sticky top-8">
          <div className="flex items-center border-b-2 border-gray-200 pb-2 mb-4">
            <span className="w-1 h-5 bg-green-500 rounded-full mr-3"></span>
            <h2 className="font-bold text-gray-800 uppercase">
              Tin mới cập nhật
            </h2>
          </div>

          <div className="space-y-4 lg:space-y-3 2xl:space-y-4">
            {sidebarArticlesData.map((article) => (
              <SidebarArticleCard key={article.id} data={article} />
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SpotlightNews;
