import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import { Header, Navigation } from "@/components/PublicSystem";
import {
  SliderHome,
  ServicesGrid,
  FeaturedProjects,
  OilNewsSection,
  GradientImageOverlay,
} from "@/components/PublicSystem/HomePage";
import { IntroductionSection } from "@/components/PublicSystem/AboutPage";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Footer";
import bannerDanKhoan from "@/assets/banner-dankhoan.jpg";
import { NAVIGATION_CONFIG, ROUTES } from "@/config/navigation";
import {
  AboutPage,
  UnitsPage,
  ProductsServicesPage,
  NewsPage,
  ResourcesPage,
  RecruitmentPage,
  AdmissionPage,
} from "@/pages/public";
import DocumentationPage from "@/pages/DocumentationPage";

const PublicInterface: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeNavItem, setActiveNavItem] = useState("TRANG CHỦ");
  const [showDocumentation, setShowDocumentation] = useState(false);

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
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setShowDocumentation(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition-colors"
        >
          Tài liệu
        </button>
        <button
          onClick={handleInternalToggle}
          className="px-4 py-2 bg-gray-800 text-white rounded-md shadow-lg hover:bg-gray-700 transition-colors"
        >
          Chuyển giao diện nội bộ
        </button>
      </div>
      <Header />
      <Navigation activeItem={activeNavItem} onItemClick={handleNavItemClick} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SliderHome />
              <IntroductionSection />
              <ServicesGrid />
              <FeaturedProjects />
              <OilNewsSection />
              <GradientImageOverlay imageUrl={bannerDanKhoan} />
            </>
          }
        />
        <Route path="/gioithieu/*" element={<AboutPage />} />
        <Route path="/donvi/*" element={<UnitsPage />} />
        <Route path="/spvadichvu" element={<ProductsServicesPage />} />
        <Route path="/tintuc/*" element={<NewsPage />} />
        <Route path="/nguonluc" element={<ResourcesPage />} />
        <Route path="/tuyendung" element={<RecruitmentPage />} />
        <Route path="/tuyensinh" element={<AdmissionPage />} />
      </Routes>

      <PreFooter />
      <Footer />

      {/* Documentation Modal */}
      {showDocumentation && (
        <DocumentationPage onClose={() => setShowDocumentation(false)} />
      )}
    </div>
  );
};

export default PublicInterface;
