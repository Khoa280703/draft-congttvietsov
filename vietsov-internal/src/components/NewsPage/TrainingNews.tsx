import React from "react";
import { FaFacebookF, FaRegComment } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";

const topArticles = [
  {
    id: 1,
    image: hoiNghiSuKien,
    title:
      "Chỉ thị số 50-CT/TW tại Đảng bộ Vietsovpetro khẳng định quyết tâm chính trị cao của tập thể Ban Thường vụ và các chi bộ trực thuộc...",
    summary:
      "Vietsovpetro khẳng định quyết tâm chính trị cao của tập thể Ban Thường vụ và các chi bộ...",
    likes: 20,
    comments: 16,
    timestamp: "27.09.2025 10:29",
  },
  {
    id: 2,
    image: hoiNghiPetro,
    title:
      "Vietsovpetro tổ chức khóa đào tạo “Chiến lược phát triển nguồn nhân lực thích ứng với chuyển dịch năng lượng”",
    summary:
      "Ngày 9/4/2025, Thủ tướng Chính phủ đã ban hành Quyết định số 733/QĐ-TTg về việc đổi t...",
    likes: 20,
    comments: 16,
    timestamp: "20.09.2025 15:43",
  },
];

const bottomArticles = [
  {
    id: 1,
    title:
      "Giàn Ctp-2 – Điểm sáng phong trào Sáng kiến, Sáng chế của Xí nghiệp Khai Thác",
    timestamp: "20.05.2025 19:16",
  },
  {
    id: 2,
    title:
      "14 năm vững vàng – Hành trình xây dựng văn hoá an toàn trên FPSO ARMADA TGT-1",
    timestamp: "02.05.2025 12:15",
  },
];

interface ArticleCardProps {
  article: (typeof topArticles)[0];
}
const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="group">
      <a href="#">
        <div className="overflow-hidden rounded-lg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="mt-4 text-lg lg:text-base 2xl:text-lg font-bold leading-tight text-gray-800 group-hover:text-green-600 transition-colors">
          {article.title}
        </h3>
        <p className="mt-2 text-sm lg:text-xs 2xl:text-sm text-gray-600 line-clamp-2">
          {article.summary}
        </p>
        <div className="mt-3 flex items-center space-x-4 text-xs text-gray-500">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-4 h-4 bg-blue-600 rounded-full mr-1">
              <FaFacebookF className="text-white" size={10} />
            </div>
            <span>{article.likes}</span>
          </div>
          <div className="flex items-center">
            <FaRegComment className="mr-1" />
            <span>{article.comments}</span>
          </div>
          <span>{article.timestamp}</span>
        </div>
      </a>
    </article>
  );
};

// --- Component con cho tin vắn ---
interface SimpleArticleLinkProps {
  article: (typeof bottomArticles)[0];
}
const SimpleArticleLink: React.FC<SimpleArticleLinkProps> = ({ article }) => {
  return (
    <article className="group">
      <a href="#">
        <h3 className="text-lg lg:text-base 2xl:text-lg font-bold leading-tight text-gray-800 group-hover:text-green-600 transition-colors">
          {article.title}
        </h3>
        <p className="mt-2 text-sm lg:text-xs 2xl:text-sm text-gray-500">
          {article.timestamp}
        </p>
      </a>
    </article>
  );
};

const TrainingNews: React.FC = () => {
  return (
    <section className="bg-white pb-4 md:pb-8 ">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-8 md:mb-12 lg:mb-10 2xl:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-2xl 2xl:text-3xl font-medium text-gray-900">
          Tin đào tạo – phát triển nhân sự
        </h2>
        <a
          href="#"
          className="flex items-center text-sm font-medium text-green-600 hover:underline"
        >
          Xem thêm <FiChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>

      {/* Top Row - Featured Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6 2xl:gap-8">
        {topArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* Separator */}
      <hr className="my-8 md:my-10 lg:my-8 2xl:my-10 border-gray-200" />

      {/* Bottom Row - Simple Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-6 2xl:gap-x-8 gap-y-6 lg:gap-y-5 2xl:gap-y-6">
        {bottomArticles.map((article) => (
          <SimpleArticleLink key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default TrainingNews;
