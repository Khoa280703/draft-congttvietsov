import React, { useState } from "react";
import { HiSearch, HiMenu, HiX } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMapPin } from "react-icons/hi2";

// URL cờ Nga (ví dụ)
const russianFlagUrl = "https://flagcdn.com/w40/ru.png";
const englishFlagUrl = "https://flagcdn.com/w40/gb.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#3a3a6e] to-[#4e9a5a] text-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Left Side: Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="tel:44123456789"
              className="flex font-normal items-center space-x-2 hover:text-gray-300 transition-colors text-sm"
            >
              <BsTelephone />
              <span>+44 (0)20 3369 3912</span>
            </a>
            <a
              href="#"
              className="flex font-normal items-center space-x-2 hover:text-gray-300 transition-colors text-sm"
            >
              <HiOutlineMapPin />
              <span>Liên hệ</span>
            </a>
          </div>

          {/* Right Side: Links & Icons */}
          <div className="flex items-center space-x-4">
            {/* Desktop Links - Hidden on Mobile */}
            <nav className="hidden md:flex items-center space-x-4 text-sm">
              <a
                href="#"
                className="font-normal hover:text-gray-300 transition-colors"
              >
                eOffice
              </a>
              <a
                href="#"
                className="font-normal hover:text-gray-300 transition-colors"
              >
                Cẩm nang văn hóa VietsovPetro
              </a>
              <button className="hover:text-gray-300 transition-colors">
                <img
                  src={russianFlagUrl}
                  alt="Russian Flag"
                  className="w-6 h-6 rounded-full object-cover"
                />
              </button>
              <button className="hover:text-gray-300 transition-colors">
                <img
                  src={englishFlagUrl}
                  alt="Vietnamese Flag"
                  className="w-6 h-6 rounded-full object-cover"
                />
              </button>
              <button className="hover:text-gray-300 transition-colors">
                <HiSearch className="w-5 h-5" />
              </button>
              <button className="hover:text-gray-300 transition-colors">
                <HiMenu className="w-5 h-5" />
              </button>
            </nav>

            {/* Hamburger Menu Icon - Only for Mobile */}
            <div className="md:hidden">
              {/* Logo/Brand for mobile */}
              <a href="#" className="font-semibold">
                VietsovPetro
              </a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 text-left space-y-3">
            <a href="#" className="block py-2 hover:bg-white/10 rounded px-2">
              eOffice
            </a>
            <a href="#" className="block py-2 hover:bg-white/10 rounded px-2">
              Cẩm nang văn hóa VietsovPetro
            </a>
            <a
              href="tel:44123456789"
              className="block py-2 hover:bg-white/10 rounded px-2"
            >
              {" "}
              +44 (0)20 3369 3912
            </a>
            <a href="#" className="block py-2 hover:bg-white/10 rounded px-2">
              Liên hệ
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
