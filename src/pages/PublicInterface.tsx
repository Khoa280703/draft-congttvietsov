import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import { NAVIGATION_CONFIG, ROUTES } from "@/config/navigation";

const PublicInterface: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeNavItem, setActiveNavItem] = useState("TRANG CHỦ");

  const { URL_TO_NAV_ITEM, NAV_ITEM_TO_URL } = NAVIGATION_CONFIG.PUBLIC;

  // Update active nav item based on current URL
  useEffect(() => {
    const currentPath = location.pathname;
    const navItem = URL_TO_NAV_ITEM[currentPath];
    if (navItem) {
      setActiveNavItem(navItem);
    }
  }, [location.pathname, URL_TO_NAV_ITEM]);

  const handleNavItemClick = (item: string) => {
    const url = NAV_ITEM_TO_URL[item];
    if (url) {
      navigate(url);
    }
  };

  const handleInternalToggle = () => {
    navigate(ROUTES.INTERNAL.HOME);
  };

  return (
    <div className="min-h-screen bg-white relative">
      <button
        onClick={handleInternalToggle}
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
