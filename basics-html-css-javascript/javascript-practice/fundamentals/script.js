// EXERCISE 1

// console.log(23 + 97);

// const sixValuesAdded = 1 + 2 + 3 + 4 + 5 + 6;
// console.log(sixValuesAdded);

// const equation = (4 + 6 + 9) / 77;
// console.log(equation.toFixed(5));

// let a = 10;
// console.log(a);
// console.log(9 * a);
// let b = 7 * a;
// console.log(b);

// const MAX = 57;
// let actual = MAX - 13;
// let percentage = actual / MAX;
// console.log(percentage.toFixed(4));

// let user = prompt("Who's there?");
// if (user == null) {
//   console.log("Canceled");
// } else if (user != "Admin") {
//   console.log("I don't know you");
// } else {
//   let password = prompt("Password?");
//   if (password == null) {
//     console.log("Canceled");
//   } else if (password != "TheMaster") {
//     console.log("Wrong password");
//   } else {
//     console.log("Welcome!");
//   }
// }

// EXERCISE 2
// const x = 1;

// function a() {
//   const y = 2;
//   output(y);
// }

// function b() {
//   const z = 3;
//   output(z);
// }

// function output(value) {
//   const para = document.createElement("p");
//   document.body.appendChild(para);
//   para.textContent = `Value: ${value}`;
// }

// BASIC PRACTICE FOR FUNCTIONS
// function displayMessage(message = "Hello!") {
//   alert(message);
// }

// // let showAlert = () => {
// //   alert("Hi!");
// // };

// let showAlert = () => alert("Hi!");

// const num = 3;
// let doubleValue = (value) => {
//   return value * 2;
// };

// console.log(doubleValue(num));

// ARROW FUNCTION EXERCISE
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );
