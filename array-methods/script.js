// Exercises can be fround from
// https://javascript.info/array-methods

// // Exercise 1
// const camelize = (string) => {
//   //  figure out .map
//   return string
//     .split("-")
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");
// };

// camelize("background-color") == "backgroundColor";
// camelize("list-style-image") == "listStyleImage";
// camelize("-webkit-transition") == "WebkitTransition";

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// // Exercise 2
// const filterRange = (arr, min, max) => {
//   return arr.filter((value) => value >= min && value <= max);
// };

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert(filtered); // 3,1 (matching values)

// alert(arr); // 5,3,8,1 (not modified)'

// // Exercise 3
// const filterRangeInPlace = (arr, min, max) => {
//   for (let index = 0; index < arr.length; index++) {
//     let value = arr[index];
//     if (value < min || value > max) {
//       arr.splice(index, 1);
//       index--;
//     }
//   }
// };

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert(arr); // [3, 1]

// // Exercise 4
// let arr = [5, 2, 1, -10, 8];

// // arr.sort().reverse();
// arr.sort((a, b) => b - a);

// alert(arr); // 8, 5, 2, 1, -10

// // Exercise 5
// const copySorted = (arr) => {
//   return arr.slice().sort();
// };

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (no changes)

// // Exercise 6
// function Calculator() {
//   this.operation = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b,
//   };

//   this.calculate = (string) => {
//     let stringSplit = string.split(" ");
//     console.log(stringSplit);
//     let value1 = +stringSplit[0];
//     let operator = stringSplit[1];
//     let value2 = +stringSplit[2];

//     if (!this.operation[operator] || isNaN(value1) || isNaN(value2)) {
//       return NaN;
//     }

//     return this.operation[operator](value1, value2);
//   };

//   this.addMethod = (name, func) => {
//     this.operation[name] = func;
//   };
// }

// let calc = new Calculator();
// console.log(calc.calculate("3 + 7"));

// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert(result); // 8

// // Exercise 6
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map((user) => user.name);

// alert(names); // John, Pete, Mary

// // Exercise 7
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map((user) => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id,
// }));

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert(usersMapped[0].id); // 1
// alert(usersMapped[0].fullName); // John Smith

// // Exercise 8
// const sortByAge = (arr) => {
//   return arr.sort((person1, person2) => person1.age - person2.age);
// };

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// // Exercise 9
// const shuffle = (arr) => {
//   arr.sort(() => Math.random() - 0.5);
// };

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...

// // Exercise 10
// const getAverageAge = (arr) => {
//   return arr.reduce((age, person) => (age += person.age), 0) / arr.length;
// };

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// // Exercise 11
// function unique(arr) {
//   let uniqueArr = [];

//   for (let string of arr) {
//     if (!uniqueArr.includes(string)) {
//       uniqueArr.push(string);
//     }
//   }

//   return uniqueArr;
// }

// let strings = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// // alert(unique(strings)); // Hare, Krishna, :-O

// Exercise 12
const groupById = (users) => {
  return users.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
  }, {});
};

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

console.table(usersById);

/*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
