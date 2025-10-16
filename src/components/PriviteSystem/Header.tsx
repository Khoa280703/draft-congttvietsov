import React, { useState } from "react";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import { HiDocumentText } from "react-icons/hi2";
import { HiArrowsRightLeft } from "react-icons/hi2";

// Flag URLs
const russianFlagUrl = "https://flagcdn.com/w40/ru.png";
const englishFlagUrl = "https://flagcdn.com/w40/gb.png";

interface HeaderProps {
  onDocumentationClick?: () => void;
  onInterfaceToggle?: () => void;
  interfaceToggleText?: string;
}

const Header: React.FC<HeaderProps> = ({
  onDocumentationClick,
  onInterfaceToggle,
  interfaceToggleText = "Chuyển giao diện",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  return (
    <header className="bg-gradient-to-r from-blue-900 to-vietsov-green text-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Left Section - Language Selection */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Ngôn ngữ</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSelectedLanguage("EN")}
                className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${
                  selectedLanguage === "EN"
                    ? "bg-white/20"
                    : "hover:bg-white/10"
                }`}
              >
                <span className="text-sm font-medium">EN</span>
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
                <span className="text-sm font-medium">RUG</span>
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
            <button className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
              <HiChatBubbleLeftRight className="w-4 h-4" />
              <span className="text-sm font-medium">Liên hệ</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
              <HiUser className="w-4 h-4" />
              <span className="text-sm font-medium">Đăng nhập</span>
            </button>
            {onDocumentationClick && (
              <button
                onClick={onDocumentationClick}
                className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
              >
                <HiDocumentText className="w-4 h-4" />
                <span className="text-sm font-medium">Tài liệu</span>
              </button>
            )}
            {onInterfaceToggle && (
              <button
                onClick={onInterfaceToggle}
                className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
              >
                <HiArrowsRightLeft className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {interfaceToggleText}
                </span>
              </button>
            )}
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
            <button className="flex items-center space-x-2 py-2 hover:bg-white/10 rounded px-2 w-full text-left">
              <HiChatBubbleLeftRight className="w-4 h-4" />
              <span className="text-sm">Liên hệ</span>
            </button>
            <button className="flex items-center space-x-2 py-2 hover:bg-white/10 rounded px-2 w-full text-left">
              <HiUser className="w-4 h-4" />
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
            {onInterfaceToggle && (
              <button
                onClick={onInterfaceToggle}
                className="flex items-center space-x-2 py-2 hover:bg-white/10 rounded px-2 w-full text-left"
              >
                <HiArrowsRightLeft className="w-4 h-4" />
                <span className="text-sm">{interfaceToggleText}</span>
              </button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
