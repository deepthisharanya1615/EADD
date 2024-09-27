const buttons = document.querySelectorAll('.grid');
const display = document.getElementById('display');

let currentInput = '';  
let operator = '';      
let previousInput = ''; 
let result = 0;         
let shouldResetScreen = false;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.innerText;

        if (value === 'CE') {
            currentInput = '';
            display.innerText = '0';
            return;
        }

        if (value === '<') {
            currentInput = currentInput.slice(0, -1);
            display.innerText = currentInput || '0';
            return;
        }

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            result = 0;
            shouldResetScreen = false;
            display.innerText = '0';
            return;
        }

        if (!isNaN(value) || value === '.') {
            if (shouldResetScreen) {
                currentInput = ''; 
                shouldResetScreen = false;
            }
            currentInput += value;
            display.innerText = currentInput;
        }

        else if (['+', '-', '*', '/', '^'].includes(value)) {
            if (currentInput) {
                if (previousInput && operator) {
                    result = operate(parseFloat(previousInput), parseFloat(currentInput), operator);
                    display.innerText = result;
                    currentInput = result.toString();
                } else {
                    result = parseFloat(currentInput);
                }
                previousInput = currentInput;
            }
            operator = value;
            shouldResetScreen = true;
        }

        else if (value === '=') {
            if (previousInput && currentInput && operator) {
                result = operate(parseFloat(previousInput), parseFloat(currentInput), operator);
                display.innerText = result;
                previousInput = result.toString();
                operator = '';
                shouldResetScreen = true;
            }
        }
    });
});

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '^':
            return Math.pow(a, b);
        default:
            return b;
    }
}
