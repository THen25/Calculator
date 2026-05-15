let firstNumber = null;
let secondNumber = null;
let operator = "";
let resultDisplayed = false;

const output = document.querySelector("#output");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Can't divide by 0";
  } else {
    return a / b;
  }
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

function handleDigit(digit) {
  if (resultDisplayed) {
    firstNumber = digit;
    operator = "";
    secondNumber = null;
    resultDisplayed = false;
  } else {
    !operator
      ? (firstNumber = firstNumber === null ? digit : firstNumber + digit)
      : (secondNumber = secondNumber === null ? digit : secondNumber + digit);
  }
  output.textContent = !operator ? firstNumber : secondNumber;
}

function handleDecimal() {
  if (resultDisplayed) {
    firstNumber = "0.";
    operator = "";
    secondNumber = null;
    resultDisplayed = false;
    output.textContent = firstNumber;
    return;
  }
  if (!operator) {
    if (firstNumber === null) firstNumber = "0";
    if (!firstNumber.includes(".")) firstNumber += ".";
    output.textContent = firstNumber;
  } else {
    if (secondNumber === null) secondNumber = "0";
    if (!secondNumber.includes(".")) secondNumber += ".";
    output.textContent = secondNumber;
  }
}

function handleOperator(op) {
  resultDisplayed = false;
  if (firstNumber && operator && secondNumber) {
    const result = operate(operator, Number(firstNumber), Number(secondNumber));
    const display =
      typeof result === "number" ? parseFloat(result.toFixed(10)) : result;
    firstNumber = String(display);
    output.textContent = display;
    secondNumber = null;
  }
  operator = op;
}

function handleEquals() {
  if (firstNumber && operator && secondNumber) {
    const result = operate(operator, Number(firstNumber), Number(secondNumber));
    const display =
      typeof result === "number" ? parseFloat(result.toFixed(10)) : result;
    output.textContent = display;
    firstNumber = String(display);
    operator = "";
    secondNumber = null;
    resultDisplayed = true;
  }
}

function resetCalculator() {
  firstNumber = null;
  secondNumber = null;
  operator = "";
  resultDisplayed = false;
  output.textContent = "";
}

function handleDelete() {
  if (!operator) {
    firstNumber = firstNumber ? firstNumber.slice(0, -1) : null;
    output.textContent = firstNumber ?? "";
  } else {
    secondNumber = secondNumber ? secondNumber.slice(0, -1) : null;
    output.textContent = secondNumber ?? "";
  }
}

const digitButtons = document.querySelectorAll("[data-digit]");
digitButtons.forEach((button) => {
  button.addEventListener("click", () => handleDigit(button.dataset.digit));
});

const operatorButtons = document.querySelectorAll("[data-operator]");
operatorButtons.forEach((button) => {
  button.addEventListener("click", () =>
    handleOperator(button.dataset.operator),
  );
});

document.querySelector("#equals-btn").addEventListener("click", handleEquals);

document.querySelector("#clear-btn").addEventListener("click", resetCalculator);

document
  .querySelector("[data-action='on']")
  .addEventListener("click", resetCalculator);

document.querySelector("#delete-btn").addEventListener("click", handleDelete);

document
  .querySelector("[data-action='decimal']")
  .addEventListener("click", handleDecimal);

document.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") handleDigit(e.key);
  else if (e.key === ".") handleDecimal();
  else if (["+", "-", "*", "/"].includes(e.key)) handleOperator(e.key);
  else if (e.key === "Enter" || e.key === "=") handleEquals();
  else if (e.key === "Backspace") handleDelete();
  else if (e.key === "Escape") resetCalculator();
});
