import React, { useState, useEffect } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import VietsopetroLogo from "@/assets/vietsovlogogiulua.png";
import { NAVIGATION_CONFIG } from "@/config/navigation";

interface NavigationProps {
  activeItem: string;
  onItemClick: (item: string) => void;
  onAboutSectionClick?: (sectionId: string) => void;
}

const NavigationBar: React.FC<NavigationProps> = ({
  activeItem,
  onItemClick,
  onAboutSectionClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [aboutHoverTimeout, setAboutHoverTimeout] = useState<number | null>(
    null
  );
  const menuItems = NAVIGATION_CONFIG.MAIN.MENU_ITEMS;

  // About page sections for dropdown
  const aboutSections = [
    { id: "joint-venture", label: "Giới thiệu Vietsov" },
    { id: "history", label: "Lịch sử hình thành" },
    { id: "general-intro", label: "Giới thiệu chung" },
    { id: "org-structure", label: "Cơ cấu tổ chức" },
    { id: "leadership", label: "Ban lãnh đạo" },
    { id: "achievements", label: "Thành tựu nổi bật" },
    { id: "capabilities", label: "Năng lực hoạt động" },
    { id: "archive-photos", label: "Ảnh lưu trữ" },
  ];

  const handleAboutSectionClick = (sectionId: string) => {
    if (onAboutSectionClick) {
      onAboutSectionClick(sectionId);
    }
    setIsAboutDropdownOpen(false);
  };

  const handleAboutMouseEnter = () => {
    if (aboutHoverTimeout) {
      clearTimeout(aboutHoverTimeout);
      setAboutHoverTimeout(null);
    }
    setIsAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 150); // 150ms delay before closing
    setAboutHoverTimeout(timeout);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isAboutDropdownOpen && !target.closest(".about-dropdown-container")) {
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAboutDropdownOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (aboutHoverTimeout) {
        clearTimeout(aboutHoverTimeout);
      }
    };
  }, [aboutHoverTimeout]);

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
              if (item.label === "GIỚI THIỆU CHUNG") {
                return (
                  <li
                    key={item.id}
                    className="relative about-dropdown-container"
                    onMouseEnter={handleAboutMouseEnter}
                    onMouseLeave={handleAboutMouseLeave}
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
                          isAboutDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* About sections dropdown */}
                    {isAboutDropdownOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 about-dropdown-container">
                        <div className="py-2">
                          {aboutSections.map((section) => (
                            <button
                              key={section.id}
                              onClick={(e) => {
                                e.preventDefault();
                                handleAboutSectionClick(section.id);
                              }}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-vietsov-green transition-colors"
                            >
                              {section.label}
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
            {menuItems.map((item) => (
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
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
