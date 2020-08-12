//This function can perform string concatenation and also the operation of adding two numbers together.
function add(a, b) {
  return a + b;
}

const operation = add(1, 2);
const string = add("Hello", " how are you?");

console.log(operation);
console.log(string);

//What's the difference between a return and console.log?
//"console.log" is for displaying the result on the command line.
//"return" is used to return a value to a function caller.

//When would you choose to use functions over the way we have been scripting so far?
//When you need to execute the same opperation several times with different values, for example.
//By using functions you can reduce the ammount of necessary code to perform some actions.
