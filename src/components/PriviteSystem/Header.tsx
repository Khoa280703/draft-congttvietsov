import React, { useState } from "react";
import { HiSearch, HiMenu, HiX } from "react-icons/hi";
// import { BsTelephone } from "react-icons/bs";
// import { HiOutlineMapPin } from "react-icons/hi2";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#098b43] text-white shadow-lg">
      <div className="container mx-auto px-6 py-2">
        <div className="flex justify-between items-center">
          {/* Left Side: Logo/Brand */}
          <div className="flex items-center space-x-6">
            {/* <a href="#" className="text-xs">
              EOFFICE
            </a>
            <a href="#" className="text-xs">
              CẨM NANG VĂN HÓA VIETSOPETRO
            </a> */}
          </div>

          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-4 text-xs h-8">
              {/* <a
                href="tel:+442033693912"
                className="flex items-center space-x-1 h-full hover:text-gray-300 transition-colors"
              >
                <BsTelephone />
                <span>+44 (0)20 3369 3912</span>
              </a> */}
              {/* <a
                href="#"
                className="flex items-center space-x-1 h-full hover:text-gray-300 transition-colors"
              >
                <HiOutlineMapPin />
                <span>LIÊN HỆ</span>
              </a> */}
              <a
                href="#"
                className="flex items-center h-full hover:text-gray-300 font-medium"
              >
                EN
              </a>
              <a
                href="#"
                className="flex items-center h-full hover:text-gray-300 font-medium"
              >
                RUG
              </a>
              <button className="flex items-center h-full hover:text-gray-300 transition-colors">
                <HiSearch className="w-5 h-5 font-thin" />
              </button>
              <button className="flex items-center h-full hover:text-gray-300 transition-colors">
                <HiMenu className="w-5 h-5 font-thin" />
              </button>
            </nav>
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

        {isMenuOpen && (
          <nav className="md:hidden mt-4 text-center space-y-2">
            <a
              href="tel:+44 (0)20 3369 3912"
              className="block py-2 font-semibold hover:bg-white/10 rounded"
            >
              {" "}
              +44 (0)20 3369 3912
            </a>
            <a
              href="#"
              className="block py-2 font-bold hover:bg-white/10 rounded"
            >
              LIÊN HỆ
            </a>
            <a href="#" className="block py-2 hover:bg-white/10 rounded">
              EN
            </a>
            <a href="#" className="block py-2 hover:bg-white/10 rounded">
              RUG
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
