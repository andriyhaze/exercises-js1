// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

const numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function per100(num) {
  return num * 100;
}
const numbers1 = numbers.map(per100);

const numbers2 = numbers.map(function perHundret(number) {
  return number * 100;
});

const numbers3 = numbers.map(function (number) {
  return number * 100;
});

const numbers4 = numbers.map((number) => {
  return number * 100;
});

const numbers5 = numbers.map((number) => number * 100);

console.log(numbers1);
console.log(numbers2);
console.log(numbers3);
console.log(numbers4);
console.log(numbers5);
