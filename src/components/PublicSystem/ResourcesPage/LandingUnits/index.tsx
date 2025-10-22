import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import { enterpriseData } from "./data";

interface EnterpriseCardProps {
  title: string;
  image: string;
  description: string;
  imagePosition?: "left" | "right";
}

const EnterpriseCard: React.FC<EnterpriseCardProps> = ({
  title,
  image,
  description,
  imagePosition = "right",
}) => {
  const imageOrder =
    imagePosition === "left" ? "lg:order-first" : "lg:order-last";

  return (
    <motion.div
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={imageOrder}>
        <motion.img
          src={image}
          alt={title}
          className="w-full h-[500px] md:h-[700px] lg:h-[850px] object-cover rounded-2xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Khối text */}
      <div className="relative z-10">
        {/* số background */}
        <span
          className={`
      absolute -top-26 
      ${imagePosition === "left" ? "-left-20" : "-left-20"}
      text-7xl md:text-8xl lg:text-9xl
      font-bold text-gray-200/80 z-0 select-none pointer-events-none
    `}
        >
          <FaQuoteLeft />
        </span>

        <motion.p
          className="text-sm font-bold text-green-600 mb-2 relative z-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          DỰ ÁN TIÊU BIỂU
        </motion.p>

        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4 leading-tight relative z-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="text-sm text-gray-600 leading-relaxed mb-6 relative z-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {description}
        </motion.p>

        <motion.a
          href="#"
          className="flex items-center text-sm text-blue-600 font-semibold hover:text-blue-700 relative z-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.5 }}
          whileHover={{ x: 5 }}
        >
          Xem thêm <FiArrowRight className="w-4 h-4 ml-1" />
        </motion.a>
      </div>
    </motion.div>
  );
};

const LandingUnits: React.FC = () => {
  return (
    <motion.section
      className="bg-white font-sans py-12 md:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        {enterpriseData.map((item, index) => (
          <motion.div
            key={item.index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <EnterpriseCard
              title={item.title}
              description={item.description}
              image={item.image}
              imagePosition={item.imagePosition}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default LandingUnits;
