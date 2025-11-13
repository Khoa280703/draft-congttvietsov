import React from "react";
import { motion } from "framer-motion";
import { EnterpriseCard } from "@/components/SustainableDevelopmentPage";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";
import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";

const enterpriseData = [
  {
    index: "01",
    title: "Xí nghiệp Khai thác Dầu khí",
    description:
      "Xí nghiệp Khai thác Dầu khí có đầy đủ năng lực về con người, máy móc, nhân lực và trang thiết bị hiện đại...",
    image: danKhoanVietsov,
    imagePosition: "right" as const,
  },
  {
    index: "02",
    title:
      "Xí nghiệp Xây lắp, Khảo sát và Sửa chữa các công trình khai thác dầu khí",
    description:
      "Xí nghiệp Xây lắp, Khảo sát và Sửa chữa các công trình khai thác dầu khí có đầy đủ năng lực về con người...",
    image: hoiNghiSuKien,
    imagePosition: "left" as const,
  },
  {
    index: "03",
    title: "Xí nghiệp Khai thác các công trình khí",
    description:
      "Xí nghiệp Khai thác các công trình khí có đầy đủ năng lực về con người, máy móc, nhân lực...",
    image: hoiNghiPetro,
    imagePosition: "right" as const,
  },
  {
    index: "04",
    title: "Xí nghiệp Khai thác các công trình khí",
    description:
      "Xí nghiệp Khai thác các công trình khí có đầy đủ năng lực về con người, máy móc, nhân lực...",
    image: hoiNghiPetro,
    imagePosition: "left" as const,
  },
  {
    index: "05",
    title: "Xí nghiệp Khai thác các công trình khí",
    description:
      "Xí nghiệp Khai thác các công trình khí có đầy đủ năng lực về con người, máy móc, nhân lực...",
    image: hoiNghiPetro,
    imagePosition: "right" as const,
  },
  {
    index: "06",
    title: "Xí nghiệp Khai thác các công trình khí",
    description:
      "Xí nghiệp Khai thác các công trình khí có đầy đủ năng lực về con người, máy móc, nhân lực...",
    image: hoiNghiPetro,
    imagePosition: "left" as const,
  },
  {
    index: "07",
    title: "Xí nghiệp Khai thác các công trình khí",
    description:
      "Xí nghiệp Khai thác các công trình khí có đầy đủ năng lực về con người, máy móc, nhân lực...",
    image: hoiNghiPetro,
    imagePosition: "right" as const,
  },
  {
    index: "08",
    title: "Xí nghiệp Khai thác các công trình khí",
    description:
      "Xí nghiệp Khai thác các công trình khí có đầy đủ năng lực về con người, máy móc, nhân lực...",
    image: hoiNghiPetro,
    imagePosition: "left" as const,
  },
];

const LandingUnits: React.FC = () => {
  return (
    <section className="bg-white  py-12 md:py-20">
      <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
        {enterpriseData.map((item, index) => (
          <motion.div
            key={item.index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <EnterpriseCard
              index={item.index}
              title={item.title}
              description={item.description}
              image={item.image}
              imagePosition={item.imagePosition}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LandingUnits;
