// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let number1 = Number(input('Digite o primeiro número (inteiro): ')),
  number2 = Number(input('Digite o segundo número (inteiro): '));

// Process
let quocient = Math.trunc(number1 / number2),
  remainder = number1 % number2;

// Output
console.log(`-----\nQuociente: ${quocient}`);
console.log(`Resto: ${remainder}`);