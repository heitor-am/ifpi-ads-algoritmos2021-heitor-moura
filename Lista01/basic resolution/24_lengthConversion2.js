// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let length = Number(input('Informe o valor em metros: '));

// Process
let inCentimeter = length * 100;

// Output
console.log(`-----\nEquivalente em centímetros: ${inCentimeter}`);