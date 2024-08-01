const today = new Date();
document.querySelector('.today').innerHTML = today.getFullYear();

let currentDisplay = 0;
let resultDisplay = false;

function updateDisplay() {
    const displayElement = document.querySelector('.display');
    displayElement.innerHTML = currentDisplay;
}

function insertNumber(number) {
    if (currentDisplay === 0 || resultDisplay) {
        currentDisplay = number;
    } else {
        currentDisplay += number;
    }
    resultDisplay = false;
    updateDisplay();
}

function lin() {
    result = eval(currentDisplay);
    const ln = Math.log(result);

    currentDisplay = currentDisplay.slice(20,-1);
    insertNumber(`ln (${result})`);

    currentDisplay += '\n' + ln.toFixed(5);

    resultDisplay = true;
    updateDisplay();
}

function tenPower() {
    result = eval(currentDisplay);
    const tenpowerX = Math.pow(10, result);

    currentDisplay = currentDisplay.slice(20,-1);
    insertNumber(`10^${result}`);

    currentDisplay += '\n' + tenpowerX;

    resultDisplay = true;
    updateDisplay();
}

function xPowerY() {
    result = eval(currentDisplay);
    const xPower = Math.pow(result, result);

    currentDisplay = currentDisplay.slice(20,-1);
    insertNumber(`${result}^10`);

    currentDisplay += '\n' + xPower;

    resultDisplay = true;
    updateDisplay();
}
// function xPowerTen() {
//     result = eval(currentDisplay);
//     const xPower10 = Math.pow(result, 10);

//     currentDisplay = currentDisplay.slice(20,-1);
//     insertNumber(`${result}^10`);

//     currentDisplay += '\n' + xPower10;

//     resultDisplay = true;
//     updateDisplay();
// }

function logTen() {
    result = eval(currentDisplay);
    const logBase10 = Math.log10(result);

    currentDisplay = currentDisplay.slice(20,-1);
    insertNumber(`log (${result})`);

    currentDisplay += '\n' + logBase10.toFixed(5);

    resultDisplay = true;
    updateDisplay();
}

function logTwo() {
    result = eval(currentDisplay);
    const logBase10 = Math.log2(result);

    currentDisplay = currentDisplay.slice(20,-1);
    insertNumber(`log (${result})`);

    currentDisplay += '\n' + logBase10.toFixed(5);

    resultDisplay = true;
    updateDisplay();
}

function e() {
    result = eval(currentDisplay);
    const e = Math.exp(result);

    currentDisplay = currentDisplay.slice(20,-1);
    insertNumber(`e(${result})`);

    currentDisplay += '\n' + e.toFixed(5);

    resultDisplay = true;
    updateDisplay();
}

function squareRoot() {
    result = eval(currentDisplay);
    const sqrt = Math.sqrt(result);
    
    currentDisplay = currentDisplay.slice(20,-1);
    insertNumber(`<strong>&#8730</strong> (${result})`);
    currentDisplay += '\n' + sqrt.toFixed(5);

    resultDisplay = true;
    updateDisplay();
}

function cubeRoot() {
    result = eval(currentDisplay);
    const cbRt = Math.cbrt(result);
    
    currentDisplay = currentDisplay.slice(20,-1);
    insertNumber(`<strong>&#8731</strong> (${result})`);
    currentDisplay += '\n' + cbRt;

    resultDisplay = true;
    updateDisplay();
}

function squared() {
    result = eval(currentDisplay);
    const xPower2 = Math.pow(result, 2);

    currentDisplay = currentDisplay.slice(20,-1);
    insertNumber(`${result}^2`);

    currentDisplay += '\n' + xPower2;

    resultDisplay = true;
    updateDisplay();
}

function xPowerThree() {
    result = eval(currentDisplay);
    const xPower3 = Math.pow(result, 3);

    currentDisplay = currentDisplay.slice(20,-1);
    insertNumber(`${result}^3`);

    currentDisplay += '\n' + xPower3;

    resultDisplay = true;
    updateDisplay();
}

function sine() {
    result = eval(currentDisplay);
    const sinRule = (Math.sin(result*(Math.PI/180)));
    
    currentDisplay = currentDisplay.slice(20,-1);
    insertNumber(`sin (${result})`);
    currentDisplay += '\n' + sinRule.toFixed(5);
    
    resultDisplay = true;
    updateDisplay();
}

function cosine() {
    result = eval(currentDisplay);
    const cosinRule = (Math.cos(result*(Math.PI/180)));
    
    currentDisplay = currentDisplay.slice(20,-1);
    insertNumber(`cos (${result})`);
    currentDisplay += '\n' + cosinRule.toFixed(5);
    
    resultDisplay = true;
    updateDisplay();
}
    
function tan() {
    result = eval(currentDisplay);
    const tanRule = (Math.tan(result*(Math.PI/180)));
    
    currentDisplay = currentDisplay.slice(20,-1);
    insertNumber(`tan (${result})`);
    currentDisplay += '\n' + tanRule.toFixed(5);
    
    resultDisplay = true;
    updateDisplay();
}

function pi() {
    result = eval(currentDisplay);
    const pi = Math.PI;

    insertNumber(pi);
    currentDisplay += '\n' + pi.toFixed(5);
    pi = false;

    resultDisplay = true;
    updateDisplay();
}

// function add(number) {
//     currentDisplay += number;
//     updateDisplay();
// }

// function sub(number) {
//     currentDisplay = resultDisplay - number;
//     updateDisplay();
// }
// function multiply(number) {
//     result = eval(currentDisplay);

//     // currentDisplay = currentDisplay.slice(20,-1);
//     insertNumber('*');
//     const multiple = result * number;
    
    
//     currentDisplay += '\n' + multiple.toFixed(5);

//     updateDisplay();
//     // resultDisplay = true;
// }
// function divide(number) {
//     currentDisplay /= number;
//     updateDisplay();
// }

function total() {
    result = eval(currentDisplay);
    currentDisplay += '\n' + result;
    
    resultDisplay = true;
    updateDisplay();
}

function clearLastElement() {
    currentDisplay = currentDisplay.slice(0,-1);
    if (currentDisplay === '') {
        currentDisplay = 0;
    }
    updateDisplay();
}

function clearDisplay() {
    currentDisplay = 0;
    updateDisplay();
}