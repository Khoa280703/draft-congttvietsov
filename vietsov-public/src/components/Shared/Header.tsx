import React, { useState } from "react";
import { HiMenu, HiX, HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
import { ROUTES } from "@/config/navigation";
import { useNavigate } from "react-router-dom";

// Flag URLs
const russianFlagUrl = "https://flagcdn.com/w40/ru.png";
const englishFlagUrl = "https://flagcdn.com/w40/gb.png";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const navigate = useNavigate();
  return (
    <header className="bg-vietsov-gradient-green text-white shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Left Section - Language Selection - Desktop only */}
          <div className="hidden lg:flex items-center space-x-4">
            <span className="font-medium text-sm-label leading-sm-label tracking-normal">
              Ngôn ngữ
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSelectedLanguage("EN")}
                className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${
                  selectedLanguage === "EN"
                    ? "bg-white/20"
                    : "hover:bg-white/10"
                }`}
              >
                <span className="font-bold text-xs-label leading-xs-label tracking-normal uppercase mr-2">
                  EN
                </span>
                <img
                  src={englishFlagUrl}
                  alt="English Flag"
                  className="w-6 h-6 rounded-full object-cover"
                />
              </button>
              <button
                onClick={() => setSelectedLanguage("RU")}
                className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${
                  selectedLanguage === "RU"
                    ? "bg-white/20"
                    : "hover:bg-white/10"
                }`}
              >
                <span className="font-bold text-xs-label leading-xs-label tracking-normal uppercase mr-2">
                  RU
                </span>
                <img
                  src={russianFlagUrl}
                  alt="Russian Flag"
                  className="w-6 h-6 rounded-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Right Section - Desktop buttons and Mobile menu toggle */}
          <div className="flex items-center lg:space-x-4">
            {/* Desktop buttons - hidden on mobile */}
            <button
              className="hidden lg:flex items-center space-x-2 hover:text-gray-300 transition-colors"
              onClick={() => navigate(ROUTES.PUBLIC.CONTACT)}
            >
              <HiOutlineLocationMarker className="w-4 h-4" />
              <span className="font-medium text-sm-label leading-sm-label tracking-normal">
                Liên hệ
              </span>
            </button>
            <button className="hidden lg:flex items-center space-x-2 hover:text-gray-300 transition-colors">
              <FaRegCircleUser className="w-4 h-4" />
              <span className="font-medium text-sm-label leading-sm-label tracking-normal">
                Đăng nhập
              </span>
            </button>
            {/* Mobile Menu Toggle - only visible on mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden hover:text-gray-300 transition-colors"
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
          <nav className="lg:hidden mt-4 text-left space-y-3">
            <div className="flex items-center space-x-4 mb-4">
              <span className="font-medium text-sm-label leading-sm-label tracking-normal">
                Ngôn ngữ:
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setSelectedLanguage("EN")}
                  className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${
                    selectedLanguage === "EN"
                      ? "bg-white/20"
                      : "hover:bg-white/10"
                  }`}
                >
                  <span className="font-bold text-[11px] leading-[22px] tracking-normal uppercase">
                    EN
                  </span>
                  <img
                    src={englishFlagUrl}
                    alt="English Flag"
                    className="w-4 h-4 rounded-full object-cover"
                  />
                </button>
                <button
                  onClick={() => setSelectedLanguage("RU")}
                  className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${
                    selectedLanguage === "RU"
                      ? "bg-white/20"
                      : "hover:bg-white/10"
                  }`}
                >
                  <span className="font-bold text-[11px] leading-[22px] tracking-normal uppercase">
                    RU
                  </span>
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
              onClick={() => navigate(ROUTES.PUBLIC.CONTACT)}
            >
              <HiOutlineLocationMarker className="w-4 h-4" />
              <span className="font-medium text-sm-label leading-sm-label tracking-normal">
                Liên hệ
              </span>
            </button>
            <button className="flex items-center space-x-2 py-2 hover:bg-white/10 rounded px-2 w-full text-left">
              <FaRegCircleUser className="w-4 h-4" />
              <span className="font-medium text-sm-label leading-sm-label tracking-normal">
                Đăng nhập
              </span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
