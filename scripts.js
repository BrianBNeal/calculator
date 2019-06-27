const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null
}

const updateDisplay = () => {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

// event listener to add keypress to displayValue and then updateDisplay
//one for digits, one for operators, one for decimal, one for clear

// function to handle operator to switch from first to second operand