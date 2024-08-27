import React from "react";
import removeZero from "../../helper/removeZero";
import i18n from "../../i18n";
import today from "../../utils/today";

const Calendar = () => {
  const lng = i18n.language;

  function dateFa(uDate, option) {
    let date = new Intl.DateTimeFormat("fa-IR", option).format(uDate);
    return date;
  }

  function dateEn(uDate, option) {
    let date = new Intl.DateTimeFormat("en-EN", option).format(uDate);
    return date;
  }

  return (
    <div className="centering flex-col text-black dark:text-white">
      <h1 className="text-blueText">
        {lng === "fa" ? today(dateFa).dayWeek : today(dateEn).dayWeek}
      </h1>

      <p className="text-blueText my-1">
        {removeZero(lng === "fa" ? today(dateFa).day : today(dateEn).day)}
      </p>

      <p>
        {lng === "fa" ? today(dateFa).monthTitle : today(dateEn).monthTitle}
      </p>

      <p className="my-3">
        {lng === "fa" ? today(dateFa).year : today(dateEn).year}
      </p>
    </div>
  );
};

export default Calendar;
