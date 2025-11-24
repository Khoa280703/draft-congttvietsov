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
            className="w-full h-40 md:h-44 lg:h-48 laptop:h-52 fhd:h-56 qhd:h-60 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="mt-3 text-sm md:text-base lg:text-base laptop:text-lg fhd:text-xl qhd:text-xl font-bold leading-tight text-gray-800 group-hover:text-green-600 transition-colors">
          {article.title}
        </h3>
        <p className="mt-1.5 text-xs md:text-xs lg:text-sm laptop:text-sm fhd:text-sm qhd:text-base text-gray-600 line-clamp-2">
          {article.summary}
        </p>
        <div className="mt-2 flex items-center space-x-3 text-[10px] text-gray-500">
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
        <h3 className="text-sm md:text-base lg:text-base laptop:text-lg fhd:text-xl qhd:text-xl font-bold leading-tight text-gray-800 group-hover:text-green-600 transition-colors">
          {article.title}
        </h3>
        <p className="mt-1.5 text-xs md:text-xs lg:text-sm laptop:text-sm fhd:text-sm qhd:text-base text-gray-500">
          {article.timestamp}
        </p>
      </a>
    </article>
  );
};

const TrainingNews: React.FC = () => {
  return (
    <section className="bg-white">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4 md:mb-5 lg:mb-5 laptop:mb-6 fhd:mb-7 qhd:mb-8">
        <h2 className="text-lg md:text-xl lg:text-xl laptop:text-2xl fhd:text-2xl qhd:text-3xl font-medium text-gray-900">
          Tin đào tạo – phát triển nhân sự
        </h2>
        <a
          href="#"
          className="flex items-center text-xs md:text-sm lg:text-sm laptop:text-sm fhd:text-base qhd:text-base font-medium text-green-600 hover:underline"
        >
          Xem thêm <FiChevronRight className="w-3 h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 laptop:w-4 laptop:h-4 fhd:w-5 fhd:h-5 qhd:w-5 qhd:h-5 ml-1" />
        </a>
      </div>

      {/* Top Row - Featured Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-5 laptop:gap-6 fhd:gap-8 qhd:gap-10">
        {topArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* Separator */}
      <hr className="my-4 md:my-5 lg:my-5 laptop:my-6 fhd:my-7 qhd:my-8 border-gray-200" />

      {/* Bottom Row - Simple Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-5 laptop:gap-x-6 fhd:gap-x-8 qhd:gap-x-10 gap-y-3 lg:gap-y-3 laptop:gap-y-4 fhd:gap-y-5 qhd:gap-y-6">
        {bottomArticles.map((article) => (
          <SimpleArticleLink key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default TrainingNews;
