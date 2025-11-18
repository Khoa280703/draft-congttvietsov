import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { type CoreValue } from "./data";
import { getCoreValuesThemeColors } from "./theme";
import CoreValue1 from "@/assets/icon/CoreValue1";
import CoreValue2 from "@/assets/icon/CoreValue2";
import CoreValue3 from "@/assets/icon/CoreValue3";
import CoreValue4 from "@/assets/icon/CoreValue4";

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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 laptop:gap-12 fhd:gap-14 qhd:gap-16">
        {values.map((value, index) => {
          const CoreValueIcon = [
            CoreValue1,
            CoreValue2,
            CoreValue3,
            CoreValue4,
          ][index];

          return (
            <motion.div
              key={value.id}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {/* Icon */}
              <div className="mb-5 md:mb-7 lg:mb-9 laptop:mb-12 fhd:mb-14 qhd:mb-16">
                <CoreValueIcon
                  width="240"
                  height="240"
                  className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 laptop:w-52 laptop:h-52 fhd:w-64 fhd:h-64 qhd:w-80 qhd:h-80"
                />
              </div>

              {/* Title */}
              <h3
                className={`text-lg md:text-xl lg:text-2xl laptop:text-2xl fhd:text-3xl qhd:text-4xl font-bold mb-3 md:mb-4 lg:mb-5 laptop:mb-6 fhd:mb-7 qhd:mb-8 transition-colors duration-700 ${theme.title}`}
              >
                {value.title}
              </h3>

              {/* Description */}
              {value.description && (
                <p
                  className={`text-sm md:text-base lg:text-lg laptop:text-lg fhd:text-xl qhd:text-2xl leading-relaxed transition-colors duration-700 ${theme.description} opacity-80`}
                >
                  {value.description}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CardStack;
