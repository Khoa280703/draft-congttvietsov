import React from "react";
import { motion } from "framer-motion";
import oilRigBg from "@/assets/banner-dankhoan.jpg";
import { useAchievements } from "@/hooks/public/useAboutQueries";
import { type Achievement } from "@/types/api/public/aboutTypes";

interface AchievementsSectionProps {
  className?: string;
}

const defaultAchievements: Achievement[] = [
  {
    id: 1,
    title: "Giếng khoan",
    value: "650 giếng khoan",
    description:
      "Đã khoan hơn 650 giếng bao gồm hơn 75 giếng khoan tìm kiếm, thăm dò và 327 giếng khoan khai thác.",
  },
  {
    id: 2,
    title: "Dầu thô",
    value: "250tr tấn dầu thô",
    description:
      "Đã khai thác được trên 250 triệu tấn dầu thô. (Chiếm gần 60% tổng lượng dầu khai thác của toàn ngành dầu khí VN).",
  },
  {
    id: 3,
    title: "Công trình biển",
    value: "70 công trình biển",
    description:
      "Xây dựng trên 70 công trình biển: 14 giàn khoan cố định, 37 giàn đầu giếng, 2 cụm giàn CN trung tâm...",
  },
  {
    id: 4,
    title: "Khí đồng hành",
    value: "39 tỷ mét khối khí",
    description:
      "Đã thu gom và vận chuyển về bờ trên 39 tỷ mét khối khí đồng hành.",
  },
  {
    id: 5,
    title: "Đường ống",
    value: "850km đường ống",
    description:
      "Đã lắp đặt trên 850km đường ống kết nối tất cả các công trình nội mỏ, liên mỏ thành một hệ thống liên hoàn.",
  },
  {
    id: 6,
    title: "Doanh thu",
    value: "89 tỷ USD",
    description:
      "Doanh thu bán dầu đạt trên 89 tỷ USD, nộp Ngân sách Nhà nước và lợi nhuận phía Việt Nam trên 57,2 tỷ USD.",
  },
];

const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  className = "",
}) => {
  const {
    data: achievements = defaultAchievements,
    isLoading,
    error,
  } = useAchievements();

  if (isLoading) {
    return (
      <section
        className={`relative  py-16 md:py-24 lg:py-20 inch32:py-24 text-white overflow-hidden ${className}`}
      >
        <div className="relative container mx-auto px-4 md:px-12 lg:px-60 inch32:px-80 z-10">
          <div className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-6 inch32:gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="space-y-2 animate-pulse">
                  <div className="h-8 md:h-12 bg-white/20 rounded"></div>
                  <div className="h-4 bg-white/10 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        className={`relative  py-16 md:py-24 lg:py-20 inch32:py-24 text-white overflow-hidden ${className}`}
      >
        <div className="relative container mx-auto px-4 md:px-12 lg:px-60 inch32:px-80 z-10">
          <div className="max-w-4xl">
            <div className="text-center">
              <p className="text-red-300">
                Không thể tải dữ liệu thành tựu. Vui lòng thử lại sau.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      id="achievements"
      className={`relative  py-16 md:py-24 lg:py-20 inch32:py-24 text-white overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${oilRigBg})` }}
      >
        <div
          className="absolute inset-0 backdrop-blur-xs"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 51, 102, 0.9) 0%, rgba(41, 42, 43, 0.7) 100%)",
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-12 lg:px-60 inch32:px-80 z-10">
        <div className="max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-6 inch32:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="space-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <h3 className="text-2xl md:text-4xl lg:text-3xl inch32:text-4xl font-bold leading-tight">
                  {achievement.value}
                </h3>
                <p className="text-sm md:text-base lg:text-sm inch32:text-base font-base leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AchievementsSection;
