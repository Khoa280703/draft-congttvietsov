import React from "react";
import { motion } from "framer-motion";
import { CardWithPadding } from "@/components/Card";
import ExplorationSection from "../ExplorationSection";
import { servicesData } from "./data";

const FieldsCapabilitiesSection: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Section 1: Thăm dò, tìm kiếm và KT dầu khí - Using LandingUnits */}
      <motion.section
        id="tham-do-tim-kiem-va-kt-dau-khi"
        className="py-12 md:py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thăm dò, Tìm kiếm và Khai thác Dầu khí
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Năng lực toàn diện trong lĩnh vực thăm dò, tìm kiếm và khai thác
              dầu khí với công nghệ tiên tiến và đội ngũ chuyên gia giàu kinh
              nghiệm.
            </p>
          </motion.div>

          {/* Use ExplorationSection component for exploration section */}
          <ExplorationSection />
        </div>
      </motion.section>

      {/* Section 2: Dịch vụ - Grid of cards */}
      <motion.section
        id="dich-vu"
        className="py-12 md:py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dịch vụ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cung cấp các dịch vụ chuyên nghiệp và toàn diện cho ngành dầu khí,
              từ kỹ thuật công nghệ đến hậu cần vận tải và nghiên cứu phát
              triển.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CardWithPadding
                  image={service.image}
                  imageAlt={service.title}
                  title={service.title}
                  description={service.description}
                  readMoreLink={service.readMoreLink}
                  readMoreText="Xem thêm"
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default FieldsCapabilitiesSection;
