import React from "react";
import { motion } from "framer-motion";
import { CardFullDetail } from "@/components/Card";
import { useNavigate } from "react-router-dom";
import { otherProjectsData } from "./data";

const OtherProjects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Dự án khác
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá thêm các dự án khác của chúng tôi trong lĩnh vực dầu khí,
            năng lượng và môi trường
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <CardFullDetail
                image={project.image}
                imageAlt={project.title}
                category={project.category}
                title={project.title}
                timestamp={project.date}
                description={project.description}
                imageHeight="h-64"
                className="h-full hover:shadow-lg transition-shadow duration-300"
                onClick={() => navigate("/doitac-duan/du-an/chi-tiet")}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OtherProjects;
