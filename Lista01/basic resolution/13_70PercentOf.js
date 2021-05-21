// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let valueBRL = Number(input('Digite o valor em real (R$): '));

// Process
let seventyPercent = valueBRL * 0.7;

// Output
console.log(`-----\n70% do valor: R$${(seventyPercent).toFixed(2)}`);