import React from "react";
import { motion } from "framer-motion";
import { CardFullDetail } from "@/components/Card";
import { SeeMoreButton } from "@/components/Button";
import { type PetroNewsProps, defaultPetroNewsData } from "./data";

const PetroNews: React.FC<PetroNewsProps> = ({
  newsItems = defaultPetroNewsData,
  className = "",
}) => {
  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* News Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-6 2xl:gap-8 mb-8 md:mb-12 lg:mb-10 2xl:mb-15">
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
              className="block h-full hover:scale-105 transition-transform duration-300"
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
        <SeeMoreButton text="Xem thêm" href="/tintuc" variant="outline" />
      </motion.div>
    </motion.div>
  );
};

export default PetroNews;
