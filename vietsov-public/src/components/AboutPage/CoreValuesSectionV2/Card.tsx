import React, { useState } from "react";
import { Link } from "react-router-dom";
import { type CoreValue } from "./data";

interface CardProps {
  value: CoreValue;
  index: number;
}

const Card: React.FC<CardProps> = ({ value, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  const getCardColors = () => {
    const colors = [
      {
        primary: "#10954f", // Vietsov green đậm
        secondary: "#f0f9f4", // Xanh lá rất nhạt
        accent: "#0d7a3d", // Xanh lá đậm cho text
        textOnPrimary: "#ffffff", // Trắng trên primary
        textOnSecondary: "#1a1a1a", // Đen trên secondary
      },
      {
        primary: "#16a085", // Teal đậm
        secondary: "#e8f5f2", // Teal rất nhạt
        accent: "#0d6b5a", // Teal đậm cho text
        textOnPrimary: "#ffffff",
        textOnSecondary: "#1a1a1a",
      },
      {
        primary: "#1abc9c", // Turquoise đậm
        secondary: "#e6f7f4", // Turquoise rất nhạt
        accent: "#0fa085", // Turquoise đậm cho text
        textOnPrimary: "#ffffff",
        textOnSecondary: "#1a1a1a",
      },
      {
        primary: "#2ecc71", // Green đậm
        secondary: "#e8f8f0", // Green rất nhạt
        accent: "#1e9d5e", // Green đậm cho text
        textOnPrimary: "#ffffff",
        textOnSecondary: "#1a1a1a",
      },
    ];
    return colors[index % colors.length];
  };

  const cardColors = getCardColors();

  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden shadow-[0_0_32px_-10px_rgba(0,0,0,0.08)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Background */}
      {value.image && (
        <img
          src={value.image}
          alt={value.title}
          className="absolute top-0 left-0 w-full h-full object-cover object-center -z-10"
          style={{
            transform: isHovered ? "scale(1)" : "scale(1.2)",
            transition: isHovered
              ? "0.35s 0.1s transform cubic-bezier(0.1, 0.72, 0.4, 0.97)"
              : "0.35s 0.35s transform cubic-bezier(0.1, 0.72, 0.4, 0.97)",
          }}
        />
      )}

      {/* Content Section */}
      <div
        className="absolute left-0 w-full text-center z-10"
        style={{
          backgroundColor: isHovered
            ? cardColors.secondary
            : cardColors.primary,
          padding: isHovered ? "50px 60px" : "0 60px 50px",
          bottom: isHovered ? "100%" : "0",
          transform: isHovered ? "translateY(100%)" : "translateY(0)",
          transition: isHovered
            ? "all 0.35s cubic-bezier(0.1, 0.72, 0.4, 0.97)"
            : "all 0.35s 0.35s cubic-bezier(0.1, 0.72, 0.4, 0.97)",
          willChange: "bottom, background-color, transform, padding",
        }}
      >
        {/* Ellipse clip-path decorations */}
        <div
          className="absolute left-0 w-full h-[120px] -top-20 -z-10"
          style={{
            content: '""',
            backgroundColor: "inherit",
            clipPath: "ellipse(60% 80px at bottom center)",
          }}
        />
        <div
          className="absolute left-0 w-full h-[120px] -bottom-20 -z-10"
          style={{
            content: '""',
            backgroundColor: "inherit",
            clipPath: "ellipse(60% 80px at top center)",
          }}
        />

        {/* Title */}
        <h3
          className="font-bold text-2xl mb-4 mt-0 leading-tight"
          style={{
            color: isHovered ? cardColors.primary : cardColors.textOnPrimary,
          }}
        >
          {value.title}
        </h3>

        {/* Description */}
        {value.description && (
          <p
            className="text-xs mt-0 mb-0 line-clamp-2 leading-relaxed max-h-[4.5em]"
            style={{
              color: isHovered
                ? cardColors.textOnSecondary
                : cardColors.textOnPrimary,
              opacity: isHovered ? 0.9 : 0.95,
            }}
          >
            {value.description}
          </p>
        )}

        {/* Link Button */}
        {value.url && (
          <Link
            to={value.url}
            className="absolute bottom-4 left-1/2 flex items-center no-underline p-2.5 font-semibold"
            style={{
              transform: isHovered
                ? "translate(-50%, 0)"
                : "translate(-50%, 10%)",
              color: isHovered ? cardColors.primary : cardColors.textOnPrimary,
              opacity: isHovered ? 1 : 0,
              transition: isHovered
                ? "all 0.3s 0.35s cubic-bezier(0.1, 0.72, 0.4, 0.97)"
                : "all 0.35s",
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            onMouseEnter={(e) => {
              setIsLinkHovered(true);
              const svg = e.currentTarget.querySelector("svg");
              if (svg) {
                (svg as SVGElement).style.transform = "translateX(4px)";
              }
            }}
            onMouseLeave={(e) => {
              setIsLinkHovered(false);
              const svg = e.currentTarget.querySelector("svg");
              if (svg) {
                (svg as SVGElement).style.transform = "translateX(0)";
              }
            }}
          >
            <span>Xem chi tiết</span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[18px] ml-1 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        )}
      </div>

      {/* Extra Content Section */}
      <div
        className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-center text-center h-[250px] md:h-[350px] text-2xl z-0 py-10 px-5"
        style={{
          backgroundColor: cardColors.primary,
          color: cardColors.textOnPrimary,
          transform: isLinkHovered ? "translateY(0)" : "translateY(100%)",
          willChange: "transform",
          transition: "transform 0.35s",
        }}
      >
        <h4 className="text-2xl font-extrabold m-0">
          <span style={{ color: cardColors.textOnPrimary }}>{value.title}</span>
        </h4>
      </div>
    </div>
  );
};

export default Card;
