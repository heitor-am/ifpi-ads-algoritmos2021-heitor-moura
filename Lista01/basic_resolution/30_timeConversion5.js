// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let time = Number(input('Informe o número de minutos (inteiro): '));

// Process
let days = Math.trunc(time / (24 * 60)),
  hours = Math.trunc(time / 60) % 24,
  minutes = time % 60;

// Output
console.log(`-----\nIsso corresponde a ${days} dia(s), ${hours} hora(s) e ${minutes} minuto(s)!`);