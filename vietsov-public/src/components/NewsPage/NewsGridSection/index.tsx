import React from "react";
import { CardFullDetail } from "@/components/Card";
import { SeeMoreButton } from "@/components/Button";

export interface NewsGridItem {
  id: number | string;
  category?: string;
  title: string;
  timestamp?: string;
  description: string;
  image: string;
  imageAlt?: string;
}

export interface NewsGridSectionProps {
  title: string;
  viewMoreLink?: string;
  articles: NewsGridItem[];
  className?: string;
  onArticleClick?: (article: NewsGridItem) => void;
  showViewMore?: boolean;
}

const NewsGridSection: React.FC<NewsGridSectionProps> = ({
  title,
  viewMoreLink,
  articles,
  className = "",
  onArticleClick,
  showViewMore = true,
}) => {
  const handleArticleClick = (article: NewsGridItem) => {
    if (onArticleClick) {
      onArticleClick(article);
    } else {
      window.location.href = "/tintuc/chi-tiet";
    }
  };

  // Limit to 4 articles
  const displayedArticles = articles.slice(0, 4);

  return (
    <div className={`${className}`}>
      {/* Header */}
      <div className="mb-6 md:mb-8 lg:mb-10 laptop:mb-12 fhd:mb-14 qhd:mb-16">
        <h2 className="text-lg md:text-xl lg:text-xl laptop:text-2xl fhd:text-3xl qhd:text-4xl font-medium">
          {title}
        </h2>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 laptop:gap-6 fhd:gap-8 qhd:gap-12 news-grid-section">
        {displayedArticles.map((article) => (
          <CardFullDetail
            key={article.id}
            image={article.image}
            imageAlt={article.imageAlt || article.title}
            category={article.category}
            title={article.title}
            timestamp={article.timestamp}
            description={article.description}
            detail={true}
            imageHeight="h-40 md:h-44 lg:h-40 laptop:h-44 fhd:h-48 qhd:h-56"
            onClick={() => handleArticleClick(article)}
            compact={true}
            className="news-grid-card"
          />
        ))}
      </div>
      <style>{`
        @media (min-width: 1366px) and (max-width: 1919px) {
          .news-grid-section .news-grid-card h3 {
            -webkit-line-clamp: 2 !important;
          }
        }
      `}</style>

      {/* See More Button */}
      {showViewMore && viewMoreLink && (
        <div className="flex justify-center mt-6 md:mt-8 lg:mt-10 laptop:mt-12 fhd:mt-14 qhd:mt-16">
          <SeeMoreButton text="Xem thêm" href={viewMoreLink} />
        </div>
      )}
    </div>
  );
};

export default NewsGridSection;
