// Exercises found here
// https://javascript.info/object#literals-and-properties

// // Exercise 1
// let user = {};

// user.name = "John";
// user.surname = "Smith"
// user.name = "Pete"
// delete user.name;

// // Exercise 2
// const isEmpty = (schedule) => {
//   for (key in schedule) {
//     return false;
//   }
//   return true;
// };
// let schedule = {};

// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false

// // Exercise 3
// const calculateSalaries = (salaries) => {
//   let sum = 0;
//   for (key in salaries) {
//     sum += salaries[key];
//   }
//   return sum;
// };

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// console.log(calculateSalaries(salaries));

// Exercise 4
const multiplyNumeric = (menu) => {
  for (key in menu) {
    if (typeof menu[key] == "number") {
      menu[key] *= 2;
    }
  }
};

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};
