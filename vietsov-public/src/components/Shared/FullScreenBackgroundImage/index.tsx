import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  type FullScreenBackgroundImageProps,
  defaultFullScreenBackgroundImageData,
} from "./data";
import { useBackgroundScrollAnimation } from "./hooks/useBackgroundScrollAnimation";
import Timeline from "./components/Timeline";
import ContentSection from "./components/ContentSection";
import ImageGrid from "./components/ImageGrid";

const FullScreenBackgroundImage: React.FC<FullScreenBackgroundImageProps> = ({
  image,
  alt = "Background image",
  className = "",
  containerClassName = "",
  animationDuration = 1.2,
  expandThreshold = 0.3,
  data = defaultFullScreenBackgroundImageData,
}) => {
  const [activeYearIndex, setActiveYearIndex] = useState(0);
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  const { containerRef, opacity, scale, blur, y } =
    useBackgroundScrollAnimation({ expandThreshold });

  // Lấy năm hiện tại và events của năm đó
  const currentYear = data?.years[activeYearIndex];
  const currentEvents = currentYear?.events || [];
  const currentEvent = currentEvents[activeEventIndex];

  // Tính combined index cho animation key (unique cho mỗi event)
  const getCombinedIndex = () => {
    if (!data?.years) return 0;
    let index = 0;
    for (let i = 0; i < activeYearIndex; i++) {
      index += data.years[i]?.events.length || 0;
    }
    return index + activeEventIndex;
  };
  const combinedIndex = getCombinedIndex();

  // Navigation functions cho events trong năm
  const navigateEvents = (direction: "left" | "right") => {
    if (!currentEvents.length) return;
    const total = currentEvents.length;

    if (direction === "left") {
      setActiveEventIndex(
        activeEventIndex > 0 ? activeEventIndex - 1 : total - 1
      );
    } else {
      setActiveEventIndex(
        activeEventIndex < total - 1 ? activeEventIndex + 1 : 0
      );
    }
  };

  // Navigation functions cho images - CHỈ chuyển năm, không chuyển event
  const navigateImages = (direction: "left" | "right") => {
    if (!data?.years) return;
    const totalYears = data.years.length;

    if (direction === "left") {
      // Chuyển sang năm trước, giữ nguyên event index (hoặc event cuối nếu năm trước có ít events hơn)
      const prevYearIndex =
        activeYearIndex > 0 ? activeYearIndex - 1 : totalYears - 1;
      setActiveYearIndex(prevYearIndex);
      const prevYearEvents = data.years[prevYearIndex]?.events || [];
      setActiveEventIndex(
        Math.min(activeEventIndex, prevYearEvents.length - 1)
      );
    } else {
      // Chuyển sang năm sau, giữ nguyên event index (hoặc 0 nếu năm sau có ít events hơn)
      const nextYearIndex =
        activeYearIndex < totalYears - 1 ? activeYearIndex + 1 : 0;
      setActiveYearIndex(nextYearIndex);
      const nextYearEvents = data.years[nextYearIndex]?.events || [];
      setActiveEventIndex(
        Math.min(activeEventIndex, nextYearEvents.length - 1)
      );
    }
  };

  // Khi chọn năm mới, reset event về 0
  const handleYearClick = (yearIndex: number) => {
    setActiveYearIndex(yearIndex);
    setActiveEventIndex(0);
  };

  // Lấy event đầu tiên của mỗi năm (chỉ hiển thị ảnh của các năm)
  const getYearEvents = () => {
    if (!data?.years) return [];
    return data.years.map((year) => year.events[0]).filter(Boolean);
  };

  const yearEvents = getYearEvents();
  const safeYearIndex = activeYearIndex;

  // Lấy visible images: luôn hiển thị grid 3 ảnh (active + next + next+1)
  // Chỉ hiển thị event đầu tiên của mỗi năm, nhưng ảnh active hiển thị event đang được chọn
  const getVisibleImages = () => {
    if (yearEvents.length <= 2) {
      // Nếu có ít hơn 3 năm, chỉ hiển thị những gì có
      // Ảnh đầu tiên là currentEvent (nếu năm có nhiều events) hoặc event đầu tiên của năm
      const firstImage = currentEvent || yearEvents[0];
      return [firstImage, ...yearEvents.slice(1, 2)].filter(Boolean);
    }

    // Always show active image first (leftmost), then next, then next+1
    // Ảnh active luôn ở vị trí đầu tiên (ngoài rìa bên trái)
    // Ảnh active hiển thị currentEvent (event đang được chọn), các ảnh khác hiển thị event đầu tiên của năm
    const getNextIndex = (current: number, offset: number) => {
      return (current + offset) % yearEvents.length;
    };

    return [
      currentEvent || yearEvents[safeYearIndex] || yearEvents[0], // Active image - event đang được chọn
      yearEvents[getNextIndex(safeYearIndex, 1)], // Next image - event đầu tiên của năm tiếp theo
      yearEvents[getNextIndex(safeYearIndex, 2)], // Next+1 image - event đầu tiên của năm tiếp theo nữa (bị cắt)
    ];
  };

  const visibleImages = getVisibleImages();

  // Handler để click vào image - chỉ chuyển năm
  const handleImageClick = (yearIndex: number) => {
    setActiveYearIndex(yearIndex);
    const clickedYearEvents = data.years[yearIndex]?.events || [];
    setActiveEventIndex(
      Math.min(activeEventIndex, clickedYearEvents.length - 1)
    );
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full min-h-[100vh] overflow-hidden ${containerClassName}`}
    >
      {/* Sticky container để ảnh cố định khi scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          className={`absolute inset-0 w-full h-full ${className}`}
          style={{
            opacity,
            scale,
            filter: `blur(${blur}px)`,
            y,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: animationDuration, ease: "easeOut" }}
        >
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
            style={{
              objectPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        {/* Content Overlay */}
        {data && (
          <div className="relative z-10 h-full flex items-center w-full">
            {/* Left: Timeline and Content */}
            <div className="container px-4 md:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-start w-4/6">
                <Timeline
                  years={data.years}
                  activeYearIndex={activeYearIndex}
                  onYearClick={handleYearClick}
                />
                {currentEvent && (
                  <ContentSection
                    content={currentEvent}
                    events={currentEvents}
                    activeEventIndex={activeEventIndex}
                    activeIndex={combinedIndex}
                    onEventSelect={setActiveEventIndex}
                    onEventNavigate={navigateEvents}
                  />
                )}
              </div>
            </div>

            {/* Right: Image Grid */}
            <ImageGrid
              images={visibleImages}
              currentEvents={currentEvents}
              activeEventIndex={activeEventIndex}
              activeYearIndex={activeYearIndex}
              onImageClick={handleImageClick}
              onNavigate={navigateImages}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FullScreenBackgroundImage;
