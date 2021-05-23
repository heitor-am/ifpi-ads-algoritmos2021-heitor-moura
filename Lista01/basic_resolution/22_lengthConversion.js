// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let length = Number(input('Informe o valor em quilômetros: '));

// Process
let inMeter = length * 1000;

// Output
console.log(`-----\nEquivalente em metros: ${inMeter}`);