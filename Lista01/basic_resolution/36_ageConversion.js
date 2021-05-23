// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let years = Number(input('Informe idade da pessoa (anos): ')),
  months = Number(input('Informe os meses restantes: ')),
  days = Number(input('Informe os dias restantes: '));

// Process
days = years * 365 + months * 30 + days;

// Output
console.log(`-----\nIsso corresponde a ${days} dia(s)!`);