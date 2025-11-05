import React, { useState } from "react";
import { IoTrendingUpOutline } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import {
  type BreakingNewsSliderProps,
  defaultPublicNewsItems,
  defaultInternalNewsItems,
} from "./data";

const BreakingNewsSlider: React.FC<BreakingNewsSliderProps> = ({
  newsItems,
  label = "Tin hot",
  labelIcon = <IoTrendingUpOutline className="w-5 h-5 mr-2" />,
  backgroundColor = "bg-red-600",
  textColor = "text-white",
  scrollSpeed = 40, // Default to 40 seconds for one full scroll cycle
  pauseOnHover = true,
  className = "",
  basePath = "public", // "public" or "internal"
}) => {
  // Use appropriate default news items based on basePath
  const defaultNewsItems =
    basePath === "internal" ? defaultInternalNewsItems : defaultPublicNewsItems;
  const finalNewsItems = newsItems || defaultNewsItems;

  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  // Duplicate news items to create a seamless loop effect
  const duplicatedNewsItems = [...finalNewsItems, ...finalNewsItems];

  return (
    <div
      className={`${backgroundColor} ${textColor} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center shrink-0">
            {labelIcon}
            <span className="font-bold uppercase">{label}</span>
          </div>

          {/* Scrolling News Content */}
          <div className="flex-grow overflow-hidden relative">
            <div
              className={`flex items-center whitespace-nowrap ${
                isPaused ? "paused" : ""
              }`}
              style={{
                animation: `scroll ${scrollSpeed}s linear infinite`,
              }}
            >
              {duplicatedNewsItems.map((item, index) => (
                <React.Fragment key={`${item.id}-${index}`}>
                  <BsDot className="w-5 h-5 text-white shrink-0" />
                  <a href={item.link} className="hover:underline shrink-0 cursor-pointer">
                    {item.title}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .paused {
            animation-play-state: paused !important;
          }
        `}
      </style>
    </div>
  );
};

export default BreakingNewsSlider;
