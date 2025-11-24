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
  compact?: boolean;
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
  compact = false,
}) => {
  return (
    <div
      className={`overflow-hidden flex flex-row max-w-full md:max-w-xl lg:max-w-2xl laptop:max-w-3xl fhd:max-w-4xl qhd:max-w-5xl ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
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

      <div className="w-3/5 pl-4 md:pl-6 lg:pl-5 laptop:pl-6 fhd:pl-7 qhd:pl-8 py-2 md:py-2.5 laptop:py-3 fhd:py-3.5 qhd:py-4 flex flex-col h-full">
        <div className="space-y-2 md:space-y-3 lg:space-y-2 laptop:space-y-3 fhd:space-y-3.5 qhd:space-y-4">
          {category && (
            <div
              className={`font-bold leading-none text-vietsov-green uppercase ${
                compact
                  ? "text-[9px] md:text-[8px] lg:text-[8px] laptop:text-[9px] fhd:text-[10px] qhd:text-xs tracking-[1px] md:tracking-[0.5px] lg:tracking-[0.5px] laptop:tracking-[1px] fhd:tracking-[1px] qhd:tracking-[1.5px]"
                  : "text-[10px] md:text-[9px] lg:text-[9px] laptop:text-[10px] fhd:text-xs qhd:text-sm tracking-[1.5px] md:tracking-[1px] lg:tracking-[1px] laptop:tracking-[1.5px] fhd:tracking-[1.5px] qhd:tracking-[2px]"
              }`}
            >
              {category}
            </div>
          )}

          {/* Title */}
          <h3
            className={`font-semibold leading-tight text-vietsov-black ${
              compact
                ? "text-base md:text-sm lg:text-sm laptop:text-base fhd:text-lg qhd:text-xl"
                : "text-lg md:text-base lg:text-base laptop:text-lg fhd:text-xl qhd:text-2xl"
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
              className={`leading-relaxed text-vietsov-black/80 ${
                compact
                  ? "text-xs md:text-[10px] lg:text-[10px] laptop:text-xs fhd:text-sm qhd:text-base"
                  : "text-sm md:text-xs lg:text-xs laptop:text-sm fhd:text-base qhd:text-lg"
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
        </div>

        {detail && (
          <div
            className="flex items-center gap-2 cursor-pointer mt-3 md:mt-4 lg:mt-3 laptop:mt-4 fhd:mt-5 qhd:mt-6 text-vietsov-green"
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

export default CardFullDetailHori;
