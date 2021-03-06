let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let display = document.querySelector(".display");
let firstNumber = null;
let secondNumber = null;
let operator = null;

let clickers = document.querySelectorAll(".display-it");
clickers.forEach(click => click.addEventListener("click", numClick));

let operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", operatorClick));

let equals = document.querySelector(".equals");
equals.addEventListener("click", equalsClick);

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearAll);

let negateButton = document.querySelector(".plusorminus");
negateButton.addEventListener("click", negate);

clearDisplay();
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

function equalsClick() {
    if (!firstNumber) firstNumber = 0; //if there was no firstNumber set it equal to 0
    if (typeof secondNumber === null) return; //if there is no secondNumber return so that the user can enter a number before hitting "="
    let theOperator = operator.textContent;
    if (theOperator === "\u00F7" && secondNumber === 0) { //no division by zero!
        alert("Can't divide by zero buddy");
        return;
    }
    let result = operate(firstNumber, secondNumber, theOperator);
    operator.style.backgroundColor = "#FC7753";
    clearDisplay();
    operator = null;
    secondNumber = null;
    display.textContent = result; 
    firstNumber = parseFloat(display.textContent); //get it ready to use the result in the next operation
}

function numClick(event) {
    if (display.textContent === "0") {
        if (event.target.textContent === "0") return;//if the user is typing in multiple zeros don't show them all
        if (!(event.target.textContent === ".")) display.textContent = "";// get rid of the 0 which is there by default unless the user wants a small decimal
    }
    if (event.target.textContent === "." && display.textContent.includes(".")) return;
    if (!operator) { //if there is no operator yet update the firstNumber
        display.textContent += event.target.textContent;
        firstNumber = parseFloat(display.textContent);
    } else { //otherwise update the secondNumber
        if (secondNumber === null) {//if it is the first typing of the secondNumber clear the firstNumber off first
            if (event.target.textContent === ".") {
                display.textContent = "0"; //get a zero before the "."
            } else {display.textContent = "";}//otherwise clear
        }
        display.textContent += event.target.textContent;
        secondNumber = parseFloat(display.textContent);
    }
}

function clearDisplay() { 
    display.textContent = "0";
    if (operator) operator.style.backgroundColor = "#FC7753";
}

function operatorClick(event) {
    if (operator && secondNumber) { //make it immediately transition to the next operation if the first one has been completed without using equals button
        equalsClick();
    } else if (operator) return;
    operator = event.target;
    operator.style.backgroundColor =  "white";
}

function negate() {
    if (secondNumber) {
        secondNumber *= -1;
    } else if (firstNumber) {
        firstNumber *= -1;
    }
    display.textContent.includes("-") ? display.textContent = display.textContent.replace("-", "") : display.textContent = "-" + display.textContent;
}

function clearVariables() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
}

function clearAll() {
    clearDisplay();
    clearVariables();
}