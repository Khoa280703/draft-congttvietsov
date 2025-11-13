import React from "react";

interface SectionWithTitleProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  sectionClassName?: string;
  showGradientLine?: boolean;
  titleMarginBottom?: string;
  titleColor?: string;
  background?: string;
}

const SectionWithTitle: React.FC<SectionWithTitleProps> = ({
  title,
  description,
  children,
  className = "",
  sectionClassName = "py-8 md:py-12 md:pt-18 md:pb-12 lg:py-16 laptop:py-20 fhd:py-24 qhd:py-28",
  showGradientLine = false,
  titleMarginBottom = "mb-8 md:mb-12 lg:mb-16 laptop:mb-20 fhd:mb-24 qhd:mb-28",
  titleColor,
  background,
}) => {
  // Auto-detect if background is one of the specified classes and apply vietsov-green
  // Note: bg-vietsov-background2 is excluded
  const hasSpecialBackground =
    className.includes("bg-vietsov-background") ||
    className.includes("bg-vietsov-skin") ||
    className.includes("bg-vietsov-skin2") ||
    (background &&
      (background.includes("bg-vietsov-background") ||
        background.includes("bg-vietsov-skin") ||
        background.includes("bg-vietsov-skin2")));

  const finalTitleColor =
    titleColor || (hasSpecialBackground ? "text-vietsov-green-label" : "");

  // Combine background with className, background takes priority
  const finalClassName = background
    ? `${sectionClassName} ${background} ${className} transition-colors duration-700`
    : `${sectionClassName} ${className}`;

  return (
    <section className={finalClassName}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 laptop:px-12 fhd:px-16 qhd:px-20">
        <div className={`text-center ${titleMarginBottom}`}>
          <h2
            className={`text-3xl md:text-4xl lg:text-4xl laptop:text-5xl fhd:text-6xl qhd:text-7xl font-bold ${finalTitleColor}`}
          >
            {title}
          </h2>
          {description && (
            <p className="text-base md:text-base lg:text-lg laptop:text-xl fhd:text-2xl qhd:text-3xl font-normal leading-relaxed max-w-4xl lg:max-w-3xl laptop:max-w-4xl fhd:max-w-5xl qhd:max-w-6xl mx-auto px-4 lg:px-0 mt-4 md:mt-5 lg:mt-6 laptop:mt-8 fhd:mt-10 qhd:mt-12">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
      {showGradientLine && (
        <div className="mt-12 md:mt-16 laptop:mt-20 fhd:mt-24 qhd:mt-28 h-px bg-gradient-to-r from-transparent via-vietsov-green to-transparent max-w-3xl laptop:max-w-4xl fhd:max-w-5xl qhd:max-w-6xl mx-auto"></div>
      )}
    </section>
  );
};

export default SectionWithTitle;
