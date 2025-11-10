import React from "react";
import { motion } from "framer-motion";

export interface DetailImage {
  id: number;
  src: string;
  alt: string;
  className: string;
}

export interface DetailContentProps {
  title: string;
  category?: string;
  status?: string;
  timestamp?: string;
  description?: string;
  paragraphs: string[];
  imageSectionTitle: string;
  images: DetailImage[];
  showOverviewSection?: boolean;
  overviewTitle?: string;
}

const DetailContent: React.FC<DetailContentProps> = ({
  title,
  category,
  status,
  timestamp,
  description,
  paragraphs,
  imageSectionTitle,
  images,
  showOverviewSection = false,
  overviewTitle = "Tổng quan dự án",
}) => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl overflow-hidden">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <header className="mb-8">
            {/* Category and Status/Timestamp */}
            {(category || status || timestamp) && (
              <div className="flex items-center gap-3 mb-4">
                {category && (
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {category}
                  </span>
                )}
                {status && (
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      status === "Đang thực hiện"
                        ? "bg-blue-100 text-blue-800"
                        : status === "Hoàn thành"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {status}
                  </span>
                )}
                {timestamp && !status && (
                  <p className="text-sm text-gray-500">{timestamp}</p>
                )}
              </div>
            )}

            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
              {title}
            </h1>

            <hr className="my-6 border-gray-200" />
          </header>

          {/* Overview Section (for projects) */}
          {showOverviewSection && description && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {overviewTitle}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {description}
              </p>
            </div>
          )}

          {/* Content Body */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 mb-8">
            {paragraphs.map((paragraph, index) => (
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

          {/* Images Section */}
          {images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {imageSectionTitle}
              </h3>

              <div className="grid grid-cols-3 gap-2 auto-rows-fr grid-flow-dense">
                {images.map((image) => (
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
          )}
        </motion.article>
      </div>
    </div>
  );
};

export default DetailContent;
