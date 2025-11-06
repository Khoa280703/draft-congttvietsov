import React from "react";
import { motion } from "framer-motion";
import { EnterpriseCard } from "@/components/SustainableDevelopmentPage";
import { explorationData } from "./data";

const ExplorationSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {explorationData.map((item, index) => (
          <motion.div
            key={item.index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <EnterpriseCard
              index={item.index}
              title={item.title}
              description={item.description}
              image={item.image}
              imagePosition={item.imagePosition}
              path={item.href}
              categoryLabel="LĨNH VỰC HOẠT ĐỘNG"
              capabilities={item.capabilities}
              imageHeight="h-[500px] md:h-[700px] lg:h-[850px]"
              showQuoteIcon={true}
              cardIndex={index}
              totalCards={explorationData.length}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExplorationSection;
