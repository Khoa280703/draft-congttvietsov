import React from "react";
import { HiArrowDown } from "react-icons/hi";

interface SeeMoreButtonProps {
  text?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "outline" | "filled";
  reverse?: boolean;
}

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({
  text = "Xem thêm",
  href = "#",
  onClick,
  className = "",
  variant = "outline",
  reverse = false,
}) => {
  const baseClasses =
    "inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 lg:w-58 text-center justify-center cursor-pointer";

  const variantClasses = {
    default: reverse
      ? "text-vietsov-green hover:text-vietsov-green font-semibold text-base leading-none tracking-normal"
      : "text-vietsov-green hover:text-vietsov-green font-semibold text-base leading-none tracking-normal",
    outline: reverse
      ? "bg-vietsov-green text-white hover:bg-transparent hover:text-vietsov-green border-2 border-vietsov-green font-semibold text-base leading-none tracking-normal"
      : "border-2 border-vietsov-green text-vietsov-green hover:bg-vietsov-green hover:text-white font-semibold text-base leading-none tracking-normal",
    filled: reverse
      ? "bg-vietsov-green text-white hover:bg-vietsov-green font-semibold text-base leading-none tracking-normal"
      : "bg-vietsov-green text-white hover:bg-vietsov-green font-semibold text-base leading-none tracking-normal",
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
