import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from "swiper";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import type { FeaturedProjectData } from "@/components/HomePage/TypicalProjectsSection/FeaturedProject";

// Import CSS của Swiper
import "swiper/css";
import "swiper/css/navigation";

interface FeaturedProjectSliderProps {
  projects: FeaturedProjectData[];
  className?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
}

const FeaturedProjectSlider: React.FC<FeaturedProjectSliderProps> = ({
  projects,
  className = "",
  autoplay = false,
  autoplayDelay = 5000,
}) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (swiperInstance) {
      // @ts-expect-error - Swiper navigation API requires manual assignment
      swiperInstance.params.navigation.prevEl = prevRef.current;
      // @ts-expect-error - Swiper navigation API requires manual assignment
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div
      className={`relative ${className} py-12 md:py-16 laptop:py-20 fhd:py-24 qhd:py-28`}
    >
      {/* Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-4 md:left-8 laptop:left-12 fhd:left-16 qhd:left-20 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 laptop:w-16 laptop:h-16 fhd:w-18 fhd:h-18 qhd:w-20 qhd:h-20 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <HiArrowLeft className="w-6 h-6 md:w-7 md:h-7 laptop:w-8 laptop:h-8 fhd:w-9 fhd:h-9 qhd:w-10 qhd:h-10 text-gray-700 group-hover:text-vietsov-green transition-colors" />
      </button>
      <button
        ref={nextRef}
        className="absolute right-4 md:right-8 laptop:right-12 fhd:right-16 qhd:right-20 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 laptop:w-16 laptop:h-16 fhd:w-18 fhd:h-18 qhd:w-20 qhd:h-20 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Next slide"
      >
        <HiArrowRight className="w-6 h-6 md:w-7 md:h-7 laptop:w-8 laptop:h-8 fhd:w-9 fhd:h-9 qhd:w-10 qhd:h-10 text-gray-700 group-hover:text-vietsov-green transition-colors" />
      </button>

      <Swiper
        modules={[Navigation, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          640: {
            coverflowEffect: {
              rotate: 15,
              depth: 150,
            },
          },
          1024: {
            coverflowEffect: {
              rotate: 20,
              depth: 200,
            },
          },
          1440: {
            coverflowEffect: {
              rotate: 25,
              depth: 250,
            },
          },
          1920: {
            coverflowEffect: {
              rotate: 30,
              depth: 300,
            },
          },
          2560: {
            coverflowEffect: {
              rotate: 35,
              depth: 350,
            },
          },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={
          autoplay
            ? {
                delay: autoplayDelay,
                disableOnInteraction: false,
              }
            : false
        }
        onSwiper={setSwiperInstance}
        className="!pb-12"
        style={{
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            className="!w-[280px] md:!w-[320px] lg:!w-[380px] laptop:!w-[420px] fhd:!w-[480px] qhd:!w-[540px]"
          >
            <motion.div
              className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] laptop:h-[550px] fhd:h-[600px] qhd:h-[650px] rounded-lg overflow-hidden shadow-2xl group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, z: 50 }}
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <img
                  src={project.image}
                  alt={project.imageAlt || project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Date Bar */}
                <div className="absolute top-4 left-4 bg-vietsov-green text-white px-4 py-2 text-sm font-semibold rounded-md shadow-lg z-20">
                  {project.date}
                </div>
              </div>

              {/* Title - Hiển thị khi hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 laptop:p-10 fhd:p-12 qhd:p-14 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-30">
                <h2 className="text-xl lg:text-2xl laptop:text-3xl fhd:text-4xl qhd:text-5xl font-bold text-white leading-tight line-clamp-3">
                  {project.title}
                </h2>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProjectSlider;
