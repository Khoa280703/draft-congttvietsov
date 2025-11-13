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
    <div className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-6 md:gap-8 lg:gap-12 laptop:gap-16 fhd:gap-20 qhd:gap-24 items-start w-full">
        {/* Left: Image Gallery Section */}
        <motion.div
          className="relative w-full h-64 md:h-80 lg:h-[26rem] laptop:h-[30rem] fhd:h-[34rem] qhd:h-[38rem] col-span-5"
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
          className="space-y-4 md:space-y-6 lg:space-y-6 laptop:space-y-8 fhd:space-y-10 qhd:space-y-12 col-span-4 mt-6 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {/* Category Selector with Arrows */}
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4 laptop:gap-5 fhd:gap-6 qhd:gap-7">
            {/* Left Arrow */}
            <button
              onClick={() => navigateCategory("left")}
              className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 laptop:w-12 laptop:h-12 fhd:w-14 fhd:h-14 qhd:w-16 qhd:h-16 flex items-center justify-center text-gray-700 hover:text-vietsov-green transition-all duration-300"
              aria-label="Previous category"
            >
              <HiArrowLeft className="w-5 h-5 md:w-6 md:h-6 laptop:w-7 laptop:h-7 fhd:w-8 fhd:h-8 qhd:w-9 qhd:h-9" />
            </button>

            {/* Scrollable Category List */}
            <div
              ref={scrollContainerRef}
              className="flex-1 flex gap-2 md:gap-3 lg:gap-4 laptop:gap-5 fhd:gap-6 qhd:gap-7 overflow-x-auto scrollbar-hide"
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
                  className={`flex-shrink-0 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 laptop:px-6 laptop:py-3 fhd:px-7 fhd:py-3.5 qhd:px-8 qhd:py-4 rounded-full text-xs md:text-sm lg:text-base laptop:text-lg fhd:text-xl qhd:text-2xl font-medium transition-colors cursor-pointer ${
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
              className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 laptop:w-12 laptop:h-12 fhd:w-14 fhd:h-14 qhd:w-16 qhd:h-16 flex items-center justify-center text-gray-700 hover:text-vietsov-green transition-all duration-300"
              aria-label="Next category"
            >
              <HiArrowRight className="w-5 h-5 md:w-6 md:h-6 laptop:w-7 laptop:h-7 fhd:w-8 fhd:h-8 qhd:w-9 qhd:h-9" />
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
                className="text-base md:text-lg lg:text-xl laptop:text-2xl fhd:text-3xl qhd:text-4xl font-semibold mb-4 md:mb-5 laptop:mb-6 fhd:mb-7 qhd:mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {selectedCategory?.title.toUpperCase()}:
              </motion.h3>
              <ul className="space-y-3 md:space-y-4 lg:space-y-5 laptop:space-y-6 fhd:space-y-7 qhd:space-y-8">
                {selectedCategory?.capabilities.map((item, index) => (
                  <motion.li
                    key={item.id}
                    className="flex items-start gap-2 md:gap-3 lg:gap-4 laptop:gap-5 fhd:gap-6 qhd:gap-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + index * 0.05,
                      ease: "easeOut",
                    }}
                  >
                    <HiCheck className="w-5 h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 laptop:w-6 laptop:h-6 fhd:w-7 fhd:h-7 qhd:w-8 qhd:h-8 text-vietsov-green flex-shrink-0 mt-1 bg-vietsov-green/12 rounded-2xl p-1 laptop:p-1.5 fhd:p-2 qhd:p-2.5" />
                    <p className="text-sm md:text-base lg:text-lg laptop:text-xl fhd:text-2xl qhd:text-3xl text-gray-700 leading-relaxed font-normal">
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
  );
};

export default CapabilitiesSection;
