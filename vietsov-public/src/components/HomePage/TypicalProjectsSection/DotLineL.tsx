import React from "react";
import { MotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion";

interface DotLineLProps {
  dotColor?: string;
  lineColor?: string;
  dotSize?: number;
  lineWidth?: number;
  horizontalLineWidth?: string | number | MotionValue<string>;
  verticalLineHeight?: string | number | MotionValue<string>;
  className?: string;
}

const DotLineL: React.FC<DotLineLProps> = ({
  dotColor = "#F07B22",
  lineColor = "#222E50",
  dotSize = 12,
  lineWidth = 2,
  horizontalLineWidth = "full",
  verticalLineHeight = 100,
  className = "",
}) => {
  const isHorizontalMotionValue =
    horizontalLineWidth &&
    typeof horizontalLineWidth === "object" &&
    "get" in horizontalLineWidth;

  const isVerticalMotionValue =
    verticalLineHeight &&
    typeof verticalLineHeight === "object" &&
    "get" in verticalLineHeight;

  // Calculate left position for vertical line based on horizontal line width
  // When horizontal line is at right-0 with width W, its left edge is at left: calc(100% - W)
  const verticalLineLeft = isHorizontalMotionValue
    ? useTransform(
        horizontalLineWidth as MotionValue<string>,
        (width) => {
          // Convert percentage or pixel value to left position
          if (typeof width === "string" && width.includes("%")) {
            const percent = parseFloat(width);
            return `calc(100% - ${percent}%)`;
          }
          if (typeof width === "string" && width.includes("px")) {
            const pixels = parseFloat(width);
            return `calc(100% - ${pixels}px)`;
          }
          return "0px";
        }
      )
    : undefined;

  const getHorizontalWidthStyle = (): React.CSSProperties => {
    if (horizontalLineWidth === "full") return { width: "100%" };
    if (typeof horizontalLineWidth === "string")
      return { width: horizontalLineWidth };
    return { width: `${horizontalLineWidth}px` };
  };

  const getVerticalHeightStyle = (): React.CSSProperties => {
    if (typeof verticalLineHeight === "string")
      return { height: verticalLineHeight };
    return { height: `${verticalLineHeight}px` };
  };

  return (
    <div className={`relative ${className}`} style={{ minHeight: "120px" }}>
      {/* Horizontal Line - Top, extends from right */}
      {isHorizontalMotionValue ? (
        <motion.div
          className="absolute top-0 right-0"
          style={{
            height: `${lineWidth}px`,
            backgroundColor: lineColor,
            width: horizontalLineWidth as MotionValue<string>,
            zIndex: 1,
          }}
        />
      ) : (
        <div
          className="absolute top-0 right-0"
          style={{
            height: `${lineWidth}px`,
            backgroundColor: lineColor,
            ...getHorizontalWidthStyle(),
            zIndex: 1,
          }}
        />
      )}

      {/* Vertical Line - From top left of horizontal line down */}
      {isVerticalMotionValue ? (
        <motion.div
          className="absolute top-0"
          style={{
            width: `${lineWidth}px`,
            backgroundColor: lineColor,
            height: verticalLineHeight as MotionValue<string>,
            left: verticalLineLeft || "0px",
            zIndex: 1,
          }}
        />
      ) : (
        <div
          className="absolute top-0"
          style={{
            width: `${lineWidth}px`,
            backgroundColor: lineColor,
            ...getVerticalHeightStyle(),
            left:
              horizontalLineWidth === "full" || horizontalLineWidth === "100%"
                ? "0px"
                : typeof horizontalLineWidth === "string" && horizontalLineWidth.includes("%")
                ? `calc(100% - ${horizontalLineWidth})`
                : typeof horizontalLineWidth === "string" && horizontalLineWidth.includes("px")
                ? `calc(100% - ${horizontalLineWidth})`
                : typeof horizontalLineWidth === "number"
                ? `calc(100% - ${horizontalLineWidth}px)`
                : "0px",
            zIndex: 1,
          }}
        />
      )}

      {/* Dot - At the bottom end of vertical line */}
      {isVerticalMotionValue ? (
        <motion.div
          className="absolute rounded-full"
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            backgroundColor: dotColor,
            top: verticalLineHeight as MotionValue<string>,
            left: verticalLineLeft || "0px",
            transform: `translate(${lineWidth / 2 - dotSize / 2}px, -${dotSize / 2}px)`,
            zIndex: 2,
          }}
        />
      ) : (
        <div
          className="absolute rounded-full"
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            backgroundColor: dotColor,
            top:
              typeof verticalLineHeight === "string"
                ? verticalLineHeight
                : `${verticalLineHeight}px`,
            left:
              horizontalLineWidth === "full" || horizontalLineWidth === "100%"
                ? "0px"
                : typeof horizontalLineWidth === "string" && horizontalLineWidth.includes("%")
                ? `calc(100% - ${horizontalLineWidth})`
                : typeof horizontalLineWidth === "string" && horizontalLineWidth.includes("px")
                ? `calc(100% - ${horizontalLineWidth})`
                : typeof horizontalLineWidth === "number"
                ? `calc(100% - ${horizontalLineWidth}px)`
                : "0px",
            transform: `translate(${lineWidth / 2 - dotSize / 2}px, -${dotSize / 2}px)`,
            zIndex: 2,
          }}
        />
      )}
    </div>
  );
};

export default DotLineL;
