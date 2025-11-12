import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import PartnerLogosGrid from "./PartnerLogosGrid";
import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";

interface PartnerSectionProps {
  isLightMode?: boolean;
}

const PartnerSection: React.FC<PartnerSectionProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Parallax scroll setup - chỉ áp dụng khi section trong viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  // Parallax transforms - khi ở giữa màn hình, content dịch xuống để căn giữa
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const titleY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "5%", "-5%"]
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "8%", "-3%"]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.5, 1, 1, 0.9]
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image với Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <img
          src={bannerDanKhoan}
          alt="Background"
          className="w-full h-[120%] object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-green-600/70 to-blue-900/80" />
      </motion.div>

      {/* Background Pattern - Network */}
      <div className="absolute inset-0 opacity-20 z-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 600"
        >
          <defs>
            <pattern
              id="network-pattern"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="40" cy="40" r="3" fill="white" opacity="0.8" />
              <line
                x1="40"
                y1="40"
                x2="80"
                y2="40"
                stroke="white"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <line
                x1="40"
                y1="40"
                x2="40"
                y2="80"
                stroke="white"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <line
                x1="40"
                y1="40"
                x2="80"
                y2="80"
                stroke="white"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <line
                x1="40"
                y1="40"
                x2="0"
                y2="0"
                stroke="white"
                strokeWidth="1.5"
                opacity="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <motion.div className="relative z-20" style={{ opacity }}>
        {/* Title Section với Parallax */}
        <motion.div
          className="container mx-auto px-4 pt-24 md:pt-32 lg:pt-40"
          style={{ y: titleY }}
        >
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              className="text-white/90 text-sm md:text-base uppercase tracking-wider mb-4 font-medium"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ĐỐI TÁC - KHÁCH HÀNG
            </motion.h3>
            <motion.h2
              className="text-white text-3xl md:text-4xl lg:text-5xl inch32:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              ĐỒNG HÀNH CÙNG CHÚNG TÔI
            </motion.h2>
          </motion.div>
        </motion.div>

        {/* Partner Logos với Parallax */}
        <motion.div style={{ y: contentY }}>
          <PartnerLogosGrid />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PartnerSection;
