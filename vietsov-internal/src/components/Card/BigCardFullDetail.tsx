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
        className={`w-full ${imageHeight} object-cover rounded-lg`}
      />

      <div className="p-6 space-y-4 flex-1 flex flex-col">
        {category && (
          <div className="text-sm font-bold text-vietsov-green uppercase tracking-wide">
            {category}
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl font-semibold leading-tight">{title}</h3>

        {timestamp && (
          <div className="text-sm font-normal text-vietsov-light-gray">
            {timestamp}
          </div>
        )}

        {description && (
          <p className="text-sm leading-relaxed line-clamp-3 flex-1 text-vietsov-black/80">
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
