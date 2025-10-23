import React, { useState } from "react";
import { motion } from "framer-motion";
import { jobPostings } from "./data";
import { admissionPrograms } from "./admissionData";
import JobCard from "./JobCard";
import ProgramCard from "./ProgramCard";

const RecruitmentSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"recruitment" | "admission">(
    "recruitment"
  );

  return (
    <motion.div
      className="bg-white font-sans py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <motion.div
          className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => setActiveTab("recruitment")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === "recruitment"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Tuyển dụng
          </button>
          <button
            onClick={() => setActiveTab("admission")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === "admission"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Tuyển sinh
          </button>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "recruitment" ? (
            <>
              <motion.h1
                className="text-4xl font-bold text-gray-800 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Thông tin tuyển dụng
              </motion.h1>
              <div>
                {jobPostings.map((job, i) => (
                  <JobCard key={job.id} job={job} index={i} />
                ))}
              </div>
            </>
          ) : (
            <>
              <motion.h1
                className="text-4xl font-bold text-gray-800 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Chương trình Tuyển sinh và Đào tạo
              </motion.h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {admissionPrograms.map((program, index) => (
                  <ProgramCard
                    key={program.id}
                    program={program}
                    index={index}
                  />
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RecruitmentSection;
