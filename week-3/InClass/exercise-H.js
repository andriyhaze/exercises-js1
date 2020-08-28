const names = ["John", "Mila", "Utha", "Mary", "Jack"];

function lookfor(name) {
  return name === "Andriy";
}

const lookForName = names.find(lookfor);

if (lookForName === undefined) {
  console.log("Not in here.");
} else {
  console.log("Found me!");
}
