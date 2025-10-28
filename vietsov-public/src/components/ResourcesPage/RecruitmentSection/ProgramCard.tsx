import React from "react";
import { motion } from "framer-motion";
import { type AdmissionProgram } from "./admissionData";

interface ProgramCardProps {
  program: AdmissionProgram;
  index: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, index }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800";
      case "closed":
        return "bg-red-100 text-red-800";
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "open":
        return "Đang mở";
      case "closed":
        return "Đã đóng";
      case "upcoming":
        return "Sắp mở";
      default:
        return "Không xác định";
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -5 }}
    >
      {/* Header with Image and Status */}
      <div className="relative">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
              program.status
            )}`}
          >
            {getStatusText(program.status)}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
            {program.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
            {program.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {program.description}
          </p>

          {/* Program Details */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-2">Thời hạn:</span>
              <span>{program.applicationDeadline}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-2">Thời gian:</span>
              <span>{program.duration}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-2">Trình độ:</span>
              <span>{program.level}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-2">Học bổng:</span>
              <span>{program.scholarship}</span>
            </div>
          </div>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">
              Đặc điểm nổi bật:
            </h4>
            <div className="flex flex-wrap gap-1">
              {program.features.slice(0, 3).map((feature, featureIndex) => (
                <span
                  key={featureIndex}
                  className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                >
                  {feature}
                </span>
              ))}
              {program.features.length > 3 && (
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md">
                  +{program.features.length - 3} khác
                </span>
              )}
            </div>
          </div>

          {/* Requirements */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">
              Yêu cầu:
            </h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {program.requirements.slice(0, 2).map((req, reqIndex) => (
                <li key={reqIndex} className="flex items-start">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {req}
                </li>
              ))}
              {program.requirements.length > 2 && (
                <li className="text-gray-500">
                  +{program.requirements.length - 2} yêu cầu khác
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Action Button - Always at bottom */}
        <motion.button
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium mt-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Xem chi tiết và đăng ký
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
