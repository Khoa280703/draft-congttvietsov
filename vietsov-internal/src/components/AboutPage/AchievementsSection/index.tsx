import React from "react";
import { motion } from "framer-motion";
import oilRigBg from "@/assets/banner-dankhoan.jpg";
import { type AchievementsSectionProps, defaultAchievements } from "./data";

const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  achievements = defaultAchievements,
  className = "",
}) => {
  return (
    <motion.section
      id="achievements"
      className={`relative font-sans py-16 md:py-24 text-white overflow-hidden ${className}`}
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

      <div className="relative container mx-auto px-4 md:px-12 z-10">
        <div className="max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
                <h3 className="text-2xl md:text-4xl font-bold leading-tight">
                  {achievement.value}
                </h3>
                <p className="text-sm md:text-base font-base leading-relaxed">
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
