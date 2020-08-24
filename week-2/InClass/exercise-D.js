function moodCheck(mood) {
  if (mood === "happy") {
    return "Good job, you are doing great!";
  } else if (mood === "sad") {
    return "Every cloud has a silver lining";
  } else if (typeof mood === "number") {
    return "Beep beep boop";
  } else {
    return "I'm sorry, I'm still learning about feelings";
  }
}

console.log(moodCheck("happy"));
console.log(moodCheck("sad"));
console.log(moodCheck(22));
console.log(moodCheck("wierd"));
