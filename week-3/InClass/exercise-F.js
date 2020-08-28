const year = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
let age = [];
const canDrive = (arr) => {
  arr.map((year) => {
    return age.push(`${2020 - year}`);
  });
  return age;
};
canDrive(year);

for (let i = 0; i < age.length; i++) {
  if (age[i] > 17) {
    console.log(
      `Congradulations! You are ${age[i]} years old, you can drive in the UK.`
    );
  } else {
    console.log(
      `You are too young! Wait ${17 - age[i]} years to get your license.`
    );
  }
}
