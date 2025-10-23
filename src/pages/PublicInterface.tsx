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
  PartnerProjectPage,
  SustainableDevelopmentPage,
} from "@/pages/public/index";
import FieldsCapabilitiesPage from "@/pages/public/FieldsCapabilitiesPage";
import ContactPage from "@/pages/public/ContactPage/ContactPage";
import SearchPage from "@/pages/public/SearchPage/SearchPage";
import DocumentationPage from "@/pages/DocumentationPage";
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

    // Only set active nav item if we found a valid match
    // This ensures pages not in the menu (like /lienhe) won't have any active nav item
    if (navItem) {
      setActiveNavItem(navItem);
    } else {
      // Clear active nav item for pages not in the menu
      setActiveNavItem("");
    }
  }, [location.pathname, URL_TO_NAV_ITEM]);

  const handleNavItemClick = (item: string) => {
    const url = NAV_ITEM_TO_URL[item];
    if (url) {
      navigate(url);
    }
  };

  const handleSectionClick = (pagePath: string, sectionId: string) => {
    const currentPath = location.pathname;

    // If we're already on the correct page, just scroll to the section
    if (currentPath === pagePath) {
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      // Navigate to the page first, then scroll to section
      navigate(pagePath);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500); // Increased delay to allow page navigation and rendering
    }
  };

  const handleAboutSectionClick = (sectionId: string) => {
    handleSectionClick("/gioithieu", sectionId);
  };

  const handleFieldsSectionClick = (sectionId: string) => {
    handleSectionClick("/linhvuc-nangluc", sectionId);
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
        onFieldsSectionClick={handleFieldsSectionClick}
        onUrlNavigation={(url) => navigate(url)}
        interfaceType="public"
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gioithieu/*" element={<AboutPage />} />
        <Route path="/donvi/*" element={<UnitsPage />} />
        <Route path="/spvadichvu" element={<ProductsServicesPage />} />
        <Route path="/tintuc/*" element={<NewsPage />} />
        <Route path="/cacnguonchung/*" element={<ResourcesPage />} />
        <Route path="/linhvuc-nangluc" element={<FieldsCapabilitiesPage />} />
        <Route path="/doitac-duan/*" element={<PartnerProjectPage />} />
        <Route path="/phattrien/*" element={<SustainableDevelopmentPage />} />
        <Route path="/lienhe" element={<ContactPage />} />
        <Route path="/tim-kiem" element={<SearchPage />} />
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
