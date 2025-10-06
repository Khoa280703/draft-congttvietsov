import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import Header from "@/components/PriviteSystem/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";
import VietsopetroLogo from "@/assets/vietsovlogogiulua.png";
import { NAVIGATION_CONFIG, ROUTES } from "@/config/navigation";
import {
  InternalHomePage,
  InternalAboutPage,
  InternalNewsPage,
  InternalDevelopmentPage,
  InternalReportsPage,
  InternalApplicationsPage,
  InternalSearchPage,
} from "@/pages/internal";

const InternalInterface: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeNavItem, setActiveNavItem] = useState("TRANG CHỦ");

  const { URL_TO_NAV_ITEM, NAV_ITEM_TO_URL } = NAVIGATION_CONFIG.INTERNAL;

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
    navigate(ROUTES.PUBLIC.HOME);
  };

  return (
    <div className="min-h-screen bg-white relative">
      <button
        onClick={handleInternalToggle}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-800 text-white rounded-md shadow-lg hover:bg-gray-700 transition-colors"
      >
        Chuyển giao diện công khai
      </button>

      <Header />

      <img
        src={VietsopetroLogo}
        alt="Vietsopetro Logo"
        className="w-36 h-24 mx-auto my-4"
      />

      <div className="pb-1">
        <Navigation
          activeItem={activeNavItem}
          onItemClick={handleNavItemClick}
        />
      </div>

      <Routes>
        <Route path="/" element={<InternalHomePage />} />
        <Route path="/gioithieu" element={<InternalAboutPage />} />
        <Route path="/tintuc/*" element={<InternalNewsPage />} />
        <Route path="/phattrien" element={<InternalDevelopmentPage />} />
        <Route path="/baocao" element={<InternalReportsPage />} />
        <Route path="/ungdung" element={<InternalApplicationsPage />} />
        <Route path="/tracuu" element={<InternalSearchPage />} />
      </Routes>

      <PreFooter />
      <Footer />
    </div>
  );
};

export default InternalInterface;
