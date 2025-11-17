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
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-lg md:text-xl laptop:text-2xl font-bold tracking-wide">
          {label}
        </h2>
      </div>
      <div
        className={`grid grid-cols-1 gap-6 lg:gap-8 ${
          isSidebarOpen
            ? "laptop:grid-cols-1 fhd:grid-cols-2"
            : "laptop:grid-cols-2"
        } ${className}`}
      >
        {/* Main Card - Left Side (Vertical) */}
        <div className="lg:col-span-1">
          <CardFullDetail
            image={mainCard.image}
            imageAlt={mainCard.imageAlt}
            category={mainCard.category}
            title={mainCard.title}
            timestamp={mainCard.timestamp}
            description={mainCard.description}
            onClick={mainCard.onClick}
            imageHeight="h-64 md:h-80 lg:h-96"
            className="h-full"
          />
        </div>

        {/* Side Cards - Right Side (Horizontal) */}
        <div
          className={`lg:col-span-1 flex flex-col gap-4 md:gap-5 lg:gap-6 ${
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedNewsLayout;
