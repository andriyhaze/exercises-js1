const array = ["Jakc", "Annabele", "Amy", "Johanne"];

function secondMatchesAmy(array) {
  if (array[2] === "Amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy(array));
