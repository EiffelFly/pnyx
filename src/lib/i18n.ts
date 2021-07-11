import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
//import { i18nextPlugin } from 'translation-check'
import { __prod__ } from "./constants"

const DETECTION_OPTIONS = {
  order: ["localStorage", "navigator"],
};

export const initI18n = () => {
  i18n
    // import & load translations from -> /public/locales
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    //.use(i18nextPlugin)
    .init({
      backend: {
        loadPath: '/locales/{{lng}}/translation.json',
      },
      detection: DETECTION_OPTIONS,
      fallbackLng: "en",
      debug: !__prod__,
    })
}