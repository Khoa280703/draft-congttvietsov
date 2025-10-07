import React, { useState, useEffect } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import VietsopetroLogo from "@/assets/vietsovlogogiulua.png";
import { NAVIGATION_CONFIG } from "@/config/navigation";

interface NavigationProps {
  activeItem: string;
  onItemClick: (item: string) => void;
  onSubItemClick?: (href: string) => void;
}

const NavigationBar: React.FC<NavigationProps> = ({
  activeItem,
  onItemClick,
  onSubItemClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuItems = NAVIGATION_CONFIG.MAIN.MENU_ITEMS;

  // Old menu items for dropdown
  const oldMenuItems = [
    { id: "units", label: "ĐƠN VỊ TRỰC THUỘC", path: "/donvi" },
    { id: "products", label: "SẢN PHẨM-DỊCH VỤ", path: "/spvadichvu" },
    { id: "recruitment", label: "TUYỂN DỤNG", path: "/tuyendung" },
    { id: "admission", label: "TUYỂN SINH", path: "/tuyensinh" },
  ];

  const handleSubItemClick = (href: string) => {
    if (onSubItemClick) {
      onSubItemClick(href);
    }
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isDropdownOpen && !target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

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
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onItemClick(item.label);
                  }}
                  className={`
                    px-4 py-3 text-sm uppercase tracking-wider
                    border-b-3 transition-all duration-300
                    ${
                      activeItem === item.label
                        ? "text-green-600 border-green-600"
                        : "border-transparent hover:text-green-600"
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="relative dropdown-container">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-3 text-sm uppercase tracking-wider border-b-3 border-transparent hover:text-green-600 transition-all duration-300 flex items-center gap-1"
              >
                <HiMenu className="w-5 h-5" />
                <HiChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 dropdown-container">
                  <div className="py-2">
                    {oldMenuItems.map((item) => (
                      <a
                        key={item.id}
                        href={item.path}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubItemClick(item.path);
                        }}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-green-600 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
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
                        ? "text-green-600 font-bold bg-green-50"
                        : "text-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {/* Old menu items in mobile */}
            <li className="w-full border-t border-gray-200 mt-2 pt-2">
              <div className="text-center py-2 text-xs text-gray-500 uppercase tracking-wider">
                Menu cũ
              </div>
            </li>
            {oldMenuItems.map((item) => (
              <li key={item.id} className="w-full">
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubItemClick(item.path);
                  }}
                  className="block w-full text-center py-3 text-sm uppercase text-gray-600 hover:bg-gray-100"
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
