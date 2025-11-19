import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CardFullDetail, CardFullDetailHori } from "@/components/Card";
import { SeeMoreButton } from "@/components/Button";
import { getTypicalProjectsSectionThemeColors } from "../TypicalProjectsSection/theme";
import {
  defaultPetroMainArticle,
  defaultPetroSideArticles,
  type PetroNewsArticle,
} from "./data";

interface PetroNewsSectionProps {
  mainArticle?: PetroNewsArticle;
  sideArticles?: PetroNewsArticle[];
  isLightMode?: boolean;
  className?: string;
}

const PetroNewsSection: React.FC<PetroNewsSectionProps> = ({
  mainArticle = defaultPetroMainArticle,
  sideArticles = defaultPetroSideArticles,
  isLightMode = true,
  className = "",
}) => {
  const theme = getTypicalProjectsSectionThemeColors(isLightMode);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const mainCardY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);
  const sideCardY = useTransform(scrollYProgress, [0, 1], ["5%", "-2%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.5]);

  const handleNavigate = (link?: string) => () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className={`${theme.sectionBackground} transition-colors duration-700 py-8 md:py-12 lg:py-14 laptop:py-16 fhd:py-20 qhd:py-24 relative ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Parallax glow */}
      <motion.div
        style={{ y: backgroundY, opacity: glowOpacity }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute inset-0 blur-3xl opacity-60 bg-gradient-to-br from-pvn-blue/30 via-transparent to-vietsov-green/40" />
      </motion.div>

      <div className="relative z-10 mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full space-y-10 md:space-y-12 lg:space-y-14 laptop:space-y-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p
            className={`${theme.relatedProjectsTitlePrefix} text-2xl md:text-3xl lg:text-4xl laptop:text-4xl fhd:text-5xl qhd:text-6xl tracking-[0.3em] uppercase`}
          >
            TIN TỨC
          </p>
          <h2
            className={`${theme.relatedProjectsTitleSuffix} text-4xl md:text-5xl lg:text-6xl laptop:text-6xl fhd:text-7xl qhd:text-8xl font-extrabold mt-4`}
          >
            DẦU KHÍ
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 laptop:gap-14 fhd:gap-16 qhd:gap-20 items-start">
          {/* Main card */}
          <motion.div
            className="w-full featured-news-card-wrapper [&>div]:!bg-transparent"
            style={{ y: mainCardY }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <CardFullDetail
              image={mainArticle.image}
              imageAlt={mainArticle.imageAlt}
              category={mainArticle.category}
              title={mainArticle.title}
              timestamp={mainArticle.timestamp}
              description={mainArticle.description}
              onClick={handleNavigate(mainArticle.link)}
              imageHeight="h-64 md:h-72 lg:h-80 laptop:h-88 fhd:h-[30rem] qhd:h-[34rem]"
              className="h-full shadow-[0_45px_85px_rgba(0,0,0,0.18)] rounded-none"
              compact={true}
            />
          </motion.div>

          {/* Side cards */}
          <motion.div
            className="w-full flex flex-col gap-4 md:gap-5 lg:gap-6 laptop:gap-7 fhd:gap-8 qhd:gap-10"
            style={{ y: sideCardY }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {sideArticles.slice(0, 3).map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 6 }}
                className="overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.12)] rounded-none"
              >
                <CardFullDetailHori
                  image={article.image}
                  imageAlt={article.imageAlt}
                  category={article.category}
                  title={article.title}
                  timestamp={article.timestamp}
                  description={article.description}
                  onClick={handleNavigate(article.link)}
                  maxTitleLines={2}
                  maxDescriptionLines={3}
                  compact={true}
                  className="rounded-none"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* See More Button */}
        <motion.div
          className="flex justify-center mt-8 md:mt-10 lg:mt-12 laptop:mt-14 fhd:mt-16 qhd:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <SeeMoreButton
            text="Xem thêm"
            href="/tintuc/tin-dau-khi"
            variant="outline"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PetroNewsSection;
