const operators = ["+", "-", "*", "/", "%"];

let total = 0;
let value1 = null;
let value2 = null;
let operator1 = null;
let operator2 = null;
const buttons = document.querySelectorAll("button");
let displayValue = document.querySelector(".display");

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
        if (displayValue.innerHTML == "0" && buttonValue == ".") {
          displayValue.innerHTML = "0.";
        } else {
          displayValue.innerHTML = buttonValue;
        }
      } else {
        if (!displayValue.innerHTML.includes(".") && buttonValue == ".") {
          displayValue.innerHTML += buttonValue;
        } else {
          if (buttonValue != ".") {
            displayValue.innerHTML += buttonValue;
          }
        }
      }
    } else if (buttonClassName.contains("operators")) {
      let currentValue = displayValue.innerHTML;
      if (buttonValue != "total") {
        operator1 = buttonValue;
      }

      if (value1 == null && value2 == null) {
        value1 = currentValue;
      } else if (value1 != null && value2 == null) {
        value2 = currentValue;
      } else if (value1 != null && value2 != null) {
        value1 = total;
        value2 = currentValue;
      }

      if (buttonValue == "total" && value1 != null && value2 != null) {
        operate(operator1, +value1, +value2);
        updateDisplay();
      }
    } else {
      if (buttonValue == "clear") {
        clear();
      } else {
        // negative bug when clicked -0 and click number gives -05 etc
        updateNegative();
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

const roundValue = () => {
  total = Math.round(total * 10000) / 10000;
};

const updateDisplay = () => {
  roundValue();
  displayValue.innerHTML = total;
};

const updateNegative = () => {
  console.log(displayValue.innerHTML);
  if (displayValue.innerHTML.includes("-")) {
    total = displayValue.innerHTML.slice(1);
  } else {
    total = `-${displayValue.innerHTML}`;
  }
  updateDisplay();
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
    } else if (operatorIndex == 3) {
      total = divide(a, b);
      return divide(a, b);
    } else {
      total = modulus(a, b);
      return modulus(a, b);
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

const modulus = (a, b) => {
  return a % b;
};
