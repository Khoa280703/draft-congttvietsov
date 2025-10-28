import React from "react";

// Component đơn giản sử dụng CSS để detect responsive
const SmartTextWithAmpersand: React.FC<{
  text: string;
  className?: string;
}> = ({ text, className }) => {
  if (!text.includes("&")) {
    return <span className={className}>{text}</span>;
  }

  const parts = text.split("&");
  if (parts.length !== 2) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      <span className="ampersand-text">
        <>
          {parts[0].trim()}
          <br className="ampersand-break lg:hidden" />
          <span className="ampersand-break lg:hidden">{parts[1].trim()}</span>
          <span className="ampersand-no-break hidden lg:inline">
            {" "}
            & {parts[1].trim()}
          </span>
        </>
      </span>
    </span>
  );
};

export default SmartTextWithAmpersand;
