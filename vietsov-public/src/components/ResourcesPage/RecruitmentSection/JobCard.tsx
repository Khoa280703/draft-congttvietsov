import React from "react";
import { motion } from "framer-motion";
import { type JobPosting } from "./data";

interface JobCardProps {
  job: JobPosting;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  const { title, location, quantity, level, salary, deadline, status } = job;

  return (
    <motion.div
      className="flex justify-between items-start border-b border-gray-200 p-4 mb-4 bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex">
        <div className="w-10 h-10 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center font-semibold text-green-600 mr-4">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div>
          <a
            href="#"
            className="font-semibold text-gray-800 hover:text-green-600 transition-colors cursor-pointer"
          >
            {title}
          </a>
          <div className="mt-2 space-y-1 text-sm text-gray-500">
            <p>Nơi làm việc: {location}</p>
            <p>Số lượng: {quantity}</p>
            <p>Trình độ: {level}</p>
            <p>Mức lương: {salary}</p>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 ml-6">
        <span
          className={`px-4 py-1.5 rounded-md text-sm font-medium ${
            status === "open"
              ? "bg-gray-100 text-gray-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {deadline}
        </span>
      </div>
    </motion.div>
  );
};

export default JobCard;
