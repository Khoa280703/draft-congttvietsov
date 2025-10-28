import React from "react";
import { motion } from "framer-motion";
import { projectDetailData, imageData } from "./data";

const ProjectDetail: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl overflow-hidden">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Project Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                {projectDetailData.category}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  projectDetailData.status === "Đang thực hiện"
                    ? "bg-blue-100 text-blue-800"
                    : projectDetailData.status === "Hoàn thành"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {projectDetailData.status}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {projectDetailData.title}
            </h1>

            <hr className="my-6 border-gray-200" />
          </header>

          {/* Project Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Tổng quan dự án
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {projectDetailData.description}
            </p>
          </div>

          {/* Project Details */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 mb-8">
            {projectDetailData.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Project Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {projectDetailData.imageSectionTitle}
            </h3>

            <div className="grid grid-cols-3 gap-2 auto-rows-fr grid-flow-dense">
              {imageData.map((image) => (
                <motion.div
                  key={image.id}
                  className={`${image.className} overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.article>
      </div>
    </div>
  );
};

export default ProjectDetail;
