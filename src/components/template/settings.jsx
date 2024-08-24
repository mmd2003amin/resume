import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import Theme from "../module/theme";
import Language from "../module/language";
import i18n from "../../i18n";

const Settings = ({ update }) => {
  const [openSettings, setOpenSettings] = useState(false);
  const language = i18n.language;

  return (
    <div className="text-darker">
      <div
        onClick={() => setOpenSettings((prev) => !prev)}
        className={`bg-white rounded-lg cursor-pointer fixed top-6 ${
          language === "fa" ? "right-6" : "left-6"
        }`}
      >
        <IoSettingsOutline className="size-10 p-2 hover:rotate-180 duration-1000" />
      </div>

      <div
        className={`${
          openSettings ? "visible opacity-100" : "invisible opacity-0 scale-50"
        } duration-150 bg-white rounded-md h-fit w-[70%] 300:w-52 p-3 fixed top-6 ${
          language === "fa" ? "right-[4.5rem]" : "left-[4.5rem]"
        }`}
      >
        <Theme />
        <Language update={update} />
      </div>
    </div>
  );
};

export default Settings;
