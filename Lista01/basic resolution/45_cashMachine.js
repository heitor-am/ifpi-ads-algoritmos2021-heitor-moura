// Include the prompt-sync module
const input = require('prompt-sync')();

// Input
let value = Number(input('Informe o valor que deseja sacar: '));

// Process
let billsOf50 = Math.trunc(value / 50),
  billsOf10 = Math.trunc((value % 50) / 10),
  billsOf5 = Math.trunc((value % 10) / 5),
  billsOf1 = value % 5;

// Output
console.log(`-----\nNotas de R$50: ${billsOf50}`);
console.log(`Notas de R$10: ${billsOf10}`);
console.log(`Notas de R$5: ${billsOf5}`);
console.log(`Notas de R$1: ${billsOf1}`);