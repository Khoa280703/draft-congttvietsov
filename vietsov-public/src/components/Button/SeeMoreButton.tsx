import React from "react";
import { HiArrowDown } from "react-icons/hi";

interface SeeMoreButtonProps {
  text?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "outline" | "filled";
}

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({
  text = "Xem thêm",
  href = "#",
  onClick,
  className = "",
  variant = "outline",
}) => {
  const baseClasses =
    "inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 lg:w-58 text-center justify-center cursor-pointer";

  const variantClasses = {
    default:
      "text-[#4CAF50] hover:text-[#45a049] font-semibold text-base leading-none tracking-normal",
    outline:
      "border-2 border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white font-semibold text-base leading-none tracking-normal",
    filled:
      "bg-[#4CAF50] text-white hover:bg-[#45a049] font-semibold text-base leading-none tracking-normal",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={buttonClasses}>
        {text}
        <HiArrowDown className="w-4 h-4 ml-2" />
      </button>
    );
  }

  return (
    <a href={href} className={buttonClasses}>
      {text}
      <HiArrowDown className="w-4 h-4 ml-2" />
    </a>
  );
};

export default SeeMoreButton;
