// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let minutes = Number(input('Digite os minutos: '));

// Process
let hours = Math.trunc(minutes / 60);
minutes %= 60;

// Output
console.log(`-----\nResultado: ${hours}h${minutes}min`)