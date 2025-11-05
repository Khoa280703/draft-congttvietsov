import React from "react";
import { motion } from "framer-motion";
import { EnterpriseCard } from "../index";
import { sustainableDevelopmentData } from "./data";

const SustainableDevelopmentSection: React.FC = () => {
  return (
    <section className="bg-white  py-12 md:py-20">
      <div className="container mx-auto px-4">
        {sustainableDevelopmentData.map((item, index) => (
          <motion.div
            key={item.index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <EnterpriseCard
              index={item.index}
              title={item.title}
              description={item.description}
              image={item.image}
              imagePosition={item.imagePosition}
              path={item.path}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SustainableDevelopmentSection;
