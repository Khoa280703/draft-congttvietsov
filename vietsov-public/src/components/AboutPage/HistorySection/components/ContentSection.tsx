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
      <div className="w-full max-w-xl mt-32">
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
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white"
          >
            {content.title}
          </motion.h2>
        </AnimatePresence>

        {/* Description - text morphing */}
        <div className="text-xs md:text-sm lg:text-base mb-6 md:mb-8 leading-relaxed text-white/90">
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
            className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-white/90 transition-colors cursor-pointer"
          >
            {content.buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentSection;
