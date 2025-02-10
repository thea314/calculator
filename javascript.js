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
displayEquation.textContent = "";
let equationValue ='';

let one = document.getElementById('one');

one.addEventListener('click', () => {
    oneButton();
})

document.addEventListener('keydown', (e) => {
    const keyName = e.key;

    if(keyName === "1") {
        oneButton();
    } else if (keyName === "2") {
        twoButton();
    } else if (keyName === "3") {
        threeButton();
    } else if (keyName === "4") {
        fourButton();
    } else if (keyName === "5") {
        fiveButton();
    } else if (keyName === "6") {
        sixButton();
    } else if (keyName === "7") {
        sevenButton();
    } else if (keyName === "8") {
        eightButton();
    } else if (keyName === "9") {
        nineButton();
    } else if (keyName === "0") {
        zeroButton();
    } else if (keyName === "+") {
        additionButton();
    } else if (keyName === "-") {
        minusButton();
    } else if (keyName === "*") { 
        multiplicationButton();
    } else if (keyName === "/") {
        divisionButton();
    } else if (keyName === "Backspace") {
        backspaceDeleteButton();
    } else if (keyName === ".") {
        decimalButton();
    } else if (keyName === "Enter" || keyName === "=") {
        equalsButton();
    } else if (keyName === "Delete") {
        CEButton();
    }
})

function oneButton() {
    equationValue = equationValue += '1';
    displayEquation.textContent = equationValue;
}

function twoButton() {
    equationValue = equationValue += '2';
    displayEquation.textContent = equationValue;
}

function threeButton() {
    equationValue = equationValue += '3';
    displayEquation.textContent = equationValue;
}

function fourButton() {
    equationValue = equationValue += '4';
    displayEquation.textContent = equationValue;
}

function fiveButton() {
    equationValue = equationValue += '5';
    displayEquation.textContent = equationValue;
}

function sixButton() {
    equationValue = equationValue += '6';
    displayEquation.textContent = equationValue;
}

function sevenButton() {
    equationValue = equationValue += '7';
    displayEquation.textContent = equationValue;
}

function eightButton() {
    equationValue = equationValue += '8';
    displayEquation.textContent = equationValue;
}

function nineButton() {
    equationValue = equationValue += '9';
    displayEquation.textContent = equationValue;
}

function zeroButton() {
    equationValue = equationValue += '0';
    displayEquation.textContent = equationValue;
}

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

function decimalButton() {

    if (equationValue.indexOf('.') !== -1) {
        equationValue = equationValue += '';
    }else if (equationValue.endsWith(' ')) {
        equationValue = equationValue += '0.';
    } else {
        equationValue = equationValue += '.';
    }
   
    displayEquation.textContent = equationValue;
}

decimal.addEventListener('click', () => {
    decimalButton();
    
})

let addition = document.getElementById('addition');

addition.addEventListener('click', () => {
    additionButton();    
})

function additionButton() {
    equationTrimmed = equationValue.trim();
    let equationArray = equationTrimmed.split(' ');

    if (equationTrimmed.endsWith('+')) {
        equationValue += "";
    
    
    } else if (equationTrimmed.endsWith('-')) {
        equationValue += "";
    
    
    } else if (equationTrimmed.endsWith('*')) {
        equationValue += "";
    
    
    }else if (equationTrimmed.endsWith('/')) {
        equationValue += "";
    
    
    } else if (equationTrimmed.indexOf('+') !== -1) {
              
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '+');
        equationValue = '';
        equationValue = operate(Number(equationArray[0]), Number(equationArray[2]), '+');
        displayEquation.textContent = equationValue += " + ";


    } else if (equationTrimmed.indexOf('-') !== -1) {
        
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '-');
        equationValue = '';
        equationValue = operate(Number(equationArray[0]), Number(equationArray[2]), '-');
        displayEquation.textContent = equationValue += " + ";

    } else if (equationTrimmed.indexOf('*') !== -1) {
        
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '*');
        equationValue = '';
        equationValue = operate(Number(equationArray[0]), Number(equationArray[2]), '*');
        displayEquation.textContent = equationValue += " + ";

    } else if (equationTrimmed.indexOf('/') !== -1) {
        
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '/');
        equationValue = '';
        equationValue = operate(Number(equationArray[0]), Number(equationArray[2]), '/');
        displayEquation.textContent = equationValue += " + ";
    } else {
        equationValue = equationValue += ' + ';
        displayEquation.textContent = equationValue;
    }
}

let minus = document.getElementById('minus');

minus.addEventListener('click', () => {
    minusButton();
})

function minusButton() {
    equationTrimmed = equationValue.trim();
    let equationArray = equationTrimmed.split(' ');

    if(equationTrimmed.endsWith('+')) {
        equationValue += "";
    
    
    } else if (equationTrimmed.endsWith('-')) {
        equationValue += "";
    
    
    } else if (equationTrimmed.endsWith('*')) {
        equationValue += "";
    
    
    }else if (equationTrimmed.endsWith('/')) {
        equationValue += "";
    
    } else if (equationTrimmed.indexOf('+') !== -1) {
              
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '+');
        equationValue = '';
        equationValue = operate(Number(equationArray[0]), Number(equationArray[2]), '+');
        displayEquation.textContent = equationValue += " - ";


    } else if (equationTrimmed.indexOf('-') !== -1) {
        
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '-');
        equationValue = '';
        equationValue = operate(Number(equationArray[0]), Number(equationArray[2]), '-');
        displayEquation.textContent = equationValue += " - ";

    } else if (equationTrimmed.indexOf('*') !== -1) {
        
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '*');
        equationValue = '';
        equationValue = operate(Number(equationArray[0]), Number(equationArray[2]), '*');
        displayEquation.textContent = equationValue += " - ";

    } else if (equationTrimmed.indexOf('/') !== -1) {
        
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '/');
        equationValue = '';
        equationValue = operate(Number(equationArray[0]), Number(equationArray[2]), '/');
        displayEquation.textContent = equationValue += " - ";

    } else {
        equationValue = equationValue += ' - ';
        displayEquation.textContent = equationValue;
    }

}

let multiplication = document.getElementById('multiplication');

multiplication.addEventListener('click', () => {
    multiplicationButton();
})

function multiplicationButton() {
    equationTrimmed = equationValue.trim();
    let equationArray = equationTrimmed.split(' ');

    if(equationTrimmed.endsWith('+')) {
        equationValue += "";
    
    
    } else if (equationTrimmed.endsWith('-')) {
        equationValue += "";
    
    
    } else if (equationTrimmed.endsWith('*')) {
        equationValue += "";
    
    
    }else if (equationTrimmed.endsWith('/')) {
        equationValue += "";
    
    } else if (equationTrimmed.indexOf('+') !== -1) {
              
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '+');
        equationValue = '';
        equationValue = operate(Number(equationArray[0]), Number(equationArray[2]), '+');
        displayEquation.textContent = equationValue += " * ";


    } else if (equationTrimmed.indexOf('-') !== -1) {
        
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '-');
        equationValue = '';
        equationValue = operate(Number(equationArray[0]), Number(equationArray[2]), '-');
        displayEquation.textContent = equationValue += " * ";

    } else if (equationTrimmed.indexOf('*') !== -1) {
        
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '*');
        equationValue = '';
        equationValue = operate(Number(equationArray[0]), Number(equationArray[2]), '*');
        displayEquation.textContent = equationValue += " * ";

    } else if (equationTrimmed.indexOf('/') !== -1) {
        
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '/');
        equationValue = '';
        equationValue = operate(Number(equationArray[0]), Number(equationArray[2]), '/');
        displayEquation.textContent = equationValue += " * ";

    } else {
        equationValue = equationValue += ' * ';
        displayEquation.textContent = equationValue;
    }

}

let division = document.getElementById('division');

division.addEventListener('click', () => {
    divisionButton();
})

function divisionButton() {
    equationTrimmed = equationValue.trim();
    let equationArray = equationTrimmed.split(' ');

    if(equationTrimmed.endsWith('+')) {
        equationValue += "";
    
    
    } else if (equationTrimmed.endsWith('-')) {
        equationValue += "";
    
    
    } else if (equationTrimmed.endsWith('*')) {
        equationValue += "";
    
    
    }else if (equationTrimmed.endsWith('/')) {
        equationValue += "";
    
    } else if (equationTrimmed.indexOf('+') !== -1) {
              
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '+');
        equationValue = '';
        equationValue = operate(Number(equationArray[0]), Number(equationArray[2]), '+');
        displayEquation.textContent = equationValue += " / ";


    } else if (equationTrimmed.indexOf('-') !== -1) {
        
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '-');
        equationValue = '';
        equationValue = operate(Number(equationArray[0]), Number(equationArray[2]), '-');
        displayEquation.textContent = equationValue += " / ";

    } else if (equationTrimmed.indexOf('*') !== -1) {
        
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '*');
        equationValue = '';
        equationValue = operate(Number(equationArray[0]), Number(equationArray[2]), '*');
        displayEquation.textContent = equationValue += " / ";

    } else if (equationTrimmed.indexOf('/') !== -1) {
        
        displayEquation.textContent = operate(Number(equationArray[0]), Number(equationArray[2]), '/');
        equationValue = '';
        equationValue = operate(Number(equationArray[0]), Number(equationArray[2]), '/');
        displayEquation.textContent = equationValue += " / ";

    } else {
        equationValue = equationValue += ' / ';
        displayEquation.textContent = equationValue;
    }
}

let CE = document.getElementById('CE');

CE.addEventListener('click', () => {
    CEButton();

})

function CEButton() {
    equationValue = ' ';
    displayEquation.textContent = equationValue;
}

let equals = document.getElementById('equals');

equals.addEventListener('click', () => {
    equalsButton();
})

function equalsButton() {
    let equationValueTrimmed = equationValue.trimStart();
    
    if (equationValueTrimmed.indexOf('+') !== -1) {       
        let equationArray = equationValueTrimmed.split(' ');
        let newValue = operate(Number(equationArray[0]), Number(equationArray[2]), '+');
        displayEquation.textContent = newValue;
    }else if (equationValueTrimmed.indexOf('-') !== -1) {
        let equationArray = equationValueTrimmed.split(' ');
        let newValue = operate(Number(equationArray[0]), Number(equationArray[2]), '-');
        displayEquation.textContent = newValue;
    } else if (equationValueTrimmed.indexOf('*') !== -1) {
        let equationArray = equationValueTrimmed.split(' ');
        let newValue = operate(Number(equationArray[0]), Number(equationArray[2]), '*');
        displayEquation.textContent = newValue;
    } else if (equationValueTrimmed.indexOf('/') !== -1) {
        let equationArray = equationValueTrimmed.split(' ');
        let newValue = operate(Number(equationArray[0]), Number(equationArray[2]), '/');
        displayEquation.textContent = newValue;
    } else {
        displayEquation.textContent = 'error';
    }
}

let backspaceDelete = document.getElementById('backspace');
    
backspaceDelete.addEventListener('click', () => {
    backspaceDeleteButton();
})

function backspaceDeleteButton() {
        let shorterEquation = equationValue.substring(0, equationValue.length -1);
        equationValue = shorterEquation;
        displayEquation.textContent = equationValue;
}
