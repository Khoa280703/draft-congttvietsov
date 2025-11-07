import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCheck, HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { type CapabilitiesSectionProps, defaultCategories } from "./data";

const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  categories = defaultCategories,
  className = "",
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories[0]?.id || ""
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const selectedCategory =
    categories.find((cat) => cat.id === selectedCategoryId) || categories[0];

  const navigateCategory = (direction: "left" | "right") => {
    const currentIndex = categories.findIndex(
      (cat) => cat.id === selectedCategoryId
    );

    let newIndex: number;
    if (direction === "left") {
      // Chuyển sang category trước đó, nếu ở đầu thì chuyển sang cuối
      newIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
    } else {
      // Chuyển sang category tiếp theo, nếu ở cuối thì chuyển sang đầu
      newIndex = currentIndex === categories.length - 1 ? 0 : currentIndex + 1;
    }

    const newCategoryId = categories[newIndex]?.id;
    if (newCategoryId) {
      setSelectedCategoryId(newCategoryId);

      // Scroll đến button của category mới được chọn
      setTimeout(() => {
        if (scrollContainerRef.current) {
          const button = scrollContainerRef.current.querySelector(
            `button[data-category-id="${newCategoryId}"]`
          ) as HTMLElement;
          if (button) {
            button.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            });
          }
        }
      }, 50);
    }
  };

  return (
    <motion.section
      id="capabilities"
      className={`${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 md:gap-12 lg:gap-18 inch32:gap-26 items-start w-full">
          {/* Left: Image Gallery Section */}
          <motion.div
            className="relative w-full h-64 md:h-80 lg:h-[26rem] inch32:h-[32rem] col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div
              className="relative w-full h-full"
              style={{ perspective: "1000px" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategoryId}
                  className="absolute inset-0"
                  style={{ transformStyle: "preserve-3d" }}
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -90, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {/* Multiple images layered */}
                  {selectedCategory?.images.map((image, index) => {
                    const offset = index * 20; // Offset for layered effect
                    const zIndex = selectedCategory.images.length - index;
                    const scale = 1 - index * 0.05; // Slightly smaller for depth
                    const opacity = index === 0 ? 1 : 0.3; // Top image fully visible, others faded

                    return (
                      <motion.div
                        key={`${selectedCategory.id}-${index}`}
                        className="absolute inset-0 overflow-hidden"
                        style={{
                          zIndex,
                          transform: `translate(${offset}px, ${offset}px) scale(${scale})`,
                          transformOrigin: "top left",
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity, scale }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          delay: index * 0.1,
                        }}
                      >
                        <img
                          src={image}
                          alt={`${selectedCategory.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover object-center shadow-xl"
                          style={{
                            filter: index > 0 ? "blur(2px)" : "none",
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right: Category Selector and Content Section */}
          <motion.div
            className="space-y-6 md:space-y-8 lg:space-y-6 inch32:space-y-8 col-span-4 mt-6 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {/* Category Selector with Arrows */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Left Arrow */}
              <button
                onClick={() => navigateCategory("left")}
                className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-gray-700 hover:text-vietsov-green transition-all duration-300"
                aria-label="Previous category"
              >
                <HiArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Scrollable Category List */}
              <div
                ref={scrollContainerRef}
                className="flex-1 flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    data-category-id={category.id}
                    onClick={() => setSelectedCategoryId(category.id)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                      selectedCategoryId === category.id
                        ? "bg-vietsov-green text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => navigateCategory("right")}
                className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-gray-700 hover:text-vietsov-green transition-all duration-300"
                aria-label="Next category"
              >
                <HiArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Content Section with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategoryId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <motion.h3
                  className="text-sm md:text-base lg:text-sm inch32:text-base font-semibold mb-4 md:mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {selectedCategory?.title.toUpperCase()}:
                </motion.h3>
                <ul className="space-y-3 md:space-y-4">
                  {selectedCategory?.capabilities.map((item, index) => (
                    <motion.li
                      key={item.id}
                      className="flex items-start gap-2 md:gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + index * 0.05,
                        ease: "easeOut",
                      }}
                    >
                      <HiCheck className="w-6 h-6 lg:w-5 lg:h-5 inch32:w-6 inch32:h-6 text-vietsov-green flex-shrink-0 mt-1 bg-vietsov-green/12 rounded-2xl p-1" />
                      <p className="text-base lg:text-sm inch32:text-base text-gray-700 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CapabilitiesSection;
