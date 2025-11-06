import React from "react";
import { HiArrowRight } from "react-icons/hi";

interface SeeMoreButtonSimpleProps {
  text?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const SeeMoreButtonSimple: React.FC<SeeMoreButtonSimpleProps> = ({
  text = "Xem thêm",
  href = "#",
  onClick,
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200 cursor-pointer text-vietsov-green";

  const buttonClasses = `${baseClasses} ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={buttonClasses}>
        {text}
        <HiArrowRight className="w-5 h-5 ml-2 text-vietsov-green" />
      </button>
    );
  }

  return (
    <a href={href} className={buttonClasses}>
      {text}
      <HiArrowRight className="w-5 h-5 ml-2 text-vietsov-green" />
    </a>
  );
};

export default SeeMoreButtonSimple;
