function birthYear(age) {
  return 2020 - age;
}

function sentence(name, age) {
  let year = birthYear(age);
  const message = `My name is ${name} and I was born in ${year}.`;
  return message;
}

console.log(sentence("Andriy", 28));
