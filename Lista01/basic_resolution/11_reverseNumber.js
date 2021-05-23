// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let number = Number(input('Digite um número de 3 dígitos: '));

// Process
let hundreds = Math.trunc(number / 100),
  tens = Math.trunc((number % 100) / 10),
  units = number % 10;

// Output
console.log(`-----\nResultado: ${units}${tens}${hundreds}`);