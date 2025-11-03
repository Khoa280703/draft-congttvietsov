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
      {/* Header */}
      <div className="flex justify-between items-center mb-8 md:mb-12 lg:mb-10 2xl:mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-3xl 2xl:text-4xl font-medium text-gray-800">
          Hoạt động sản xuất
        </h2>
        <SeeMoreButtonSimple text="Xem thêm" href="/tintuc/hoat-dong-sx-kd" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 2xl:gap-8">
        {/* Main Article - Using CardFullDetail */}
        <div>
          <BigCardFullDetail
            image={defaultMainArticle.image}
            imageAlt={defaultMainArticle.title}
            category={defaultMainArticle.category}
            title={defaultMainArticle.title}
            timestamp={defaultMainArticle.timestamp}
            description={defaultMainArticle.description}
            imageHeight="h-80 md:h-96 lg:h-[20rem] 2xl:h-[28rem]"
            onClick={() => {
              window.location.href = "/tintuc/chi-tiet";
            }}
            className="h-full"
          />
        </div>

        {/* Side Articles - Using CardFullDetailHori */}
        <div className="space-y-4 lg:space-y-3 2xl:space-y-4">
          {defaultSideArticles.slice(0, 3).map((article) => (
            <CardFullDetailHori
              key={article.id}
              image={article.image}
              imageAlt={article.title}
              title={article.title}
              timestamp={article.timestamp}
              maxTitleLines={4}
              maxDescriptionLines={0}
              onClick={() => {
                window.location.href = "/tintuc/chi-tiet";
              }}
              className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
            />
          ))}
          {/* Show 4th article only on 2xl screens */}
          <div className="hidden 2xl:block">
            {defaultSideArticles[3] && (
              <CardFullDetailHori
                image={defaultSideArticles[3].image}
                imageAlt={defaultSideArticles[3].title}
                title={defaultSideArticles[3].title}
                timestamp={defaultSideArticles[3].timestamp}
                maxTitleLines={4}
                maxDescriptionLines={0}
                onClick={() => {
                  window.location.href = "/tintuc/chi-tiet";
                }}
                className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionActivitySection;
