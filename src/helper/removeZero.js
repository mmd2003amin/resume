const removeZero = (day) => {
  console.log(day);

  return day.split("")[0] != "۰"
    ? day
    : day.split("")[1];
};

export default removeZero;
