let firstNumber;
let secondNumber;
let operator;

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let display = document.querySelector(".display");

let equals = document.querySelector(".equals");
equals.addEventListener("click", equalsClick);

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearDisplay);

let digits = document.querySelectorAll(".digit");
digits.forEach((digit) => digit.addEventListener("click", digitClick));

let operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", operatorClick))

function operate(a, b, operator) {
    let result;
    switch (operator) {
        case "\uFF0B":
            result = add(a, b);
            break;
        case "\u2212":
            result = subtract(a, b);
            break;
        case "\u00D7":
            result = multiply(a, b);
            break;
        case "\u00F7":
            result = divide(a, b);
            break;
    }
    return result;
}

function digitClick(event) {
    addToDisplay(event.target.textContent);
    let displayText = display.textContent;
    //is there an operator yet? if not -> add to display the number and update firstNumber to be the display textContent
    if (!operator) {
        firstNumber = parseFloat(displayText);
    } else {
        secondNumber = secondNumber ? parseFloat(displayText.slice(displayText.length - (secondNumber.toString().length + 1))) : parseFloat(event.target.textContent);
    }
    //if there is-> addToDisplay the number, see how many characters long secondNumber is and update it to be the last 1 more than that characters in the display
}
function operatorClick(event) {
    addToDisplay(event.target.textContent);
    operator = event.target.textContent;
}

function equalsClick(event) {
    let result = operate(firstNumber, secondNumber, operator);
    clearDisplay();
    firstNumber = result;
    secondNumber = null;
    operator = null;
    addToDisplay(result);
}

let addToDisplay = characters => display.textContent += characters;
function clearDisplay() { 
    display.textContent = "";
    operator = null;
    firstNumber = null;
    secondNumber = null;
}
