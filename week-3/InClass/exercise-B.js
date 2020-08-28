let classMates = ["Aleksey", "Ali", "Amara", "Diana", "Naresh"];
let moreMates = ["John", "Mila", "Utha", "Mary", "Jack"];
let mates = classMates.concat(moreMates);

console.log(mates.sort());

let matesOrder = mates.sort();

function isMate(name) {
  if (mates.includes(name)) {
    return `${name} is a classmate of ${mates}`;
  } else {
    return `${name} is not a mate.`;
  }
}

console.log(isMate("Jack"));
