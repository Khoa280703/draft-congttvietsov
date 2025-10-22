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
      className={`rounded-xl shadow-sm overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={onClick}
    >
      <div className="relative w-full h-72 overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="p-6 space-y-4 text-center py-8">
        <motion.h3
          className="text-sm font-normal text-vietsov-gray tracking-wider"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          {position}
        </motion.h3>
        <motion.h4
          className="text-2xl font-semibold leading-tight"
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
