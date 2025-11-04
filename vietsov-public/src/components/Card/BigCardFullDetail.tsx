import React from "react";
import { HiArrowRight } from "react-icons/hi";

interface BigCardFullDetailProps {
  image: string;
  imageAlt: string;
  category?: string;
  title: string;
  timestamp?: string;
  description: string;
  className?: string;
  onClick?: () => void;
  detail?: boolean;
  imageHeight?: string;
}

const BigCardFullDetail: React.FC<BigCardFullDetailProps> = ({
  image,
  imageAlt,
  category,
  title,
  timestamp,
  description,
  className = "",
  onClick,
  detail = false,
  imageHeight = "h-56",
}) => {
  return (
    <div
      className={`overflow-hidden h-full flex flex-col ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
      onClick={onClick}
    >
      <img
        src={image}
        alt={imageAlt}
        className={`w-full ${imageHeight} object-cover`}
      />

      <div className="py-4 px-4 md:py-5 md:px-6 lg:py-4 lg:px-5 inch32:py-6 inch32:px-6 space-y-4 md:space-y-5 lg:space-y-4 inch32:space-y-6 flex-1 flex flex-col">
        {category && (
          <div className="font-bold text-[11px] lg:text-[10px] inch32:text-[11px] leading-none tracking-[2px] lg:tracking-[1.5px] inch32:tracking-[2px] text-vietsov-green uppercase">
            {category}
          </div>
        )}

        {/* Title */}
        <h3 className="font-semibold text-2xl lg:text-xl inch32:text-2xl leading-tight">
          {title}
        </h3>

        {timestamp && (
          <div className="text-sm lg:text-xs inch32:text-sm font-normal leading-none text-vietsov-light-gray">
            {timestamp}
          </div>
        )}

        {description && (
          <p className="text-sm lg:text-xs inch32:text-sm leading-relaxed line-clamp-3 flex-1 text-vietsov-black/80">
            {description}
          </p>
        )}

        {detail && (
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={onClick}
          >
            <span className="text-sm font-normal">Chi tiết</span>
            <HiArrowRight className="w-4 h-4 text-vietsov-green" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BigCardFullDetail;
