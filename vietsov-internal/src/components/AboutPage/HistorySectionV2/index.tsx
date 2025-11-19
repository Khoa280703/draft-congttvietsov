import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import type { DevelopmentHistoryProps } from "./data";
import { getHistorySectionV2ThemeColors } from "./theme";

interface ExtendedHistorySectionV2Props extends DevelopmentHistoryProps {
  isLightMode?: boolean;
}

const HistorySectionV2: React.FC<ExtendedHistorySectionV2Props> = ({
  data,
  className = "",
  isLightMode = true,
}) => {
  const theme = getHistorySectionV2ThemeColors(isLightMode);
  // Start with the latest year (last item in array)
  const [activeYearIndex, setActiveYearIndex] = useState(data.years.length - 1);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);

  const currentYear = data.years[activeYearIndex];
  const currentYearData = currentYear || data.years[data.years.length - 1];
  const currentEvents = currentYearData.events || [];
  const currentEvent = currentEvents[activeEventIndex];

  // Get current event data (handle both string and object)
  const getCurrentEventData = () => {
    if (!currentEvent) return null;
    if (typeof currentEvent === "string") {
      return {
        text: currentEvent,
        date: currentYearData.year.toString(),
        image: currentYearData.image,
        imageAlt: currentYearData.imageAlt,
        link: undefined,
      };
    }
    return currentEvent;
  };

  const activeEventData = getCurrentEventData();

  // Reset event index when year changes
  useEffect(() => {
    setActiveEventIndex(0);
  }, [activeYearIndex]);

  // Update underline position based on active year button
  const updateUnderlinePosition = useCallback(() => {
    if (timelineContainerRef.current && timelineRef.current) {
      const activeButton = timelineContainerRef.current.querySelector(
        `[data-year-index="${activeYearIndex}"]`
      ) as HTMLElement;
      if (activeButton) {
        const container = timelineRef.current;
        const containerRect = container.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        const scrollLeft = container.scrollLeft;

        const left = buttonRect.left - containerRect.left + scrollLeft;
        const width = buttonRect.width;

        setUnderlineStyle({ left, width });
      }
    }
  }, [activeYearIndex]);

  // Scroll timeline to show active year and update underline
  useEffect(() => {
    if (timelineRef.current && timelineContainerRef.current) {
      const activeButton = timelineContainerRef.current.querySelector(
        `[data-year-index="${activeYearIndex}"]`
      ) as HTMLElement;
      if (activeButton) {
        const container = timelineRef.current;
        const buttonRect = activeButton.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const scrollLeft =
          activeButton.offsetLeft -
          containerRect.width / 2 +
          buttonRect.width / 2;

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });

        // Update underline after scroll
        setTimeout(updateUnderlinePosition, 300);
      }
    }
  }, [activeYearIndex, updateUnderlinePosition]);

  // Update underline on scroll
  useEffect(() => {
    const container = timelineRef.current;
    if (container) {
      const handleScroll = () => {
        updateUnderlinePosition();
      };
      container.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", updateUnderlinePosition);
      updateUnderlinePosition(); // Initial update

      return () => {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", updateUnderlinePosition);
      };
    }
  }, [activeYearIndex, updateUnderlinePosition]);

  const handleYearClick = (index: number) => {
    setActiveYearIndex(index);
  };

  const handleTimelineScroll = (direction: "left" | "right") => {
    // Change year instead of just scrolling
    // Note: Timeline is reversed (newest year on left), so:
    // - Left arrow = newer year = higher index
    // - Right arrow = older year = lower index
    if (direction === "left") {
      // Move to newer year (higher index)
      if (activeYearIndex < data.years.length - 1) {
        setActiveYearIndex(activeYearIndex + 1);
      }
    } else {
      // Move to older year (lower index)
      if (activeYearIndex > 0) {
        setActiveYearIndex(activeYearIndex - 1);
      }
    }
  };

  return (
    <section
      className={`${theme.sectionBackground} transition-colors duration-700 py-12 md:py-16 lg:py-20 laptop:py-24 fhd:py-28 qhd:py-32 ${className}`}
    >
      <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
        {/* Title */}
        <motion.div
          className="text-center mb-6 md:mb-8 lg:mb-12 laptop:mb-14 fhd:mb-24 qhd:mb-18"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl laptop:text-4xl fhd:text-5xl qhd:text-6xl font-bold uppercase leading-tight transition-colors duration-700">
              <span className={`${theme.titlePrefix} mr-4`}>CÁC CỘT MỐC</span>
              <span className={theme.titleSuffix}>QUAN TRỌNG</span>
            </h2>
          </div>
        </motion.div>

        {/* Timeline Navigation */}
        <div className="mb-8 md:mb-10 lg:mb-12 relative">
          <div className="flex items-center gap-2">
            {/* Left Arrow */}
            <button
              onClick={() => handleTimelineScroll("left")}
              className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <HiChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Timeline Container */}
            <div
              ref={timelineRef}
              className="flex-1 overflow-x-auto scrollbar-hide relative"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div
                ref={timelineContainerRef}
                className="flex items-center justify-center gap-10 md:gap-12 lg:gap-16 laptop:gap-20 fhd:gap-24 qhd:gap-28 pb-4 min-w-max"
              >
                {[...data.years].reverse().map((year, reversedIndex) => {
                  const originalIndex = data.years.length - 1 - reversedIndex;
                  return (
                    <button
                      key={year.year}
                      data-year-index={originalIndex}
                      onClick={() => handleYearClick(originalIndex)}
                      className={`
                        flex-shrink-0 text-base md:text-lg lg:text-xl font-semibold transition-all duration-300 cursor-pointer
                        ${
                          originalIndex === activeYearIndex
                            ? `${theme.yearActive} scale-110`
                            : `${theme.yearInactive} hover:text-gray-600`
                        }
                      `}
                    >
                      {year.year}
                    </button>
                  );
                })}
              </div>
              {/* Timeline Line */}
              <div className="relative h-0.5 bg-gray-300 -mt-4">
                <motion.div
                  className={`absolute h-1 ${theme.underline}`}
                  initial={false}
                  animate={{
                    left: `${underlineStyle.left}px`,
                    width: `${underlineStyle.width}px`,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => handleTimelineScroll("right")}
              className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <HiChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Main Content: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          {activeEventData && (
            <div className="relative w-full h-64 md:h-80 lg:h-[400px] laptop:h-[500px] fhd:h-[600px] qhd:h-[700px] rounded-lg overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeEventData.image}
                  src={activeEventData.image}
                  alt={activeEventData.imageAlt}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.1, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>
            </div>
          )}

          {/* Right: Date Title and Events */}
          <div className="flex flex-col h-64 md:h-80 lg:h-[400px] laptop:h-[500px] fhd:h-[600px] qhd:h-[700px]">
            {/* Fixed Date Title */}
            {activeEventData && (
              <div className="flex-shrink-0 mb-5 md:mb-6">
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={activeEventData.date}
                    className="text-2xl md:text-3xl lg:text-4xl laptop:text-5xl fhd:text-6xl qhd:text-7xl font-bold text-vietsov-green"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {activeEventData.date}
                  </motion.h3>
                </AnimatePresence>
              </div>
            )}

            {/* Scrollable Events List */}
            <div
              className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar min-h-0"
              onWheel={(e) => {
                // Prevent scroll propagation to parent page
                e.stopPropagation();
              }}
              onTouchMove={(e) => {
                // Prevent touch scroll propagation
                e.stopPropagation();
              }}
            >
              <ul className="space-y-3 md:space-y-4 lg:space-y-5 pr-2 break-words">
                {currentYearData.events.map((event, index) => {
                  // Handle both string and object format
                  const eventText =
                    typeof event === "string" ? event : event.text;

                  const handleClick = () => {
                    setActiveEventIndex(index);
                  };

                  return (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 md:gap-4 cursor-pointer group transition-all duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      onClick={handleClick}
                    >
                      <span
                        className={`
                          flex-shrink-0 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full mt-2 md:mt-2.5
                          transition-all duration-300
                          ${
                            index === activeEventIndex
                              ? "bg-vietsov-green w-3 h-3 md:w-3.5 md:h-3.5"
                              : "bg-vietsov-green/50 group-hover:bg-vietsov-green group-hover:w-3 group-hover:h-3 md:group-hover:w-3.5 md:group-hover:h-3.5"
                          }
                        `}
                      ></span>
                      <span
                        className={`
                          text-xs md:text-sm lg:text-base leading-relaxed
                          transition-all duration-300 relative inline-block w-full break-words
                          ${
                            index === activeEventIndex
                              ? `${theme.eventTextActive} font-semibold`
                              : `${theme.eventText} group-hover:${theme.eventTextActive}`
                          }
                        `}
                      >
                        <span className="relative inline-block pb-2">
                          {eventText}
                          <span
                            className={`
                              absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300
                              ${
                                index === activeEventIndex
                                  ? "w-full"
                                  : "w-0 group-hover:w-full"
                              }
                            `}
                          ></span>
                        </span>
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* Fixed View Details Button */}
            {activeEventData && activeEventData.link && (
              <div className="flex-shrink-0 mt-5 md:mt-6 mb-4 qhd:mb-8">
                <button
                  onClick={() => {
                    if (activeEventData.link) {
                      window.location.href = activeEventData.link;
                    }
                  }}
                  className={`inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 ${theme.button} font-semibold text-xs md:text-sm rounded-lg ${theme.buttonHover} transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5`}
                >
                  <span>Xem chi tiết</span>
                  <svg
                    className="w-5 h-5 ml-2"
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
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default HistorySectionV2;
