import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { type CoreValue, vietsovPetroValues, humanValues } from "./data";
import "./index.css";

interface CoreValuesSectionV2Props {
  className?: string;
}

// Card component với gradient backgrounds
const Card: React.FC<{
  value: CoreValue;
  index: number;
  total: number;
  isHovered: boolean;
}> = ({ value, index, total, isHovered }) => {
  // Tính toán transform dựa trên index
  const getTransform = () => {
    const baseX = (index - (total - 1) / 2) * 20;
    const baseRotate = (index - (total - 1) / 2) * 5;
    const baseY = -5;

    if (isHovered) {
      // Khi hover, trải ra
      const spreadX = (index - (total - 1) / 2) * 200;
      return {
        x: spreadX,
        y: baseY - index * 2,
        rotate: baseRotate,
      };
    }

    return {
      x: baseX,
      y: baseY,
      rotate: baseRotate,
    };
  };

  const transform = getTransform();
  const zIndex = total - index;

  // Gradient class names
  const gradientClasses = [
    "card-gradient-0",
    "card-gradient-1",
    "card-gradient-2",
    "card-gradient-3",
  ];

  return (
    <motion.div
      className={`absolute bottom-0 cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.45)] flex flex-col break-words w-[240px] h-[360px] md:w-[280px] md:h-[400px] ${
        gradientClasses[index % gradientClasses.length]
      }`}
      style={{
        zIndex,
      }}
      animate={{
        x: transform.x,
        y: transform.y,
        rotate: transform.rotate,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.18,
      }}
      whileHover={{
        scale: 1.05,
        zIndex: total + 1,
      }}
    >
      {/* Image */}
      {value.image ? (
        <div className="w-full h-32 mb-4">
          <img
            src={value.image}
            alt={value.title}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-32 mb-4 bg-white/20 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/30" />
        </div>
      )}

      {/* Title */}
      <h3 className="font-bold text-white m-0 p-0 mb-3 px-6 text-[28px] tracking-[1.5px] leading-tight">
        {value.title}
      </h3>

      {/* Description */}
      {value.description && (
        <p className="text-white/90 text-sm leading-relaxed mb-4 flex-1 px-6 line-clamp-3">
          {value.description}
        </p>
      )}

      {/* Button */}
      {value.url && (
        <Link
          to={value.url}
          className="mt-auto mx-6 mb-6 inline-flex items-center justify-center px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-semibold transition-all duration-200 border border-white/30 hover:border-white/50"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          Xem chi tiết
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      )}
    </motion.div>
  );
};

// Card Stack component
const CardStack: React.FC<{
  values: CoreValue[];
  titleColor: "green" | "black";
  isInView: boolean;
}> = ({ values, titleColor, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="mb-24 md:mb-32"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title */}
      <div className="text-center mb-12 md:mb-16">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {titleColor === "green" ? (
            <>
              <span className="text-vietsov-green-label mr-1">Giá trị</span>{" "}
              <span className="text-vietsov-black">Vietsovpetro</span>
            </>
          ) : (
            <>
              <span className="text-vietsov-black mr-1">Giá trị</span>{" "}
              <span className="text-vietsov-green-label">Con người</span>
            </>
          )}
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-transparent via-vietsov-green to-transparent mx-auto"
          initial={{ width: 0 }}
          animate={isInView ? { width: 96 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>

      {/* Card Stack Container */}
      <div className="flex justify-center">
        <div
          className="relative w-[260px] h-[390px] md:w-[300px] md:h-[450px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Cards */}
          {values.map((value, index) => (
            <Card
              key={value.id}
              value={value}
              index={index}
              total={values.length}
              isHovered={isHovered}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const CoreValuesSectionV2: React.FC<CoreValuesSectionV2Props> = ({
  className = "",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className={`relative py-8 md:py-12 md:pt-18 md:pb-12 lg:py-16 inch32:pt-22 inch32:pb-15 overflow-hidden ${className}`}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section 1: Giá trị Vietsov Petro */}
        <CardStack
          values={vietsovPetroValues}
          titleColor="green"
          isInView={isInView}
        />

        {/* Divider */}
        <motion.div
          className="flex items-center justify-center my-16 md:my-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-4 w-full max-w-2xl">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-vietsov-green/30 to-vietsov-green/30" />
            <motion.div
              className="w-3 h-3 rounded-full bg-vietsov-green"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-vietsov-green/30 to-vietsov-green/30" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <CardStack
            values={humanValues}
            titleColor="black"
            isInView={isInView}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValuesSectionV2;
