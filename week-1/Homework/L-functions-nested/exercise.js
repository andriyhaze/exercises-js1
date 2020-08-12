var students = "Percentage of students: ";
var mentors = "\nPercentage of mentors: ";
var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfMentors + numberOfStudents;

function percent(a, b) {
  return Math.round((a / b) * 100) + "%";
}

var pStudents = percent(numberOfStudents, total);
var pMentors = percent(numberOfMentors, total);

function text(a, b) {
  var message = students + a + mentors + b;
  return message;
}
var message = text(pStudents, pMentors);
console.log(message);
