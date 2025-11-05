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
    <motion.section
      id="archive-photos"
      className={` ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="">
        {/* Main Content Card */}
        <motion.div
          className=""
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
              <h2 className="text-3xl md:text-4xl lg:text-3xl inch32:text-4xl font-medium mb-4 md:mb-0">
                Hình ảnh tư liệu
              </h2>
            )}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                    activeCategory === category
                      ? "bg-vietsov-green text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Featured Content - Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 inch32:gap-8 mb-8 lg:mb-6 inch32:mb-8 border-b-1 border-vietsov-green/30 pb-8 lg:pb-6 inch32:pb-8 hover:cursor-pointer">
            {/* Featured Image/Video */}
            <motion.div
              className="relative w-full h-80 lg:h-[340px] inch32:h-96 overflow-hidden"
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
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl lg:text-2xl inch32:text-3xl font-bold text-gray-900 leading-tight">
                {featuredPhoto.title}
              </h3>

              <div className="text-gray-700 leading-relaxed">
                <p>{featuredPhoto.description}</p>
              </div>

              {/* Social Sharing Icons */}
              <div className="flex items-center space-x-4 pt-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
                  <FiShare2 className="w-5 h-5" />
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                  <FaFacebookF className="w-5 h-5" />
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-400 transition-colors cursor-pointer">
                  <FaTwitter className="w-5 h-5" />
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
                  <FiBookmark className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* News Cards - Single Row (1x4) */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 inch32:gap-6 mb-8 lg:mb-6 inch32:mb-8"
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
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <SeeMoreButton href="/tintuc/thu-vien-anh-video"></SeeMoreButton>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ArchivePhotosSection;
