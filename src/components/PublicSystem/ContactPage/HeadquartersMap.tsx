import React from "react";
import { motion } from "framer-motion";
import { FiNavigation } from "react-icons/fi";

const HeadquartersMap: React.FC = () => {
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
          Trụ Sở Chính
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          Tìm đường đến trụ sở chính của chúng tôi
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Google Maps */}
        <motion.div
          className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.6964220457503!2d107.07311937599613!3d10.366140366625523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31756fb82c5be249%3A0xee247e160c6169f4!2sVietsovpetro!5e0!3m2!1svi!2s!4v1761017533150!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          />
          {/* Direction Button */}
          <div className="absolute bottom-4 right-4">
            <motion.button
              onClick={() => {
                window.open(
                  "https://www.google.com/maps/dir/?api=1&destination=Vietsovpetro&travelmode=driving",
                  "_blank"
                );
              }}
              className="bg-vietsov-green text-white py-3 px-6 rounded-lg font-medium hover:bg-vietsov-green/90 transition-colors duration-300 flex items-center space-x-2 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiNavigation className="w-5 h-5" />
              <span>Chỉ đường</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeadquartersMap;
