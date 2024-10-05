import React, { useState } from "react";
import i18n from "../../i18n";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import pages from "../../constant/pages";
import contactIcons from "../../constant/contactIcons";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const language = i18n.language;
  const { t } = useTranslation();

  return (
    <div>
      <div
        onClick={() => setOpenMenu((prev) => !prev)}
        className={`lg:hidden shadow-settings bg-lighter dark:bg-darkBox2 p-2 h-10 rounded-lg cursor-pointer fixed top-16 z-20 ${
          language === "fa" ? "right-5" : "left-5"
        }`}
      >
        <IoMenuSharp
          className={`text-2xl text-blueText ${openMenu ? "hidden" : "flex"}`}
        />
        <IoCloseOutline
          className={`text-2xl text-blueText ${openMenu ? "flex" : "hidden"}`}
        />
      </div>

      <div
        className={`lg:hidden size-full bg-lighter dark:bg-darker fixed z-10 duration-200 ${
          openMenu ? "left-0" : "left-full"
        }`}
      >
        <div className="size-[96%] bg-white dark:bg-darkBox absolute top-[3%] right-[2%] rounded-xl overflow-auto py-4">
          <div className="mt-4">
            <img
              src="/profile.jpg"
              alt="profile"
              className="rounded-full size-40 mx-auto mb-1"
            />
            <span className="font-kalameh-bold text-black dark:text-white text-xl centering">
              {t("name")}
            </span>
          </div>

          <div className="grid grid-cols-3 mt-10">
            {pages.map((page) => (
              <div key={page.name} className="centering flex-col mb-10">
                <i className="mb-1 text-xl text-blueText">{page.icon}</i>
                <span className={`text-black dark:text-white text-sm`}>
                  {t(page.name)}
                </span>
              </div>
            ))}
          </div>

          <button className="bg-blueText rounded-md dark:text-white w-28 p-3 centering mx-auto my-6">
            {t("resume")}
          </button>

          <div className="centering">
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

export default Menu;
