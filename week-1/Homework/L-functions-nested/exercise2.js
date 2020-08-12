//WORK IN PROGRESS

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

var greetings = "HELLO ";

function uppercase(a) {
  return a.toUpperCase();
}

function greeting(a) {
  var upperName = uppercase(a);
  var message = "HELLO " + upperName;
  return message;
}

var hello1 = greeting(mentor1);
var hello2 = greeting(mentor2);
var hello3 = greeting(mentor3);
var hello4 = greeting(mentor4);
var hello5 = greeting(mentor5);

console.log(hello1);
console.log(hello2);
console.log(hello3);
console.log(hello4);
console.log(hello5);
