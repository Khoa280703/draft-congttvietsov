import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { type TimelineEventItem } from "../data";

interface EventSelectorProps {
  events: TimelineEventItem[];
  activeEventIndex: number;
  onEventSelect: (index: number) => void;
  onNavigate: (direction: "left" | "right") => void;
}

const EventSelector: React.FC<EventSelectorProps> = ({
  events,
  activeEventIndex,
  onEventSelect,
  onNavigate,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Auto scroll active button vào view
  useEffect(() => {
    if (events.length <= 1) return; // Không cần scroll nếu chỉ có 1 event
    if (buttonsRef.current[activeEventIndex] && scrollContainerRef.current) {
      const activeButton = buttonsRef.current[activeEventIndex];
      const container = scrollContainerRef.current;

      if (activeButton) {
        // Tính toán vị trí scroll để đưa button vào view
        const scrollLeft = container.scrollLeft;
        const buttonLeft = activeButton.offsetLeft;
        const buttonWidth = activeButton.offsetWidth;
        const containerWidth = container.clientWidth;

        // Nếu button nằm ngoài view bên trái
        if (buttonLeft < scrollLeft) {
          container.scrollTo({
            left: buttonLeft - 16, // 16px padding
            behavior: "smooth",
          });
        }
        // Nếu button nằm ngoài view bên phải
        else if (buttonLeft + buttonWidth > scrollLeft + containerWidth) {
          container.scrollTo({
            left: buttonLeft + buttonWidth - containerWidth + 16, // 16px padding
            behavior: "smooth",
          });
        }
      }
    }
  }, [activeEventIndex, events.length]);

  if (events.length <= 1) return null; // Không hiển thị nếu chỉ có 1 event

  return (
    <div className="mb-6 md:mb-8">
      {/* Navigation Arrows */}
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => onNavigate("left")}
          className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer text-white backdrop-blur-sm"
          aria-label="Previous event"
        >
          <HiArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
        </button>
        <button
          onClick={() => onNavigate("right")}
          className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer text-white backdrop-blur-sm"
          aria-label="Next event"
        >
          <HiArrowRight className="w-3 h-3 md:w-4 md:h-4" />
        </button>
      </div>

      {/* Event Dots/Buttons - Scroll ngang */}
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-2 md:gap-3 overflow-x-auto scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {events.map((event, index) => {
          const isActive = index === activeEventIndex;
          return (
            <motion.button
              key={event.id}
              ref={(el) => {
                buttonsRef.current[index] = el;
              }}
              onClick={() => onEventSelect(index)}
              className={`flex-shrink-0 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-white text-black"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {event.title}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default EventSelector;

