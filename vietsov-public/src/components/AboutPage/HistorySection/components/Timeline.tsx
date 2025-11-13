import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { type YearEvents } from "../data";

interface TimelineProps {
  years: YearEvents[];
  activeYearIndex: number;
  onYearClick: (index: number) => void;
}

const Timeline: React.FC<TimelineProps> = ({
  years,
  activeYearIndex,
  onYearClick,
}) => {
  const totalItems = years.length;
  const [maxHeight, setMaxHeight] = useState(600);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mobileScrollContainerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const mobileItemsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    // Giới hạn chiều cao timeline (max 80vh hoặc 600px)
    const updateMaxHeight = () => {
      setMaxHeight(Math.min(600, window.innerHeight * 0.8));
    };

    updateMaxHeight();
    window.addEventListener("resize", updateMaxHeight);

    return () => {
      window.removeEventListener("resize", updateMaxHeight);
    };
  }, []);

  // Auto scroll active item vào view - Desktop (vertical)
  useEffect(() => {
    if (itemsRef.current[activeYearIndex] && scrollContainerRef.current) {
      const activeButton = itemsRef.current[activeYearIndex];
      const container = scrollContainerRef.current;

      if (activeButton && window.innerWidth >= 768) {
        // Chỉ scroll dọc trên desktop
        const buttonRect = activeButton.getBoundingClientRect();
        const buttonTop = activeButton.offsetTop;
        const containerHeight = container.clientHeight;
        const buttonHeight = buttonRect.height;

        const targetScrollTop =
          buttonTop - containerHeight / 2 + buttonHeight / 2;

        container.scrollTo({
          top: targetScrollTop,
          behavior: "smooth",
        });
      }
    }
  }, [activeYearIndex]);

  // Auto scroll active item vào view - Mobile (horizontal)
  useEffect(() => {
    if (mobileItemsRef.current[activeYearIndex] && mobileScrollContainerRef.current) {
      const activeButton = mobileItemsRef.current[activeYearIndex];
      const container = mobileScrollContainerRef.current;

      if (activeButton && window.innerWidth < 768) {
        // Scroll ngang trên mobile
        const buttonRect = activeButton.getBoundingClientRect();
        const buttonLeft = activeButton.offsetLeft;
        const buttonWidth = buttonRect.width;
        const containerWidth = container.clientWidth;

        const targetScrollLeft =
          buttonLeft - containerWidth / 2 + buttonWidth / 2;

        container.scrollTo({
          left: targetScrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [activeYearIndex]);

  // Tính chiều cao thực tế dựa trên số items (tối thiểu 80px mỗi item)
  const minItemSpacing = 80; // Khoảng cách tối thiểu giữa các items (px)
  const contentHeight = totalItems * minItemSpacing;

  // Spacing giữa các items (pixels)
  const itemSpacing = contentHeight / (totalItems - 1 || 1);

  // Vị trí của node đầu và node cuối
  const firstNodeTop = 0;
  const lastNodeTop = (totalItems - 1) * itemSpacing;

  // Tính toán cho mobile horizontal layout
  const minItemSpacingMobile = 60; // Khoảng cách tối thiểu giữa các items trên mobile (px)
  const contentWidth = totalItems * minItemSpacingMobile;
  const itemSpacingMobile = contentWidth / (totalItems - 1 || 1);
  const firstNodeLeft = 0;
  const lastNodeLeft = (totalItems - 1) * itemSpacingMobile;

  return (
    <>
      {/* Desktop Layout - Vertical Timeline */}
      <div className="hidden md:col-span-1 md:flex md:flex-col md:items-center md:justify-center md:h-full">
        <div
          ref={scrollContainerRef}
          className="relative w-full overflow-y-auto scrollbar-hide"
          style={{
            maxHeight: `${maxHeight}px`,
            height: `${maxHeight}px`,
          }}
        >
          <div
            className="relative flex flex-col items-center w-full"
            style={{
              minHeight: `${contentHeight}px`,
            }}
          >
            {/* Timeline line - đi từ node đầu đến node cuối */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-white"
              style={{
                top: `${firstNodeTop}px`,
                height: `${lastNodeTop - firstNodeTop}px`,
              }}
            />

            {years.map((yearData, index) => {
              const isActive = activeYearIndex === index;
              const topPosition = index * itemSpacing;

              return (
                <motion.button
                  key={yearData.year}
                  ref={(el) => {
                    itemsRef.current[index] = el;
                  }}
                  onClick={() => onYearClick(index)}
                  className="absolute left-1/2 transform -translate-x-1/2 z-10 transition-all duration-300 cursor-pointer group"
                  style={{
                    top: `${topPosition}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: isActive ? 1 : 0.4,
                    scale: isActive ? 1 : 0.7,
                  }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`rounded-full bg-white transition-all duration-300 ${
                        isActive
                          ? "w-5 h-5 md:w-6 md:h-6 laptop:w-6 laptop:h-6 fhd:w-8 fhd:h-8 qhd:w-12 qhd:h-12 shadow-lg shadow-white/50"
                          : "w-2.5 h-2.5 md:w-3 md:h-3 laptop:w-3 laptop:h-3 fhd:w-5 fhd:h-5 qhd:w-7 qhd:h-7"
                      }`}
                    />
                    {/* Year Label */}
                    <motion.span
                      className={`text-white text-xs md:text-sm laptop:text-[0.75rem] fhd:text-lg qhd:text-xl font-semibold mt-1.5 md:mt-2 laptop:mt-[0.375rem] fhd:mt-3 qhd:mt-5 whitespace-nowrap ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {yearData.year}
                    </motion.span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Layout - Horizontal Timeline */}
      <div className="block md:hidden w-full mb-0">
        <div
          ref={mobileScrollContainerRef}
          className="relative w-full overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div
            className="relative flex items-center w-full"
            style={{
              minWidth: `${contentWidth}px`,
              height: "80px",
            }}
          >
            {/* Timeline line - nằm ngang */}
            <div
              className="absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-white"
              style={{
                left: `${firstNodeLeft}px`,
                width: `${lastNodeLeft - firstNodeLeft}px`,
              }}
            />

            {years.map((yearData, index) => {
              const isActive = activeYearIndex === index;
              const leftPosition = index * itemSpacingMobile;

              return (
                <motion.button
                  key={`mobile-${yearData.year}`}
                  ref={(el) => {
                    mobileItemsRef.current[index] = el;
                  }}
                  onClick={() => onYearClick(index)}
                  className="absolute top-1/2 transform -translate-y-1/2 z-10 transition-all duration-300 cursor-pointer group"
                  style={{
                    left: `${leftPosition}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: isActive ? 1 : 0.4,
                    scale: isActive ? 1 : 0.7,
                  }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`rounded-full bg-white transition-all duration-300 ${
                        isActive
                          ? "w-5 h-5 shadow-lg shadow-white/50"
                          : "w-2.5 h-2.5"
                      }`}
                    />
                    {/* Year Label - hiển thị bên dưới */}
                    <motion.span
                      className={`text-white text-xs font-semibold mt-2 whitespace-nowrap ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {yearData.year}
                    </motion.span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
