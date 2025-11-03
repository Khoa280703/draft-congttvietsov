import React from "react";
import { motion } from "framer-motion";
import AnimatedItem from "@/components/AnimatedItem";
import { type CoreValuesSectionProps, defaultCoreValues } from "./data";

const ValueItem: React.FC<{ value: any; index: number }> = ({
  value,
  index,
}) => {
  const { IconComponent, title, description } = value;
  return (
    <AnimatedItem animation="scaleIn" delay={index * 150}>
      <div className="flex flex-col items-center text-center p-4 max-w-sm">
        <img
          src={IconComponent}
          alt={title}
          className="w-16 h-16 text-green-600 text-4xl flex items-center justify-center"
        />
        <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{title}</h3>
        <p className="font-normal text-base leading-7 text-center text-vietsov-black/80">
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
  return (
    <motion.section
      id="vision-mission"
      className={`${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
          {values.map((value, index) => (
            <ValueItem key={value.id} value={value} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CoreValuesSection;
