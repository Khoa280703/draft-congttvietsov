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
    const baseHeight = 40;
    const categoryHeight = category ? 20 : 0;
    const titleHeight = maxTitleLines * 24;
    const timestampHeight = timestamp ? 20 : 0;
    const descriptionHeight = description ? maxDescriptionLines * 20 : 0;
    const detailHeight = detail ? 32 : 0;

    const elementsCount = [
      category,
      title,
      timestamp,
      description,
      detail,
    ].filter(Boolean).length;

    const spacing = elementsCount > 1 ? (elementsCount - 1) * 12 : 0;

    return (
      baseHeight +
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
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="w-3/5 pl-6 py-2 flex flex-col justify-center h-full">
        <div className="space-y-3">
          {category && (
            <div className="text-xs font-bold text-vietsov-green uppercase tracking-wide">
              {category}
            </div>
          )}

          {/* Title */}
          <h3
            className="text-lg font-semibold leading-tight text-vietsov-black"
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
            <div className="text-sm font-normal text-vietsov-light-gray">
              {timestamp}
            </div>
          )}

          {description && (
            <p
              className="text-sm leading-relaxed text-vietsov-black/80"
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
          <div className="flex items-center gap-2 cursor-pointer mt-4">
            <span className="text-sm font-normal text-vietsov-black">
              Chi tiết
            </span>
            <HiArrowRight className="w-4 h-4 text-vietsov-green" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardFullDetailHori;
