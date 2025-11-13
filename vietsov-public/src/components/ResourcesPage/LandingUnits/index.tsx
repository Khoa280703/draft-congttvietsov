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
      className="bg-white py-12 lg:pt-20 lg:pb-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
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
              cardIndex={index}
              totalCards={enterpriseData.length}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default LandingUnits;
