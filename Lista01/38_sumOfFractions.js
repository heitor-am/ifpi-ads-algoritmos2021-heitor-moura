// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let [a, b] = input('Informe a primeira fração (A/B): ').split('/').map(value => Number(value)),
  [c, d] = input('Informe a segunda fração (C/D): ').split('/').map(value => Number(value));

// Process
let numerator = (a * d) + (c * b),
  denominator = b * d;

// Output
console.log(`-----\nResultado: ${numerator}/${denominator}`);
