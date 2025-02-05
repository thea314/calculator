// functions for basic arithmetic 

function add(a, b) {
    return Math.round((a + b) * 100) / 100;
}

function subtract(a, b) {
    return Math.round((a - b) * 100) / 100;
}

function multiply(a, b) {
    return Math.round((a * b) * 100) / 100;
}

function divide(a, b) {

    if (b === 0) {
        return 'error'
    } else {
        return Math.round((a / b) * 100) / 100;
    }
    
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

//eventListeners for buttons

let displayEquation = document.getElementById('displayArea');
displayEquation.textContent = " ";
let equationValue =' ';

let one = document.getElementById('one');

one.addEventListener('click', () => {
    equationValue = equationValue += '1';
    displayEquation.textContent = equationValue;
})

let two = document.getElementById('two');

two.addEventListener('click', () => {
    equationValue = equationValue += '2';
    displayEquation.textContent = equationValue;
})

let three = document.getElementById('three');

three.addEventListener('click', () => {
    equationValue = equationValue += '3';
    displayEquation.textContent = equationValue;
})

let four = document.getElementById('four');

four.addEventListener('click', () => {
    equationValue = equationValue += '4';
    displayEquation.textContent = equationValue;
})

let five = document.getElementById('five');

five.addEventListener('click', () => {
    equationValue = equationValue += '5';
    displayEquation.textContent = equationValue;
})

let six = document.getElementById('six');

six.addEventListener('click', () => {
    equationValue = equationValue += '6';
    displayEquation.textContent = equationValue;
})

let seven = document.getElementById('seven');

seven.addEventListener('click', () => {
    equationValue = equationValue += '7';
    displayEquation.textContent = equationValue;
})

let eight = document.getElementById('eight');

eight.addEventListener('click', () => {
    equationValue = equationValue += '8';
    displayEquation.textContent = equationValue;
})

let nine = document.getElementById('nine');

nine.addEventListener('click', () => {
    equationValue = equationValue += '9';
    displayEquation.textContent = equationValue;
})

let zero = document.getElementById('zero');

zero.addEventListener('click', () => {
    equationValue = equationValue += '0';
    displayEquation.textContent = equationValue;
})

let decimal = document.getElementById('decimal');

decimal.addEventListener('click', () => {

    if (equationValue.endsWith(' ')) {
        equationValue = equationValue += '0.';
    } else {
        equationValue = equationValue += '.';
    }
   
    displayEquation.textContent = equationValue;
})

let addition = document.getElementById('addition');

addition.addEventListener('click', () => {

    equationTrimmed = equationValue.trimStart();

    if(equationTrimmed.indexOf('+') !== -1) {
        let equationArray = equationTrimmed.split(' ');
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '+');
        equationValue = operate(Number(equationArray[0]), Number(equationArray[2]), '+');
    } else if (equationTrimmed.indexOf('-') !== -1) {
        let equationArray = equationTrimmed.split(' ');
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '+') + " - ";
    } else if (equationTrimmed.indexOf('*') !== -1) {
        let equationArray = equationTrimmed.split(' ');
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '+') + " * ";
    } else if (equationTrimmed.indexOf('/') !== -1) {
        let equationArray = equationTrimmed.split(' ');
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '+') + " / ";
    } else {
        equationValue = equationValue += ' + ';
        displayEquation.textContent = equationValue;
    }
})

let minus = document.getElementById('minus');

minus.addEventListener('click', () => {
    equationValue = equationValue += ' - ';
    displayEquation.textContent = equationValue;


})

let multiplication = document.getElementById('multiplication');

multiplication.addEventListener('click', () => {
    equationValue = equationValue += ' * ';
    displayEquation.textContent = equationValue;


})

let division = document.getElementById('division');

division.addEventListener('click', () => {
    equationValue = equationValue += ' / ';
    displayEquation.textContent = equationValue;

})

let CE = document.getElementById('CE');

CE.addEventListener('click', () => {
    equationValue = ' ';
    displayEquation.textContent = equationValue;

})

let equals = document.getElementById('equals');

equals.addEventListener('click', () => {

    let equationValueTrimmed = equationValue.trimStart();
    
    if (equationValueTrimmed.indexOf('+') !== -1) {       
        let equationArray = equationValueTrimmed.split(' ');
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '+');
    }else if (equationValueTrimmed.indexOf('-') !== -1) {
        let equationArray = equationValueTrimmed.split(' ');
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '-');
    } else if (equationValueTrimmed.indexOf('*') !== -1) {
        let equationArray = equationValueTrimmed.split(' ');
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '*');
    } else if (equationValueTrimmed.indexOf('/') !== -1) {
        let equationArray = equationValueTrimmed.split(' ');
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '/');
    } else {
        displayEquation.textContent = 'error';
    }

})

