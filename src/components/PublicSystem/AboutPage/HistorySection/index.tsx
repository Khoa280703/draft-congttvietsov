import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { type HistorySectionProps, defaultHistoryEvents } from "./data";

const HistorySection: React.FC<HistorySectionProps> = ({
  events = defaultHistoryEvents,
  className = "",
}) => {
  const sortedEvents = [...events].sort((a, b) => a.year - b.year);
  const [activeIndex, setActiveIndex] = useState(
    sortedEvents.findIndex((event) => event.year === 2009) !== -1
      ? sortedEvents.findIndex((event) => event.year === 2009)
      : 0
  );
  const timelineRef = useRef<HTMLDivElement>(null);

  const currentEvent = sortedEvents[activeIndex];

  const navigateEvent = (direction: "left" | "right") => {
    if (direction === "left") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : sortedEvents.length - 1));
    } else {
      setActiveIndex((prev) => (prev < sortedEvents.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <motion.section
      className={`relative py-16 md:py-24 overflow-hidden ${className}`}
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

      <div className="relative container mx-auto px-4 md:px-12 z-10">
        <motion.h2
          className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16"
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
          {/* Left arrow - no background */}
          <button
            onClick={() => navigateEvent("left")}
            className="pr-4 text-white hover:text-green-300 transition-colors duration-200"
            aria-label="Previous event"
          >
            <HiArrowLeft className="w-6 h-6" />
          </button>

          <div
            ref={timelineRef}
            className="flex overflow-x-auto scrollbar-hide space-x-8 py-2"
          >
            {sortedEvents.map((event, index) => (
              <button
                key={event.year}
                onClick={() => setActiveIndex(index)}
                className={`
                  flex-shrink-0 px-4 py-2 rounded-full text-lg font-bold transition-all duration-300
                  ${
                    activeIndex === index
                      ? "bg-white text-green-800 scale-130"
                      : "bg-white/40 text-white hover:bg-white/60"
                  }
                `}
              >
                {event.year}
              </button>
            ))}
          </div>

          {/* Right arrow - no background */}
          <button
            onClick={() => navigateEvent("right")}
            className="pl-4 text-white hover:text-green-300 transition-colors duration-200"
            aria-label="Next event"
          >
            <HiArrowRight className="w-6 h-6" />
          </button>
        </motion.div>
        <AnimatePresence mode="wait">
          {currentEvent && (
            <motion.div
              key={currentEvent.year}
              className="relative x-auto"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -30 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Main white card - positioned to allow image overflow */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative z-10 h-96 lg:h-[32rem]">
                <div className="flex flex-col lg:flex-row gap-">
                  <div className="w-full lg:w-5/8 space-y-6">
                    <motion.h3
                      className={`
                        text-4xl mb-8 pt-12 md:text-5xl font-bold 
                        bg-clip-text text-transparent 
                        bg-[linear-gradient(to_right,_#3b82f6_0%,_#22c55e_50%)]
                    `}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: "easeOut",
                      }}
                    >
                      {currentEvent.date}
                    </motion.h3>

                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.3,
                        ease: "easeOut",
                      }}
                    >
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
                        {currentEvent.description}
                      </p>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex space-x-4" // <-- POSITIONING CLASSES
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      <button
                        onClick={() => navigateEvent("left")}
                        className="p-2 text-gray-600 rounded-full hover:bg-gray-100 hover:text-green-600 transition-colors duration-200" // Added rounded-full, hover:bg-gray-100
                        aria-label="Previous"
                      >
                        <HiArrowLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => navigateEvent("right")}
                        className="p-2 text-gray-600 rounded-full hover:bg-gray-100 hover:text-green-600 transition-colors duration-200" // Added rounded-full, hover:bg-gray-100
                        aria-label="Next"
                      >
                        <HiArrowRight className="w-5 h-5" />
                      </button>
                    </motion.div>
                  </div>

                  <motion.div
                    className="w-full lg:w-4/9 flex-shrink-0 relative"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  >
                    <div className="absolute -top-50 -right-4 w-130 h-96 lg:h-[40rem]">
                      <img
                        src={currentEvent.imageUrl}
                        alt={currentEvent.imageAlt}
                        className="w-full h-full object-cover shadow-2xl"
                        style={{
                          transform: "scaleX(1)",
                          borderRadius: "64px 16px 64px 16px",
                        }}
                      />
                      {/* Decorative overlay */}
                      <div className="absolute inset-0 rounded-xl"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
export default HistorySection;
