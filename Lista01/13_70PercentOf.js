const input = require('prompt-sync')();

// Input
let valueBRL = Number(input('Digite o valor em real (R$): '));

// Output
console.log(`-----\n70% do valor: ${(valueBRL*0.7).toFixed(2)}`);