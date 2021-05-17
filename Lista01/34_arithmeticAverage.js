const input = require('prompt-sync')()

// Input
let number1 = Number(input('Digite o primeiro número: ')),   
    number2 = Number(input('Digite o segundo número: ')),
    number3 = Number(input('Digite o terceiro número: '));

// Process
let average = (number1 + number2 + number3)/3;

// Output
console.log(`-----\nMédia aritmética: ${average.toFixed(2)}`);