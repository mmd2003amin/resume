import React from "react";
import RightBar from "./rightBar";
import Main from "./main";
import LeftBar from "./leftBar";

const Sections = () => {
  return (
    <div className="p-4 lg:p-0 lg:pt-12 centering h-full lg:h-[38rem] w-full lg:w-[88%] mx-auto">
      <RightBar />
      <Main />
      <LeftBar />
    </div>
  );
};

export default Sections;
