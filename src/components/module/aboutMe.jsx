import React from "react";

const AboutMe = ({ animate }) => {
  return (
    <div
      className={`main-pages-container duration-1000 ${
        animate === "aboutMe" ? "animate-nextPage" : "animate-previousPage"
      }`}
    >
      About Me
    </div>
  );
};

export default AboutMe;
