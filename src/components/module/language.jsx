import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Language = ({ update }) => {
  const { t } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.innerText);
    update(); //To rerender the App component
  };

  return (
    <div className="mb-8">
      <h3 className="mb-3">{t("language")} :</h3>
      <div
        dir="ltr"
        className="centering flex-wrap justify-between theme-buttons"
      >
        <button
          onClick={changeLanguage}
          className={`${
            i18n.language === "fa" ? "bg-darker text-lighter" : "bg-lighter"
          } hover:bg-darker`}
        >
          fa
        </button>
        <button
          onClick={changeLanguage}
          className={`${
            i18n.language === "en" ? "bg-darker text-lighter" : "bg-lighter"
          } hover:bg-darker`}
        >
          en
        </button>
      </div>
    </div>
  );
};

export default Language;
