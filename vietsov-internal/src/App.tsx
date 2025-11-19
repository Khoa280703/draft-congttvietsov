import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from "@/components";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";
import { NAVIGATION_CONFIG } from "@/config/navigation";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import {
  InternalHomePage,
  InternalAboutPage,
  InternalNewsPage,
  InternalDevelopmentPage,
  InternalReportsPage,
  InternalApplicationsPage,
  InternalSearchPage,
} from "@/pages";

const InternalInterface: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeNavItem, setActiveNavItem] = useState("TRANG CHỦ");

  const { URL_TO_NAV_ITEM, NAV_ITEM_TO_URL } = NAVIGATION_CONFIG.INTERNAL;

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
    } else {
      setActiveNavItem("");
    }
  }, [location.pathname, URL_TO_NAV_ITEM]);

  const handleNavItemClick = (item: string) => {
    const url = NAV_ITEM_TO_URL[item];
    if (url) {
      navigate(url);
    }
  };

  const handleSectionClick = (
    pagePath: string,
    sectionId: string,
    scrollToSection: (sectionId: string) => void
  ) => {
    const currentPath = location.pathname;
    if (currentPath === pagePath) {
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      navigate(pagePath);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500);
    }
  };

  const { scrollToSection } = useScrollToSection();

  const handleAboutSectionClick = (sectionId: string) => {
    handleSectionClick("/gioithieu", sectionId, scrollToSection);
  };

  const handleFieldsSectionClick = (sectionId: string) => {
    handleSectionClick("/linhvuc-nangluc", sectionId, scrollToSection);
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
        interfaceType="internal"
      />
      <div className="h-[12rem] lg:h-[8rem]"></div>

      <Routes>
        <Route path="/" element={<InternalHomePage />} />
        <Route path="/gioithieu/*" element={<InternalAboutPage />} />
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

const App: React.FC = () => {
  return (
    <Router>
      <InternalInterface />
    </Router>
  );
};

export default App;
