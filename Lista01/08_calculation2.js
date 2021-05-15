const input = require('prompt-sync')();

// Input
let number1 = Number(input('Digite o primeiro número: ')),
    number2 = Number(input('Digite o segundo número: '));

// Process
let result = (number1 + number2)/(number1 - number2);

// Output
console.log(`-----\nResultado: ${result.toFixed(2)}`);