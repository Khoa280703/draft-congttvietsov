import React from "react";

interface KeywordsProps {
  tags: string[];
  tagColor?: string;
  tagTextColor?: string;
}

const Keywords: React.FC<KeywordsProps> = ({
  tags,
  tagColor,
  tagTextColor,
}) => {
  return (
    <div className="py-4">
      <div className="flex items-center flex-wrap gap-2">
        <span className="font-medium text-gray-700">Từ khóa:</span>
        {tags.map((tag, index) => (
          <a
            key={index}
            href="#"
            className={`text-sm bg-${tagColor} text-${tagTextColor} px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors`}
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Keywords;
