import React from "react";
import { FiArrowRight } from "react-icons/fi";
import hoiNghiSuKien from "@/assets/hoinghicongtacpvn.jpg";
import hoiNghiPetro from "@/assets/hoinghipetrovi.jpg";
import danKhoanVietsov from "@/assets/dankhoanvietsov.jpg";
import { FaQuoteLeft } from "react-icons/fa";

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
];

const EnterpriseCard: React.FC<EnterpriseCardProps> = ({
  title,
  image,
  description,
  imagePosition = "right",
}) => {
  const imageOrder =
    imagePosition === "left" ? "lg:order-first" : "lg:order-last";

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
      <div className={imageOrder}>
        <img
          src={image}
          alt={title}
          className="w-full h-[500px] md:h-[700px] lg:h-[850px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Khối text */}
      <div className="relative z-10">
        {/* số background */}
        <span
          className={`
      absolute -top-26 
      ${imagePosition === "left" ? "-left-20" : "-left-20"}
      text-7xl md:text-8xl lg:text-9xl
      font-bold text-gray-200/80 z-0 select-none pointer-events-none
    `}
        >
          <FaQuoteLeft />
        </span>

        <p className="text-sm font-bold text-green-600 mb-2 relative z-10">
          DỰ ÁN TIÊU BIỂU
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight relative z-10">
          {title}
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-6 relative z-10">
          {description}
        </p>
        <a
          href="#"
          className="flex items-center text-sm text-blue-600 font-semibold hover:text-blue-700 relative z-10"
        >
          Xem thêm <FiArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

const LandingUnits: React.FC = () => {
  return (
    <section className="bg-white font-sans py-12 md:py-20">
      <div className="container mx-auto px-4">
        {enterpriseData.map((item) => (
          <EnterpriseCard
            key={item.index}
            index={item.index}
            title={item.title}
            description={item.description}
            image={item.image}
            imagePosition={item.imagePosition}
          />
        ))}
      </div>
    </section>
  );
};

export default LandingUnits;
