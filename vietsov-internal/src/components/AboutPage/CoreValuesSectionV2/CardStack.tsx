import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { type CoreValue } from "./data";
import CardV2 from "./CardV2";

interface CardStackProps {
  values: CoreValue[];
  titleColor: "green" | "black";
  isInView: boolean;
  parallaxSpeed?: number;
}

const CardStack: React.FC<CardStackProps> = ({
  values,
  titleColor,
  isInView,
  parallaxSpeed = 0,
}) => {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [`${parallaxSpeed * 3}%`, `${parallaxSpeed * -3}%`]
  );

  return (
    <motion.div
      ref={stackRef}
      className="mb-24 md:mb-32"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      style={{
        y: parallaxY,
      }}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {values.map((value, index) => (
          <CardV2 key={value.id} value={value} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default CardStack;
