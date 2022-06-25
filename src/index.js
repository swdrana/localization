import React from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import "./index.css";
// import App from './App';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie", "localStorage"],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {useSuspense:false}
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t("Welcome to React")}</h2>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
