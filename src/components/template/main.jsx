import React from "react";
import Pagination from "../module/pagination";
import Home from "../module/home";

const Main = () => {
  return (
    <div className="bg-white dark:bg-darkBox rounded-xl p-3 h-full w-full lg:w-[82%] lg:mx-1.5">
      <div className="lg:hidden absolute bottom-4 right-5">
        <Pagination />
      </div>

      <Home />
    </div>
  );
};

export default Main;
