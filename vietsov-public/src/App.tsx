import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from "@/components/Shared";
import { Navigation } from "@/components";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Footer";
import { NAVIGATION_CONFIG } from "@/config/navigation";
import {
  HomePage,
  AboutPage,
  UnitsPage,
  ProductsServicesPage,
  NewsPage,
  ResourcesPage,
  PartnerProjectPage,
  SustainableDevelopmentPage,
} from "@/pages/index";
import FieldsCapabilitiesPage from "@/pages/FieldsCapabilitiesPage";
import ThamDo from "@/pages/FieldsCapabilitiesPage/ThamDo";
import TimKiem from "@/pages/FieldsCapabilitiesPage/TimKiem";
import KhaiThac from "@/pages/FieldsCapabilitiesPage/KhaiThac";
import ContactPage from "@/pages/ContactPage/ContactPage";
import SearchPage from "@/pages/SearchPage/SearchPage";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const PublicInterface: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollToSection } = useScrollToSection();
  const [activeNavItem, setActiveNavItem] = useState("TRANG CHỦ");

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

  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <Header />
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
        <Route path="/linhvuc-nangluc/tham-do" element={<ThamDo />} />
        <Route path="/linhvuc-nangluc/tim-kiem" element={<TimKiem />} />
        <Route path="/linhvuc-nangluc/khai-thac" element={<KhaiThac />} />
        <Route path="/doitac-duan/*" element={<PartnerProjectPage />} />
        <Route path="/phattrien/*" element={<SustainableDevelopmentPage />} />
        <Route path="/lienhe" element={<ContactPage />} />
        <Route path="/tim-kiem" element={<SearchPage />} />
      </Routes>

      <PreFooter />
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <PublicInterface />
    </Router>
  );
};

export default App;
