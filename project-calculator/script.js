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

let displayValue = document.querySelector("span");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "clear") {
      displayValue.innerHTML = "";
    } else {
      displayValue.innerHTML += button.innerHTML;
    }
  });
});

// const a = 9;
// const b = 3;
// const operator = "+";

// operate(operator, a, b);
