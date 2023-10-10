import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import en from "../src/locales/en.json";
import es from "../src/locales/es.json";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "es",
    fallbackLng: "es",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
