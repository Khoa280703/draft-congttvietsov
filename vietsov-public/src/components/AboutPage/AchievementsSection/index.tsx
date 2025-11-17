import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
} from "framer-motion";
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

// Counter animation component
const AnimatedCounter: React.FC<{
  value: string;
  delay?: number;
}> = ({ value, delay = 0 }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    // Extract number from value string (e.g., "650 giếng khoan" -> 650)
    const match = value.match(/([\d.]+)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseFloat(match[1]);
    const suffix = value.replace(match[0], "").trim();
    const isInteger = Number.isInteger(targetNumber);
    const duration = 2000;
    const startTime = Date.now() + delay;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed < 0) {
        requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      // Easing function (ease-out cubic)
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = targetNumber * eased;

      if (isInteger) {
        setDisplayValue(`${Math.floor(current)}${suffix ? ` ${suffix}` : ""}`);
      } else {
        setDisplayValue(
          `${current.toFixed(1)}${suffix ? ` ${suffix}` : ""}`
        );
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, delay]);

  return <span ref={ref}>{displayValue}</span>;
};

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
        className={`relative py-16 md:py-24 lg:py-20 qhd:py-24 text-white overflow-hidden ${className}`}
      >
        <div className="relative mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem] z-10">
          <div className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
        className={`relative py-16 md:py-24 lg:py-20 qhd:py-24 text-white overflow-hidden ${className}`}
      >
        <div className="relative mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem] z-10">
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
    <section
      id="achievements"
      className={`relative py-16 md:py-24 lg:py-20 qhd:py-24 text-white overflow-hidden ${className}`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: `url(${oilRigBg})`,
        }}
      >
        <div
          className="absolute inset-0 backdrop-blur-xs"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 51, 102, 0.9) 0%, rgba(41, 42, 43, 0.7) 100%)",
          }}
        ></div>
      </div>

      <div className="relative mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem] z-10">
        <div className="max-w-4xl">
          {/* Achievements Grid with 3D Card Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Achievement Card Component with 3D effects
const AchievementCard: React.FC<{
  achievement: Achievement;
  index: number;
}> = ({ achievement, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  // Spring animation for entrance
  const springConfig = {
    type: "spring" as const,
    stiffness: 100,
    damping: 15,
    mass: 0.8,
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative space-y-2 group"
      initial={{ opacity: 0, y: 60, rotateX: -15, scale: 0.8 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
            }
          : {}
      }
      transition={{
        ...springConfig,
        delay: index * 0.15,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-xl -z-10"
        style={{
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5))",
        }}
        animate={{
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Card content */}
      <motion.div
        className="relative"
        animate={{
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -2 : 0,
          scale: isHovered ? 1.02 : 1,
          z: isHovered ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <motion.h3
          className="text-2xl md:text-4xl lg:text-3xl qhd:text-4xl font-bold leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }
              : {}
          }
          transition={{
            ...springConfig,
            delay: index * 0.15 + 0.2,
          }}
        >
          <AnimatedCounter value={achievement.value} delay={index * 150} />
        </motion.h3>

        <motion.p
          className="text-sm md:text-base lg:text-sm qhd:text-base font-base leading-relaxed text-white/90"
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }
              : {}
          }
          transition={{
            ...springConfig,
            delay: index * 0.15 + 0.3,
          }}
        >
          {achievement.description}
        </motion.p>
      </motion.div>

      {/* Decorative line */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-transparent"
        initial={{ width: 0 }}
        animate={
          isInView
            ? {
                width: isHovered ? "100%" : "60%",
              }
            : { width: 0 }
        }
        transition={{
          delay: index * 0.15 + 0.4,
          duration: 0.8,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
};

export default AchievementsSection;
