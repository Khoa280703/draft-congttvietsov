import React, { useState, useEffect } from "react";
import { HiMenu, HiX, HiArrowRight, HiSearch } from "react-icons/hi";
import VietsopetroLogo from "@/assets/logo/vsp_logo.png";
import { MAIN_NAVIGATION_ITEMS } from "@/config/navigation";
// import SmartTextWithAmpersand from "@/components/SmartTextWithAmpersand";

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
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);
  const [headerHeight, setHeaderHeight] = useState(48); // Default 3rem
  const menuItems = MAIN_NAVIGATION_ITEMS;

  // Measure header height dynamically
  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      const updateHeaderHeight = () => {
        setHeaderHeight(header.offsetHeight);
      };
      updateHeaderHeight();
      window.addEventListener("resize", updateHeaderHeight);
      // Use MutationObserver to watch for header content changes
      const observer = new MutationObserver(updateHeaderHeight);
      observer.observe(header, {
        childList: true,
        subtree: true,
        attributes: true,
      });
      return () => {
        window.removeEventListener("resize", updateHeaderHeight);
        observer.disconnect();
      };
    }
  }, []);

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
    }, 300); // 300ms delay before closing for easier interaction
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
    <nav
      className="fixed left-0 right-0 bg-white w-full border-t border-gray-200 shadow-md z-40 uppercase"
      style={{ top: `${headerHeight}px` }}
    >
      <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-0 fhd:px-32 qhd:px-40 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex justify-center lg:justify-start items-center self-stretch">
            <button
              onClick={() => {
                if (onUrlNavigation) {
                  onUrlNavigation("/");
                  // Scroll to top after navigation
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 100);
                }
              }}
              className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src={VietsopetroLogo}
                alt="Vietsopetro Logo"
                className="w-26 h-18"
              />
            </button>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:py-7 gap-4 lg:gap-4 flex-1 relative">
            <ul className="hidden lg:flex justify-center items-start flex-wrap flex-1 gap-y-2">
              {menuItems.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isDropdownOpen =
                  hasChildren && openDropdownId === item.id;

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
                        px-4 py-2 text-sm leading-6 tracking-normal text-center font-semibold uppercase
                        transition-all duration-300 flex items-center justify-center relative
                        hover:scale-105 whitespace-nowrap cursor-pointer
                        ${
                          activeItem === item.label
                            ? "text-vietsov-green "
                            : "hover:text-vietsov-green0"
                        }
                      `}
                      >
                        <span>{item.label}</span>
                        {activeItem === item.label && (
                          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-vietsov-green hidden lg:block"></span>
                        )}
                      </button>

                      {/* Generic dropdown for any menu item with children */}
                      {isDropdownOpen && (
                        <div
                          className="absolute top-full left-0 w-80 bg-white border border-gray-200 shadow-xl z-[100] dropdown-container mt-2"
                          onMouseEnter={() => handleDropdownMouseEnter(item.id)}
                          onMouseLeave={handleDropdownMouseLeave}
                        >
                          <div className="py-3">
                            {item.children!.map((child) => (
                              <div key={child.href} className="px-4">
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleChildItemClick(child);
                                  }}
                                  className="group block w-full text-left py-3 text-sm text-gray-600 hover:bg-gray-100 transition-all duration-200 flex items-center justify-start rounded-md cursor-pointer uppercase"
                                >
                                  <span>{child.title}</span>
                                  <HiArrowRight className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-auto" />
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
                  <li key={item.id} className="relative uppercase">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        onItemClick(item.label);
                      }}
                      className={`
                      px-3 py-2 text-sm leading-6 tracking-normal text-center font-semibold
                      transition-all duration-300 inline-block relative
                      hover:scale-105 whitespace-nowrap
                      ${
                        activeItem === item.label
                          ? "text-vietsov-green "
                          : "hover:text-vietsov-green"
                      }
                    `}
                    >
                      <span>{item.label}</span>
                      {activeItem === item.label && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-vietsov-green hidden lg:block"></span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Desktop Icons - Search and Menu */}
            <div className="hidden lg:flex items-center space-x-2 mt-2 lg:mt-0">
              <button
                onClick={() => onUrlNavigation && onUrlNavigation("/tim-kiem")}
                className="p-2 text-gray-600 hover:text-vietsov-green hover:scale-110 rounded-full transition-all duration-200 cursor-pointer"
                title="Tìm kiếm"
              >
                <HiSearch className="w-5 h-5" />
              </button>
            </div>

            <div className="lg:hidden flex items-center justify-center space-x-2 w-full">
              <button
                onClick={() => onUrlNavigation && onUrlNavigation("/tim-kiem")}
                className="p-2 text-gray-600 hover:text-vietsov-green hover:bg-gray-100 hover:scale-110 rounded-full transition-all duration-200 cursor-pointer"
                title="Tìm kiếm"
              >
                <HiSearch className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:scale-110 focus:outline-none transition-all duration-200 cursor-pointer"
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
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 uppercase">
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
                      block w-full text-center py-3 text-sm font-normal uppercase
                      transition-all duration-200 hover:scale-105
                      ${
                        activeItem === item.label
                          ? "text-vietsov-green font-bold "
                          : "text-gray-600 hover:text-vietsov-green"
                      }
                    `}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
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
                          className="group block w-full text-center text-xs text-gray-500 hover:text-vietsov-green hover:scale-105 transition-all duration-200 flex items-center justify-between px-2 hover:m-4 uppercase"
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
