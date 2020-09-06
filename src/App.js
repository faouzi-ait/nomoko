import React from "react";
import { useSelector } from "react-redux";
import TranslationProvider from "./i18n/Provider";

import Home from "./components/pages/Home";
import ToggleOptions from "./components/TopBar";

import "./sass/index.scss";

function App() {
  const { languageTheme } = useSelector((state) => state);
  const persistedLanguage = localStorage.getItem("language");

  return (
    <TranslationProvider
      locale={
        persistedLanguage ? persistedLanguage : languageTheme.state || "en-us"
      }
    >
      <ToggleOptions />
      <Home />
    </TranslationProvider>
  );
}

export default App;
