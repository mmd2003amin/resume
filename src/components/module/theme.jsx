import React, { useState, useEffect } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const Theme = () => {
  const [theme, setTheme] = useState("dark");
  const element = document.documentElement;

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
      <h3 className="mb-3">Theme :</h3>
      <div className="centering flex-wrap justify-between theme-buttons">
        <button onClick={() => setTheme("dark")} className="hover:bg-darker">
          <span className="mr-2">dark</span>
          <IoMoonOutline />
        </button>
        <button
          onClick={() => setTheme("light")}
          className="hover:bg-[#0FCAE8]"
        >
          <span className="mr-2">light</span>
          <IoSunnyOutline />
        </button>
      </div>
    </div>
  );
};

export default Theme;
