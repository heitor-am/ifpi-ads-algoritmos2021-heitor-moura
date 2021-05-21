// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let hours = Number(input('Digite as horas: ')),
  minutes = Number(input('Digite os minutos: '));

// Process
minutes += hours * 60;

// Output
console.log(`-----\nIsso equivale a ${minutes} minutos!`);