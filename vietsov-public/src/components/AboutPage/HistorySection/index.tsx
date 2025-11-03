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

      <div className="relative px-4 md:px-12 lg:px-75 z-10">
        <motion.h2
          className="text-white text-4xl md:text-4xl lg:text-5xl leading-none tracking-[-0.4px] font-bold mb-8 md:mb-16"
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
              {/* Main white card - responsive layout */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-12 relative z-10 h-[22rem] md:h-[26rem] lg:h-[30rem] xl:h-[34rem]">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 h-full">
                  {/* Content Section */}
                  <div className="w-full lg:w-5/8 flex flex-col justify-between lg:pr-0">
                    <div className="space-y-4 md:space-y-6">
                      <motion.h3
                        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,_#3b82f6_0%,_#22c55e_50%)]"
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
                        <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                          {currentEvent.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Navigation buttons - hidden on mobile, shown on desktop */}
                    <motion.div
                      className="hidden lg:flex space-x-4 pt-4"
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
                        className="p-2 text-gray-600 rounded-full hover:bg-gray-100 hover:text-green-600 transition-colors duration-200"
                        aria-label="Previous"
                      >
                        <HiArrowLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => navigateEvent("right")}
                        className="p-2 text-gray-600 rounded-full hover:bg-gray-100 hover:text-green-600 transition-colors duration-200"
                        aria-label="Next"
                      >
                        <HiArrowRight className="w-5 h-5" />
                      </button>
                    </motion.div>
                  </div>

                  {/* Image Section */}
                  <motion.div
                    className="w-full lg:w-3/8 flex-shrink-0 mt-6 lg:mt-0"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  >
                    {/* Mobile & Tablet: Image inside card at bottom */}
                    <div className="block lg:hidden w-full h-64 md:h-80 rounded-2xl overflow-hidden">
                      <img
                        src={currentEvent.imageUrl}
                        alt={currentEvent.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Desktop: Image with absolute positioning overflow */}
                    <div className="hidden lg:block relative">
                      <div className="absolute -top-34 -right-4 w-[100%] h-[38rem]">
                        <img
                          src={currentEvent.imageUrl}
                          alt={currentEvent.imageAlt}
                          className="w-full h-full object-cover shadow-2xl"
                          style={{
                            borderRadius: "64px 16px 64px 16px",
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Navigation buttons - shown on mobile, hidden on desktop */}
                <motion.div
                  className="flex lg:hidden justify-center space-x-4 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  <button
                    onClick={() => navigateEvent("left")}
                    className="p-3 text-gray-600 rounded-full bg-gray-100 hover:bg-gray-200 hover:text-green-600 transition-colors duration-200"
                    aria-label="Previous"
                  >
                    <HiArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => navigateEvent("right")}
                    className="p-3 text-gray-600 rounded-full bg-gray-100 hover:bg-gray-200 hover:text-green-600 transition-colors duration-200"
                    aria-label="Next"
                  >
                    <HiArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
export default HistorySection;
