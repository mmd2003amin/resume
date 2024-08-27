import React from "react";
import { RiArrowUpWideFill, RiArrowDownWideFill } from "react-icons/ri";

const Pagination = () => {
  return (
    <div className="pagination-buttons mt-2 centering flex-col">
      <RiArrowUpWideFill />
      <RiArrowDownWideFill />
    </div>
  );
};

export default Pagination;
