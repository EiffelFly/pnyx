import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { __prod__ } from "./constants"

import en from "../locales/en/translation.json"
import zhTW from "../locales/zh-TW/translation.json"
import zh from "../locales/zh/translation.json"


const DETECTION_OPTIONS = {
  order: ["localStorage", "navigator"],
};
export const defaultNS = 'en'
export const resources = {
  "en": en,
  "zh-TW": zhTW,
  "zh": zh
} as const;

export const initI18n = () => {
  i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    //.use(i18nextPlugin)
    .init({
      resources,
      defaultNS,
      detection: DETECTION_OPTIONS,
      fallbackLng: "en",
      debug: !__prod__,
      react: {
        useSuspense: true, 
      },
    })
}