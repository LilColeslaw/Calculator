let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let display = document.querySelector(".display");
display.textContent = "0";
let firstNumber;
let secondNumber;
let operator;

let clickers = document.querySelectorAll(".display-it");
clickers.forEach(click => click.addEventListener("click", numClick));

let operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", operatorClick));

let equals = document.querySelector(".equals");
equals.addEventListener("click", equalsClick);

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearDisplay);

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

function equalsClick(event) {
    let theOperator = operator.textContent;
    let result = operate(firstNumber, secondNumber, theOperator);
    operator.style.backgroundColor = "#673ADA";
    clearDisplay();
    operator = null;
    firstNumber = null;
    secondNumber = null;
    display.textContent = result;
}

function numClick(event) {
    if (!operator) {
        display.textContent += event.target.textContent;
        firstNumber = parseFloat(display.textContent);
    } else {
        if (!secondNumber) {
            clearDisplay();
        }
        display.textContent += event.target.textContent;
        secondNumber = parseFloat(display.textContent);
    }
}

function clearDisplay() { 
    display.textContent = "";
}

function operatorClick(event) {
    operator = event.target;
    operator.style.backgroundColor =  "#fbedff";
}