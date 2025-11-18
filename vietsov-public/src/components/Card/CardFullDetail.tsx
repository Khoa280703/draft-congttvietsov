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
  imageHeight?: string;
  compact?: boolean;
  maxTitleLines?: number;
  maxDescriptionLines?: number;
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
  imageHeight = "h-56",
  compact = false,
  maxTitleLines = 3,
  maxDescriptionLines = 2,
}) => {
  return (
    <div
      className={`overflow-hidden  h-full flex flex-col bg-white ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
      style={{
        boxShadow: "0 5px 16px 0 rgba(2, 55, 102, 0.09)",
      }}
      onClick={onClick}
    >
      <img
        src={image}
        alt={imageAlt}
        className={`w-full ${imageHeight} object-cover`}
      />

      <div className="py-4 px-4 md:py-5 md:px-6 lg:py-4 lg:px-5 laptop:py-5 laptop:px-6 fhd:py-6 fhd:px-7 qhd:py-7 qhd:px-8 space-y-2.5 md:space-y-3 lg:space-y-2.5 laptop:space-y-3 fhd:space-y-3.5 qhd:space-y-4 flex-1 flex flex-col">
        {category && (
          <div
            className={`font-bold leading-none text-vietsov-green ${
              compact
                ? "text-[10px] md:text-[9px] lg:text-[9px] laptop:text-[10px] fhd:text-[11px] qhd:text-xs tracking-[1.5px] md:tracking-[1px] lg:tracking-[1px] laptop:tracking-[1.5px] fhd:tracking-[1.5px] qhd:tracking-[2px]"
                : "text-[11px] md:text-[10px] lg:text-[10px] laptop:text-[11px] fhd:text-xs qhd:text-sm tracking-[2px] md:tracking-[1.5px] lg:tracking-[1.5px] laptop:tracking-[2px] fhd:tracking-[2px] qhd:tracking-[2px]"
            }`}
          >
            {category}
          </div>
        )}

        {/* Title */}
        <h3
          className={`font-semibold ${
            compact
              ? "text-base/[24px] md:text-sm/[20px] lg:text-sm/[20px] laptop:text-base/[24px] fhd:text-lg/[28px] qhd:text-xl/[32px]"
              : "text-lg/[28px] md:text-base/[24px] lg:text-base/[24px] laptop:text-lg/[28px] fhd:text-xl/[32px] qhd:text-2xl/[36px]"
          }`}
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
          <div
            className={`font-normal leading-none text-vietsov-light-gray ${
              compact
                ? "text-xs md:text-[10px] lg:text-[10px] laptop:text-xs fhd:text-sm qhd:text-base"
                : "text-sm md:text-xs lg:text-xs laptop:text-sm fhd:text-base qhd:text-lg"
            }`}
          >
            {timestamp}
          </div>
        )}

        {description && (
          <p
            className={`leading-relaxed flex-1 text-vietsov-black/80 ${
              compact
                ? "text-sm md:text-xs lg:text-xs laptop:text-sm fhd:text-base qhd:text-lg"
                : "text-base md:text-sm lg:text-sm laptop:text-base fhd:text-lg qhd:text-xl"
            }`}
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

        {detail && (
          <div
            className="flex items-center gap-2 cursor-pointer text-vietsov-green"
            onClick={onClick}
          >
            <span
              className={`font-normal ${
                compact
                  ? "text-xs md:text-[10px] lg:text-[10px] laptop:text-xs fhd:text-sm qhd:text-base"
                  : "text-sm md:text-xs lg:text-xs laptop:text-sm fhd:text-base qhd:text-lg"
              }`}
            >
              Chi tiết
            </span>
            <HiArrowRight
              className={
                compact
                  ? "w-3.5 h-3.5 md:w-3 md:h-3 lg:w-3 lg:h-3 laptop:w-3.5 laptop:h-3.5 fhd:w-4 fhd:h-4 qhd:w-5 qhd:h-5"
                  : "w-4 h-4 md:w-3.5 md:h-3.5 lg:w-3.5 lg:h-3.5 laptop:w-4 laptop:h-4 fhd:w-5 fhd:h-5 qhd:w-6 qhd:h-6"
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardFullDetail;
