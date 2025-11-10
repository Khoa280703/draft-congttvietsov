import React, { useState } from "react";
import { Link } from "react-router-dom";
import { type CoreValue } from "./data";

interface CardV2Props {
  value: CoreValue;
  index: number;
}

const CardV2: React.FC<CardV2Props> = ({ value }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-end overflow-hidden p-4 w-full text-center text-white bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1),0_2px_2px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.1),0_8px_8px_rgba(0,0,0,0.1),0_16px_16px_rgba(0,0,0,0.1)] md:h-[460px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      {value.image && (
        <div
          className="absolute top-0 left-0 w-full h-[110%] bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url(${value.image})`,
            transform: isHovered ? "translateY(-4%)" : "translateY(0)",
            transition: "transform 1050ms cubic-bezier(0.19, 1, 0.22, 1)",
          }}
        />
      )}

      {/* Gradient Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-[200%] pointer-events-none hidden md:block"
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
            hsla(0, 0%, 0%, 0) 0%,
            hsla(0, 0%, 0%, 0.009) 11.7%,
            hsla(0, 0%, 0%, 0.034) 22.1%,
            hsla(0, 0%, 0%, 0.072) 31.2%,
            hsla(0, 0%, 0%, 0.123) 39.4%,
            hsla(0, 0%, 0%, 0.182) 46.6%,
            hsla(0, 0%, 0%, 0.249) 53.1%,
            hsla(0, 0%, 0%, 0.320) 58.9%,
            hsla(0, 0%, 0%, 0.394) 64.3%,
            hsla(0, 0%, 0%, 0.468) 69.3%,
            hsla(0, 0%, 0%, 0.540) 74.1%,
            hsla(0, 0%, 0%, 0.607) 78.8%,
            hsla(0, 0%, 0%, 0.668) 83.6%,
            hsla(0, 0%, 0%, 0.721) 88.7%,
            hsla(0, 0%, 0%, 0.762) 94.1%,
            hsla(0, 0%, 0%, 0.790) 100%
          )`,
          transform: isHovered ? "translateY(-50%)" : "translateY(0)",
          transition: "transform 1400ms cubic-bezier(0.19, 1, 0.22, 1)",
        }}
      />

      {/* Content */}
      <div
        className="relative flex flex-col items-center w-full p-4 z-10 md:transition-transform md:duration-[700ms] md:ease-[cubic-bezier(0.19,1,0.22,1)]"
        style={{
          transform: isHovered
            ? "translateY(-2rem)"
            : "translateY(calc(100% - 4.5rem))",
        }}
      >
        {/* Title - Always visible */}
        <h2 className="text-[1.3rem] font-bold leading-tight mb-0">
          {value.title}
        </h2>

        {/* Description - Fade in on hover (desktop only) */}
        {value.description && (
          <p
            className="text-[1.125rem] italic leading-[1.35] mt-4 md:opacity-0 md:translate-y-4 md:transition-[transform,opacity] md:duration-[700ms] md:ease-[cubic-bezier(0.19,1,0.22,1)]"
            style={{
              opacity: isHovered ? 1 : undefined,
              transform: isHovered ? "translateY(0)" : undefined,
              transitionDelay: isHovered ? "87.5ms" : undefined,
              pointerEvents: isHovered ? "auto" : "none",
            }}
          >
            {value.description}
          </p>
        )}

        {/* Button - Fade in on hover (desktop only) */}
        {value.url && (
          <Link
            to={value.url}
            className="cursor-pointer mt-6 px-6 py-3 text-[0.65rem] font-bold tracking-[0.025rem] uppercase text-white bg-black border-none hover:bg-[#0d0d0d] focus:outline focus:outline-1 focus:outline-dashed focus:outline-yellow-400 focus:outline-offset-[3px] transition-colors duration-200 md:opacity-0 md:translate-y-4 md:transition-[transform,opacity] md:duration-[700ms] md:ease-[cubic-bezier(0.19,1,0.22,1)]"
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{
              opacity: isHovered ? 1 : undefined,
              transform: isHovered ? "translateY(0)" : undefined,
              transitionDelay: isHovered ? "87.5ms" : undefined,
              pointerEvents: isHovered ? "auto" : "none",
            }}
          >
            Xem chi tiết
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardV2;
