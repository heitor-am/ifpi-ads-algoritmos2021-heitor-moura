const input = require('prompt-sync')();

// Input
let mass = Number(input('Informe o valor em quilogramas: '));

// Output
console.log(`-----\nEquivalente em gramas: ${mass*1000}`);