import React from "react";
import { motion } from "framer-motion";
import { linkSections, getIcon } from "./data"; // Assuming these provide the data structure and icon mapping

const LinkCenter: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {linkSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            className="bg-vietsov-background rounded-lg p-6 shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: sectionIndex * 0.1 }}
          >
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                {section.title}
              </h3>
              <div className="w-8 h-0.5 bg-vietsov-green flex-shrink-0"></div>
              <div className="flex-grow h-0.5 bg-gray-100"></div>
            </div>

            <div className="space-y-0 divide-y divide-gray-100">
              {section.items.map((item, itemIndex) => (
                <motion.a
                  key={itemIndex}
                  href={item.href}
                  className="flex items-center py-3 text-gray-700 hover:text-vietsov-green transition-colors duration-200 group"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mr-3">
                    <div className="text-vietsov-green">
                      {(() => {
                        const IconComponent = getIcon(item.iconName);
                        return IconComponent ? (
                          <IconComponent className="w-5 h-5" />
                        ) : null;
                      })()}
                    </div>
                  </div>

                  {/* Text */}
                  <span className="text-gray-700 text-sm font-medium group-hover:text-vietsov-green transition-colors duration-200">
                    {item.text}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default LinkCenter;
