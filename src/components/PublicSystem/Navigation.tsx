import React, { useState, useEffect } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import VietsopetroLogo from "@/assets/vietsovlogogiulua.png";
import { NAVIGATION_CONFIG } from "@/config/navigation";

interface NavigationProps {
  activeItem: string;
  onItemClick: (item: string) => void;
  onAboutSectionClick?: (sectionId: string) => void;
  interfaceType?: "public" | "internal";
}

const NavigationBar: React.FC<NavigationProps> = ({
  activeItem,
  onItemClick,
  onAboutSectionClick,
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
            className="w-26 h-18 "
          />
          <ul className="hidden md:flex justify-center items-center flex-1">
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
                        px-4 py-3 text-sm uppercase tracking-wider text-center
                        border-b-3 transition-all duration-300 flex items-center justify-center gap-1
                        ${
                          activeItem === item.label
                            ? "text-vietsov-green border-vietsov-green"
                            : "border-transparent hover:text-vietsov-green"
                        }
                      `}
                    >
                      <span>{item.label}</span>
                      <HiChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Generic dropdown for any menu item with children */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 dropdown-container">
                        <div className="py-2">
                          {item.children!.map((child) => (
                            <button
                              key={child.href}
                              onClick={(e) => {
                                e.preventDefault();
                                if (onAboutSectionClick) {
                                  // Extract section ID from href (e.g., "/gioithieu#history" -> "history")
                                  const sectionId = child.href.split("#")[1];
                                  if (sectionId) {
                                    onAboutSectionClick(sectionId);
                                  }
                                }
                              }}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-vietsov-green transition-colors"
                            >
                              {child.title}
                            </button>
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
                      px-4 py-3 text-sm uppercase tracking-wider text-center inline-block
                      border-b-3 transition-all duration-300
                      ${
                        activeItem === item.label
                          ? "text-vietsov-green border-vietsov-green"
                          : "border-transparent hover:text-vietsov-green"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
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
        <div className="md:hidden border-t border-gray-200">
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
                      block w-full text-center py-3 text-sm uppercase
                      ${
                        activeItem === item.label
                          ? "text-vietsov-green font-bold bg-green-50"
                          : "text-gray-600 hover:bg-gray-100"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                  {hasChildren && (
                    <div className="pl-4 border-l-2 border-gray-200 ml-4">
                      {item.children!.map((child) => (
                        <a
                          key={child.href}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            if (onAboutSectionClick) {
                              const sectionId = child.href.split("#")[1];
                              if (sectionId) {
                                onAboutSectionClick(sectionId);
                              }
                            }
                            setIsMenuOpen(false);
                          }}
                          className="block w-full text-center py-2 text-xs text-gray-500 hover:text-vietsov-green hover:bg-gray-50"
                        >
                          {child.title}
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
