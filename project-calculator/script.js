const operators = ["+", "-", "*", "/"];

let total = 0;
let value1 = null;
let value2 = null;
let operator1 = null;
let operator2 = null;
const buttons = document.querySelectorAll("button");
let displayValue = document.querySelector(".display");

const clear = () => {
  total = 0;
  value1 = null;
  value2 = null;
  operator1 = null;
  operator2 = null;
  updateDisplay();
};

const updateDisplay = () => {
  displayValue.innerHTML = total;
};

// button eventlistener here

const operate = (operator, a, b) => {
  if (!operators.includes(operator)) {
    console.log("operator not found");
  } else {
    const operatorIndex = operators.indexOf(operator);
    if (operatorIndex == 0) {
      total = add(a, b);
      return add(a, b);
    } else if (operatorIndex == 1) {
      total = subtract(a, b);
      return subtract(a, b);
    } else if (operatorIndex == 2) {
      total = multiply(a, b);
      return multiply(a, b);
    } else {
      total = divide(a, b);
      return divide(a, b);
    }
    // updateDisplay();
  }
};

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

// const updateDisplay = () => {
//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       if (button.id == "clear") {
//         displayValue.innerHTML = "";
//       } else if (button.id == "total") {
//         getDisplayEquation();
//       } else {
//         displayValue.innerHTML += button.innerHTML;
//       }
//     });
//   });
// };

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       if (button.id == "clear") {
//         displayValue.innerHTML = "";
//       } else if (button.id == "total") {
//         getDisplayEquation();
//       } else {
//         displayValue.innerHTML += button.innerHTML;
//       }
//     });
//   });

// const getDisplayEquation = () => {
//   let displayEquation = displayValue.innerHTML;
//   let equationOperator;
//   let foundOperator = false;

//   for (let i = 0; i < operators.length; i++) {
//     if (displayEquation.includes(operators[i])) {
//       equationOperator = operators[i];
//       foundOperator = true;
//     }
//   }

//   if (foundOperator) {
//     const equation = displayEquation.split(equationOperator);
//     displayValue.innerHTML = operate(
//       equationOperator,
//       +equation[0],
//       +equation[1]
//     );
//   }
// };

console.log("TEST CASES");
const a = 9;
const b = 3;
const c = 4.8;
const d = 2.1;
const zero = 0;

const testCasesAddition = [
  { name: `addition = (${a}+${b})`, result: operate("+", a, b) },
  { name: `addition = (-${a}+${b})`, result: operate("+", -a, b) },
  { name: `addition = (${a}+-${b})`, result: operate("+", a, -b) },
  { name: `addition = (-${a}+-${b})`, result: operate("+", -a, -b) },
  { name: `addition = (${a}++${b})`, result: operate("+", a, b) },
  { name: `addition = (${c}+${d})`, result: operate("+", c, d) },
  { name: `addition = (${c}+++${d})`, result: operate("++", c, d) },
  { name: `addition = (+${a}+${b})`, result: operate("+", a, b) },
];

const testCasesSubtraction = [
  { name: `subtraction = (${a}-${b})`, result: operate("-", a, b) },
  { name: `subtraction = (-${a}-${b})`, result: operate("-", -a, b) },
  { name: `subtraction = (${a}--${b})`, result: operate("-", a, -b) },
  { name: `subtraction = (-${a}--${b})`, result: operate("-", -a, -b) },
  { name: `subtraction = (${c}-${d})`, result: operate("-", c, d) },
  { name: `subtraction = (${a}---${b})`, result: operate("--", a, -b) },
];

const testCasesMultiply = [
  { name: `multiply = (${zero}*${b})`, result: operate("*", zero, b) },
  { name: `multiply = (${a}*${b})`, result: operate("*", a, b) },
  { name: `multiply = (-${a}*${b})`, result: operate("*", -a, b) },
  { name: `multiply = (${a}*-${b})`, result: operate("*", a, -b) },
  { name: `multiply = (-${a}*-${b})`, result: operate("*", -a, -b) },
  { name: `multiply = (${a}**${b})`, result: operate("**", a, b) },
  { name: `multiply = (${c}*${d})`, result: operate("*", c, d) },
];

const testCasesDivide = [
  { name: `divide = (${a}/${b})`, result: operate("/", a, b) },
  { name: `divide = (-${a}/${b})`, result: operate("/", -a, b) },
  { name: `divide = (${a}/-${b})`, result: operate("/", a, -b) },
  { name: `divide = (${zero}/${b})`, result: operate("/", zero, b) },
  { name: `divide = (${a}/${zero})`, result: operate("/", a, zero) },
  { name: `divide = (-${a}/-${b})`, result: operate("/", -a, -b) },
  { name: `divide = (${a}//${b})`, result: operate("//", a, b) },
  { name: `divide = (${c}/${d})`, result: operate("/", c, d) },
];

console.table(testCasesAddition);
console.table(testCasesSubtraction);
console.table(testCasesMultiply);
console.table(testCasesDivide);

// Complex test cases
// 1 + 2 - 3
// 1 + 2 * 3
// 1 + 0 * 3
