import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardFullDetail, CardFullDetailHori } from "@/components/Card";
import { Pagination } from "@/components";
import { innovationItems } from "./data";

const InnovationSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const featuredItem = innovationItems.find((item) => item.featured);
  const regularItems = innovationItems.filter((item) => !item.featured);

  const totalPages = Math.ceil(regularItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = regularItems.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "implemented":
        return "bg-green-100 text-green-800";
      case "approved":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "implemented":
        return "Đã triển khai";
      case "approved":
        return "Đã phê duyệt";
      case "pending":
        return "Đang xem xét";
      default:
        return "Không xác định";
    }
  };

  return (
    <div className="space-y-8">
      {/* Featured Innovation */}
      {featuredItem && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Sáng kiến nổi bật
          </h2>
          <div className="relative">
            <CardFullDetail
              image={featuredItem.image}
              imageAlt={featuredItem.imageAlt}
              title={featuredItem.title}
              description={featuredItem.content}
              category={featuredItem.category}
              timestamp={featuredItem.publishDate}
              detail={true}
              onClick={() => {
                window.location.href = "/tintuc/chi-tiet";
              }}
              className="mb-8"
            />
            <div className="absolute top-4 right-4 bg-white rounded-lg p-2 shadow-md">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  featuredItem.status
                )}`}
              >
                {getStatusText(featuredItem.status)}
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Regular Innovations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Sáng kiến và sáng chế
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {currentItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <div className="relative">
                <CardFullDetailHori
                  image={item.image}
                  imageAlt={item.imageAlt}
                  title={item.title}
                  description={item.content}
                  category={item.category}
                  timestamp={item.publishDate}
                  maxDescriptionLines={2}
                  detail={false}
                  onClick={() => {
                    window.location.href = "/tintuc/chi-tiet";
                  }}
                  className="h-full"
                />
                <div className="absolute top-4 right-4 bg-white rounded-lg p-2 shadow-md">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {getStatusText(item.status)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </motion.div>
    </div>
  );
};

export default InnovationSection;
