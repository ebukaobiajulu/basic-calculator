const header = document.querySelector(".head");

header.style.backgroundColor = "blue";
header.style.color = "white";
header.style.fontSize = "3rem";

let currentInput = "";
let operator = "";
let prevValue = null;

function appendNumber(num) {
  currentInput += num;
  updateDisplay();
}

function addOperator(op) {
  operator = op;
  prevValue = parseFloat(currentInput);
  currentInput = "";
}

function calculate() {
  if (operator && prevValue !== null && currentInput !== "") {
    let result;
    const currentValue = parseFloat(currentInput);
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
    currentInput = "";

    
  }
}

function updateDisplay() {
  document.getElementById("display").value = Number(currentInput);
}
