import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import { type EnterpriseCardData } from "./data";

const EnterpriseCard: React.FC<EnterpriseCardData> = ({
  title,
  image,
  description,
  imagePosition = "right",
  path,
  categoryLabel = "PHÁT TRIỂN BỀN VỮNG",
  capabilities,
  imageHeight = "h-[500px] md:h-[700px] lg:h-[640px]",
  showQuoteIcon = false,
  cardIndex,
  totalCards,
}) => {
  const imageOrder =
    imagePosition === "left" ? "lg:order-first" : "lg:order-last";

  // Determine padding classes based on position and total cards
  let paddingClass = "py-16";
  if (totalCards && totalCards > 2 && cardIndex !== undefined) {
    if (cardIndex === 0) {
      // First card: remove pt
      paddingClass = "pb-16";
    } else if (cardIndex === totalCards - 1) {
      // Last card: remove pb
      paddingClass = "pt-16";
    } else {
      // Middle cards: keep py-16
      paddingClass = "py-16";
    }
  }

  return (
    <div
      className={`relative grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center mb-20 last:mb-0 ${paddingClass}`}
    >
      <motion.div
        className={imageOrder}
        initial={{ opacity: 0, x: imagePosition === "left" ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={image}
          alt={title}
          className={`w-full ${imageHeight} object-cover rounded-2xl shadow-lg`}
        />
      </motion.div>

      {/* Text Block */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, x: imagePosition === "left" ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {/* Background Quote Icon */}
        {showQuoteIcon && (
          <motion.span
            className={`
              absolute -top-26
              ${imagePosition === "left" ? "-left-20" : "-left-20"}
              text-7xl md:text-8xl lg:text-9xl
              font-bold text-gray-200/80 z-0 select-none pointer-events-none
            `}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <FaQuoteLeft />
          </motion.span>
        )}

        <motion.p
          className="text-sm font-bold text-green-600 mb-2 relative z-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        >
          {categoryLabel}
        </motion.p>
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4 leading-tight relative z-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-sm text-gray-600 leading-relaxed mb-6 relative z-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        >
          {description}
        </motion.p>

        {/* Capabilities list */}
        {capabilities && capabilities.length > 0 && (
          <motion.div
            className="mb-6 relative z-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.85, ease: "easeOut" }}
          >
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Năng lực chính:
            </h3>
            <ul className="space-y-2">
              {capabilities.map((capability, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-sm text-gray-600"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                >
                  <FiCheck className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  {capability}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        <motion.a
          href={path || "#"}
          onClick={(e) => {
            if (path) {
              e.preventDefault();
              window.location.href = path;
            }
          }}
          className="flex items-center text-sm text-blue-600 font-semibold hover:text-blue-700 relative z-10 cursor-pointer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
          whileHover={{ x: 5 }}
        >
          Tìm hiểu thêm <FiArrowRight className="w-4 h-4 ml-1" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default EnterpriseCard;
