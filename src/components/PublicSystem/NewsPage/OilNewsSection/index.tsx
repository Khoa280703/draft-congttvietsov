import React from "react";
import { BigCardFullDetail, CardFullDetailHori } from "@/components/Card";
import { SeeMoreButtonSimple } from "@/components/Button";
import {
  type OilNewsSectionProps,
  defaultMainArticle,
  defaultSideArticles,
} from "./data";

const OilNewsSection: React.FC<OilNewsSectionProps> = ({ className = "" }) => {
  return (
    <div className={`bg-white font-sans ${className}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-800">
          Tin dầu khí
        </h2>
        <SeeMoreButtonSimple text="Xem thêm" href="/tintuc/chi-tiet" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Article - Using CardFullDetail */}
        <div>
          <BigCardFullDetail
            image={defaultMainArticle.image}
            imageAlt={defaultMainArticle.title}
            category={defaultMainArticle.category}
            title={defaultMainArticle.title}
            timestamp={defaultMainArticle.timestamp}
            description={defaultMainArticle.description}
            imageHeight="h-128"
            onClick={() => {
              window.location.href = "/tintuc/chi-tiet";
            }}
            className="h-full"
          />
        </div>

        {/* Side Articles - Using CardFullDetailHori */}
        <div className="space-y-4">
          {defaultSideArticles.map((article) => (
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
        </div>
      </div>
    </div>
  );
};

export default OilNewsSection;
