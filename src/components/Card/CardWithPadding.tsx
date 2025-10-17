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
      className={`bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm ${className}`}
    >
      <div className="relative p-4">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-64 object-cover rounded-t-2xl"
        />
      </div>

      <div className="px-6 py-4 space-y-6">
        {/* Title */}
        <h3 className="text-2xl font-semibold leading-tight">{title}</h3>

        {/* Description */}
        <p className="text-sm leading-relaxed line-clamp-3">{description}</p>

        {/* Read More Link */}
        <a
          href={readMoreLink}
          className="inline-flex items-center text-base transition-colors duration-200"
        >
          {readMoreText}
          <HiArrowRight className="w-4 h-4 ml-1 text-vietsov-green" />
        </a>
      </div>
    </div>
  );
};

export default CardWithPadding;
