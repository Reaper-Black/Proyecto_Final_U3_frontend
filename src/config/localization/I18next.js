import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import * as enL from "../lenguajes/ingles.json";
import * as esL from "../lenguajes/español.json"

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources: {
        en: {
            translation:
                enL
        },
        es: {
            translation: 
            esL
        },
    },
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;