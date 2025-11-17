import React, { useState } from "react";
import { HiMenu, HiX, HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
import { ROUTES } from "@/config/navigation";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { setLanguageCookie } from "@/utils/language";

// Flag URLs
const russianFlagUrl = "https://flagcdn.com/w40/ru.png";
const englishFlagUrl = "https://flagcdn.com/w40/gb.png";
const vietnameseFlagUrl = "https://flagcdn.com/w40/vn.png";

// Language configuration
// Map UI codes (VI, EN, RU) to i18n codes (vi, en, ru)
const languages = [
  {
    code: "VI",
    i18nCode: "vi",
    label: "VI",
    flag: vietnameseFlagUrl,
    name: "Tiếng Việt",
  },
  {
    code: "EN",
    i18nCode: "en",
    label: "EN",
    flag: englishFlagUrl,
    name: "English",
  },
  {
    code: "RU",
    i18nCode: "ru",
    label: "RU",
    flag: russianFlagUrl,
    name: "Русский",
  },
];

// Map i18n code to UI code
const i18nToUICode: Record<string, string> = {
  vi: "VI",
  en: "EN",
  ru: "RU",
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  // Get current language from i18n and convert to UI code
  const currentLanguageCode = i18nToUICode[i18n.language] || "VI";

  // Handle language change
  const handleLanguageChange = (uiCode: string) => {
    const language = languages.find((lang) => lang.code === uiCode);
    if (language) {
      i18n.changeLanguage(language.i18nCode);
      setLanguageCookie(language.i18nCode);
    }
  };

  // Get available languages (exclude current language)
  const availableLanguages = languages.filter(
    (lang) => lang.code !== currentLanguageCode
  );
  return (
    <header className="bg-vietsov-gradient-green text-white shadow-lg">
      <div className="mx-auto px-4 md:px-8 lg:px-16 laptop:px-24 fhd:px-32 qhd:px-40 py-2 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl laptop:max-w-[85.375rem] fhd:max-w-[120rem] qhd:max-w-[160rem]">
        <div className="flex justify-between items-center">
          {/* Left Section - Language Selection - Desktop only */}
          {/* Right Section - Desktop buttons and Mobile menu toggle */}
          <div className="flex items-center lg:space-x-4">
            {/* Desktop buttons - hidden on mobile */}
            <button
              className="hidden lg:flex items-center space-x-2 hover:text-gray-300 transition-colors cursor-pointer"
              onClick={() => navigate(ROUTES.PUBLIC.CONTACT)}
            >
              <HiOutlineLocationMarker className="w-4 h-4" />
              <span className="font-medium text-sm-label leading-sm-label tracking-normal">
                Liên hệ
              </span>
            </button>
            {/* <button className="hidden lg:flex items-center space-x-2 hover:text-gray-300 transition-colors cursor-pointer">
              <FaRegCircleUser className="w-4 h-4" />
              <span className="font-medium text-sm-label leading-sm-label tracking-normal">
                Đăng nhập
              </span>
            </button> */}
            {/* Mobile Menu Toggle - only visible on mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden hover:text-gray-300 transition-colors cursor-pointer"
            >
              {isMenuOpen ? (
                <HiX className="w-5 h-5" />
              ) : (
                <HiMenu className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <span className="font-medium text-sm-label leading-sm-label tracking-normal">
              Ngôn ngữ
            </span>
            <div className="flex items-center space-x-2">
              {availableLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="flex items-center space-x-1 px-2 py-1 rounded transition-colors cursor-pointer hover:bg-white/10"
                >
                  <span className="font-bold text-xs-label leading-xs-label tracking-normal uppercase mr-2">
                    {lang.label}
                  </span>
                  <img
                    src={lang.flag}
                    alt={`${lang.name} Flag`}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                </button>
              ))}
            </div>
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
                {availableLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="flex items-center space-x-1 px-2 py-1 rounded transition-colors cursor-pointer hover:bg-white/10"
                  >
                    <span className="font-bold text-[11px] leading-[22px] tracking-normal uppercase">
                      {lang.label}
                    </span>
                    <img
                      src={lang.flag}
                      alt={`${lang.name} Flag`}
                      className="w-4 h-4 rounded-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            <button
              className="flex items-center space-x-2 py-2 hover:bg-white/10 rounded px-2 w-full text-left cursor-pointer"
              onClick={() => navigate(ROUTES.PUBLIC.CONTACT)}
            >
              <HiOutlineLocationMarker className="w-4 h-4" />
              <span className="font-medium text-sm-label leading-sm-label tracking-normal">
                Liên hệ
              </span>
            </button>
            {/* <button className="flex items-center space-x-2 py-2 hover:bg-white/10 rounded px-2 w-full text-left cursor-pointer">
              <FaRegCircleUser className="w-4 h-4" />
              <span className="font-medium text-sm-label leading-sm-label tracking-normal">
                Đăng nhập
              </span>
            </button> */}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
