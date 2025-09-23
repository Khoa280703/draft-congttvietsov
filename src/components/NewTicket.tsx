import React from "react";

interface NewsTickerProps {
  items: string[];
}

const StarIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 text-yellow-500 mr-2 shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884c.321-.662 1.134-.662 1.456 0l1.496 3.086 3.402.494c.73.106 1.02.997.492 1.508l-2.46 2.398.58 3.388c.124.726-.642 1.28-1.288.944L10 12.34l-3.04 1.6c-.646.336-1.412-.218-1.288-.944l.58-3.388-2.46-2.398c-.528-.511-.238-1.402.492-1.508l3.402-.494 1.496-3.086Z"
      clipRule="evenodd"
    />
  </svg>
);

const NewsTicker: React.FC<NewsTickerProps> = ({ items }) => {
  const extendedItems = [...items, ...items];

  return (
    <div className="bg-gray-100 w-full py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {extendedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center mx-4 text-sm text-gray-700"
          >
            <StarIcon />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
