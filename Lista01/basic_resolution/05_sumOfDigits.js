// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let number = Number(input('Digite um número de 3 dígitos: '));

// Process
let sumOfDigits = Math.trunc(number / 100) + Math.trunc((number % 100) / 10) + (number % 10);

// Output
console.log(`-----\nResultado: ${sumOfDigits}`);