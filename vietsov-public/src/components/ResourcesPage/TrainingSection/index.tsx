import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardFullDetail, CardFullDetailHori } from "@/components/Card";
import { Pagination } from "@/components";
import { trainingPrograms } from "./data";
import { useNavigate } from "react-router-dom";

const TrainingSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const programsPerPage = 6;
  const navigate = useNavigate();
  const featuredProgram = trainingPrograms.find((program) => program.featured);
  const regularPrograms = trainingPrograms.filter(
    (program) => !program.featured
  );

  const totalPages = Math.ceil(regularPrograms.length / programsPerPage);
  const startIndex = (currentPage - 1) * programsPerPage;
  const endIndex = startIndex + programsPerPage;
  const currentPrograms = regularPrograms.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8">
      {/* Featured Program */}
      {featuredProgram && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Chương trình nổi bật
          </h2>
          <div className="relative">
            <CardFullDetail
              image={featuredProgram.image}
              imageAlt={featuredProgram.imageAlt}
              title={featuredProgram.title}
              description={featuredProgram.content}
              category={featuredProgram.category}
              timestamp={featuredProgram.publishDate}
              detail={true}
              onClick={() => {
                navigate(`/tintuc/chi-tiet`);
              }}
              className="mb-8"
            />
          </div>
        </motion.div>
      )}

      {/* Regular Programs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Chương trình đào tạo
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {currentPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <div className="relative">
                <CardFullDetailHori
                  image={program.image}
                  imageAlt={program.imageAlt}
                  title={program.title}
                  description={program.content}
                  category={program.category}
                  timestamp={program.publishDate}
                  maxDescriptionLines={2}
                  detail={false}
                  onClick={() => {
                    navigate(`/tintuc/chi-tiet`);
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

export default TrainingSection;
