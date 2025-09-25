import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import VietsopetroLogo from "@/assets/vietsovlogogiulua.png";

const menuItems = [
  "TRANG CHỦ",
  "GIỚI THIỆU",
  "ĐƠN VỊ TRỰC THUỘC",
  "SẢN PHẨM-DỊCH VỤ",
  "TIN TỨC-SỰ KIỆN",
  "NGUỒN LỰC",
  "TUYỂN DỤNG",
  "TUYỂN SINH",
];

interface NavigationProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const NavigationBar: React.FC<NavigationProps> = ({
  activeItem,
  onItemClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <li key={item}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onItemClick(item);
                  }}
                  className={`
                    px-4 py-3 text-sm uppercase tracking-wider
                    border-b-3 transition-all duration-300
                    ${
                      activeItem === item
                        ? "text-green-600 border-green-600"
                        : "border-transparent hover:text-green-600"
                    }
                  `}
                >
                  {item}
                </a>
              </li>
            ))}
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
              <li key={item} className="w-full">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onItemClick(item);
                    setIsMenuOpen(false);
                  }}
                  className={`
                    block w-full text-center py-3 text-sm uppercase
                    ${
                      activeItem === item
                        ? "text-green-600 font-bold bg-green-50"
                        : "text-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  {item}
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
