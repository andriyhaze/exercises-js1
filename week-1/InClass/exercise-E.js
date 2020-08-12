var greeting = "Hello, my name is ";
var name = "Andriy";
//Using operator to concatenate strings:
var allTogether = greeting + name;

console.log(allTogether);

//Change the value of the variable
var greeting = "Hello";
//Using sgting interpolation to concatenate strings:
var intGreeting = `${greeting}, my name is ${name}`;

console.log(intGreeting);
