const input = require('prompt-sync')();

// Input
let length = Number(input('Informe o valor em quilômetros: '));

// Output
console.log(`-----\nEquivalente em metros: ${length*1000}`);