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
    <div className="mb-2 md:mb-6 laptop:mb-4 fhd:mb-8 qhd:mb-10">
      {/* Navigation Arrows */}
      <div className="flex items-center gap-2 md:gap-3 laptop:gap-2 fhd:gap-5 qhd:gap-7 mb-1 md:mb-3 laptop:mb-2 fhd:mb-5 qhd:mb-7">
        <button
          onClick={() => onNavigate("left")}
          className="w-7 h-7 md:w-8 md:h-8 laptop:w-[1.75rem] laptop:h-[1.75rem] fhd:w-10 fhd:h-10 qhd:w-16 qhd:h-16 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer text-white backdrop-blur-sm"
          aria-label="Previous event"
        >
          <HiArrowLeft className="w-2.5 h-2.5 md:w-3 md:h-3 laptop:w-3 laptop:h-3 fhd:w-4 fhd:h-4 qhd:w-7 qhd:h-7" />
        </button>
        <button
          onClick={() => onNavigate("right")}
          className="w-7 h-7 md:w-8 md:h-8 laptop:w-[1.75rem] laptop:h-[1.75rem] fhd:w-10 fhd:h-10 qhd:w-16 qhd:h-16 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer text-white backdrop-blur-sm"
          aria-label="Next event"
        >
          <HiArrowRight className="w-2.5 h-2.5 md:w-3 md:h-3 laptop:w-3 laptop:h-3 fhd:w-4 fhd:h-4 qhd:w-7 qhd:h-7" />
        </button>
      </div>

      {/* Event Dots/Buttons - Scroll ngang */}
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-1.5 md:gap-2 laptop:gap-[0.375rem] fhd:gap-4 qhd:gap-6 overflow-x-auto scrollbar-hide"
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
              className={`flex-shrink-0 px-2.5 py-1 md:px-3 md:py-1.5 laptop:px-3 laptop:py-1.5 fhd:px-5 fhd:py-2.5 qhd:px-7 qhd:py-3.5 rounded-full text-[10px] md:text-xs laptop:text-[0.625rem] fhd:text-base qhd:text-xl font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
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

