import React from "react";
import { motion } from "framer-motion";
import { HiHeart, HiThumbUp, HiClock } from "react-icons/hi";

import { BsChatLeftText } from "react-icons/bs";

import { FiPlay } from "react-icons/fi";

export interface CardNewsProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  likes: number;
  comments: number;
  date: string;
  isVideo?: boolean;
  className?: string;
  onClick?: () => void;
}

const CardNews: React.FC<CardNewsProps> = ({
  imageUrl,
  imageAlt,
  title,
  likes,
  comments,
  date,
  isVideo = false,
  className = "",
  onClick,
}) => {
  return (
    <motion.article
      className={`overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      onClick={onClick}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover rounded-lg"
        />

        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 rounded-full p-4 shadow-lg">
              <FiPlay className="w-6 h-6 text-gray-800 ml-1" />
            </div>
          </div>
        )}
      </div>

      <div className="py-2 space-y-4 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-base font-semibold text-gray-900 leading-tight line-clamp-3 flex-1">
          {title}
        </h3>

        {/* Metadata Footer */}
        <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
          <div className="flex items-center space-x-4">
            {/* Likes */}
            <div className="flex items-center space-x-1">
              <HiHeart className="w-4 h-4 text-red-500" />
              <HiThumbUp className="w-4 h-4 text-gray-400" />
              <span className="font-medium">{likes}</span>
            </div>

            {/* Comments */}
            <div className="flex items-center space-x-1">
              <BsChatLeftText className="w-4 h-4 text-gray-400" />
              <span className="font-medium">{comments}</span>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center space-x-1">
            <HiClock className="w-4 h-4 text-gray-400" />
            <span className="font-medium">{date}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default CardNews;
