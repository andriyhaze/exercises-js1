/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  const name = str.split();
  const newName = [];
  newName.push(name[0].charAt(0).toUpperCase() + name[0].slice(1));
  return newName;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
const name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
