import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { linkSections, getIcon } from "./data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ITEMS_PER_PAGE = 5;

const LinkCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const activeSection = linkSections[activeTab];
  const totalPages = Math.ceil(activeSection.items.length / ITEMS_PER_PAGE);

  // Reset to page 1 when tab changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // Calculate paginated items
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return activeSection.items.slice(startIndex, endIndex);
  }, [activeSection.items, currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="bg-vietsov-background rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex">
            {linkSections.map((section, index) => (
              <button
                key={section.title}
                onClick={() => setActiveTab(index)}
                className={`flex-1 px-3 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                  activeTab === index
                    ? "text-vietsov-green border-b-2 border-vietsov-green bg-gray-50"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-0 divide-y divide-gray-100">
                {paginatedItems.map((item, itemIndex) => (
                  <motion.a
                    key={`${activeTab}-${itemIndex}`}
                    href={item.href}
                    className="flex items-center py-3 text-gray-700 hover:text-vietsov-green transition-colors duration-200 group"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: itemIndex * 0.05 }}
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
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`flex items-center px-2 py-1.5 text-xs font-medium rounded-md transition-colors duration-200 ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:text-vietsov-green hover:bg-gray-50"
                }`}
              >
                <FiChevronLeft className="w-3 h-3 mr-1" />
                Trước
              </button>

              <div className="flex items-center space-x-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-7 h-7 flex items-center justify-center text-xs font-medium rounded-md transition-colors duration-200 ${
                        currentPage === page
                          ? "bg-vietsov-green text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center px-2 py-1.5 text-xs font-medium rounded-md transition-colors duration-200 ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:text-vietsov-green hover:bg-gray-50"
                }`}
              >
                Sau
                <FiChevronRight className="w-3 h-3 ml-1" />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default LinkCenter;
