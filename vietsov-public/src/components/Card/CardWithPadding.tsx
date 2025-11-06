import React from "react";
import { HiArrowRight } from "react-icons/hi";

interface CardWithPaddingProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  readMoreText?: string;
  readMoreLink?: string;
  className?: string;
}

const CardWithPadding: React.FC<CardWithPaddingProps> = ({
  image,
  imageAlt,
  title,
  description,
  readMoreText = "Xem thêm",
  readMoreLink = "#",
  className = "",
}) => {
  return (
    <div
      className={`bg-white backdrop-blur-sm overflow-hidden ${className}`}
      style={{
        boxShadow: "0 5px 16px 0 rgba(2, 55, 102, 0.09)",
      }}
    >
      <div className="relative inch32:px-5 inch32:pt-5 pb-4 md:pb-6 lg:pb-4 inch32:pb-6">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-48 md:h-56 lg:h-52 inch32:h-64 object-cover"
        />
      </div>

      <div className="px-4 md:px-5 lg:px-4 inch32:px-5 space-y-4 md:space-y-5 lg:space-y-4 inch32:space-y-6 pb-4 md:pb-6 lg:pb-5 inch32:pb-6">
        {/* Title */}
        <h3 className="text-2xl lg:text-xl inch32:text-2xl font-semibold leading-tight line-clamp-1">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm lg:text-xs inch32:text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Read More Link */}
        <a
          href={readMoreLink}
          className="inline-flex items-center text-base lg:text-sm inch32:text-base font-semibold transition-colors duration-200 cursor-pointer text-vietsov-green"
        >
          {readMoreText}
          <HiArrowRight className="w-4 h-4 lg:w-3.5 lg:h-3.5 inch32:w-4 inch32:h-4 ml-1 text-vietsov-green" />
        </a>
      </div>
    </div>
  );
};

export default CardWithPadding;
