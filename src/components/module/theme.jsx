import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const Theme = () => {
  const [theme, setTheme] = useState("dark");
  const element = document.documentElement;
  const { t } = useTranslation();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        break;
      case "light":
        element.classList.remove("dark");
        break;
    }
  }, [theme]);

  return (
    <div className="mb-8">
      <h3 className="mb-3">{t("theme")} :</h3>
      <div className="centering flex-wrap justify-between theme-buttons">
        <button
          onClick={() => setTheme("dark")}
          className={`${
            theme === "dark" ? "bg-darker text-lighter" : "bg-lighter"
          } hover:bg-darker`}
        >
          <span className="mr-2">{t("dark")}</span>
          <IoMoonOutline />
        </button>
        <button
          onClick={() => setTheme("light")}
          className={`${
            theme === "light" ? "bg-[#0fcae8] text-lighter" : "bg-lighter"
          } hover:bg-[#0fcae8]`}
        >
          <span className="mr-2">{t("light")}</span>
          <IoSunnyOutline />
        </button>
      </div>
    </div>
  );
};

export default Theme;
