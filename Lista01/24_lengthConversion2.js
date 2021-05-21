// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let length = Number(input('Informe o valor em metros: '));

// Output
console.log(`-----\nEquivalente em centímetros: ${length * 100}`);