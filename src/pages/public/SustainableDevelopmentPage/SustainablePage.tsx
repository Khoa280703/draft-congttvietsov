import React from "react";
import { motion } from "framer-motion";

const SustainablePage: React.FC = () => {
  return (
    <section className="bg-white font-sans py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Đổi mới Công nghệ
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vietsovpetro không ngừng đổi mới và ứng dụng các công nghệ tiên tiến
            để nâng cao hiệu quả sản xuất, giảm thiểu tác động môi trường và đảm
            bảo an toàn lao động.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Trí tuệ Nhân tạo
            </h3>
            <p className="text-gray-600 mb-4">
              Ứng dụng AI để tối ưu hóa quy trình sản xuất và dự đoán sự cố.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Dự đoán bảo trì</li>
              <li>• Tối ưu hóa sản xuất</li>
              <li>• Phân tích dữ liệu thông minh</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Internet of Things (IoT)
            </h3>
            <p className="text-gray-600 mb-4">
              Kết nối các thiết bị để giám sát và điều khiển từ xa.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Giám sát thiết bị thời gian thực</li>
              <li>• Điều khiển tự động</li>
              <li>• Tích hợp hệ thống</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Công nghệ Xanh
            </h3>
            <p className="text-gray-600 mb-4">
              Phát triển các công nghệ thân thiện với môi trường và bền vững.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Công nghệ carbon thấp</li>
              <li>• Tái chế và tái sử dụng</li>
              <li>• Năng lượng sạch</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainablePage;
