// Storing User Values into Object
let userValue = {
    firstValue : "",
    secondValue : "",
    operator : "",
    answer: "",
};

// Reference to all the buttons
const operand = document.querySelectorAll(".operand");
const operator = document.querySelectorAll(".operator");
const acButton = document.querySelector(".ac");
const specialMinusButton = document.querySelector(".special-minus");
const dotButton = document.querySelector(".dot");
const equalToButton = document.querySelector(".eqal-to");

// Reference to the Display
const valueDisplay = document.querySelector(".value-display");
const answerDisplay = document.querySelector(".answer-display");


// Adding Event listner:
// 1. Operands:
[...operand].forEach(element => {
    element.addEventListener("click", () => updateUserNumber(element.value));
});
// 2. Operator:
[...operator].forEach(element => {
    element.addEventListener("click", () => updateUserOperator(element.value));
});
// 3. dot Button:
dotButton.addEventListener("click", () => updateUserDot("."));
// 4. Minus Button: 
specialMinusButton.addEventListener("click", () => updateUserMinus());
// 5. Equal to:
equalToButton.addEventListener("click", () => operate());
// 6. Ac button:
acButton.addEventListener("click", () => resetTheCalculator());


// Updating the user number to the Object

function updateUserNumber(btnValue)
{
    if(isNumeric(btnValue) === true)
        {
            if(userValue.operator === "")
                {
                    userValue.firstValue += btnValue;
                    console.log(`First: ${userValue.firstValue}`);
                }
            else if (userValue.firstValue !== "" && userValue.operator !== "")
                {
                    userValue.secondValue += btnValue;
                    console.log(`Second: ${userValue.secondValue}`);
                }
                updateValueDisplay();
        }   
}

// is number of not

function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}


// Updating the user Operator to the Object

function updateUserOperator(btnValue)
{
    if(userValue.firstValue !== "")
        {
            if(userValue.secondValue !== "" && userValue.operator !== "")
            {
                // If there's already a complete expression, evaluate it first
                operate();
            }
            
            if(btnValue === "+" || btnValue === "-" || btnValue === "*" || btnValue === "/" || btnValue === "%")
            {
                userValue.operator = btnValue;
                console.log(`Operator: ${userValue.operator}`);
                updateValueDisplay();
            }
            
        }
        updateValueDisplay();
}

// Updating the dot to the Object

function updateUserDot(value)
{
    if(userValue.operator === "" && userValue.firstValue.toString().includes(".") === false)
        {
            userValue.firstValue += value;
            console.log(`first: ${userValue.firstValue}`)
        }
    else if(userValue.firstValue !== "" && userValue.operator !== "" && userValue.secondValue.toString().includes(".") === false)
        {
            userValue.secondValue += value;
        }
        updateValueDisplay();
}

// Updating the Minus to the Object

function updateUserMinus()
{
    if(userValue.operator === "" && userValue.firstValue.toString().includes("-") === false)
        {
            userValue.firstValue += "-";
            console.log("minus first");
        }
    else if (userValue.operator !== "" && userValue.secondValue.toString().includes("-") === false)
        {
            userValue.secondValue += "-";
            console.log("minus Second");
        }
        updateValueDisplay();
}

// Operate:

function operate()
{
    if(userValue.operator === "")
        {
            console.log("Operator Empty");
        }
    else if (userValue.operator === "+")
        {
            add();
        }
    else if (userValue.operator === "-")
        {
            subtract();
        }
    else if (userValue.operator === "*")
        {
            multiply();
        }
    else if (userValue.operator === "/")
        {
            divide();
        }
    else if (userValue.operator === "%")
        {
            mod();
        }
}

// add
function add()
{
    let a = +userValue.firstValue;
    let b = +userValue.secondValue;
    let sum = a + b;
    userValue.answer = sum;
    console.log(`sum: ${userValue.answer}`);
    UpdateTheAnswerDisplay();
}
// sub
function subtract()
{
    let a = +userValue.firstValue;
    let b = +userValue.secondValue;
    let sub = a - b;
    userValue.answer = sub;
    console.log(`subraction: ${userValue.answer}`);
    UpdateTheAnswerDisplay();
}
// multi
function multiply()
{
    let a = +userValue.firstValue;
    let b = +userValue.secondValue;
    let mult = a * b;
    userValue.answer = mult;
    console.log(`Multiplication: ${userValue.answer}`);
    UpdateTheAnswerDisplay();
}
// div
function divide()
{
    let a = +userValue.firstValue;
    let b = +userValue.secondValue;
    let div = a / b;
    userValue.answer = div;
    console.log(`Division: ${userValue.answer}`);
    UpdateTheAnswerDisplay();
}
// mod
function mod()
{
    let a = +userValue.firstValue;
    let b = +userValue.secondValue;
    let mod = a % b;
    userValue.answer = mod;
    console.log(`mod: ${userValue.answer}`);
    UpdateTheAnswerDisplay();
}

// Update the Answer Display:

function UpdateTheAnswerDisplay()
{
    answerDisplay.textContent = userValue.answer.toFixed(2);
    resetTheAnswer();
}

// Reset the Answer
function resetTheAnswer()
{
    userValue.firstValue = userValue.answer;
    userValue.secondValue = "";
    userValue.operator = "";
}

// Reset the Whole Calculator:

function resetTheCalculator()
{
    userValue.firstValue = "";
    userValue.secondValue = "";
    userValue.operator = "";
    userValue.answer = "";
    valueDisplay.textContent = "";
    answerDisplay.textContent = "";
    console.log("Calculator Reset");
}

// Updating the user Operator to the Object

function updateUserOperator(btnValue)
{
    if(userValue.firstValue !== "")
    {
        if(userValue.secondValue !== "" && userValue.operator !== "")
        {
            // If there's already a complete expression, evaluate it first
            operate();
        }
        
        if(btnValue === "+" || btnValue === "-" || btnValue === "*" || btnValue === "/" || btnValue === "%")
        {
            userValue.operator = btnValue;
            console.log(`Operator: ${userValue.operator}`);
        }
    }
    updateValueDisplay();
}

// Updating the Display:
function updateValueDisplay() {
    valueDisplay.textContent = `${userValue.firstValue} ${userValue.operator} ${userValue.secondValue}`;
}


