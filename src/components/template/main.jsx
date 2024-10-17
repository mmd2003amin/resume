import React from "react";
import Pagination from "../module/pagination";
import Home from "../module/home";
import AboutMe from "../module/aboutMe";

const Main = ({ namePage, animate }) => {
  return (
    <div className="h-full w-full lg:w-[82%] relative mx-1">
      <div className="lg:hidden absolute bottom-1 right-1 z-[1]">
        <Pagination />
      </div>

      {namePage === "home" && <Home animate={animate} />}
      {namePage === "aboutMe" && <AboutMe animate={animate} />}
    </div>
  );
};

export default Main;
