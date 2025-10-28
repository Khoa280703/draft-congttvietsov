import React, { useState, useEffect } from "react";
import {
  HiMenu,
  HiX,
  HiChevronDown,
  HiArrowRight,
  HiSearch,
} from "react-icons/hi";
import VietsopetroLogo from "@/assets/logo/vsp_logo.png";
import { NAVIGATION_CONFIG } from "@/config/navigation";
import SmartTextWithAmpersand from "@/components/SmartTextWithAmpersand";

interface NavigationProps {
  activeItem: string;
  onItemClick: (item: string) => void;
  onAboutSectionClick?: (sectionId: string) => void;
  onFieldsSectionClick?: (sectionId: string) => void;
  onUrlNavigation?: (url: string) => void;
  interfaceType?: "public" | "internal";
}

const NavigationBar: React.FC<NavigationProps> = ({
  activeItem,
  onItemClick,
  onAboutSectionClick,
  onFieldsSectionClick,
  onUrlNavigation,
  interfaceType = "public",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);
  const menuItems =
    interfaceType === "internal"
      ? NAVIGATION_CONFIG.INTERNAL.MENU_ITEMS
      : NAVIGATION_CONFIG.MAIN.MENU_ITEMS;

  const handleDropdownMouseEnter = (itemId: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setOpenDropdownId(itemId);
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdownId(null);
    }, 150); // 150ms delay before closing
    setHoverTimeout(timeout);
  };

  const handleChildItemClick = (child: { title: string; href: string }) => {
    // Check if href contains a hash (section ID)
    if (child.href.includes("#")) {
      // Extract section ID from href (e.g., "/gioithieu#history" -> "history")
      const sectionId = child.href.split("#")[1];
      if (sectionId) {
        // Check if it's an About page section
        if (child.href.startsWith("/gioithieu") && onAboutSectionClick) {
          onAboutSectionClick(sectionId);
        }
        // Check if it's a Fields page section
        else if (
          child.href.startsWith("/linhvuc-nangluc") &&
          onFieldsSectionClick
        ) {
          onFieldsSectionClick(sectionId);
        }
      }
    } else {
      // It's a regular URL, navigate to it
      if (onUrlNavigation) {
        onUrlNavigation(child.href);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (openDropdownId && !target.closest(".dropdown-container")) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdownId]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  return (
    <nav className="bg-white w-full border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <img
            src={VietsopetroLogo}
            alt="Vietsopetro Logo"
            className="w-26 h-18"
          />
          <ul className="hidden lg:flex justify-center items-center flex-1">
            {menuItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isDropdownOpen = hasChildren && openDropdownId === item.id;

              if (hasChildren) {
                return (
                  <li
                    key={item.id}
                    className="relative dropdown-container"
                    onMouseEnter={() => handleDropdownMouseEnter(item.id)}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        onItemClick(item.label);
                      }}
                      className={`
                        px-4 py-3 text-sm tracking-wider text-center font-normal
                        border-b-3 transition-all duration-300 flex items-center justify-center gap-1
                        hover:scale-105 
                        ${
                          activeItem === item.label
                            ? "text-vietsov-green border-vietsov-green "
                            : "border-transparent hover:text-vietsov-green0"
                        }
                      `}
                    >
                      <SmartTextWithAmpersand text={item.label} />
                      <HiChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Generic dropdown for any menu item with children */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white border border-gray-200 shadow-lg z-50 dropdown-container">
                        <div className="py-3">
                          {item.children!.map((child) => (
                            <div key={child.href} className="px-4">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleChildItemClick(child);
                                }}
                                className="group block w-full text-left py-3 text-sm text-gray-600 hover:bg-gray-100 hover:px-4 transition-all duration-200 flex items-center justify-between"
                              >
                                <span>{child.title}</span>
                                <HiArrowRight className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.id}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onItemClick(item.label);
                    }}
                    className={`
                      px-4 py-3 text-sm tracking-wider text-center inline-block
                      border-b-3 transition-all duration-300 font-normal
                      hover:hover:scale-105
                      ${
                        activeItem === item.label
                          ? "text-vietsov-green border-vietsov-green "
                          : "border-transparent hover:text-vietsov-green"
                      }
                    `}
                  >
                    <SmartTextWithAmpersand text={item.label} />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Icons - Search and Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            <button
              onClick={() => onUrlNavigation && onUrlNavigation("/tim-kiem")}
              className="p-2 text-gray-600 hover:text-vietsov-green hover:scale-110 rounded-full transition-all duration-200"
              title="Tìm kiếm"
            >
              <HiSearch className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-vietsov-green hover:scale-110 rounded-full transition-all duration-200"
              title="Menu"
            >
              {isMenuOpen ? (
                <HiX className="w-5 h-5" />
              ) : (
                <HiMenu className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => onUrlNavigation && onUrlNavigation("/tim-kiem")}
              className="p-2 text-gray-600 hover:text-vietsov-green hover:bg-gray-100 hover:scale-110 rounded-full transition-all duration-200"
              title="Tìm kiếm"
            >
              <HiSearch className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:scale-110 focus:outline-none transition-all duration-200"
            >
              {isMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <ul className="flex flex-col items-center py-2">
            {menuItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;

              return (
                <li key={item.id} className="w-full">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onItemClick(item.label);
                      setIsMenuOpen(false);
                    }}
                    className={`
                      block w-full text-center py-3 text-sm font-normal
                      transition-all duration-200 hover:scale-105
                      ${
                        activeItem === item.label
                          ? "text-vietsov-green font-bold "
                          : "text-gray-600 hover:text-vietsov-green"
                      }
                    `}
                  >
                    <SmartTextWithAmpersand text={item.label} />
                  </a>
                  {hasChildren && (
                    <div className="pl-4 border-l-2 border-gray-200 ml-4">
                      {item.children!.map((child) => (
                        <a
                          key={child.href}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleChildItemClick(child);
                            setIsMenuOpen(false);
                          }}
                          className="group block w-full text-center py-2 text-xs text-gray-500 hover:text-vietsov-green hover:scale-105 transition-all duration-200 flex items-center justify-between px-2 hover:m-4"
                        >
                          <span>{child.title}</span>
                          <HiArrowRight className="w-3 h-3 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
