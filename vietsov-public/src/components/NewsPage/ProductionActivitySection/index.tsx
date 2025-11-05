import React from "react";
import { BigCardFullDetail, CardFullDetailHori } from "@/components/Card";
import { SeeMoreButtonSimple } from "@/components/Button";
import {
  type ProductionActivitySectionProps,
  defaultMainArticle,
  defaultSideArticles,
} from "./data";

const ProductionActivitySection: React.FC<ProductionActivitySectionProps> = ({
  className = "",
}) => {
  return (
    <div className={`${className}`}>
      <div className="flex justify-between items-center mb-8 md:mb-12 lg:mb-10 inch32:mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-3xl inch32:text-4xl font-medium">
          Hoạt động sản xuất
        </h2>
        <SeeMoreButtonSimple text="Xem thêm" href="/tintuc/hoat-dong-sx-kd" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 inch32:gap-8">
        <div>
          <BigCardFullDetail
            image={defaultMainArticle.image}
            imageAlt={defaultMainArticle.title}
            category={defaultMainArticle.category}
            title={defaultMainArticle.title}
            timestamp={defaultMainArticle.timestamp}
            description={defaultMainArticle.description}
            imageHeight="h-80 md:h-96 lg:h-[20rem] inch32:h-[28rem]"
            onClick={() => {
              window.location.href = "/tintuc/chi-tiet";
            }}
            className="h-full border-b-1 border-vietsov-green/30 pb-2"
          />
        </div>

        <div className="flex flex-col gap-4 lg:gap-3 inch32:gap-4 border-b-1 border-vietsov-green/30 pb-4">
          {defaultSideArticles.slice(0, 3).map((article, index) => {
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
            {defaultSideArticles[3] && (
              <CardFullDetailHori
                image={defaultSideArticles[3].image}
                imageAlt={defaultSideArticles[3].title}
                category={defaultSideArticles[3].category}
                title={defaultSideArticles[3].title}
                timestamp={defaultSideArticles[3].timestamp}
                description={defaultSideArticles[3].description}
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

export default ProductionActivitySection;
