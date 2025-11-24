import React from "react";
import { BigCardFullDetail, CardFullDetailHori } from "@/components/Card";
import { SeeMoreButtonSimple } from "@/components/Button";

export interface MainArticle {
  category: string;
  title: string;
  timestamp: string;
  description: string;
  image: string;
}

export interface SideArticle {
  id: number;
  title: string;
  category: string;
  timestamp: string;
  description?: string;
  image: string;
}

export interface MainNewsSectionProps {
  title: string;
  viewMoreLink: string;
  mainArticle: MainArticle;
  sideArticles: SideArticle[];
  className?: string;
}

const MainNewsSection: React.FC<MainNewsSectionProps> = ({
  title,
  viewMoreLink,
  mainArticle,
  sideArticles,
  className = "",
}) => {
  return (
    <div className={`${className}`}>
      <div className="flex justify-between items-center mb-8 md:mb-12 lg:mb-10 inch32:mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-3xl inch32:text-4xl font-medium">
          {title}
        </h2>
        <SeeMoreButtonSimple text="Xem thêm" href={viewMoreLink} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 inch32:gap-8">
        <div>
          <BigCardFullDetail
            image={mainArticle.image}
            imageAlt={mainArticle.title}
            category={mainArticle.category}
            title={mainArticle.title}
            timestamp={mainArticle.timestamp}
            description={mainArticle.description}
            imageHeight="h-80 md:h-96 lg:h-[20rem] inch32:h-[28rem]"
            onClick={() => {
              window.location.href = "/tintuc/chi-tiet";
            }}
            className="h-full border-b-1 border-vietsov-green/30 pb-2"
          />
        </div>

        <div className="flex flex-col gap-4 lg:gap-4 inch32:gap-4 border-b-1 border-vietsov-green/30 pb-4">
          {sideArticles.slice(0, 3).map((article, index) => {
            const isLast = index === 2;
            return (
              <div
                key={article.id}
                className={
                  isLast
                    ? "pb-0 inch32:border-b inch32:border-gray-200 inch32:pb-4"
                    : "border-b border-gray-200 pb-4"
                }
              >
                <CardFullDetailHori
                  image={article.image}
                  imageAlt={article.title}
                  category={article.category}
                  title={article.title}
                  timestamp={article.timestamp}
                  description={article.description}
                  maxTitleLines={2}
                  maxDescriptionLines={2}
                  onClick={() => {
                    window.location.href = "/tintuc/chi-tiet";
                  }}
                />
              </div>
            );
          })}

          <div className="hidden inch32:block">
            {sideArticles[3] && (
              <CardFullDetailHori
                image={sideArticles[3].image}
                imageAlt={sideArticles[3].title}
                category={sideArticles[3].category}
                title={sideArticles[3].title}
                timestamp={sideArticles[3].timestamp}
                description={sideArticles[3].description}
                maxTitleLines={2}
                maxDescriptionLines={2}
                onClick={() => {
                  window.location.href = "/tintuc/chi-tiet";
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNewsSection;
