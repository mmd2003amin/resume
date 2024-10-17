import React from "react";
import pages from "../../constant/pages";
import { useTranslation } from "react-i18next";

const RightBar = ({ setNamePage, setAnimate, animate }) => {
  const { t } = useTranslation();

  const changePageHandler = (name) => {
    setAnimate(name);
    setTimeout(() => setNamePage(name), 800);
  };

  return (
    <div className="hidden lg:grid grid-cols-1 bg-white dark:bg-darkBox rounded-xl p-2 pb-4 h-full w-[9%]">
      <div>
        <img
          src="/profile.jpg"
          alt="profile"
          className="rounded-full size-16 mx-auto mb-1"
        />
        <span className="font-kalameh-bold text-black dark:text-white text-[12px] centering">
          {t("name")}
        </span>
      </div>

      {pages.map((page) => (
        <div
          onClick={() => changePageHandler(page.name)}
          key={page.name}
          className="centering flex-col mt-8 text-blueText cursor-pointer relative group"
        >
          <i className="text-xl">{page.icon}</i>
          <span
            className={`text-[12px] dark:text-white group-hover:visible group-hover:opacity-100 group-hover:top-10 absolute duration-300 ${
              animate === page.name
                ? "visible top-10 opacity-100"
                : "invisible top-4 opacity-0"
            }`}
          >
            {t(page.name)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RightBar;
