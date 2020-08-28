const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
let age = [];
const ageCalc = (arr) => {
  arr.map((year) => {
    return age.push(`${2020 - year}`);
  });
  return age;
};
ageCalc(years);

let i = 0;
while (i < age.length) {
  console.log(`You are ${age[i]} years old.`);
  i += 1;
}

//to use "for" instead of "while" is shorter
