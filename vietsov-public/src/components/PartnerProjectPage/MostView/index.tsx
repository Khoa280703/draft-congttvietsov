import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { mostViewedProjects } from "./data";

const MostView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-white rounded-lg shadow-sm p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="text-lg font-bold text-gray-800 mb-4">Dự án xem nhiều</h3>

      <div className="space-y-4">
        {mostViewedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="border-b border-gray-200 pb-4 last:border-b-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div
              className="cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
              onClick={() => navigate("/doitac-duan/du-an/chi-tiet")}
            >
              <div className="flex items-start space-x-3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-16 h-12 object-cover rounded-md flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-800 mb-1 leading-relaxed line-clamp-2">
                    {project.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{project.date}</span>
                    <span className="flex items-center">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {project.views}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MostView;
