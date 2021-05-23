// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let time = Number(input('Informe o número de horas (inteiro): '));

// Process
let weeks = Math.trunc(time / (7 * 24)),
  days = Math.trunc(time / 24) % 7,
  hours = time % 24;

// Output
console.log(`-----\nIsso corresponde a ${weeks} semana(s), ${days} dia(s) e ${hours} hora(s)!`);