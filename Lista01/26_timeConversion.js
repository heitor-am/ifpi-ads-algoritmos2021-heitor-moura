const input = require('prompt-sync')();

// Input
let days = Number(input('Informe o número de dias (inteiro): '));

// Process
if (Number.isInteger(days)) {
  let weeks = Math.trunc(days / 7);
  days %= 7;

  // Output
  console.log(`-----\nIsso corresponde a ${weeks} semanas e ${days} dias!`);
} else {
  // Alternative output
  console.log(`-----\nErro! Só digite números inteiros!`);
}