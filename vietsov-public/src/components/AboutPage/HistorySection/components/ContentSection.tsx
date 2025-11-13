import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextMorphing from "../TextMorphing";
import { type TimelineEventItem } from "../data";
import EventSelector from "./EventSelector";

interface ContentSectionProps {
  content: TimelineEventItem;
  events: TimelineEventItem[];
  activeEventIndex: number;
  activeIndex: number; // Combined index for animation key
  onEventSelect: (index: number) => void;
  onEventNavigate: (direction: "left" | "right") => void;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  content,
  events,
  activeEventIndex,
  activeIndex,
  onEventSelect,
  onEventNavigate,
}) => {
  return (
    <div className="col-span-12 md:col-span-11 lg:col-span-11 text-white flex items-center">
      <div className="w-full max-w-lg md:max-w-xl laptop:max-w-[32rem] fhd:max-w-3xl qhd:max-w-5xl mt-4 md:mt-24 lg:mt-28 laptop:mt-20 fhd:mt-36 qhd:mt-44">
        {/* Event Selector - phía trên title */}
        <EventSelector
          events={events}
          activeEventIndex={activeEventIndex}
          onEventSelect={onEventSelect}
          onNavigate={onEventNavigate}
        />

        {/* Title - chỉ có fade in/out */}
        <AnimatePresence mode="wait">
          <motion.h2
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-base md:text-lg lg:text-lg laptop:text-lg fhd:text-xl qhd:text-2xl font-bold mb-2 md:mb-4 laptop:mb-3 fhd:mb-6 qhd:mb-8 text-white"
          >
            {content.title}
          </motion.h2>
        </AnimatePresence>

        {/* Description - text morphing */}
        <div className="text-base md:text-lg lg:text-lg laptop:text-lg fhd:text-xl qhd:text-2xl mb-3 md:mb-6 laptop:mb-4 fhd:mb-8 qhd:mb-10 leading-relaxed text-white/90">
          <TextMorphing morphKey={activeIndex} text={content.description} />
        </div>

        {/* Button - không có hiệu ứng */}
        {content.buttonText && (
          <button
            onClick={() => {
              if (content.buttonLink) {
                window.location.href = content.buttonLink;
              }
            }}
            className="px-5 md:px-6 laptop:px-4 laptop:py-2 fhd:px-10 qhd:px-14 py-2.5 md:py-3 fhd:py-4 qhd:py-6 bg-white text-black font-semibold text-sm md:text-base lg:text-base laptop:text-base fhd:text-lg qhd:text-xl hover:bg-white/90 transition-colors cursor-pointer"
          >
            {content.buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentSection;
