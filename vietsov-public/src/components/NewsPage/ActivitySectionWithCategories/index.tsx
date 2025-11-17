import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CardFullDetail } from "@/components/Card";
import { SeeMoreButtonSimple } from "@/components/Button";
import Pagination from "@/components/Pagination";
import {
  type ActivitySectionWithCategoriesProps,
  defaultActivitiesData,
  defaultActivityCategories,
  categoryConfigs,
} from "./data";

const ActivitySectionWithCategories: React.FC<
  ActivitySectionWithCategoriesProps
> = ({
  title = "Tất cả",
  viewMoreLink = "/tintuc",
  className = "",
  activities = defaultActivitiesData,
  itemsPerPage = 6,
}) => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [currentPage, setCurrentPage] = useState(1);
  const paginationRef = useRef<HTMLDivElement>(null);

  // Filter activities based on selected category
  const filteredActivities = useMemo(() => {
    if (activeCategory === "Tất cả") {
      return activities;
    }
    return activities.filter(
      (activity) => activity.category === activeCategory
    );
  }, [activeCategory, activities]);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Scroll to pagination when page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to pagination after a short delay to ensure DOM is updated
    setTimeout(() => {
      paginationRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);
  const paginatedActivities = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredActivities.slice(startIndex, endIndex);
  }, [filteredActivities, currentPage, itemsPerPage]);

  // Get dynamic title and URL based on active category
  // Use props as fallback for "Tất cả" category, otherwise use config
  const currentCategoryConfig =
    categoryConfigs[activeCategory] || categoryConfigs["Tất cả"];
  const dynamicTitle =
    activeCategory === "Tất cả" && title ? title : currentCategoryConfig.title;
  const dynamicUrl =
    activeCategory === "Tất cả" && viewMoreLink
      ? viewMoreLink
      : currentCategoryConfig.url;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header with Title and Categories */}
      <motion.div
        className="mb-8 md:mb-12 lg:mb-10 inch32:mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {/* Title and See More Button */}
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-3xl inch32:text-4xl font-medium">
            {dynamicTitle}
          </h2>
          <SeeMoreButtonSimple text="Xem thêm" href={dynamicUrl} />
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2">
          {defaultActivityCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeCategory === category
                  ? "bg-vietsov-green text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Articles Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 inch32:gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {paginatedActivities.map((activity) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <CardFullDetail
              image={activity.image}
              imageAlt={activity.title}
              category={activity.category}
              title={activity.title}
              timestamp={activity.timestamp}
              description={activity.description}
              detail={true}
              onClick={() => {
                window.location.href = "/tintuc/chi-tiet";
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination - Fixed position */}
      {totalPages > 1 && (
        <div ref={paginationRef} className="mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default ActivitySectionWithCategories;
