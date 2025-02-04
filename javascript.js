// functions for basic arithmetic 

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
    return a / b;
}

// variables for a, b, and operator

let number1;
let number2;
let operator = '';

// a function that takes above variables and calls the appropriate 
// arithmetic function

function operate(number1, number2, operator) {

    if(operator === '+') {
        return add(number1, number2);
    }else if(operator === "-") {
        return subtract(number1, number2);
    }else if(operator === '*') {
        return multiply(number1, number2);
    }else if(operator === '/') {
        return divide(number1, number2);
    }else {
        return 'error'
    }

}

let displayEquation = document.getElementById('displayArea');
displayEquation.textContent = "0";
let equationValue ='0';

let one = document.getElementById('one');

one.addEventListener('click', () => {
    equationValue = equationValue += '1';
    displayEquation.textContent = equationValue;
})