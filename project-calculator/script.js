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
      return add(a, b).toFixed(5);
    } else if (operatorIndex == 1) {
      return subtract(a, b).toFixed(5);
    } else if (operatorIndex == 2) {
      return multiply(a, b).toFixed(5);
    } else {
      return divide(a, b).toFixed(5);
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

const getDisplayEquation = () => {
  let displayEquation = displayValue.innerHTML;
  let equationOperator;
  let foundOperator = false;

  for (let i = 0; i < operators.length; i++) {
    if (displayEquation.includes(operators[i])) {
      equationOperator = operators[i];
      foundOperator = true;
    }
  }

  if (foundOperator) {
    const equation = displayEquation.split(equationOperator);
    displayValue.innerHTML = operate(
      equationOperator,
      +equation[0],
      +equation[1]
    );
  }
};
