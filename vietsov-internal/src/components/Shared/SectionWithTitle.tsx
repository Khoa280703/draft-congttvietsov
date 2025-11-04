import React from "react";

interface SectionWithTitleProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  sectionClassName?: string;
  showGradientLine?: boolean;
  titleMarginBottom?: string;
}

const SectionWithTitle: React.FC<SectionWithTitleProps> = ({
  title,
  description,
  children,
  className = "",
  sectionClassName = "py-8 md:py-12 md:pt-18 md:pb-12 lg:py-16 2xl:pt-22 2xl:pb-15",
  showGradientLine = false,
  titleMarginBottom = "mb-8 md:mb-12 lg:mb-16 2xl:mb-16",
}) => {
  return (
    <section className={`${sectionClassName} ${className}`}>
      <div className="container mx-auto px-4">
        <div className={`text-center ${titleMarginBottom}`}>
          <h2 className="text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl font-bold">
            {title}
          </h2>
          {description && (
            <p className="text-base md:text-base lg:text-sm 2xl:text-base font-normal leading-relaxed max-w-4xl lg:max-w-3xl 2xl:max-w-4xl mx-auto px-4 lg:px-0 mt-4 md:mt-5 lg:mt-4 2xl:mt-6">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
      {showGradientLine && (
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-vietsov-green to-transparent max-w-3xl mx-auto"></div>
      )}
    </section>
  );
};

export default SectionWithTitle;

