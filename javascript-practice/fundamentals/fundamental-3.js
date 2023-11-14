// function addSeven(value) {
//   return (value += 7);
// }

let addSeven = (value) => {
  return (value += 7);
};

console.log(addSeven(3));

// function multiply(x, y) {
//   return x * y;
// }

let multiply = (x, y) => {
  return x * y;
};

console.log(multiply(2, 3));

// function capitaliseFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

let capitaliseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

console.log(capitaliseFirstLetter("hello"));

// function lastLetter(string) {
//   return string.charAt(string.length - 1);
// }

let lastLetter = (string) => {
  return string.charAt(string.length - 1);
};

console.log(lastLetter("terminal"));
