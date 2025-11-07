import React from "react";
import { motion } from "framer-motion";

export interface CardSimpleProps {
  imageUrl: string;
  imageAlt: string;
  position: string;
  name: string;
  className?: string;
  onClick?: () => void;
}

const CardSimple: React.FC<CardSimpleProps> = ({
  imageUrl,
  imageAlt,
  position,
  name,
  className = "",
  onClick,
}) => {
  return (
    <motion.div
      className={`rounded-xl shadow-sm overflow-hidden w-full h-full flex flex-col ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={onClick}
    >
      <div className="relative w-full h-72 md:h-80 lg:h-64 inch32:h-80 flex-shrink-0 overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-2/3 h-full mx-auto object-cover object-center"
        />
      </div>

      <div className="p-6 md:p-8 lg:p-6 inch32:p-8 space-y-3 md:space-y-4 lg:space-y-3 inch32:space-y-4 text-center flex-1 flex flex-col justify-center">
        <motion.h3
          className="text-sm lg:text-xs inch32:text-sm font-normal text-vietsov-gray tracking-wider"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          {position}
        </motion.h3>
        <motion.h4
          className="text-2xl lg:text-xl inch32:text-2xl font-semibold leading-tight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          {name}
        </motion.h4>
      </div>
    </motion.div>
  );
};

export default CardSimple;
