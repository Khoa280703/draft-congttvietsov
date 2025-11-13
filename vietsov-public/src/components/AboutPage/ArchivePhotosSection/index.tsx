import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPlay, FiShare2, FiBookmark } from "react-icons/fi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { CardNews } from "@/components/Card";
import { SeeMoreButton } from "@/components/Button";
import {
  type ArchivePhotosSectionProps,
  defaultFeaturedPhoto,
  defaultPhotos,
} from "./data";

const ArchivePhotosSection: React.FC<ArchivePhotosSectionProps> = ({
  featuredPhoto = defaultFeaturedPhoto,
  photos = defaultPhotos,
  className = "",
  hideTitle = false,
}) => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const categories = [
    "Tất cả",
    "Văn hóa doanh nghiệp",
    "Sự kiện",
    "Phong trào",
    "Vinh danh",
    "Tin chuyên môn",
    "An toàn lao động",
  ];

  return (
    <div className={className}>
      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
          <motion.div
            className={`flex flex-col md:flex-row items-start md:items-center mb-8 ${
              hideTitle ? "justify-start" : "justify-between"
            }`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {!hideTitle && (
              <h2 className="text-3xl md:text-4xl lg:text-4xl laptop:text-5xl fhd:text-6xl qhd:text-7xl font-medium mb-4 md:mb-0">
                Hình ảnh tư liệu
              </h2>
            )}
            <div className="flex flex-wrap gap-2 md:gap-2.5 lg:gap-3 laptop:gap-3.5 fhd:gap-4 qhd:gap-5">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 laptop:px-6 laptop:py-3 fhd:px-7 fhd:py-3.5 qhd:px-8 qhd:py-4 rounded-full text-xs md:text-sm lg:text-base laptop:text-lg fhd:text-xl qhd:text-2xl font-medium transition-colors cursor-pointer ${
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

          {/* Featured Content - Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 laptop:gap-12 fhd:gap-16 qhd:gap-20 mb-6 md:mb-8 lg:mb-10 laptop:mb-12 fhd:mb-14 qhd:mb-16 border-b-1 border-vietsov-green/30 pb-6 md:pb-8 lg:pb-10 laptop:pb-12 fhd:pb-14 qhd:pb-16 hover:cursor-pointer">
            {/* Featured Image/Video */}
            <motion.div
              className="relative w-full h-64 md:h-80 lg:h-[340px] laptop:h-[380px] fhd:h-[420px] qhd:h-[480px] overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src={featuredPhoto.imageUrl}
                alt={featuredPhoto.imageAlt}
                className="w-full h-full object-cover"
              />

              {/* Play button overlay for videos */}
              {featuredPhoto.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-6 shadow-lg">
                    <FiPlay className="w-8 h-8 text-gray-800 ml-1" />
                  </div>
                </div>
              )}

              {/* Video duration */}
              {featuredPhoto.isVideo && featuredPhoto.videoDuration && (
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {featuredPhoto.videoDuration}
                </div>
              )}
            </motion.div>

            {/* Featured Content Text */}
            <motion.div
              className="space-y-3 md:space-y-4 lg:space-y-5 laptop:space-y-6 fhd:space-y-7 qhd:space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl md:text-2xl lg:text-2xl laptop:text-3xl fhd:text-4xl qhd:text-5xl font-bold text-gray-900 leading-tight">
                {featuredPhoto.title}
              </h3>

              <div className="text-sm md:text-base lg:text-lg laptop:text-xl fhd:text-2xl qhd:text-3xl text-gray-700 leading-relaxed">
                <p>{featuredPhoto.description}</p>
              </div>

              {/* Social Sharing Icons */}
              <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-5 laptop:space-x-6 fhd:space-x-7 qhd:space-x-8 pt-3 md:pt-4 lg:pt-5 laptop:pt-6 fhd:pt-7 qhd:pt-8">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
                  <FiShare2 className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 laptop:w-7 laptop:h-7 fhd:w-8 fhd:h-8 qhd:w-9 qhd:h-9" />
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                  <FaFacebookF className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 laptop:w-7 laptop:h-7 fhd:w-8 fhd:h-8 qhd:w-9 qhd:h-9" />
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-400 transition-colors cursor-pointer">
                  <FaTwitter className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 laptop:w-7 laptop:h-7 fhd:w-8 fhd:h-8 qhd:w-9 qhd:h-9" />
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
                  <FiBookmark className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 laptop:w-7 laptop:h-7 fhd:w-8 fhd:h-8 qhd:w-9 qhd:h-9" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* News Cards - Single Row (1x4) */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 laptop:gap-10 fhd:gap-12 qhd:gap-14 mb-6 md:mb-8 lg:mb-10 laptop:mb-12 fhd:mb-14 qhd:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.1,
                }}
              >
                <CardNews
                  imageUrl={photo.imageUrl}
                  imageAlt={photo.imageAlt}
                  title={photo.title}
                  likes={photo.likes}
                  comments={photo.comments}
                  date={photo.date}
                  isVideo={photo.isVideo}
                  className="h-full"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* See More Button - Centered at bottom */}
          <motion.div
            className="flex justify-center mt-8 md:mt-12 lg:mt-14 laptop:mt-16 fhd:mt-20 qhd:mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <SeeMoreButton href="/tintuc/thu-vien-anh-video"></SeeMoreButton>
          </motion.div>
        </motion.div>
    </div>
  );
};

export default ArchivePhotosSection;
