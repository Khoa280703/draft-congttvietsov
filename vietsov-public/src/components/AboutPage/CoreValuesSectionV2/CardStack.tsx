import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { type CoreValue } from "./data";
import CardV2 from "./CardV2";
import { getCoreValuesThemeColors } from "./theme";

interface CardStackProps {
  values: CoreValue[];
  titleColor: "green" | "black";
  isInView: boolean;
  parallaxSpeed?: number;
  isLightMode?: boolean;
}

const CardStack: React.FC<CardStackProps> = ({
  values,
  titleColor,
  isInView,
  parallaxSpeed = 0,
  isLightMode = true,
}) => {
  const theme = getCoreValuesThemeColors(isLightMode);
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
      className="mb-24 md:mb-32 lg:mb-36 laptop:mb-40 fhd:mb-44 qhd:mb-48"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      style={{
        y: parallaxY,
      }}
    >
      {/* Title */}
      <div className="text-center mb-6 md:mb-8 lg:mb-12 laptop:mb-14 fhd:mb-24 qhd:mb-18">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl laptop:text-5xl fhd:text-6xl qhd:text-7xl font-bold uppercase leading-tight transition-colors duration-700"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {titleColor == "green" ? (
            <>
              <span
                className={`${theme.cardStackTitleGreen} mr-4 transition-colors duration-700`}
              >
                GIÁ TRỊ
              </span>
              <span
                className={`${theme.cardStackTitleBlack} transition-colors duration-700`}
              >
                VIETSOVPETRO
              </span>
            </>
          ) : (
            <>
              <span
                className={`${theme.cardStackTitleBlack} mr-4 transition-colors duration-700`}
              >
                GIÁ TRỊ
              </span>
              <span
                className={`${theme.cardStackTitleGreen} transition-colors duration-700`}
              >
                CON NGƯỜI
              </span>
            </>
          )}
        </motion.h2>
        {/* <motion.div
          className={`w-24 md:w-32 laptop:w-40 fhd:w-48 qhd:w-56 h-1 md:h-[2px] laptop:h-[3px] fhd:h-[4px] qhd:h-[5px] ${theme.cardStackGradientLine} mx-auto transition-colors duration-700`}
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        /> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 laptop:gap-12 fhd:gap-14 qhd:gap-16">
        {values.map((value, index) => (
          <CardV2
            key={value.id}
            value={value}
            index={index}
            isLightMode={isLightMode}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CardStack;
