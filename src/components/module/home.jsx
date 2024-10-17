import React from "react";
import { useTranslation } from "react-i18next";
import contactIcons from "../../constant/contactIcons";

const Home = ({ animate }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`main-pages-container ${
        animate === "home" ? "animate-nextPage" : "animate-previousPage"
      }`}
    >
      <div className="flex flex-col justify-around lg:justify-center lg:items-start size-full px-5">
        <div className="centering flex-col lg:items-start">
          <img
            src="/profile.jpg"
            alt="profile"
            className="lg:hidden size-56 sm:size-48 rounded-full mt-8"
          />

          <p className="text-blueText mt-8 lg:mt-0 mb-3 text-sm">
            {t("FrontendProgrammer")}
          </p>

          <p className="text:xl sm:text-2xl dark:text-white text-center">
            <span>{t("welcome1")}</span>{" "}
            <span className="text-blueText">{t("name")}</span>{" "}
            <span>{t("welcome2")}</span>
          </p>
        </div>
        <div>
          <button className="lg:hidden bg-blueText rounded-xl dark:text-white w-28 p-3 centering mx-auto my-6">
            {t("resume")}
          </button>

          <div className="lg:hidden centering">
            {contactIcons.map((icon) => (
              <i key={icon.id} className="mx-4 text-lg cursor-pointer">
                {icon.icon}
              </i>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
