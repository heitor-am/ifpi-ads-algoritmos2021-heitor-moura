const input = require('prompt-sync')();

// Input
let [a, b] = input('Informe a primeira fração (A/B): ').split('/'),
  [c, d] = input('Informe a segunda fração (C/D): ').split('/');

// Process
let numerator = (+a)*(+d) + (+c)*(+b),
  denominator = (+b) * (+d);

// Output
console.log(`-----\nResultado: ${numerator}/${denominator}`);
