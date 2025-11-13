import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import YouTube from "react-youtube";

// Import video file - chỉ dùng khi ở development
// Production sẽ dùng YouTube thay thế
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - File có thể không tồn tại trong production
import videoIntroSrc from "@/assets/video-intro.mp4";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className = "" }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect environment: production dùng YouTube, development dùng video file
  const isDevelopment = import.meta.env.MODE === "development";
  const youtubeVideoId = "pOZZdPBLX3g";

  // Chỉ dùng video file khi ở development và file tồn tại
  const useVideoFile = isDevelopment && videoIntroSrc;

  const playerOptions = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: youtubeVideoId,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      rel: 0,
      iv_load_policy: 3,
      fs: 0,
      disablekb: 1,
    },
  };

  // Parallax scroll setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.4, 0.5, 0.6]
  );

  // Subtitle opacity: ẩn ban đầu, hiện khi scroll xuống
  // Sử dụng window scroll để detect khi user scroll
  const { scrollYProgress: windowScrollProgress } = useScroll();
  const subtitleOpacity = useTransform(
    windowScrollProgress,
    [0, 0.02, 0.1],
    [0, 0, 1]
  );
  const subtitleY = useTransform(
    windowScrollProgress,
    [0, 0.02, 0.1],
    [30, 30, 0]
  );

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className={`relative w-full h-[100vh] overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          y: videoY,
          scale: videoScale,
          minHeight: "120%",
        }}
      >
        {/* Video: YouTube cho production, file cho development */}
        {!useVideoFile ? (
          <div className="absolute top-0 left-0 w-full h-full">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                transform: "scale(1.2)",
                transformOrigin: "center center",
                width: "100%",
                height: "100%",
              }}
            >
              <YouTube
                videoId={youtubeVideoId}
                opts={playerOptions}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{
                  width: "100%",
                  height: "100%",
                  minWidth: "100%",
                  minHeight: "100%",
                }}
              />
            </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            src={videoIntroSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        )}
      </motion.div>

      {/* Gradient Overlay với dynamic opacity */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content Layer với Parallax */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center"
        style={{ y: contentY }}
      >
        <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem] py-20 md:py-32 lg:py-40">
          <motion.div
            className="text-center space-y-6 md:space-y-8 lg:space-y-10"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Title */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl laptop:text-8xl fhd:text-9xl qhd:text-[10rem] font-bold text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
              style={{
                textShadow:
                  "0 4px 12px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.6)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Về Chúng Tôi
            </motion.h1>

            {/* Subtitle - Hiện khi scroll xuống */}
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl laptop:text-4xl fhd:text-5xl qhd:text-6xl text-white font-light max-w-5xl lg:max-w-6xl laptop:max-w-7xl fhd:max-w-8xl qhd:max-w-9xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
              style={{
                textShadow:
                  "0 2px 8px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)",
                opacity: subtitleOpacity,
                y: subtitleY,
              }}
            >
              Khám phá hành trình 44 năm phát triển và những thành tựu nổi bật
              của Vietsovpetro
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Additional decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top gradient fade */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/30 to-transparent" />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    </section>
  );
};

export default AboutSection;
