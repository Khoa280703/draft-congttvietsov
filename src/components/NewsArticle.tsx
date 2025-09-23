import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaLink,
  FaHeart,
  FaCommentAlt,
} from "react-icons/fa";

import HoiNghiViPetro from "../assets/hoinghipetrovi.jpg";
import Vietsov44nam from "../assets/44namvietsov.png";

const keyWords = [
  "Tập đoàn Công nghiệp - Năng lượng Quốc gia Việt Nam",
  "Đại hội đại biểu Đảng bộ",
  "Đại hội đại biểu Đảng bộ",
  "Đại hội đại biểu Đảng bộ",
];

const ArticleHeader = () => (
  <>
    <p className="text-sm text-green-600 font-semibold mb-2">TIN DẦU KHÍ</p>
    <h1 className="text-3xl font-medium text-gray-900 leading-tight">
      Đảng bộ Vietsovpetro được vinh danh tại Đại hội đại biểu Đảng bộ Tập đoàn
      Công nghiệp – Năng lượng Quốc gia Việt Nam lần thứ IV, nhiệm kỳ 2025-2030
    </h1>
    <p className="text-sm text-gray-500 mt-3 mb-6">Thứ ba, 9/8/2024 - 9:54</p>
  </>
);

const ArticleImage = () => (
  <img
    src={HoiNghiViPetro}
    alt="Hội nghị điển hình tiên tiến"
    className="w-full h-auto rounded-lg shadow-md mb-6"
  />
);

const ArticleBody = () => (
  <div className="prose max-w-none text-gray-700 space-y-4">
    <p>
      Chiều ngày 8/8/2025, tại Vietsovpetro Resort, Hội nghị Sơ kết công tác
      Truyền thông - Văn hóa doanh nghiệp (TT-VHDN) 6 tháng đầu năm 2025 và
      triển khai kế hoạch 6 tháng cuối năm đã diễn ra với sự tham dự của Ông Mai
      Đăng Tuấn - Phó Tổng Giám đốc, Phó Trưởng ban thường trực Ban Chỉ đạo
      VHDN...
    </p>
  </div>
);

const ArticleSubTitle = () => (
  <p className="text-base text-gray-500 mt-3 mb-6 italic">
    Trong hai ngày 02 và 03/8/2025, tại Hội trường Bộ Quốc phòng, Thủ đô Hà Nội,
    Đại hội đại biểu Đảng bộ Tập đoàn Công nghiệp - Năng lượng Quốc gia Việt
    Nam, nhiệm kỳ 2025-2030 đã được tổ chức trọng thể. Đại hội vinh dự đón tiếp
    Đồng chí Phạm Minh Chính -
  </p>
);

const ReadMoreButton = () => (
  <button className="mt-6 bg-gray-400 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center hover:bg-gray-200 transition-colors">
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
  <div className="mt-8 bg-gray-50 rounded-lg flex items-center space-x-4 border border-gray-200">
    <img
      src={Vietsov44nam}
      alt="Giàn khoan"
      className="w-30 h-24 object-cover rounded-md"
    />
    <div>
      <h4 className="font-semibold text-gray-800 hover:text-green-600 cursor-pointer">
        44 năm Vietsovpetro - Ngọn lửa cháy trong tôi 💖 Có bao giờ ta tự hỏi!
        Ngọn lửa dầu lên như thế nào?
      </h4>
      <p className="text-sm text-gray-500 mt-1">
        Truyền thông nâng cao nhận thức pháp luật và văn hóa an toàn; Triển khai
        các đợt truyền thông lớn theo định hướng của Tập đoàn: Kỷ niệm 50 năm
        Petrovietnam, các cuộc thi sáng tác, tuyên truyền Đại hội Đảng PVN,
        Vietsovpetro và các cấp.{" "}
      </p>
    </div>
  </div>
);

const ArticleFooter = () => (
  <div className="mt-6 bg-gray-50 rounded-lg p-4 pt-4 pb-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
    <div className="flex items-center space-x-2 text-sm text-gray-500">
      <button className="flex items-center space-x-1 hover:text-red-500">
        <FaHeart /> <span>6</span>
      </button>
      <span>·</span>
      <button className="flex items-center space-x-1 hover:text-blue-500">
        <FaCommentAlt /> <span>12</span>
      </button>
      <span className="hidden sm:inline">·</span>
      <div className="hidden sm:inline bg-blue-500 text-white px-4 py-2 rounded-md">
        Bài đọc hay? Thả tim cho bài đọc
      </div>
    </div>
    <div className="flex items-center space-x-3">
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

const KeyWords = () => (
  <div className="py-4 border-b border-gray-200 mb-4">
    <div className="flex items-center flex-wrap gap-2">
      <span className="font-medium text-gray-700">Từ khóa:</span>
      {keyWords.map((tag, index) => (
        <a
          key={index}
          href="#"
          className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors"
        >
          {tag}
        </a>
      ))}
    </div>
  </div>
);

const NewsArticle: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      <ArticleHeader />
      <ArticleSubTitle />
      <ArticleImage />
      <ArticleBody />
      <ReadMoreButton />
      <RelatedArticle />
      <div className="text-sm font-medium text-gray-800 mt-8 text-right">
        Tin và Ảnh: Tổ TT VHDN Vietsovpetro
      </div>
      <ArticleFooter />
      <KeyWords />
    </div>
  );
};

export default NewsArticle;
