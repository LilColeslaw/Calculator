let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let display = document.querySelector(".display");
let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearDisplay);

let digits = document.querySelectorAll(".digit");
digits.forEach((digit) => digit.addEventListener("click", digitClick));

function operate(a, b, operator) {
    let result;
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
    }
    return result;
}

function digitClick(event) {
    addToDisplay(event.target.textContent);
}

let addToDisplay = characters => display.textContent += `${characters}`;
function clearDisplay() { display.textContent = "";}
