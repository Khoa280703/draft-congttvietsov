import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { type HistorySectionProps, defaultHistoryEvents } from "./data";

const HistorySection: React.FC<HistorySectionProps> = ({
  years = defaultHistoryEvents,
  className = "",
}) => {
  const sortedYears = [...years].sort((a, b) => a.year - b.year);

  const [activeYearIndex, setActiveYearIndex] = useState(
    sortedYears.findIndex((year) => year.year === 2009) !== -1
      ? sortedYears.findIndex((year) => year.year === 2009)
      : 0
  );
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  const currentYear = sortedYears[activeYearIndex];
  const currentEvents = currentYear?.events || [];
  const selectedEvent = currentEvents[selectedEventIndex];

  const handleYearClick = (yearIndex: number) => {
    setActiveYearIndex(yearIndex);
    setSelectedEventIndex(0); // Reset to first event of selected year
  };

  const navigateYear = (direction: "left" | "right") => {
    if (direction === "left") {
      const prevYearIndex =
        activeYearIndex > 0 ? activeYearIndex - 1 : sortedYears.length - 1;
      setActiveYearIndex(prevYearIndex);
      setSelectedEventIndex(0);
    } else {
      const nextYearIndex =
        activeYearIndex < sortedYears.length - 1 ? activeYearIndex + 1 : 0;
      setActiveYearIndex(nextYearIndex);
      setSelectedEventIndex(0);
    }
  };

  return (
    <motion.section
      className={`relative py-16 md:py-32 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-green-800 to-teal-700">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-64 h-48 bg-white/20 rounded-lg blur-sm"></div>
          <div className="absolute top-32 right-20 w-48 h-36 bg-white/20 rounded-lg blur-sm"></div>
          <div className="absolute bottom-20 left-1/4 w-56 h-40 bg-white/20 rounded-lg blur-sm"></div>
          <div className="absolute bottom-32 right-1/3 w-40 h-32 bg-white/20 rounded-lg blur-sm"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="flex flex-col items-center">
          <motion.h2
            className="text-white text-4xl md:text-4xl lg:text-4xl inch32:text-5xl leading-none tracking-[-0.4px] font-bold mb-8 md:mb-12 lg:mb-10 inch32:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Lịch sử hình thành
          </motion.h2>
          <motion.div
            className="flex items-center justify-start mb-4 md:mb-6 space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {/* Left arrow */}
            <button
              onClick={() => navigateYear("left")}
              className="pr-4 text-white hover:text-green-300 transition-colors duration-200 cursor-pointer"
              aria-label="Previous year"
            >
              <HiArrowLeft className="w-6 h-6" />
            </button>

            <div
              ref={timelineRef}
              className="flex overflow-x-auto scrollbar-hide space-x-8 py-2 px-4"
            >
              {sortedYears.map((yearData, index) => (
                <button
                  key={yearData.year}
                  onClick={() => handleYearClick(index)}
                  className={`
                  flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer
                  ${
                    activeYearIndex === index
                      ? "bg-white text-green-800 scale-130"
                      : "bg-white/40 text-white hover:bg-white/60"
                  }
                `}
                >
                  {yearData.year}
                </button>
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => navigateYear("right")}
              className="pl-4 text-white hover:text-green-300 transition-colors duration-200 cursor-pointer"
              aria-label="Next year"
            >
              <HiArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>

        {/* Main layout: Scrollable events list on left, Image on right */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row h-[30rem] md:h-[35rem] lg:h-[28rem] inch32:h-[38rem]">
            {/* Left: Scrollable events list for selected year */}
            <div className="w-full lg:w-2/5 border-r border-gray-200 overflow-y-auto">
              <div className="p-4 space-y-2">
                {currentEvents.map((event, index) => (
                  <motion.button
                    key={`${currentYear.year}-${index}`}
                    onClick={() => setSelectedEventIndex(index)}
                    className={`
                      w-full text-left p-4 rounded-lg transition-all duration-200 cursor-pointer
                      ${
                        selectedEventIndex === index
                          ? "bg-vietsov-green text-white shadow-md"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-800"
                      }
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div
                          className={`font-semibold text-sm mb-1 ${
                            selectedEventIndex === index
                              ? "text-white"
                              : "bg-clip-text text-transparent bg-[linear-gradient(to_right,_#3b82f6_0%,_#22c55e_50%)]"
                          }`}
                        >
                          {event.date}
                        </div>
                        <p
                          className={`text-xs line-clamp-2 ${
                            selectedEventIndex === index
                              ? "text-white/90"
                              : "text-gray-600"
                          }`}
                        >
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right: Selected event image */}
            <div className="w-full lg:w-3/5 flex items-center justify-center p-6 lg:p-8 inch32:p-12">
              <AnimatePresence mode="wait">
                {selectedEvent && (
                  <motion.div
                    key={`${currentYear.year}-${selectedEventIndex}`}
                    className="w-full h-full"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="w-full h-full rounded-2xl overflow-hidden p-2 border-2 border-vietsov-green">
                      <img
                        src={selectedEvent.imageUrl}
                        alt={selectedEvent.imageAlt}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default HistorySection;
