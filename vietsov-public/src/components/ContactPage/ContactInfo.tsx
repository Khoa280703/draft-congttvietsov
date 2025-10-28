import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGlobe } from "react-icons/fi";

const ContactInfo: React.FC = () => {
  const contactDetails = [
    {
      icon: FiMapPin,
      title: "Địa chỉ",
      content:
        "Trụ sở VietsovPetro, 105 Lê Lợi, Phường 6, Vũng Tàu, Bà Rịa - Vũng Tàu, Việt Nam",
      action: () =>
        window.open(
          "https://www.google.com/maps/search/VietsovPetro+Vũng+Tàu",
          "_blank"
        ),
    },
    {
      icon: FiPhone,
      title: "Điện thoại",
      content: "02543839871",
      action: () => window.open("tel:02543839871", "_self"),
    },
    {
      icon: FiMail,
      title: "Email",
      content: "vspadmin@vietsov.com.vn",
      action: () => window.open("mailto:vspadmin@vietsov.com.vn", "_self"),
    },
    {
      icon: FiGlobe,
      title: "Website",
      content: "www.vietsov.com.vn",
      action: () => window.open("https://www.vietsov.com.vn", "_blank"),
    },
  ];

  return (
    <motion.section
      className="font-sans"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-medium text-gray-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Thông Tin Liên Hệ
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          Liên hệ với chúng tôi qua các kênh thông tin dưới đây
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-gray-200 hover:border-vietsov-green/30 hover:shadow-md cursor-pointer transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: "easeOut",
              }}
              onClick={item.action}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-vietsov-green/10 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-vietsov-green" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  {item.content}
                </p>
                <p className="text-sm text-vietsov-green font-medium">
                  {item.title === "Địa chỉ"
                    ? "Click để xem bản đồ"
                    : item.title === "Điện thoại"
                    ? "Click để gọi"
                    : item.title === "Email"
                    ? "Click để gửi email"
                    : "Click để truy cập website"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ContactInfo;
