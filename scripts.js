//example: 10 + 12
//first operand is 10
//operator is +
//second operand is 12

const calculator = {
    displayValue: '0', //string representing user input or result of operation
    firstOperand: null, //first operand for any expression
    waitingForSecondOperand: false, //a boolean to show if an expression should be evaluated
    operator: null //the operator for an expression
}

const updateDisplay = () => {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        console.log('operator', target.value);
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('all-clear')) {
        console.log('clear', target.value);
        return;
    }

    inputDigit(target.value);
    updateDisplay();
})

const inputDigit = (digit) => {
    const {displayValue} = calculator;
    calculator.displayValue = displayValue ==='0' ? digit : displayValue + digit;
}

const inputDecimal = (decimal) => {
    const {displayValue} = calculator;
    if (!displayValue.includes(decimal)) {
        calculator.displayValue += decimal;
    }
}