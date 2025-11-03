import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import OrganizationStructure from "./OrganizationStructure";
import { type OrgStructureSectionProps, defaultOrgStructureData } from "./data";

const OrgStructureSection: React.FC<OrgStructureSectionProps> = ({
  data = defaultOrgStructureData,
  className = "",
}) => {
  return (
    <motion.section
      id="organization-structure"
      className={`${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative z-10">
        <motion.h1
          className="text-4xl md:text-4xl lg:text-3xl 2xl:text-4xl font-medium left-1/10 text-gray-800 mb-6 lg:mb-5 2xl:mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {data.title}
        </motion.h1>

        <div className="grid grid-cols-1 gap-8 md:gap-16 lg:gap-12 2xl:gap-16">
          <motion.div
            className="text-gray-700"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="space-y-4 lg:space-y-3 2xl:space-y-4 text-gray-600 leading-relaxed text-base lg:text-sm 2xl:text-base">
              {data.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {paragraph.includes("Vietsovpetro") ? (
                    <>
                      {paragraph.split("Vietsovpetro")[0]}
                      <span className="font-bold text-vietsov-green text-xl">
                        Vietsovpetro
                      </span>
                      {paragraph.split("Vietsovpetro")[1]}
                    </>
                  ) : (
                    paragraph
                  )}
                </motion.p>
              ))}
            </div>

            <motion.a
              href={data.readMoreLink}
              className="inline-flex items-center font-semibold mt-8 hover:text-vietsov-green transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              {data.readMoreText}
              <FiArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <OrganizationStructure />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default OrgStructureSection;
