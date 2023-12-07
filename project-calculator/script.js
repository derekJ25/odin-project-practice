const operators = ["+", "-", "*", "/"];

let total = 0;
let value1 = null;
let value2 = null;
let operator1 = null;
let operator2 = null;
const buttons = document.querySelectorAll("button");
let displayValue = document.querySelector(".display");

// add event listener here
// note: fiigure the storing and update numbers iwth operators
buttons.forEach((button) => {
  button.addEventListener("click", (button) => {
    const buttonClassName = button.target.classList;
    const buttonValue = button.target.value;

    if (buttonClassName.contains("operands")) {
      if (
        displayValue.innerHTML == "0" ||
        displayValue.innerHTML == value1 ||
        displayValue == value2 ||
        displayValue == total
      ) {
        displayValue.innerHTML = buttonValue;
      } else {
        displayValue.innerHTML += buttonValue;
      }
    } else if (buttonClassName.contains("operators")) {
      //
      if (buttonValue != "total") {
        operator1 = buttonValue;
      }

      // console.log(
      //   `value1: ${value1} | value2: ${value2} | operator1: ${operator1} | operator2: ${operator2}`
      // );

      let currentValue = displayValue.innerHTML;
      if (value1 == null && value2 == null) {
        value1 = currentValue;
      } else if (value1 != null && value2 == null) {
        value2 = currentValue;
      } else if (value1 != null && value2 != null) {
        value1 = total;
        value2 = currentValue;
      }

      if (buttonValue == "total" && value1 != null && value2 != null) {
        total = operate(operator1, +value1, +value2);
        displayValue.innerHTML = total;
      }
    } else {
      console.log("other operations");
      if (buttonValue == "clear") {
        clear();
      } else {
        // insert the other operations
      }
    }
  });
});

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

// console.log("TEST CASES");
// const a = 9;
// const b = 3;
// const c = 4.8;
// const d = 2.1;
// const zero = 0;

// const testCasesAddition = [
//   { name: `addition = (${a}+${b})`, result: operate("+", a, b) },
//   { name: `addition = (-${a}+${b})`, result: operate("+", -a, b) },
//   { name: `addition = (${a}+-${b})`, result: operate("+", a, -b) },
//   { name: `addition = (-${a}+-${b})`, result: operate("+", -a, -b) },
//   { name: `addition = (${a}++${b})`, result: operate("+", a, b) },
//   { name: `addition = (${c}+${d})`, result: operate("+", c, d) },
//   { name: `addition = (${c}+++${d})`, result: operate("++", c, d) },
//   { name: `addition = (+${a}+${b})`, result: operate("+", a, b) },
// ];

// const testCasesSubtraction = [
//   { name: `subtraction = (${a}-${b})`, result: operate("-", a, b) },
//   { name: `subtraction = (-${a}-${b})`, result: operate("-", -a, b) },
//   { name: `subtraction = (${a}--${b})`, result: operate("-", a, -b) },
//   { name: `subtraction = (-${a}--${b})`, result: operate("-", -a, -b) },
//   { name: `subtraction = (${c}-${d})`, result: operate("-", c, d) },
//   { name: `subtraction = (${a}---${b})`, result: operate("--", a, -b) },
// ];

// const testCasesMultiply = [
//   { name: `multiply = (${zero}*${b})`, result: operate("*", zero, b) },
//   { name: `multiply = (${a}*${b})`, result: operate("*", a, b) },
//   { name: `multiply = (-${a}*${b})`, result: operate("*", -a, b) },
//   { name: `multiply = (${a}*-${b})`, result: operate("*", a, -b) },
//   { name: `multiply = (-${a}*-${b})`, result: operate("*", -a, -b) },
//   { name: `multiply = (${a}**${b})`, result: operate("**", a, b) },
//   { name: `multiply = (${c}*${d})`, result: operate("*", c, d) },
// ];

// const testCasesDivide = [
//   { name: `divide = (${a}/${b})`, result: operate("/", a, b) },
//   { name: `divide = (-${a}/${b})`, result: operate("/", -a, b) },
//   { name: `divide = (${a}/-${b})`, result: operate("/", a, -b) },
//   { name: `divide = (${zero}/${b})`, result: operate("/", zero, b) },
//   { name: `divide = (${a}/${zero})`, result: operate("/", a, zero) },
//   { name: `divide = (-${a}/-${b})`, result: operate("/", -a, -b) },
//   { name: `divide = (${a}//${b})`, result: operate("//", a, b) },
//   { name: `divide = (${c}/${d})`, result: operate("/", c, d) },
// ];

// console.table(testCasesAddition);
// console.table(testCasesSubtraction);
// console.table(testCasesMultiply);
// console.table(testCasesDivide);

// Complex test cases
// 1 + 2 - 3
// 1 + 2 * 3
// 1 + 0 * 3
