/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

const names = [
  "Rakeshhhhh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

function findLongNameThatStartsWithA(name) {
  return name.length > 8 && name.startsWith("A");
}

const longNameThatStartsWithA = names.find(findLongNameThatStartsWithA);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
