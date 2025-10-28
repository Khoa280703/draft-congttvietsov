import React from "react";
import { motion } from "framer-motion";
import { CardFullDetailHori } from "@/components/Card";
import { useNavigate } from "react-router-dom";
import { relevantProjectsData } from "./data";

const RelevantProjects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      className="mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Dự án liên quan
        </h2>

        <div className="space-y-4">
          {relevantProjectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CardFullDetailHori
                image={project.image}
                imageAlt={project.title}
                title={project.title}
                description={project.description}
                category={project.category}
                timestamp={project.date}
                maxTitleLines={2}
                maxDescriptionLines={2}
                className="hover:shadow-md transition-shadow duration-300"
                onClick={() => navigate("/doitac-duan/du-an/chi-tiet")}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default RelevantProjects;
