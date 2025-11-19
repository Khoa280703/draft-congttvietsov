import React, { useState } from "react";
import { motion } from "framer-motion";
import { type CoreValue } from "./data";
import { getCoreValuesThemeColors } from "./theme";
import CoreValue1 from "@/assets/icon/CoreValue1";
import CoreValue2 from "@/assets/icon/CoreValue2";
import CoreValue3 from "@/assets/icon/CoreValue3";
import CoreValue4 from "@/assets/icon/CoreValue4";

interface CardStackProps {
  values: CoreValue[];
  titleColor: "green" | "black";
  isLightMode?: boolean;
}

interface CoreValueCardProps {
  value: CoreValue;
  CoreValueIcon: React.ComponentType<{
    width?: string | number;
    height?: string | number;
    className?: string;
    color?: string;
  }>;
  theme: ReturnType<typeof getCoreValuesThemeColors>;
}

const CoreValueCard: React.FC<CoreValueCardProps> = ({
  value,
  CoreValueIcon,
  theme,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`${theme.cardBackground} ${theme.cardBorder} rounded-lg flex flex-col items-center px-3 md:px-4 lg:px-5 laptop:px-6 fhd:px-8 qhd:px-10 py-3 md:py-4 lg:py-5 laptop:py-6 fhd:py-8 qhd:py-10 h-full transition-all duration-300`}
      style={{
        boxShadow: isHovered ? theme.cardShadowHover : theme.cardShadow,
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Icon - Top, Centered with circular background */}
      <div className="mb-3 md:mb-4 lg:mb-5 laptop:mb-6 fhd:mb-8 qhd:mb-10 flex justify-center">
        <div
          className={`${theme.iconBackground} ${theme.iconBorder} rounded-full p-2 md:p-3 lg:p-4 laptop:p-5 fhd:p-6 qhd:p-7 flex items-center justify-center shadow-lg`}
        >
          <CoreValueIcon
            width="240"
            height="240"
            color={theme.iconColor}
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 laptop:w-28 laptop:h-28 fhd:w-32 fhd:h-32 qhd:w-36 qhd:h-36"
          />
        </div>
      </div>

      {/* Title - Uppercase, Bold, Centered */}
      <h3
        className={`text-sm md:text-base lg:text-lg laptop:text-lg fhd:text-xl qhd:text-2xl font-bold uppercase mb-2 md:mb-3 lg:mb-4 laptop:mb-5 fhd:mb-6 qhd:mb-8 text-center transition-colors duration-300 ${theme.title}`}
      >
        {value.title}
      </h3>

      {/* Description - Left-aligned text in centered block */}
      {value.description && (
        <div className="w-full mb-3 md:mb-4 lg:mb-5 laptop:mb-6 fhd:mb-8 qhd:mb-10 flex-1">
          <p
            className={`text-[10px]  md:text-xs lg:text-sm laptop:text-sm fhd:text-base qhd:text-lg leading-relaxed text-center transition-colors duration-300 font-medium ${theme.description} opacity-70`}
          >
            {value.description}
          </p>
        </div>
      )}

      {/* Button - Theme-based colors, pill-shaped, centered */}
      <button
        className={`w-full ${theme.buttonBackground} ${theme.buttonText} ${theme.buttonBorder} font-bold uppercase py-1.5 md:py-2 lg:py-2.5 laptop:py-3 fhd:py-3.5 qhd:py-4 px-3 md:px-4 lg:px-5 laptop:px-6 fhd:px-8 qhd:px-10 rounded-full text-[9px] md:text-[10px] lg:text-xs laptop:text-sm fhd:text-base qhd:text-lg transition-all duration-300 ${theme.buttonHover} hover:scale-105`}
      >
        Xem thêm
      </button>
    </motion.div>
  );
};

const CardStack: React.FC<CardStackProps> = ({
  values,
  titleColor,
  isLightMode = true,
}) => {
  const theme = getCoreValuesThemeColors(isLightMode);

  return (
    <div className="mb-16 md:mb-20 lg:mb-24 laptop:mb-28 fhd:mb-32 qhd:mb-36">
      {/* Title */}
      <div className="text-center mb-6 md:mb-8 lg:mb-12 laptop:mb-14 fhd:mb-24 qhd:mb-18">
        <h2 className="text-xl md:text-2xl lg:text-3xl laptop:text-4xl fhd:text-5xl qhd:text-6xl font-bold uppercase leading-tight transition-colors duration-700">
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
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 laptop:gap-8 fhd:gap-10 qhd:gap-12">
        {values.map((value, index) => {
          const CoreValueIcon = [
            CoreValue1,
            CoreValue2,
            CoreValue3,
            CoreValue4,
          ][index];

          return (
            <CoreValueCard
              key={value.id}
              value={value}
              CoreValueIcon={CoreValueIcon}
              theme={theme}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardStack;
