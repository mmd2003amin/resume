import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="fixed size-full bg-darkBox animate-bg-loader z-10"></div>
      <div className="animate-loader-left left-0 border-r loader"></div>
      <div className="animate-loader-right right-0 border-l loader"></div>
    </div>
  );
};

export default Loader;
