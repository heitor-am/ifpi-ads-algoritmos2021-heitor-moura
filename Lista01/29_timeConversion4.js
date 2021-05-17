const input = require('prompt-sync')();

// Input
let months = Number(input('Informe o número de meses (inteiro): '));

// Process
if (Number.isInteger(months)) {
  let years = Math.trunc(months / 12);
  months %= 12;

  // Output
  console.log(`-----\nIsso corresponde a ${years} ano(s) e ${months} mês(ses)!`);
} else {
  // Alternative output
  console.log(`-----\nErro! Só digite números inteiros!`);
}