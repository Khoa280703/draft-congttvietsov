import React, { useState } from "react";
import { HiDocumentText } from "react-icons/hi2";
import { HiMenu, HiX, HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";

// Flag URLs
const russianFlagUrl = "https://flagcdn.com/w40/ru.png";
const englishFlagUrl = "https://flagcdn.com/w40/gb.png";

interface HeaderProps {
  onDocumentationClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDocumentationClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  return (
    <header className="bg-gradient-to-r from-blue-900 to-vietsov-green text-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Left Section - Language Selection */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-normal">Ngôn ngữ</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSelectedLanguage("EN")}
                className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${
                  selectedLanguage === "EN"
                    ? "bg-white/20"
                    : "hover:bg-white/10"
                }`}
              >
                <span className="text-sm font-normal">EN</span>
                <img
                  src={englishFlagUrl}
                  alt="English Flag"
                  className="w-4 h-4 rounded-full object-cover"
                />
              </button>
              <button
                onClick={() => setSelectedLanguage("RUG")}
                className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${
                  selectedLanguage === "RUG"
                    ? "bg-white/20"
                    : "hover:bg-white/10"
                }`}
              >
                <span className="text-sm font-normal">RUG</span>
                <img
                  src={russianFlagUrl}
                  alt="Russian Flag"
                  className="w-4 h-4 rounded-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Right Section - Contact, Login, Documentation, and Interface Toggle */}
          <div className="flex items-center space-x-4">
            <button
              className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
              onClick={() => window.open("/", "_blank")}
            >
              <HiOutlineLocationMarker className="w-4 h-4" />
              <span className="text-sm font-normal">Liên hệ</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
              <FaRegCircleUser className="w-4 h-4" />
              <span className="text-sm font-normal">Đăng nhập</span>
            </button>
            {/* {onDocumentationClick && (
              <button
                onClick={onDocumentationClick}
                className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
              >
                <HiDocumentText className="w-4 h-4" />
                <span className="text-sm font-normal">Tài liệu</span>
              </button>
            )} */}
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center space-x-2 hover:text-gray-300 transition-colors"
            >
              {isMenuOpen ? (
                <HiX className="w-5 h-5" />
              ) : (
                <HiMenu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 text-left space-y-3">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-sm font-medium">Ngôn ngữ:</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setSelectedLanguage("EN")}
                  className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${
                    selectedLanguage === "EN"
                      ? "bg-white/20"
                      : "hover:bg-white/10"
                  }`}
                >
                  <span className="text-sm">EN</span>
                  <img
                    src={englishFlagUrl}
                    alt="English Flag"
                    className="w-4 h-4 rounded-full object-cover"
                  />
                </button>
                <button
                  onClick={() => setSelectedLanguage("RUG")}
                  className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${
                    selectedLanguage === "RUG"
                      ? "bg-white/20"
                      : "hover:bg-white/10"
                  }`}
                >
                  <span className="text-sm">RUG</span>
                  <img
                    src={russianFlagUrl}
                    alt="Russian Flag"
                    className="w-4 h-4 rounded-full object-cover"
                  />
                </button>
              </div>
            </div>
            <button
              className="flex items-center space-x-2 py-2 hover:bg-white/10 rounded px-2 w-full text-left"
              onClick={() => window.open("/", "_blank")}
            >
              <HiOutlineLocationMarker className="w-4 h-4" />
              <span className="text-sm">Liên hệ</span>
            </button>
            <button className="flex items-center space-x-2 py-2 hover:bg-white/10 rounded px-2 w-full text-left">
              <FaRegCircleUser className="w-4 h-4" />
              <span className="text-sm">Đăng nhập</span>
            </button>
            {onDocumentationClick && (
              <button
                onClick={onDocumentationClick}
                className="flex items-center space-x-2 py-2 hover:bg-white/10 rounded px-2 w-full text-left"
              >
                <HiDocumentText className="w-4 h-4" />
                <span className="text-sm">Tài liệu</span>
              </button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
