// Exercises can be fround from
// https://javascript.info/array-methods

// Exercise 1
const camelize = (string) => {
  //  figure out .map
  return string
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
};

camelize("background-color") == "backgroundColor";
camelize("list-style-image") == "listStyleImage";
camelize("-webkit-transition") == "WebkitTransition";

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
