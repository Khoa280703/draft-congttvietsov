import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { type CoreValue } from "./data";

interface CardProps {
  value: CoreValue;
  index: number;
}

const Card: React.FC<CardProps> = ({ value, index }) => {
  const getCardColors = () => {
    const colors = [
      {
        shadow: "rgba(16, 149, 79, 0.4)",
        gradient: "linear-gradient(135deg, #10954f 0%, #0d7a3d 100%)",
        overlayColor: "rgba(16, 149, 79, 0.15)", // Màu overlay nhẹ cho hover
      }, // card-gradient-0
      {
        shadow: "rgba(22, 160, 133, 0.4)",
        gradient: "linear-gradient(135deg, #16a085 0%, #10954f 100%)",
        overlayColor: "rgba(22, 160, 133, 0.15)",
      }, // card-gradient-1
      {
        shadow: "rgba(26, 188, 156, 0.4)",
        gradient: "linear-gradient(135deg, #1abc9c 0%, #16a085 100%)",
        overlayColor: "rgba(26, 188, 156, 0.15)",
      }, // card-gradient-2
      {
        shadow: "rgba(46, 204, 113, 0.4)",
        gradient: "linear-gradient(135deg, #2ecc71 0%, #1abc9c 100%)",
        overlayColor: "rgba(46, 204, 113, 0.15)",
      }, // card-gradient-3
    ];
    return colors[index % colors.length];
  };

  const cardColors = getCardColors();

  return (
    <motion.div
      className="cursor-pointer flex flex-col break-words w-full rounded-2xl backdrop-blur-lg bg-white/15 border-2 overflow-hidden group"
      style={{
        boxShadow: `0 8px 32px 0 ${cardColors.shadow}, 0 0 0 1px rgba(255, 255, 255, 0.1)`,
        borderColor: "rgba(255, 255, 255, 0.2)",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 12px 48px 0 ${cardColors.shadow}, 0 0 0 1px rgba(255, 255, 255, 0.3)`,
      }}
    >
      {/* Gradient accent border top */}
      <div className="h-1 w-full" style={{ background: cardColors.gradient }} />

      {/* Image */}
      {value.image ? (
        <motion.div className="w-full h-40 mb-4 relative overflow-hidden">
          <img
            src={value.image}
            alt={value.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(135deg, ${cardColors.overlayColor} 0%, transparent 100%)`,
            }}
          />
        </motion.div>
      ) : (
        <div className="w-full h-40 mb-4 bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center relative overflow-hidden">
          <div className="w-20 h-20 bg-white/30 rounded-full blur-xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col px-6 pb-4">
        {/* Title */}
        <h3
          className="font-bold m-0 p-0 mb-3 text-xl md:text-2xl tracking-tight leading-tight"
          style={{
            background: cardColors.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {value.title}
        </h3>

        {/* Description */}
        {value.description && (
          <p className="text-vietsov-black/80 text-sm md:text-base leading-relaxed mb-4 flex-1 line-clamp-3">
            {value.description}
          </p>
        )}

        {/* Button */}
        {value.url && (
          <Link
            to={value.url}
            className="mt-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 group/btn relative overflow-hidden text-vietsov-green w-full"
            style={{
              background: cardColors.gradient,
              color: "white",
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span className="relative z-10">Xem chi tiết</span>
            <motion.svg
              className="w-4 h-4 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
