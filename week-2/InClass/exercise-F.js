const valid = "User name valid";
const invalid = "User name invalid";
function check(a, b) {
  if (a === "admin" || a === "manager") {
    return valid;
  } else if (b[0].toUpperCase() == b[0] && b.length > 4 && b.length < 10) {
    return valid;
  } else {
    return invalid;
  }
}
console.log(check("manager", "ikey"));
console.log(check("admin", "root"));
console.log(check("user", "Mikey"));
console.log(check("user", "ikey"));
