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
        <span className="font-medium text-sm inch32:text-base">Từ khóa:</span>
        {tags.map((tag, index) => (
          <a
            key={index}
            href="#"
            className={`text-xs inch32:text-sm bg-${tagColor} text-${tagTextColor} px-3 py-1 rounded-md hover:bg-vietsov-green hover:text-white transition-colors`}
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Keywords;
