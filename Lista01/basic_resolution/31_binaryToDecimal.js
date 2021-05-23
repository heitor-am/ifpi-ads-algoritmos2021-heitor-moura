// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let number = Number(input('Digite um número binário de 4 dígitos: '));

// Process
let thousands = Math.trunc(number / 1000),
  hundreds = Math.trunc((number % 1000) / 100),
  tens = Math.trunc((number % 100) / 10),
  units = number % 10;

decimal = (units * 2 ** 0) + (tens * 2 ** 1) + (hundreds * 2 ** 2) + (thousands * 2 ** 3);

// Output
console.log(`-----\nEquivalente em decimal: ${decimal}`);