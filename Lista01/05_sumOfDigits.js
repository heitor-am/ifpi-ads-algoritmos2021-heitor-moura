// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let number = input('Digite um número de 3 dígitos: ');

// Process
let sumOfDigits = Number(number[0]) + Number(number[1]) + Number(number[2]);

// Output
console.log(`-----\nResultado: ${sumOfDigits}`);