import React, { useState } from "react";
import RightBar from "./rightBar";
import Main from "./main";
import LeftBar from "./leftBar";
import Menu from "./menu";

const Sections = () => {
  const [namePage, setNamePage] = useState("home");
  const [animate, setAnimate] = useState("home");

  return (
    <div className="p-4 lg:p-0 lg:py-10 centering h-[100vh] w-full lg:w-[88%] mx-auto">
      <RightBar
        setNamePage={setNamePage}
        setAnimate={setAnimate}
        animate={animate}
      />
      <Main namePage={namePage} animate={animate} />
      <LeftBar />
      <Menu
        setNamePage={setNamePage}
        setAnimate={setAnimate}
        animate={animate}
      />
    </div>
  );
};

export default Sections;
