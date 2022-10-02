import { initReactI18next } from "react-i18next";
import i18n from "i18next"

import transUz from "./lang/uz.json"
import transKiril from "./lang/kiril.json"
import transEng from "./lang/eng.json"
import transRu from "./lang/ru.json"

const resources = {
  uz: {
    translation: transUz
  },

  kiril: {
    translation: transKiril
  },

  eng: {
    translation: transEng
  },

  ru: {
    translation: transRu
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz",
    fallbackLng: "uz",

    interpolation: {
      escapeValue: false
    }
  })