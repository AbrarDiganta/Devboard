const today = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayName = days[today.getDay()];
const date = today.getDate();
const monthName = months[today.getMonth()];
const year = today.getFullYear();

const newDate = `${dayName}, ${date} ${monthName} ${year}`; // Example: "Saturday, 1 March 2025"
document.getElementById("setDate").innerText = newDate;
