//Declare string variables:
const students = "Percentage of students: ";
const mentors = "Percentage of mentors: ";
//Declare number variables:
const numberOfStudents = 15;
const numberOfMentors = 8;
//Concatenate total
const total = numberOfMentors + numberOfStudents;
//Calculate percentage + round the result:
const percentageStudents = Math.round((numberOfStudents / total) * 100);
const percentageMentors = Math.round((numberOfMentors / total) * 100);
//Display result:
console.log(students + percentageStudents + " %");
console.log(mentors + percentageMentors + " %");
