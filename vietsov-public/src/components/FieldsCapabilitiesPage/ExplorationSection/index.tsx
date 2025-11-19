import React from "react";
import { motion } from "framer-motion";
import { EnterpriseCard } from "@/components/SustainableDevelopmentPage";
import { explorationData } from "./data";

const ExplorationSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
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
              imageHeight="h-[400px] md:h-[300px] lg:h-[320px] laptop:h-[360px] fhd:h-[420px] qhd:h-[500px]"
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
