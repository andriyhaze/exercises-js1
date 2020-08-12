//Concatenating with operators
const numberOfStudents = 15;
const numberOfMentors = 8;

const total = numberOfMentors + numberOfStudents;

console.log("Total number of students: " + numberOfStudents);
console.log("Total number of mentors: " + numberOfMentors);
console.log("Total number of students and mentors: " + total);

//Line Break
console.log("\n");

//Concatenating with interpolation
const totalOf = "Total number of ";
const students = "students";
const mentors = "mentors";

const ofStudents = `${totalOf}${students}: ${numberOfStudents}`;
console.log(ofStudents);

const ofMentors = `${totalOf}${mentors}: ${numberOfMentors}`;
console.log(ofMentors);

const totalNumberOf = `${totalOf}${students} and ${mentors}: ${total}`;
console.log(totalNumberOf);
