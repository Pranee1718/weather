// utils.js

export const convertTemperature = (temp, fromUnit, toUnit) => {
  if (fromUnit === toUnit) {
    return temp;
  }

  let tempInCelsius;

  // Convert to Celsius first
  if (fromUnit === "imperial") {
    tempInCelsius = (temp - 32) * (5 / 9);
  } else if (fromUnit === "standard") {
    tempInCelsius = temp - 273.15;
  } else {
    tempInCelsius = temp;
  }

  // Convert from Celsius to the desired unit
  if (toUnit === "imperial") {
    return tempInCelsius * (9 / 5) + 32;
  } else if (toUnit === "standard") {
    return tempInCelsius + 273.15;
  } else {
    return tempInCelsius;
  }
};

export const getUnitSymbol = (units) => {
  switch (units) {
    case "imperial":
      return "°F";
    case "standard":
      return "K";
    default:
      return "°C";
  }
};

export const getWeekday = (date) => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekdays[new Date(date)?.getDay()];
};

export const extractDate = (dateTimeString) => {
  const dateParts = dateTimeString?.split(" ");
  return dateParts[0];
};

export const convertTo12HourFormat = (dateTimeStr) => {
  const [, time] = dateTimeStr.split(" ");

  let [hours, minutes] = time.split(":");
  hours = parseInt(hours);

  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours}:${minutes} ${period}`;
};

export const isMoreThan14Days = (dateInput) => {
  const inputDateMillis = Date.parse(dateInput);
  const currentDateMillis = Date.now();
  const differenceInMillis = inputDateMillis - currentDateMillis;
  const differenceInDays = differenceInMillis / (1000 * 60 * 60 * 24);
  return differenceInDays > 14;
};

export const convertToYYYYMMDD = (dateString) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
