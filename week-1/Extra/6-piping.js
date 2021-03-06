/*
  PIPING FUNCTIONS
  ================
  1. Write 3 functions:
  - one that adds 2 numbers together
  - one that multiplies 2 numbers together
  - one that formats a number so it's returned as a string with a £ sign before it (e.g. 20 -> £20)

  2. Using the variable startingValue as input, perform the following operations using your functions all
  on one line (assign the result to the variable badCode):
  - add 10 to startingValue
  - multiply the result by 2
  - format it
  
  3. Write a more readable version of what you wrote in step 2 under the BETTER PRACTICE comment. Assign
  the final result to the variable goodCode
*/

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function format(number) {
  return "£" + number;
}

const startingValue = 2;

// Why can this code be seen as bad practice? Comment your answer.
//This way of writing the code may not be easy to understand for somebody else when they read the code.
let badCode = format(multiply(2, add(startingValue, 10)));

/* BETTER PRACTICE */
const plus10 = add(startingValue, 10);
const multi = multiply(plus10, 2);
const formatted = format(multi);
let goodCode = formatted;

/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 2-piping.js` into your terminal
*/

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your code returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test("add function - case 1 works", add(1, 3), 4);
test("add function - case 2 works", add(2.4, 5), 7.4);
test("multiply function works", multiply(2, 3), 6);
test("format function works", format(16), "£16");
test("badCode variable correctly assigned", badCode, "£24");
test("goodCode variable correctly assigned", goodCode, "£24");
