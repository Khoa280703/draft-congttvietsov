import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaLink,
  FaHeart,
  FaCommentAlt,
} from "react-icons/fa";

const ArticleHeader = () => (
  <>
    <p className="text-sm text-green-600 font-semibold mb-2">TIN DẦU KHÍ</p>
    <h1 className="text-3xl font-bold text-gray-900 leading-tight">
      Đảng bộ Vietsovpetro được vinh danh tại Đại hội đại biểu Đảng bộ Tập đoàn
      Công nghiệp – Năng lượng Quốc gia Việt Nam lần thứ IV, nhiệm kỳ 2025-2030
    </h1>
    <p className="text-sm text-gray-500 mt-3 mb-6">Thứ ba, 9/8/2024 - 9:54</p>
  </>
);

const ArticleImage = () => (
  <img
    src="https://i.imgur.com/e2O3pb2.jpeg"
    alt="Hội nghị điển hình tiên tiến"
    className="w-full h-auto rounded-lg shadow-md mb-6"
  />
);

const ArticleBody = () => (
  <div className="prose max-w-none text-gray-700 space-y-4">
    <p>
      Trong hai ngày 02 và 03/8/2025, tại Hội trường Bộ Quốc phòng, Thủ đô Hà
      Nội, Đại hội đại biểu Đảng bộ Tập đoàn Công nghiệp - Năng lượng Quốc gia
      Việt Nam, nhiệm kỳ 2025-2030 đã được tổ chức trọng thể. Đại hội vinh dự
      đón tiếp Đồng chí Phạm Minh Chính - ...
    </p>
    <p>
      Chiều ngày 8/8/2025, tại Vietsovpetro Resort, Hội nghị Sơ kết công tác
      Truyền thông - Văn hóa doanh nghiệp (TT-VHDN) 6 tháng đầu năm 2025 và
      triển khai kế hoạch 6 tháng cuối năm đã diễn ra với sự tham dự của Ông Mai
      Đăng Tuấn - Phó Tổng Giám đốc, Phó Trưởng ban thường trực Ban Chỉ đạo
      VHDN...
    </p>
  </div>
);

const ReadMoreButton = () => (
  <button className="mt-6 bg-gray-100 text-gray-600 px-4 py-2 rounded-md text-sm font-medium flex items-center hover:bg-gray-200 transition-colors">
    Đọc thêm...
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 ml-1"
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  </button>
);

const RelatedArticle = () => (
  <div className="mt-8 p-4 bg-gray-50 rounded-lg flex items-center space-x-4 border border-gray-200">
    <img
      src="https://i.imgur.com/yKx3J4Y.jpeg"
      alt="Giàn khoan"
      className="w-24 h-16 object-cover rounded-md"
    />
    <div>
      <h4 className="font-semibold text-gray-800 hover:text-green-600 cursor-pointer">
        44 năm Vietsovpetro - Ngọn lửa cháy trong tôi 💖 Có bao giờ ta tự hỏi!
        Ngọn lửa dầu lên như thế nào?
      </h4>
      <p className="text-sm text-gray-500 mt-1">
        Truyền thông nâng cao nhận thức pháp luật và văn hóa an toàn...
      </p>
    </div>
  </div>
);

const ArticleFooter = () => (
  <div className="mt-8 pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
    <div className="flex items-center space-x-2 text-sm text-gray-500">
      <button className="flex items-center space-x-1 hover:text-red-500">
        <FaHeart /> <span>6</span>
      </button>
      <span>·</span>
      <button className="flex items-center space-x-1 hover:text-blue-500">
        <FaCommentAlt /> <span>12</span>
      </button>
      <span className="hidden sm:inline">·</span>
      <span className="hidden sm:inline">Bài đọc hay? Thả tim cho bài đọc</span>
    </div>
    <div className="flex items-center space-x-3">
      <span className="text-sm font-medium text-gray-800">
        Tin và Ảnh: Tổ TT VHDN Vietsovpetro
      </span>
      <a
        href="#"
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
      >
        <FaFacebookF className="w-4 h-4 text-gray-600" />
      </a>
      <a
        href="#"
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
      >
        <FaTwitter className="w-4 h-4 text-gray-600" />
      </a>
      <a
        href="#"
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
      >
        <FaLink className="w-4 h-4 text-gray-600" />
      </a>
    </div>
  </div>
);

const NewsArticle: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      <ArticleHeader />
      <ArticleImage />
      <ArticleBody />
      <ReadMoreButton />
      <RelatedArticle />
      <ArticleFooter />
    </div>
  );
};

export default NewsArticle;
