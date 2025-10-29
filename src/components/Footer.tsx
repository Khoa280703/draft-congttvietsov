import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { AiFillFacebook } from "react-icons/ai";

const Footer: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <footer className="bg-[#098b43] text-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Left Side: Logo/Brand */}
          <div className="flex items-center space-x-4 text-xs font-light">
            <a href="#" className="">
              Bản quyền © 2024 thuộc về Liên doanh Vietsovpetro{" "}
            </a>
            <a href="#" className="">
              Điều khoản & Điều kiện{" "}
            </a>
            <a href="#" className="">
              Quyền riêng tư dữ liệu
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-8">
                <AiFillFacebook className="w-6 h-6 hover:text-gray-300 transition-colors cursor-pointer" />
              </div>
            </nav>

            {/* Hamburger Menu Icon - Only on Mobile */}
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
          <nav className="md:hidden mt-4 text-center space-y-2">
            <a
              href="#"
              className="block py-2 font-bold hover:bg-white/10 rounded"
            >
              Bản quyền © 2024 thuộc về Liên doanh Vietsovpetro
            </a>
            <a href="#" className="block py-2 hover:bg-white/10 rounded">
              Điều khoản & Điều kiện
            </a>
            <a href="#" className="block py-2 hover:bg-white/10 rounded">
              Quyền riêng tư dữ liệu
            </a>
            {/* You can add social icons for mobile menu here as well if needed */}
          </nav>
        )}
      </div>
    </footer>
  );
};

export default Footer;
