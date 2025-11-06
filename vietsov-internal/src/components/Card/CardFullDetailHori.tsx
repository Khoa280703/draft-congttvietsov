import React from "react";
import { HiArrowRight } from "react-icons/hi";

interface CardFullDetailHoriProps {
  image: string;
  imageAlt: string;
  category?: string;
  title: string;
  timestamp?: string;
  description?: string;
  className?: string;
  onClick?: () => void;
  detail?: boolean;
  maxTitleLines?: number;
  maxDescriptionLines?: number;
}

const CardFullDetailHori: React.FC<CardFullDetailHoriProps> = ({
  image,
  imageAlt,
  category,
  title,
  timestamp,
  description,
  className = "",
  onClick,
  detail = false,
  maxTitleLines = 2,
  maxDescriptionLines = 3,
}) => {
  const calculateHeight = () => {
    // Base padding (py-2 = 8px top + 8px bottom = 16px)
    const basePadding = 16;
    
    // Category height: text-[10px] với leading-none ≈ 12px
    const categoryHeight = category ? 12 : 0;
    
    // Title height: text-lg (18px) với leading-tight, mỗi dòng ≈ 22px
    // text-base (16px) với leading-tight, mỗi dòng ≈ 20px
    // text-lg inch32 (18px) với leading-tight, mỗi dòng ≈ 22px
    // Tính trung bình 21px/dòng
    const titleHeight = maxTitleLines * 21;
    
    // Timestamp height: text-sm (14px) với leading-none ≈ 14px
    const timestampHeight = timestamp ? 14 : 0;
    
    // Description height: text-sm (14px) với leading-relaxed, mỗi dòng ≈ 18px
    // text-xs (12px) với leading-relaxed, mỗi dòng ≈ 16px
    // Tính trung bình 17px/dòng
    const descriptionHeight = description ? maxDescriptionLines * 17 : 0;
    
    // Detail link height: text-sm (14px) + icon ≈ 20px
    const detailHeight = detail ? 20 : 0;

    // Spacing giữa các elements: space-y-2 (8px) cho md, space-y-3 (12px) cho lg
    // Tính trung bình là space-y-2.5 ≈ 10px
    const elementsCount = [
      category,
      title,
      timestamp,
      description,
      detail,
    ].filter(Boolean).length;

    const spacing = elementsCount > 1 ? (elementsCount - 1) * 10 : 0;

    return (
      basePadding +
      categoryHeight +
      titleHeight +
      timestampHeight +
      descriptionHeight +
      detailHeight +
      spacing
    );
  };

  const cardHeight = calculateHeight();

  return (
    <div
      className={`overflow-hidden flex flex-row ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
      style={{ height: `${cardHeight}px` }}
      onClick={onClick}
    >
      {/* Left Section - Image */}
      <div className="w-2/5 flex-shrink-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-3/5 pl-4 md:pl-6 lg:pl-5 inch32:pl-6 py-2 flex flex-col h-full">
        <div className="space-y-2 md:space-y-3 lg:space-y-2 inch32:space-y-3">
          {category && (
            <div className="font-bold text-[10px] lg:text-[9px] inch32:text-[10px] leading-none tracking-[1.5px] lg:tracking-[1px] inch32:tracking-[1.5px] text-vietsov-green uppercase">
              {category}
            </div>
          )}

          {/* Title */}
          <h3
            className="text-lg lg:text-base inch32:text-lg font-semibold leading-tight text-vietsov-black"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: maxTitleLines,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {title}
          </h3>

          {timestamp && (
            <div className="text-sm lg:text-xs inch32:text-sm font-normal leading-none text-vietsov-light-gray">
              {timestamp}
            </div>
          )}

          {description && (
            <p
              className="text-sm lg:text-xs inch32:text-sm leading-relaxed text-vietsov-black/80"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: maxDescriptionLines,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {description}
            </p>
          )}
        </div>

        {detail && (
          <div className="flex items-center gap-2 cursor-pointer mt-3 md:mt-4 lg:mt-3 inch32:mt-4">
            <span className="text-sm lg:text-xs inch32:text-sm font-normal text-vietsov-black">
              Chi tiết
            </span>
            <HiArrowRight className="w-4 h-4 lg:w-3.5 lg:h-3.5 inch32:w-4 inch32:h-4 text-vietsov-green" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardFullDetailHori;
