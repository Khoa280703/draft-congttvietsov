import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import vi from "./locales/vi.json";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

const resources = {
  vi: {
    translation: vi,
  },
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "vi",
    defaultNS: "translation",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // Order of detection: localStorage -> cookie -> navigator
      order: ["localStorage", "cookie", "navigator"],
      // Keys to lookup language from (separate for internal)
      lookupLocalStorage: "i18nextLng-internal",
      lookupCookie: "language-internal",
      // Cookie options
      caches: ["localStorage", "cookie"],
      cookieOptions: {
        path: "/",
        sameSite: "Lax",
        maxAge: 365 * 24 * 60 * 60, // 1 year
      },
    },
  });

export default i18n;

