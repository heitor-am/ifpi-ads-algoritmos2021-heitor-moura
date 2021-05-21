// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let age = Number(input('Informe a idade da pessoa (em dias): '));

// Process
let years = Math.trunc(age / (12 * 30)),
    months = Math.trunc(age / 30) % 12,
    days = age % 30;

// Output
console.log(`-----\nIsso corresponde a ${years} ano(s), ${months} mês(ses) e ${days} dia(s)!`);