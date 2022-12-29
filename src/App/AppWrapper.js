import { useState } from "react";
import Home from "../Pages/Home";
import { IntlProvider } from "react-intl";
import polish from "../utils/lang/pl";
import english from "../utils/lang/en";
import { LanguageContext } from "../providers/multilingualContext";
import "bootstrap/dist/css/bootstrap.min.css";

const messages = {
  pl: polish,
  en: english,
};

const AppWrapper = () => {
  const [language, setLanguage] = useState("en");

  const handleChangeLanguage = () => {
    setLanguage((language) => (language === "en" ? "pl" : "en"));
  };
  
  return (
    <LanguageContext.Provider value={{ language, handleChangeLanguage }}>
      <IntlProvider locale="en" messages={messages[language]}>
        <Home />
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default AppWrapper;
