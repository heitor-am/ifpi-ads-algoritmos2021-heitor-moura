// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let meters = Number(input('Informe um valor em metros (inteiro): '));

// Process
let kilometers = Math.trunc(meters / 1000);
meters %= 1000;

// Output
console.log(`-----\nIsso corresponde a ${kilometers}km e ${meters}m!`);