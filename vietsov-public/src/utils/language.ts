import i18n from "@/i18n/config";
import Cookies from "js-cookie";

/**
 * Get current language from i18next
 * @returns Current language code (vi, en, ru)
 */
export const getCurrentLanguage = (): string => {
  return i18n.language || "vi";
};

/**
 * Convert language code to API format
 * @param lang - Language code (vi, en, ru)
 * @returns API language format (vi-VN, en-US, ru-RU)
 */
export const getLanguageForAPI = (lang?: string): string => {
  const currentLang = lang || getCurrentLanguage();
  const languageMap: Record<string, string> = {
    vi: "vi-VN",
    en: "en-US",
    ru: "ru-RU",
  };
  return languageMap[currentLang] || "vi-VN";
};

/**
 * Set language cookie
 * @param lang - Language code (vi, en, ru)
 */
export const setLanguageCookie = (lang: string): void => {
  Cookies.set("language", lang, {
    expires: 365, // 1 year
    path: "/",
    sameSite: "Lax",
  });
};

/**
 * Get language from cookie
 * @returns Language code from cookie or null
 */
export const getLanguageFromCookie = (): string | null => {
  return Cookies.get("language") || null;
};

