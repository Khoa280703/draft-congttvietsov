import React from "react";
import { motion } from "framer-motion";
import { CardFullDetail } from "@/components/Card";
import { SeeMoreButton } from "@/components/Button";
import { type PetroNewsProps, defaultPetroNewsData } from "./data";
import { getPetroNewsThemeColors } from "./theme";

interface PetroNewsWithThemeProps extends PetroNewsProps {
  isLightMode?: boolean;
}

const PetroNews: React.FC<PetroNewsWithThemeProps> = ({
  newsItems = defaultPetroNewsData,
  className = "",
  isLightMode = true,
}) => {
  const theme = getPetroNewsThemeColors(isLightMode);

  return (
    <motion.section
      className={`${theme.sectionBackground} transition-colors duration-700 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 w-full py-8 md:py-12 lg:py-16 inch32:py-15">
        {/* Title */}
        <motion.div
          className="text-center mb-8 md:mb-12 lg:mb-16 inch32:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className={`text-3xl md:text-4xl lg:text-4xl inch32:text-5xl font-bold transition-colors duration-700 ${
              isLightMode ? "text-vietsov-green" : "text-vietsov-yellow"
            }`}
          >
            Tin tức Dầu khí
          </h2>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 inch32:gap-8 mb-8 md:mb-12 lg:mb-16 inch32:mb-16">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <a
                href={item.link}
                className="block h-full hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <CardFullDetail
                  image={item.image}
                  imageAlt={item.imageAlt}
                  category={item.category}
                  title={item.title}
                  timestamp={item.timestamp}
                  description={item.description}
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <SeeMoreButton
            text="Xem thêm"
            href="/tintuc"
            variant="outline"
            className={
              isLightMode
                ? ""
                : "border-vietsov-yellow text-vietsov-yellow hover:bg-vietsov-yellow hover:text-[#006d38]"
            }
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PetroNews;
