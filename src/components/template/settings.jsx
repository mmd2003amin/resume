import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import Theme from "../module/theme";

const Settings = () => {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <div className="text-darker">
      <div
        onClick={() => setOpenSettings((prev) => !prev)}
        className="fixed top-6 right-6 bg-white rounded-lg cursor-pointer"
      >
        <IoSettingsOutline className="size-10 p-2 hover:rotate-180 duration-1000" />
      </div>

      <div
        className={`${
          openSettings ? "visible opacity-100" : "invisible opacity-0 scale-50"
        } duration-150 fixed top-6 right-[4.5rem] bg-white rounded-md h-fit w-[70%] 300:w-52 p-3`}
      >
        <Theme />
      </div>
    </div>
  );
};

export default Settings;
