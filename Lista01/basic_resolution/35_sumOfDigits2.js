// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let number = Number(input('Digite um número inteiro (4 dígitos): '));

// Process
let thousands = Math.trunc(number / 1000),
  hundreds = Math.trunc((number % 1000) / 100),
  tens = Math.trunc((number % 100) / 10),
  units = number % 10;

let sumOfDigits = thousands + hundreds + tens + units;

// Output
console.log(`-----\nResultado: ${sumOfDigits}`);