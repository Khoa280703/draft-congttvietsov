import React from "react";

interface FeaturedArticleProps {
  image: string;
  imageAlt: string;
  category?: string;
  title: string;
  timestamp?: string;
  description?: string;
  onClick?: () => void;
  className?: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  image,
  imageAlt,
  category,
  title,
  timestamp,
  description,
  onClick,
  className = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden mb-8 cursor-pointer transition-all duration-300 group ${className}`}
      onClick={onClick}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="relative h-64 md:h-80 lg:h-full overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between p-6 md:p-8 lg:p-6 2xl:p-8 bg-white">
          <div className="space-y-4">
            {category && (
              <div className="font-bold text-[11px] lg:text-[10px] 2xl:text-[11px] leading-none tracking-[2px] lg:tracking-[1.5px] 2xl:tracking-[2px] text-vietsov-green uppercase">
                {category}
              </div>
            )}

            <h3 className="font-semibold text-2xl lg:text-xl 2xl:text-2xl leading-tight text-gray-900 line-clamp-3 group-hover:text-vietsov-green transition-colors duration-200">
              {title}
            </h3>

            {timestamp && (
              <div className="text-sm lg:text-xs 2xl:text-sm font-normal leading-none text-vietsov-light-gray">
                {timestamp}
              </div>
            )}

            {description && (
              <p className="text-base lg:text-sm 2xl:text-base leading-relaxed text-vietsov-black/80 line-clamp-4">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;

