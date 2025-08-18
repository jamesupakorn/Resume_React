import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationTH from "./Locales/th/translation.json";
import translationEN from "./Locales/en/translation.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      th: {
        translation: translationTH,
      },
      en: {
        translation: translationEN,
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
