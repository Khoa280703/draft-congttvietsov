import React from "react";
import { motion } from "framer-motion";
import AnimatedItem from "@/components/AnimatedItem";
import {
  type CoreValuesSectionProps,
  type CoreValue,
  defaultCoreValues,
} from "./data";

const ValueItem: React.FC<{ value: CoreValue; index: number }> = ({
  value,
  index,
}) => {
  const { IconComponent, title, description } = value;
  return (
    <AnimatedItem animation="scaleIn" delay={index * 150}>
      <div className="flex flex-col items-center text-center p-4 lg:p-3 inch32:p-4 max-w-sm">
        <img
          src={IconComponent}
          alt={title}
          className="w-16 h-16 lg:w-14 lg:h-14 inch32:w-16 inch32:h-16 text-green-600 text-4xl flex items-center justify-center"
        />
        <h3 className="text-xl lg:text-lg inch32:text-xl font-bold text-gray-900 mt-4 lg:mt-3 inch32:mt-4 mb-2">
          {title}
        </h3>
        <p className="font-normal text-base lg:text-sm inch32:text-base leading-7 lg:leading-6 inch32:leading-7 text-center text-vietsov-black/80">
          {description}
        </p>
      </div>
    </AnimatedItem>
  );
};

const CoreValuesSection: React.FC<CoreValuesSectionProps> = ({
  values = defaultCoreValues,
  className = "",
}) => {
  const displayedValues = values.slice(0, 5);

  return (
    <motion.section
      id="vision-mission"
      className={`${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="grid grid-cols-12 gap-x-6 md:gap-x-8 lg:gap-x-6 inch32:gap-x-8 gap-y-8 md:gap-y-12 lg:gap-y-10 inch32:gap-y-12">
        {displayedValues.map((value, index) => {
          let gridClasses = "";
          switch (index) {
            case 0:
            case 1:
            case 2:
              gridClasses = "col-span-12 md:col-span-4";
              break;
            case 3:
              gridClasses = "col-span-12 md:col-start-3 md:col-span-4";
              break;
            case 4:
              gridClasses = "col-span-12 md:col-span-4";
              break;
          }

          return (
            <div key={value.id} className={gridClasses}>
              <div className="flex justify-center">
                <ValueItem value={value} index={index} />
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default CoreValuesSection;
