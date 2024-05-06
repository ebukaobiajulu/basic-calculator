const header = document.querySelector(".head");

header.style.backgroundColor = "blue";
header.style.color = "white";
header.style.fontSize = "3rem";

let currentInput = "";
let operator = "";
let prevValue = null;
let calculated = "";

// for the number buttons
function appendNumber(num) {
  if (calculated) {
    currentInput = "";
    calculated = !calculated;
  }
  currentInput += num;
  updateDisplay();
  console.log(currentInput);
}

function appendDecimal() {
  // Check if current input already contains a decimal point
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

// mathematical operators
function addOperator(op) {
  operator = op;
  prevValue = Number(currentInput);
  currentInput = "";
}

// Function to carry out the calculations
function calculate() {
  if (operator && prevValue !== null && currentInput !== "") {
    let result;
    const currentValue = Number(currentInput);
    switch (operator) {
      case "+":
        result = prevValue + currentValue;
        break;

      case "-":
        result = prevValue - currentValue;
        break;

      case "x":
        result = prevValue * currentValue;
        break;

      case "/":
        result = prevValue / currentValue;
        break;
    }

    currentInput = Number(result.toFixed(13)); //approximate to 13 decimal places
    operator = "";
    prevValue = null;
    updateDisplay();
    calculated = true;
    // currentInput = '';
  }
}

// Update display in the input field
function updateDisplay() {
  document.getElementById("display").value = Number(currentInput);
}
