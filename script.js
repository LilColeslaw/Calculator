let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let display = document.querySelector(".display");

let negate = document.querySelector(".negate");
negate.addEventListener("click", negateIt);

let clickers = document.querySelectorAll(".display-it");
clickers.forEach(click => click.addEventListener("click", event => addToDisplay(event.target.textContent)));

let equals = document.querySelector(".equals");
equals.addEventListener("click", equalsClick);

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearDisplay);

let buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
    btn.addEventListener("mouseover", (event) => event.target.style.backgroundColor = "#C5E5FB");
    btn.addEventListener("mouseleave", (event) => event.target.style.backgroundColor = "#1385c7");
});

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
    let parts = display.textContent;
    let operator = parts
            .split("")
            .filter(part => part === "\u00F7" || part === "\u00D7" || part === "\u2212" || part === "\uFF0B");
            //first split it into each character
            //then do filter and see if it is equal to one of the operators 
            //it will return just that character in the end
    operator = operator.join(""); //makes operator a string so that the other parts of the code will work (the operate() function)
    //now split parts by the operator
    parts = parts.split(operator); //now the first element will be the first number, and the second will be the second number (in strings)
    let numberOne = parseFloat(parts[0]);
    let numberTwo = parseFloat(parts[1]);

    let result = operate(numberOne, numberTwo, operator);
    clearDisplay();
    addToDisplay(result);
}

let addToDisplay = characters => display.textContent += characters;
function clearDisplay() { 
    display.textContent = "";
    operator = null;
    firstNumber = null;
    secondNumber = null;
}

function negateIt() {
    //go backwards through the text of display, waiting to see if there is an operator
    //if there is one, store its index in the string
    //if there isn't, set that index to be 0 and insert the negative sign there
    let text = display.textContent;
    let split = text.split("");//make an array
    let index = split.findIndex(char => char === "\u00F7" || char === "\u00D7" || char === "\u2212" || char === "\uFF0B");
    index ? display.textContent = text.substring(0, index + 1) + "\u2212" + text.substring(index + 1) : display.textContent = "\u2212" + text;
}