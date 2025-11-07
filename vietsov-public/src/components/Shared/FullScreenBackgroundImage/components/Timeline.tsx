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
  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    // Giới hạn chiều cao timeline (max 80vh hoặc 600px)
    const updateMaxHeight = () => {
      setMaxHeight(Math.min(600, window.innerHeight * 0.8));
    };

    updateMaxHeight();
    window.addEventListener("resize", updateMaxHeight);

    return () => window.removeEventListener("resize", updateMaxHeight);
  }, []);

  // Auto scroll active item vào view
  useEffect(() => {
    if (itemsRef.current[activeYearIndex] && scrollContainerRef.current) {
      const activeButton = itemsRef.current[activeYearIndex];
      const container = scrollContainerRef.current;

      if (activeButton) {
        const buttonRect = activeButton.getBoundingClientRect();

        // Tính toán vị trí scroll để đưa button vào giữa container
        const buttonTop = activeButton.offsetTop;
        const containerHeight = container.clientHeight;
        const buttonHeight = buttonRect.height;

        // Vị trí mong muốn: button ở giữa container
        const targetScrollTop =
          buttonTop - containerHeight / 2 + buttonHeight / 2;

        // Scroll với animation mượt
        container.scrollTo({
          top: targetScrollTop,
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

  return (
    <div className="col-span-1 flex flex-col items-center justify-center h-full">
      {/* Container với scroll */}
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
            // Vị trí tính từ top của container
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
                        ? "w-6 h-6 md:w-8 md:h-8 shadow-lg shadow-white/50"
                        : "w-3 h-3 md:w-4 md:h-4"
                    }`}
                  />
                  {/* Year Label */}
                  <motion.span
                    className={`text-white text-xs md:text-sm font-semibold mt-2 whitespace-nowrap ${
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
  );
};

export default Timeline;
