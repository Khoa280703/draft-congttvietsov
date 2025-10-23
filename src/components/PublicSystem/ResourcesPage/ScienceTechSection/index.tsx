import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardFullDetail, CardFullDetailHori } from "@/components/Card";
import { Pagination } from "@/components";
import { scienceTechArticles } from "./data";

const ScienceTechSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const featuredArticle = scienceTechArticles.find(
    (article) => article.featured
  );
  const regularArticles = scienceTechArticles.filter(
    (article) => !article.featured
  );

  const totalPages = Math.ceil(regularArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = regularArticles.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8">
      {/* Featured Article */}
      {featuredArticle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Nghiên cứu nổi bật
          </h2>
          <div className="relative">
            <CardFullDetail
              image={featuredArticle.image}
              imageAlt={featuredArticle.imageAlt}
              title={featuredArticle.title}
              description={featuredArticle.content}
              category={featuredArticle.category}
              timestamp={featuredArticle.publishDate}
              detail={false}
              onClick={() => {
                window.location.href = "/tintuc/chi-tiet";
              }}
              className="mb-8"
            />
          </div>
        </motion.div>
      )}

      {/* Regular Articles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Nghiên cứu khoa học và công nghệ
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {currentArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <div className="relative">
                <CardFullDetailHori
                  image={article.image}
                  imageAlt={article.imageAlt}
                  title={article.title}
                  description={article.content}
                  category={article.category}
                  timestamp={article.publishDate}
                  detail={false}
                  maxDescriptionLines={2}
                  onClick={() => {
                    window.location.href = "/tintuc/chi-tiet";
                  }}
                  className="h-full"
                />
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

export default ScienceTechSection;
