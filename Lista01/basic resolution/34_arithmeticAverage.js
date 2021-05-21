// Include the prompt-sync module
const input = require('prompt-sync')()

// Input
let number1 = Number(input('Digite o 1° número: ')),
    number2 = Number(input('Digite o 2° número: ')),
    number3 = Number(input('Digite o 3° número: '));

// Process
let average = (number1 + number2 + number3) / 3;

// Output
console.log(`-----\nMédia aritmética: ${average.toFixed(2)}`);