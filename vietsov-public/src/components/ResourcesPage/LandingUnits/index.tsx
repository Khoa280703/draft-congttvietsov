import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { EnterpriseCard } from "@/components/SustainableDevelopmentPage";
import { enterpriseData } from "./data";

const LandingUnits: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <motion.section
      className="bg-white  py-12 md:py-20"
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
            onClick={() => handleCardClick(item.path)}
            className="cursor-pointer hover:opacity-90 transition-opacity duration-300"
          >
            <EnterpriseCard
              index={item.index}
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
