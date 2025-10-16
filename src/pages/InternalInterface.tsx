import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import Header from "@/components/PriviteSystem/Header";
import Navigation from "@/components/PublicSystem/Navigation";
import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";
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
import DocumentationPage from "@/pages/DocumentationPage";

const InternalInterface: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeNavItem, setActiveNavItem] = useState("TRANG CHỦ");
  const [showDocumentation, setShowDocumentation] = useState(false);

  const { URL_TO_NAV_ITEM, NAV_ITEM_TO_URL } = NAVIGATION_CONFIG.INTERNAL;

  useEffect(() => {
    const currentPath = location.pathname;
    let navItem = URL_TO_NAV_ITEM[currentPath];

    if (!navItem) {
      const sortedPaths = Object.keys(URL_TO_NAV_ITEM).sort(
        (a, b) => b.length - a.length
      );
      for (const path of sortedPaths) {
        if (currentPath.startsWith(path) && path !== "/internal") {
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

  const handleInternalToggle = () => {
    navigate(ROUTES.PUBLIC.HOME);
  };

  return (
    <div className="min-h-screen bg-white relative">
      <Header
        onDocumentationClick={() => setShowDocumentation(true)}
        onInterfaceToggle={handleInternalToggle}
        interfaceToggleText="Chuyển giao diện công khai"
      />

      <div className="pb-1">
        <Navigation
          activeItem={activeNavItem}
          onItemClick={handleNavItemClick}
          interfaceType="internal"
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

      {/* Documentation Modal */}
      {showDocumentation && (
        <DocumentationPage onClose={() => setShowDocumentation(false)} />
      )}
    </div>
  );
};

export default InternalInterface;
