// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let days = Number(input('Informe o número de dias (inteiro): '));

// Process
let weeks = Math.trunc(days / 7);
days %= 7;

// Output
console.log(`-----\nIsso corresponde a ${weeks} semanas e ${days} dias!`);