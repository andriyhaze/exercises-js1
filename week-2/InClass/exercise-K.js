const students = [
  " ",
  "Anthony",
  "Markus",
  "Marie",
  "Jonathan",
  "Jane",
  "Judy",
  "Caroline",
  "Kim",
  "Paolo",
];

for (let i = 1; i < students.length; i++) {
  const name = "is " + students[i];
  const index = "The name of student number " + i;
  console.log(index, name);
}
