// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let mass = Number(input('Informe o valor em quilogramas: '));

// Process
let inKilogram = mass * 1000;

// Output
console.log(`-----\nEquivalente em gramas: ${inKilogram}`);