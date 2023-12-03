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
      add(a, b);
    } else if (operatorIndex == 1) {
      subtract(a, b);
    } else if (operatorIndex == 2) {
      multiply(a, b);
    } else {
      divide(a, b);
    }
  }
};

// let displayValue = document.querySelector("span");
// const buttons = document.querySelectorAll("button");
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (button.id == "clear") {
//       displayValue.innerHTML = "";
//     } else if (button.id == "total") {
//       getDisplayEquation();
//     } else {
//       displayValue.innerHTML += button.innerHTML;
//     }
//   });
// });

// const getDisplayEquation = () => {
//   const displayEquation = displayValue.innerHTML;
//   let equationOperator;
//   let foundOperator = false;

//   for (let i = 0; i < operators.length; i++) {
//     if (displayEquation.includes(operators[i])) {
//       equationOperator = operators[i];
//       foundOperator = true;
//     }
//   }

//   if (foundOperator) {
//     console.log("found operator");
//     const equation = displayEquation.split(equationOperator);
//     console.log(
//       `operator: ${equationOperator} | value1: ${equation[0]} | value2: ${equation[1]} `
//     );

//     // console.log();
//     // operate(equationOperator, equation[0], equation[1]);
//     // console.log(operate(equationOperator, equation[0], equation[1]));
//   }

//   return "temp";
// };

const a = 9;
const b = 3;
const operator = "+";

console.log(operate(operator, a, b));
console.log(operate("9", a, b));
