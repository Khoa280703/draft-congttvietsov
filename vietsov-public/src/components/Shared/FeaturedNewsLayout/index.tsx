import React from "react";
import { CardFullDetail, CardFullDetailHori } from "@/components/Card";

export interface FeaturedNewsItem {
  image: string;
  imageAlt: string;
  category?: string;
  title: string;
  timestamp?: string;
  description: string;
  onClick?: () => void;
}

export interface FeaturedNewsLayoutProps {
  mainCard: FeaturedNewsItem;
  sideCards: FeaturedNewsItem[];
  className?: string;
  isSidebarOpen?: boolean;
  label?: string;
}

const FeaturedNewsLayout: React.FC<FeaturedNewsLayoutProps> = ({
  mainCard,
  sideCards,
  className = "",
  isSidebarOpen = false,
  label = "Tin nổi bật",
}) => {
  return (
    <div className="space-y-4 md:space-y-5 lg:space-y-6 laptop:space-y-6 fhd:space-y-8 qhd:space-y-10">
      <div className="flex items-center mb-6 md:mb-8 lg:mb-10 laptop:mb-12 fhd:mb-14 qhd:mb-16">
        <h2 className="text-lg md:text-xl lg:text-xl laptop:text-2xl fhd:text-3xl qhd:text-4xl font-medium">
          {label}
        </h2>
      </div>
      <div
        className={`grid grid-cols-1 gap-4 md:gap-5 lg:gap-6 laptop:gap-8 fhd:gap-10 qhd:gap-12 ${
          isSidebarOpen
            ? "laptop:grid-cols-1 fhd:grid-cols-2"
            : "laptop:grid-cols-2"
        } ${className}`}
      >
        {/* Main Card - Left Side (Vertical) */}
        <div className="lg:col-span-1 featured-news-card-wrapper [&>div]:!bg-transparent">
          <CardFullDetail
            image={mainCard.image}
            imageAlt={mainCard.imageAlt}
            category={mainCard.category}
            title={mainCard.title}
            timestamp={mainCard.timestamp}
            description={mainCard.description}
            onClick={mainCard.onClick}
            imageHeight="h-64 md:h-72 lg:h-80 laptop:h-88 fhd:h-[28rem] qhd:h-[32rem]"
            className="h-full"
            compact={true}
          />
        </div>

        {/* Side Cards - Right Side (Horizontal) */}
        <div
          className={`lg:col-span-1 flex flex-col gap-3 md:gap-4 lg:gap-5 laptop:gap-6 fhd:gap-7 qhd:gap-8 ${
            isSidebarOpen ? "laptop:hidden fhd:flex" : ""
          }`}
        >
          {sideCards.map((card, index) => (
            <CardFullDetailHori
              key={index}
              image={card.image}
              imageAlt={card.imageAlt}
              category={card.category}
              title={card.title}
              timestamp={card.timestamp}
              description={card.description}
              onClick={card.onClick}
              maxTitleLines={2}
              maxDescriptionLines={3}
              compact={true}
            />
          ))}
        </div>
      </div>
      <style>{`
        .featured-news-card-wrapper > div {
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
};

export default FeaturedNewsLayout;
