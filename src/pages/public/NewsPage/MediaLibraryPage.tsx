import React, { useState, useMemo } from "react";
import {
  FiSearch,
  FiPlayCircle,
  FiLink2,
  FiTwitter,
  FiFacebook,
} from "react-icons/fi";

import { Pagination } from "@/components";
import { PageWithSidebar } from "@/components/PublicSystem";

// --- INTERFACE ---
export interface MediaItem {
  id: string;
  type: "video" | "image";
  title: string;
  thumbnail: string;
  duration?: string;
  summary?: string;
  date: string;
}

// --- DỮ LIỆU MẪU ---
const mediaData: MediaItem[] = [
  {
    id: "feat-1",
    type: "video",
    title: "Triển lãm “Sản phẩm công nghệ chiến lược quốc gia”",
    thumbnail: "https://placehold.co/1200x675/94a3b8/ffffff?text=Video",
    summary:
      "Sáng ngày 13/10/2025, tại Học viện Cán bộ TP. Hồ Chí Minh, Sở Khoa học và Công nghệ TP.HCM phối hợp cùng các đơn vị tổ chức Triển lãm “Sản phẩm công nghệ chiến lược quốc gia tại TP.HCM”...",
    duration: "02:00",
    date: "13/10/2025",
  },
  {
    id: "item-1",
    type: "image",
    title: "Các sự kiện nổi bật của Petrovietnam trong tuần",
    thumbnail: "https://placehold.co/600x400/e0f2fe/0c4a6e?text=Image+1",
    date: "13/10/2024",
  },
  {
    id: "item-2",
    type: "image",
    title: "Hội nghị công tác Đảng bộ và hoạt động sản xuất",
    thumbnail: "https://placehold.co/600x400/e0f2fe/0c4a6e?text=Image+2",
    date: "12/10/2024",
  },
  {
    id: "item-3",
    type: "image",
    title: "Chương trình thiện nguyện “Chia sẻ yêu thương”",
    thumbnail: "https://placehold.co/600x400/e0f2fe/0c4a6e?text=Image+3",
    date: "11/10/2024",
  },
  {
    id: "item-4",
    type: "image",
    title: "Chương trình thiện nguyện “Chia sẻ yêu thương”",
    thumbnail: "https://placehold.co/600x400/e0f2fe/0c4a6e?text=Image+4",
    date: "11/10/2024",
  },
  {
    id: "item-5",
    type: "image",
    title: "Chương trình thiện nguyện “Chia sẻ yêu thương”",
    thumbnail: "https://placehold.co/600x400/e0f2fe/0c4a6e?text=Image+5",
    date: "11/10/2024",
  },
  {
    id: "item-6",
    type: "image",
    title: "Chương trình thiện nguyện “Chia sẻ yêu thương”",
    thumbnail: "https://placehold.co/600x400/e0f2fe/0c4a6e?text=Image+6",
    date: "11/10/2024",
  },
  {
    id: "item-7",
    type: "image",
    title: "Chương trình thiện nguyện “Chia sẻ yêu thương”",
    thumbnail: "https://placehold.co/600x400/e0f2fe/0c4a6e?text=Image+7",
    date: "11/10/2024",
  },
  {
    id: "item-8",
    type: "image",
    title: "Chương trình thiện nguyện “Chia sẻ yêu thương”",
    thumbnail: "https://placehold.co/600x400/e0f2fe/0c4a6e?text=Image+8",
    date: "11/10/2024",
  },
  {
    id: "item-9",
    type: "image",
    title: "Chương trình thiện nguyện “Chia sẻ yêu thương”",
    thumbnail: "https://placehold.co/600x400/e0f2fe/0c4a6e?text=Image+9",
    date: "11/10/2024",
  },
  {
    id: "item-10",
    type: "image",
    title: "Chương trình thiện nguyện “Chia sẻ yêu thương”",
    thumbnail: "https://placehold.co/600x400/e0f2fe/0c4a6e?text=Image+10",
    date: "11/10/2024",
  },
  {
    id: "item-11",
    type: "image",
    title: "Chương trình thiện nguyện “Chia sẻ yêu thương”",
    thumbnail: "https://placehold.co/600x400/e0f2fe/0c4a6e?text=Image+11",
    date: "11/10/2024",
  },
  {
    id: "item-12",
    type: "image",
    title: "Chương trình thiện nguyện “Chia sẻ yêu thương”",
    thumbnail: "https://placehold.co/600x400/e0f2fe/0c4a6e?text=Image+12",
    date: "11/10/2024",
  },
  {
    id: "item-13",
    type: "image",
    title: "Chương trình thiện nguyện “Chia sẻ yêu thương”",
    thumbnail: "https://placehold.co/600x400/e0f2fe/0c4a6e?text=Image+13",
    date: "11/10/2024",
  },
  {
    id: "item-14",
    type: "image",
    title: "Chương trình thiện nguyện “Chia sẻ yêu thương”",
    thumbnail: "https://placehold.co/600x400/e0f2fe/0c4a6e?text=Image+14",
    date: "11/10/2024",
  },
];

const MediaCard: React.FC<{ item: MediaItem }> = ({ item }) => (
  <a href="#" className="group flex flex-col items-center">
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-200 w-full">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {item.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <FiPlayCircle className="text-white/80" size={40} />
        </div>
      )}
    </div>
    <p className="mt-3 text-sm font-normal text-gray-700 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 text-left w-full">
      {item.title}
    </p>
  </a>
);

const MediaLibraryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const featuredItem = mediaData[0];
  const gridItems = mediaData.slice(1);

  const filteredItems = useMemo(() => {
    return gridItems.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, gridItems]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentGridItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <PageWithSidebar activePath="/tintuc/thu-vien-anh-video">
      <div className="">
        {/* Header và Thanh tìm kiếm */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Thư viện ảnh/video
          </h2>
          <div className="relative w-full">
            <FiSearch
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={20}
            />
            <input
              type="text"
              placeholder="Tìm kiếm thông tin..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-16 pr-6 py-3 bg-slate-100 border border-slate-200 rounded-2xl text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="bg-slate-100 rounded-2xl flex flex-col lg:flex-row gap-12 mb-6">
          {/* Cột Video */}
          <div className="lg:w-1/2 flex-shrink-0">
            <a
              href="#"
              className="relative group block aspect-video h-full bg-gray-300 rounded-xl overflow-hidden"
            >
              <img
                src={featuredItem.thumbnail}
                alt={featuredItem.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FiPlayCircle
                  size={64}
                  className="text-white/80 transform transition-transform group-hover:scale-110"
                />
              </div>
              <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs font-mono px-2 py-1 rounded">
                {featuredItem.duration}
              </span>
            </a>
          </div>

          <div className="lg:w-1/2 flex flex-col p-4">
            <div>
              <h3 className="text-2xl font-medium text-gray-800 mb-3 hover:text-blue-700 transition-colors">
                <a href="#">{featuredItem.title}</a>
              </h3>
              <p className="text-gray-600 font-light leading-relaxed line-clamp-4">
                {featuredItem.summary}
              </p>
            </div>
            <div className="mt-auto pt-4 flex items-center space-x-4 text-gray-500 border-t border-gray-200">
              <a href="#" className="hover:text-blue-600">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-600">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-600">
                <FiLink2 size={20} />
              </a>
            </div>
          </div>
        </div>
        {/* ▲▲▲▲▲ KẾT THÚC KHU VỰC SỬA ĐỔI ▲▲▲▲▲ */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {currentGridItems.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>

        {/* Phân trang */}
        <div className="flex justify-center items-center mt-12 space-x-2">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </PageWithSidebar>
  );
};

export default MediaLibraryPage;
