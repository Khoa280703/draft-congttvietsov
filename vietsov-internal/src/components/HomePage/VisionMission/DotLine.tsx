import React from "react";
import { MotionValue } from "framer-motion";
import { motion } from "framer-motion";

interface DotLineProps {
  dotColor?: string;
  lineColor?: string;
  dotSize?: number;
  lineHeight?: number;
  lineWidth?: string | number | MotionValue<string>;
  className?: string;
  reverse?: boolean;
}

const DotLine: React.FC<DotLineProps> = ({
  dotColor = "#F07B22",
  lineColor = "#222E50",
  dotSize = 12,
  lineHeight = 2,
  lineWidth = "full",
  className = "",
  reverse = false,
}) => {
  const flexDirection = reverse ? "flex-row" : "flex-row-reverse";

  const isMotionValue =
    lineWidth && typeof lineWidth === "object" && "get" in lineWidth;

  if (isMotionValue) {
    return (
      <div className={`flex items-center ${flexDirection} ${className}`}>
        <motion.div
          className="flex-shrink-0"
          style={{
            height: `${lineHeight}px`,
            backgroundColor: lineColor,
            width: lineWidth as MotionValue<string>,
          }}
        />
        <div
          className="rounded-full flex-shrink-0"
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            backgroundColor: dotColor,
          }}
        />
      </div>
    );
  }

  const getLineWidthStyle = (): React.CSSProperties => {
    if (lineWidth === "full") return { flex: 1 };
    if (typeof lineWidth === "string") return { width: lineWidth };
    return { width: `${lineWidth}px` };
  };

  return (
    <div className={`flex items-center ${flexDirection} ${className}`}>
      <div
        className="flex-shrink-0"
        style={{
          height: `${lineHeight}px`,
          backgroundColor: lineColor,
          ...getLineWidthStyle(),
        }}
      />
      <div
        className="rounded-full flex-shrink-0"
        style={{
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          backgroundColor: dotColor,
        }}
      />
    </div>
  );
};

export default DotLine;
