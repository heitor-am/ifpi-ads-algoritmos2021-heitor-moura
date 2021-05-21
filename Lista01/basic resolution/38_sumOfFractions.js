// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let a = Number(input('Informe o numerador da 1° fração: ')),
  b = Number(input('Informe o denominador da 1° fração: ')),
  c = Number(input('Informe o numerador da 2° fração: ')),
  d = Number(input('Informe o denominador da 2° fração: '));

// Process
let numerator = (a * d) + (c * b),
  denominator = b * d;

// Output
console.log(`-----\nResultado: ${numerator}/${denominator}`);
