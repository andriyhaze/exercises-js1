function abracaFunction(yourFunc) {
  console.log(
    "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
  );

  const abracaArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];

  const abracaOutput = yourFunc(abracaArray);

  return abracaOutput;
}

function myFunction(array) {
  let result = array.map((str) => str.toUpperCase());

  return result.sort();
}

let result = abracaFunction(myFunction);

console.log(result);
