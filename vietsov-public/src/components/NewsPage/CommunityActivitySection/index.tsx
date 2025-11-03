import React from "react";
import { CardFullDetail } from "@/components/Card";
import { SeeMoreButtonSimple } from "@/components/Button";
import {
  type CommunityActivitySectionProps,
  defaultCommunityActivityData,
} from "./data";

const CommunityActivitySection: React.FC<CommunityActivitySectionProps> = ({
  className = "",
}) => {
  return (
    <div className={`bg-[#F0F7F2] font-sans ${className}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-8 md:mb-12 lg:mb-10 2xl:mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-3xl 2xl:text-4xl font-medium text-gray-800">
          Hoạt động đoàn thể
        </h2>
        <SeeMoreButtonSimple
          text="Xem thêm"
          href="/tintuc/hoat-dong-doan-the"
        />
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 2xl:gap-8">
        {defaultCommunityActivityData.map((article) => (
          <CardFullDetail
            key={article.id}
            image={article.image}
            imageAlt={article.title}
            category={article.category}
            title={article.title}
            timestamp={article.timestamp}
            description={article.description}
            detail={true}
            onClick={() => {
              window.location.href = "/tintuc/chi-tiet";
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityActivitySection;
