const date = Date.now();

const today = (getDateFormat) => {
  return {
    day: getDateFormat(date, { day: "2-digit" }),
    monthTitle: getDateFormat(date, { month: "long" }),
    year: getDateFormat(date, { year: "numeric" }),
    dayWeek: getDateFormat(date, { weekday: "long" }),
  };
};

export default today;
