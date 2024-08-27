import React from "react";
import RightBar from "./rightBar";
import Main from "./main";
import LeftBar from "./leftBar";

const Sections = () => {
  return (
    <div className="pt-12 centering h-[38rem] w-[88%] mx-auto">
      <RightBar />
      <Main />
      <LeftBar />
    </div>
  );
};

export default Sections;
