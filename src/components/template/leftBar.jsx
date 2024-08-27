import React from "react";
import Calendar from "../module/calendar";
import contactIcons from "../../constant/contactIcons";
import Pagination from "../module/pagination";

const LeftBar = () => {
  return (
    <div className="bg-white dark:bg-darkBox rounded-xl p-3 h-full w-[9%]">
      <Calendar />
      <div className="line"></div>

      <div className="centering flex-col">
        {contactIcons.map((icon) => (
          <p key={icon.id} className="my-2 text-lg">
            {icon.icon}
          </p>
        ))}
      </div>

      <div className="line"></div>
      <Pagination />
    </div>
  );
};

export default LeftBar;
