import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { HiCheck, HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { type CapabilitiesSectionProps, defaultCategories } from "./data";
import { getCapabilitiesThemeColors } from "./theme";

interface CapabilitiesSectionParallaxProps extends CapabilitiesSectionProps {
  isLightMode?: boolean;
}

const CapabilitiesSectionParallax: React.FC<
  CapabilitiesSectionParallaxProps
> = ({
  categories = defaultCategories,
  className = "",
  isLightMode = true,
}) => {
  const theme = getCapabilitiesThemeColors(isLightMode);
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories[0]?.id || ""
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Parallax scroll setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transform values for parallax effect - optimized for performance
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  // Simplified scale - removed complex keyframes
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  // Check if in view for entrance animations
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

  const selectedCategory =
    categories.find((cat) => cat.id === selectedCategoryId) || categories[0];

  // Optimized: Only 3 layers instead of 5, reduced from 5 separate hooks
  const layerY0 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const layerY1 = useTransform(scrollYProgress, [0, 1], [5, -15]); // Reduced movement
  const layerY2 = useTransform(scrollYProgress, [0, 1], [10, -30]); // Reduced movement
  const layerTransforms = [layerY0, layerY1, layerY2];

  const navigateCategory = (direction: "left" | "right") => {
    const currentIndex = categories.findIndex(
      (cat) => cat.id === selectedCategoryId
    );

    let newIndex: number;
    if (direction === "left") {
      newIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === categories.length - 1 ? 0 : currentIndex + 1;
    }

    const newCategoryId = categories[newIndex]?.id;
    if (newCategoryId) {
      setSelectedCategoryId(newCategoryId);

      // Scroll button into view within the container only (not the whole page)
      setTimeout(() => {
        if (scrollContainerRef.current) {
          const button = scrollContainerRef.current.querySelector(
            `button[data-category-id="${newCategoryId}"]`
          ) as HTMLElement;
          if (button && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const buttonLeft = button.offsetLeft;
            const buttonWidth = button.offsetWidth;
            const containerWidth = container.clientWidth;

            // Calculate the center position
            const buttonCenter = buttonLeft + buttonWidth / 2;
            const targetScroll = buttonCenter - containerWidth / 2;

            // Scroll only the container, not the whole page
            container.scrollTo({
              left: Math.max(0, targetScroll),
              behavior: "smooth",
            });
          }
        }
      }, 50);
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      id="capabilities"
      className={`relative min-h-[120vh] flex items-center ${theme.sectionBackground} transition-colors duration-700 py-8 md:py-12 lg:py-16 inch32:py-15 ${className}`}
    >
      <div className="container px-16 mx-auto w-full">
        {/* Title */}
        <motion.div
          className="text-center mb-8 md:mb-12 lg:mb-32 inch32:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <span
            className={`text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight transition-colors duration-700 mr-4 ${theme.titlePrefix}`}
          >
            LĨNH VỰC
          </span>
          <span> </span>
          <span
            className={`text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight transition-colors duration-700 ${theme.titleSuffix}`}
          >
            HOẠT ĐỘNG
          </span>
        </motion.div>

        {/* Categories List - Centered below title */}
        <motion.div
          className="flex items-center justify-center gap-2 md:gap-3 mb-12 md:mb-16 lg:mb-24 inch32:mb-32"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Left Arrow */}
          <button
            onClick={() => navigateCategory("left")}
            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-700 hover:text-vietsov-green hover:scale-110 transition-all duration-300 rounded-full hover:bg-vietsov-green/10"
            aria-label="Previous category"
          >
            <HiArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide justify-center"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              scrollPaddingLeft: "1rem",
              scrollPaddingRight: "1rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                data-category-id={category.id}
                onClick={() => setSelectedCategoryId(category.id)}
                className={`px-8 mx-4 py-3 text-sm md:text-base font-medium transition-all duration-500 cursor-pointer whitespace-nowrap ${
                  selectedCategoryId === category.id
                    ? `${theme.button.active} scale-105 shadow-lg`
                    : `${theme.button.inactive} hover:scale-105`
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {category.title}
              </motion.button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => navigateCategory("right")}
            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-700 hover:text-vietsov-green hover:scale-110 transition-all duration-300 rounded-full hover:bg-vietsov-green/10"
            aria-label="Next category"
          >
            <HiArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-64 inch32:gap-26 items-center">
          {/* Left: Parallax Image Gallery Section */}
          <motion.div
            ref={imageRef}
            className="relative w-full h-[30vh] md:h-[40vh] lg:h-[50vh] col-span-3"
            style={{
              y: imageY,
              scale,
              willChange: "transform", // GPU acceleration hint
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div
              className="relative w-full h-full"
              style={{
                perspective: "1000px", // Reduced from 1200px
                willChange: "transform",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategoryId}
                  className="absolute inset-0"
                  style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                  }}
                  initial={{ rotateY: 60, opacity: 0 }} // Reduced from 90
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -60, opacity: 0 }} // Reduced from -90
                  transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }} // Faster
                >
                  {/* Optimized: Only render first 3 images instead of 5 */}
                  {selectedCategory?.images.slice(0, 3).map((image, index) => {
                    const zIndex = 3 - index;
                    const layerScale = 1 - index * 0.1;
                    const layerOpacity = index === 0 ? 1 : 0.5 - index * 0.15;
                    const layerY = layerTransforms[index] || layerTransforms[0];

                    return (
                      <motion.div
                        key={`${selectedCategory.id}-${index}`}
                        className="absolute inset-0 rounded-lg overflow-hidden"
                        style={{
                          zIndex,
                          y: layerY,
                          willChange: "transform",
                          transform: "translateZ(0)", // Force GPU acceleration
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                          opacity: layerOpacity,
                          scale: layerScale,
                        }}
                        transition={{
                          duration: 0.6, // Faster
                          ease: "easeOut",
                          delay: index * 0.1, // Reduced delay
                        }}
                      >
                        <img
                          src={image}
                          alt={`${selectedCategory.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover object-center"
                          style={{
                            // Removed blur filter - major performance improvement
                            // Only use opacity for depth effect
                            boxShadow:
                              index === 0
                                ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                                : "none",
                            willChange: "transform",
                          }}
                          loading="lazy" // Lazy load images
                        />
                        {/* Gradient overlay for depth */}
                        {index > 0 && (
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                            style={{ opacity: index * 0.3 }}
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right: Parallax Content Section */}
          <motion.div
            ref={contentRef}
            className="space-y-6 md:space-y-8 lg:space-y-6 inch32:space-y-8 col-span-2"
            style={{
              y: contentY,
              willChange: "transform",
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            {/* Category Selector with Arrows */}
            {/* Content Section with Parallax Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategoryId}
                initial={{ opacity: 0, y: 30 }} // Simplified - removed rotateX
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }} // Simplified
                transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }} // Faster
                style={{
                  willChange: "transform",
                  transform: "translateZ(0)", // GPU acceleration
                }}
              >
                <motion.h3
                  className={`text-xl md:text-2xl lg:text-3xl inch32:text-4xl font-bold mb-6 md:mb-8 ${theme.title}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {selectedCategory?.title.toUpperCase()}
                </motion.h3>
                <ul className="space-y-4 md:space-y-5">
                  {selectedCategory?.capabilities.map((item, index) => (
                    <motion.li
                      key={item.id}
                      className="flex items-start gap-3 md:gap-4 group"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + index * 0.08,
                        ease: "easeOut",
                      }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <HiCheck
                          className={`w-6 h-6 lg:w-5 lg:h-5 inch32:w-6 inch32:h-6 ${theme.checkIcon} flex-shrink-0 mt-1 ${theme.checkIconBg} rounded-full p-1 transition-all duration-300`}
                        />
                      </motion.div>
                      <p
                        className={`text-base md:text-lg ${theme.description} leading-relaxed font-normal group-hover:opacity-80 transition-colors duration-300`}
                      >
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

      {/* Background Decorative Elements - Simplified parallax for performance */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-vietsov-green/5 rounded-full blur-3xl pointer-events-none"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["-50px", "100px"]), // Reduced movement
          willChange: "transform",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-vietsov-green/5 rounded-full blur-3xl pointer-events-none"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["50px", "-100px"]), // Reduced movement
          willChange: "transform",
        }}
      />
    </motion.section>
  );
};

export default CapabilitiesSectionParallax;
