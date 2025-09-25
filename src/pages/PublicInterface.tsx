import React, { useState } from "react";
import Header from "@/components/PublicSystem/Header";
import Navigation from "@/components/PublicSystem/Navigation";
import SliderHome from "@/components/PublicSystem/SliderHome";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Footer";
import IntroductionSection from "@/components/PublicSystem/IntroductionSection";
import ServicesGrid from "@/components/PublicSystem/ServicesGrid";
import FeaturedProjects from "@/components/PublicSystem/FeaturedProjects";
import OilNewsSection from "@/components/PublicSystem/OilNewsSection";
import GradientImageOverlay from "@/components/PublicSystem/GradientImageOverlay";
import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";

interface PublicInterfaceProps {
  onInternalToggle: () => void;
}

const PublicInterface: React.FC<PublicInterfaceProps> = ({
  onInternalToggle,
}) => {
  const [activeNavItem, setActiveNavItem] = useState("TRANG CHỦ");

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
  };

  return (
    <div className="min-h-screen bg-white relative">
      <button
        onClick={onInternalToggle}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-800 text-white rounded-md shadow-lg hover:bg-gray-700 transition-colors"
      >
        Chuyển giao diện nội bộ
      </button>
      <Header />
      <Navigation activeItem={activeNavItem} onItemClick={handleNavItemClick} />
      <SliderHome />
      <IntroductionSection />
      <ServicesGrid />
      <FeaturedProjects />
      <OilNewsSection />
      <GradientImageOverlay imageUrl={bannerDanKhoan} />
      <PreFooter />
      <Footer />
    </div>
  );
};

export default PublicInterface;
