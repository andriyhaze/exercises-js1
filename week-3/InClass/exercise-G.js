const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function filterYears(year) {
  return `${2020 - year}` > 17;
}

filteredYears = years.filter(filterYears);
console.log(
  `If you were born in ${filteredYears.toString()} you can drivein the UK.`
);
