// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let number = Number(input('Informe um número inteiro (3 dígitos): '));

// Process
let hundreds = Math.trunc(number / 100),
  tens = Math.trunc((number % 100) / 10),
  units = number % 10;

let result = number - (units * 100 + tens * 10 + hundreds);

// Output
console.log(`-----\nResultado: ${result}`);