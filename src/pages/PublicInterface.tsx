import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Shared";
import { Navigation } from "@/components/PublicSystem";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Footer";
import { NAVIGATION_CONFIG, ROUTES } from "@/config/navigation";
import {
  HomePage,
  AboutPage,
  UnitsPage,
  ProductsServicesPage,
  NewsPage,
  ResourcesPage,
  RecruitmentPage,
  AdmissionPage,
  PartnerProjectPage,
} from "@/pages/public";
import DocumentationPage from "@/pages/DocumentationPage";
import BlankPage from "@/pages/BlankPage";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const PublicInterface: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollToSection } = useScrollToSection();
  const [activeNavItem, setActiveNavItem] = useState("TRANG CHỦ");
  const [showDocumentation, setShowDocumentation] = useState(false);

  const { URL_TO_NAV_ITEM, NAV_ITEM_TO_URL } = NAVIGATION_CONFIG.MAIN;

  // Update active nav item based on current URL
  useEffect(() => {
    const currentPath = location.pathname;
    let navItem = URL_TO_NAV_ITEM[currentPath];

    if (!navItem) {
      const sortedPaths = Object.keys(URL_TO_NAV_ITEM).sort(
        (a, b) => b.length - a.length
      );
      for (const path of sortedPaths) {
        if (currentPath.startsWith(path) && path !== "/") {
          navItem = URL_TO_NAV_ITEM[path];
          break;
        }
      }
    }

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

  const handleAboutSectionClick = (sectionId: string) => {
    // Navigate to About page first if not already there
    if (location.pathname !== "/gioithieu") {
      navigate("/gioithieu");
    }

    // Scroll to section after navigation
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  };

  const handleInternalToggle = () => {
    navigate(ROUTES.INTERNAL.HOME);
  };

  return (
    <div className="min-h-screen relative">
      <Header
        onDocumentationClick={() => setShowDocumentation(true)}
        onInterfaceToggle={handleInternalToggle}
        interfaceToggleText="Chuyển giao diện nội bộ"
      />
      <Navigation
        activeItem={activeNavItem}
        onItemClick={handleNavItemClick}
        onAboutSectionClick={handleAboutSectionClick}
        onUrlNavigation={(url) => navigate(url)}
        interfaceType="public"
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gioithieu/*" element={<AboutPage />} />
        <Route path="/donvi/*" element={<UnitsPage />} />
        <Route path="/spvadichvu" element={<ProductsServicesPage />} />
        <Route path="/tintuc/*" element={<NewsPage />} />
        <Route path="/nguonluc" element={<ResourcesPage />} />
        <Route path="/tuyendung" element={<RecruitmentPage />} />
        <Route path="/tuyensinh" element={<AdmissionPage />} />
        <Route
          path="/linhvuc-nangluc"
          element={<BlankPage title="Lĩnh vực và Năng lực Hoạt động" />}
        />
        <Route path="/doitac-duan" element={<PartnerProjectPage />} />
        <Route
          path="/phattrien"
          element={<BlankPage title="Phát triển Bền vững" />}
        />
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
