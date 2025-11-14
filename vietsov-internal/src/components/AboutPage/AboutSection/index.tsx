import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import YouTube from "react-youtube";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className = "" }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect environment: production luôn dùng YouTube
  const isDevelopment = import.meta.env.MODE === "development";
  const youtubeVideoId = "pOZZdPBLX3g";

  // Dynamic import video file - chỉ khi ở development
  // Production luôn dùng YouTube (không import file)
  const [videoIntroSrc, setVideoIntroSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (isDevelopment) {
      const loadVideo = async () => {
        try {
          const videoName = "video-intro";
          const videoModule = await import(`@/assets/${videoName}.mp4`);
          setVideoIntroSrc(videoModule.default);
        } catch (error) {
          console.warn("Local video file not found, using YouTube.", error);
          setVideoIntroSrc(null);
        }
      };
      loadVideo();
    }
  }, [isDevelopment]);

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

  // Title opacity: hiện khi scroll, sau 2s tự ẩn
  const [titleVisible, setTitleVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect scroll để hiển thị title
  const { scrollYProgress: windowScrollProgress } = useScroll();

  useEffect(() => {
    // Subscribe to scroll progress changes
    const unsubscribe = windowScrollProgress.on("change", (latest) => {
      if (latest > 0.01) {
        // Có scroll, hiển thị title
        setTitleVisible(true);

        // Clear timeout cũ nếu có
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // Sau 2 giây, ẩn title
        timeoutRef.current = setTimeout(() => {
          setTitleVisible(false);
        }, 2000);
      }
    });

    return () => {
      unsubscribe();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [windowScrollProgress]);

  // Animation cho title
  const titleOpacity = titleVisible ? 1 : 0;
  const titleY = titleVisible ? 0 : 20;

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
          <div className="text-center">
            {/* Title - Hiện khi scroll, sau 2s tự ẩn */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl laptop:text-8xl fhd:text-9xl qhd:text-[10rem] font-bold text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
              style={{
                textShadow:
                  "0 4px 12px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.6)",
              }}
              animate={{
                opacity: titleOpacity,
                y: titleY,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              Về Chúng Tôi
            </motion.h1>
          </div>
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

