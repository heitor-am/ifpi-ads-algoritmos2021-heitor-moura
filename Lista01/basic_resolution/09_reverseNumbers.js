// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let number1 = input('Digite o 1° número: '),
    number2 = input('Digite o 2° número: ');

// Process
let numbersInverted = `(${number2}, ${number1})`

// Output
console.log(`-----\nResultado: ${numbersInverted}`);