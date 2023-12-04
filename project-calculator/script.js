const operators = ["+", "-", "*", "/"];

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

const operate = (operator, a, b) => {
  if (!operators.includes(operator)) {
    console.log("operator not found");
  } else {
    const operatorIndex = operators.indexOf(operator);
    if (operatorIndex == 0) {
      return add(a, b);
    } else if (operatorIndex == 1) {
      return subtract(a, b);
    } else if (operatorIndex == 2) {
      return multiply(a, b);
    } else {
      return divide(a, b);
    }
  }
};

let displayValue = document.querySelector("span");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "clear") {
      displayValue.innerHTML = "";
    } else if (button.id == "total") {
      getDisplayEquation();
    } else {
      displayValue.innerHTML += button.innerHTML;
    }
  });
});

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
