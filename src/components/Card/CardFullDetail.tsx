import React from "react";
import { HiArrowRight } from "react-icons/hi";

interface CardFullDetailProps {
  image: string;
  imageAlt: string;
  category?: string;
  title: string;
  timestamp?: string;
  description: string;
  className?: string;
  onClick?: () => void;
  detail?: boolean;
}

const CardFullDetail: React.FC<CardFullDetailProps> = ({
  image,
  imageAlt,
  category,
  title,
  timestamp,
  description,
  className = "",
  onClick,
  detail = false,
}) => {
  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-sm h-full flex flex-col ${className}`}
    >
      <img src={image} alt={imageAlt} className="w-full h-56 object-cover" />

      <div className="p-6 space-y-4 flex-1 flex flex-col">
        {category && (
          <div className="text-xs font-bold text-vietsov-green uppercase tracking-wide">
            {category}
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>

        {timestamp && (
          <div className="text-sm font-normal text-vietsov-light-gray">
            {timestamp}
          </div>
        )}

        {description && (
          <p className="text-base leading-relaxed line-clamp-3 flex-1 text-vietsov-black/80">
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

export default CardFullDetail;
