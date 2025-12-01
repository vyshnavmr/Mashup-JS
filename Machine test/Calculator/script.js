//Addition
function add(a, b) {
    return a + b;
}

//Subtraction
function subtract(a, b) {
    return a - b;
}

//Multiplication
function multiply(a, b) {
    return a * b;
}

//Division
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

//Print Result
function printResult(message) {
    document.getElementById('result').innerText = "Result: " + message;
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
        
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        printResult("Please enter valid numbers");
        return;
    }

    switch (operator) {
        case 'add':
            result = add(num1, num2);
            break;
         case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default:
            result = "Invalid Operation";
    }

    // Call the print function
    printResult(result);
}