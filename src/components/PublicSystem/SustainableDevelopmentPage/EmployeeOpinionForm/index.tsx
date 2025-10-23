import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiPaperclip } from "react-icons/fi";
import {
  type EmployeeOpinionFormData,
  initialFormData,
  departments,
} from "./data";

const EmployeeOpinionForm: React.FC = () => {
  const [formData, setFormData] =
    useState<EmployeeOpinionFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setFormData((prev) => ({
        ...prev,
        [name]: file,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="bg-white rounded-lg shadow-sm p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FiSend className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Cảm ơn bạn đã gửi ý kiến!
        </h2>
        <p className="text-gray-600 mb-6">
          Ý kiến của bạn đã được gửi thành công. Chúng tôi sẽ xem xét và phản
          hồi trong thời gian sớm nhất.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData(initialFormData);
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Gửi ý kiến khác
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-vietsov-green text-center mb-2">
          Chia sẻ góp ý
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        <div className="border border-white rounded-lg p-6 space-y-6">
          {/* Họ và tên */}
          <div className="flex items-center">
            <label className="text-sm font-medium text-gray-700 w-24 flex-shrink-0">
              Họ và tên
            </label>
            <input
              type="text"
              name="employeeName"
              value={formData.employeeName}
              onChange={handleInputChange}
              required
              className="flex-1 ml-4 px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nhập họ và tên"
            />
          </div>

          {/* Đơn vị */}
          <div className="flex items-center">
            <label className="text-sm font-medium text-gray-700 w-24 flex-shrink-0">
              Đơn vị
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              required
              className="flex-1 ml-4 px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Chọn đơn vị</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Ý kiến */}
          <div className="flex items-start">
            <label className="text-sm font-medium text-gray-700 w-24 flex-shrink-0 pt-2">
              Ý kiến
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
              rows={4}
              className="flex-1 ml-4 px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nhập ý kiến của bạn..."
            />
          </div>

          {/* Đính kèm */}
          <div className="flex items-center">
            <label className="text-sm font-medium text-gray-700 w-24 flex-shrink-0">
              Đính kèm
            </label>
            <div className="flex-1 ml-4">
              <label className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                <FiPaperclip className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-gray-500">
                  Click here to attach a file
                </span>
                <input
                  type="file"
                  name="attachment"
                  onChange={handleInputChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-vietsov-green border border-vietsov-green text-white px-8 py-2 rounded-md hover:bg-white hover:text-vietsov-green disabled:opacity-50 disabled:cursor-not-allowed flex items-center transition-colors"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                Đang gửi...
              </>
            ) : (
              "Gửi"
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default EmployeeOpinionForm;
