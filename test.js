const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

for (let i = 0; i < daysOfWeek.length; i++) {
  const dayMessage = "day is: " + daysOfWeek[i];
  const indexMessage = "index is: " + i;
  console.log(indexMessage, dayMessage);
}
